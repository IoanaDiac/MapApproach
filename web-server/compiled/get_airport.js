export class Airport {
    constructor(icao, position, name, country) {
        this.icao = icao;
        this.position = position;
        this.name = name;
        this.country = country;
    }
    getIcao() {
        return this.icao;
    }
    getName() {
        return this.name;
    }
    getPosition() {
        return this.position;
    }
    getCountry() {
        return this.country;
    }
}
export class RequestStore {
    constructor() {
        this.airports = [];
    }
    getAirports() {
        return this.airports;
    }
    setAirports(value) {
        this.airports = value;
    }
    addAirport(airport) {
        this.airports.push(airport);
    }
}
export var store = new RequestStore();
export function getAirportsFromAPI(url) {
    fetch(url).then(response => {
        response.text().then(dataString => {
            if (response.status <= 500) {
                let data = JSON.parse(dataString)['data'];
                for (let i = 0; i < data.length; ++i) {
                    let arp = new google.maps.LatLng(data[i]['latitude'], data[i]['longitude']);
                    let airport = new Airport(data[i]['icao_code'], arp, data[i]['airport_name'], data[i]['country_name']);
                    //if (arp.lat() > 20 && arp.lat() < 90 && arp.lng() > -10 && arp.lng() < 50) {
                    store.addAirport(airport);
                    //}
                }
            }
        });
    });
}
export function latlng(val) {
    let latlong = val.split(",");
    let latitude = parseFloat(latlong[0]);
    let longitude = parseFloat(latlong[1]);
    var loc = new google.maps.LatLng(latitude, longitude);
    return loc;
}
//# sourceMappingURL=get_airport.js.map