export class Airport {
    icao:string;
    position:google.maps.LatLng;
    name:string;
    country:string;
    constructor(icao:string , position:google.maps.LatLng , name:string , country:string) {
        this.icao = icao;
        this.position = position;
        this.name = name;
        this.country = country;
    }
    getIcao(): string{
        return this.icao
    }
    getName(): string{
        return this.name
    }
    getPosition(): google.maps.LatLng{
        return this.position
    }
    getCountry(): string{
        return this.country
    }
}

export class RequestStore{
    airports: Airport[] = [];

    getAirports(): Airport[] {
        return this.airports
    }
    setAirports(value:Airport[]){
        this.airports = value;
    }
    addAirport(airport:Airport){
        this.airports.push(airport);
    }
}

export var store = new RequestStore();
export function getAirportsFromAPI(url: string): any {
    fetch(url).then(response => {
        response.text().then(dataString => {
            if (response.status <= 500) {
                let data = JSON.parse(dataString)['data'];
                for (let i = 0; i < data.length; ++i) {
                    let arp: google.maps.LatLng = new google.maps.LatLng(data[i]['latitude'], data[i]['longitude']);
                    let airport = new Airport(data[i]['icao_code'],arp, data[i]['airport_name'], data[i]['country_name']);
                    //if (arp.lat() > 20 && arp.lat() < 90 && arp.lng() > -10 && arp.lng() < 50) {
                        store.addAirport(airport);
                    //}

                }
            }
        });
    });
}

export function latlng(val:string){
    let latlong =  val.split(",");
    let latitude = parseFloat(latlong[0]);
    let longitude = parseFloat(latlong[1]);
    var loc: google.maps.LatLng = new google.maps.LatLng(latitude,longitude);
    return loc
}