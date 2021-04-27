import {addSector, toDecimal, addPath, TMA, drawArc, addMarker,addPath2} from "./drawingUtils.js";
import {pointsLoc,waypoints,vorNdb,STARS} from "./points.js";
import {brg} from "./calc.js";
import {choice,dist,choiceWind,viewActive} from "./star_choice.js";
import {getAirportsFromAPI,RequestStore,Airport,latlng,store} from "./get_airport.js";
import {Button} from "./interactivity.js";
import {paths,clearPaths4} from "./paths.js";
import {gcd} from "./calc.js";
import {pathsActive,clearPaths} from "./activeStars.js";

export var map: google.maps.Map;
export let txt = document.createElement('p');
document.body.appendChild(txt);
function init() {
    //MARKERS
    map = new google.maps.Map(document.getElementById("map") as Element,
        {center: {lat: toDecimal(44,21,44,"N"), lng: toDecimal(28,29,18,"E")}, zoom: 9})

    const wps = new waypoints();

    const vor = vorNdb();
    const pts = pointsLoc();

    var revda_points = STARS.prototype.REVDA();
    var path = new paths();
    //path.REVDA();

    //path.REVDA();
    //let tmaP: google.maps.Circle = TMA(new google.maps.LatLng(toDecimal(46,31,19,"N"), toDecimal(26,54,37,"E")), 27780, map);

    //POLYGON
    let sector1: google.maps.Polygon = addSector( [[]], "#0cff00", map);
    for (let i=0;i<=32;i++){
        sector1.getPath().push(pts[i]);
    }
    //invisible markers
    sector1.setVisible(true);

    //RWY
    let path2: google.maps.Polyline = addPath2([],"#808080",map);
    path2.getPath().push(pts[33] as google.maps.LatLng);
    path2.getPath().push(pts[34] as google.maps.LatLng);
    /**
    wps[0].addListener("click",()=>{
        map.setZoom(9);
        brg(pts[0],pts[7]);
        console.log(brg(pts[0],pts[7]));
    })

    let heading1_0: number = google.maps.geometry.spherical.computeHeading(wps[0].getPosition() as google.maps.LatLng,
        vor[0].getPosition() as google.maps.LatLng);
    let heading3_0: number = google.maps.geometry.spherical.computeHeading(wps[2].getPosition() as google.maps.LatLng,
        vor[0].getPosition() as google.maps.LatLng);
     **/





    /**
    let headingAB: number = google.maps.geometry.spherical.computeHeading(marker1.getPosition() as google.maps.LatLng,
    marker2.getPosition() as google.maps.LatLng);
    let distanceAB: number = google.maps.geometry.spherical.computeDistanceBetween(marker1.getPosition() as google.maps.LatLng,
    marker2.getPosition() as google.maps.LatLng);

    let marker3: google.maps.Marker = addMarker(new google.maps.LatLng(50,30),map);
    let isMarkerAInSector: boolean = google.maps.geometry.poly.containsLocation(marker1.getPosition() as google.maps.LatLng, sector1);
    let isMarkerBInSector: boolean = google.maps.geometry.poly.containsLocation(marker2.getPosition() as google.maps.LatLng, sector1);
    let isMarkerCInSector: boolean = google.maps.geometry.poly.containsLocation(marker3.getPosition() as google.maps.LatLng, sector1);

     alert("Heading from A to B is " + headingAB + '\n' +
     "Distance fro mA to B is " + distanceAB + '\n' +
     "Is A in sector? " + isMarkerAInSector + '\n' +
     "Is B in sector?" + isMarkerBInSector + '\n' +
     "Is C in sector?" + isMarkerCInSector);


     **/

    /**
    //Analysis of the wind direction - EVELYN
    let windTitle = document.createElement('h2');
    windTitle.textContent='Wind direction';
    let windText = document.getElementById('wind') as HTMLInputElement;
   // windText.type='number';
    let windButton = new Button('Show RWY usable', 'btn', 'btn-0').createButton();
    let usableRWY = document.createElement('p');
    document.body.appendChild(windTitle);
    //document.body.appendChild(windText);
    document.body.appendChild(windButton);
    document.body.appendChild(usableRWY);
    let windDir = Number(windText.value);
    windButton.onclick = function() {
        if (windDir>=0 && windDir<=360) {
            if (windDir>270 || windDir<90) {
                usableRWY.textContent = 'Usable RWY is 36';
            }
            else {
                usableRWY.textContent = 'Usable RWY is 18';
            }
        }
        else {
            usableRWY.textContent = 'Introduce a wind direction between 0 and 360';
        }
    }

    //create Button list
    let buttonList: HTMLElement[] = [];
    buttonList.push(new Button('View all the active STARs', 'btn', 'btn-1').createButton());
    buttonList.push(new Button('View our STAR', 'btn', 'btn-2').createButton());
    buttonList.push(new Button('Choose STAR','btn','btn-star').createButton());
    //
    for(let i=0; i<buttonList.length;i++) {
        if (i==0){
            let title1=document.createElement('h2');
            title1.textContent="General STARs";
            document.body.appendChild(title1);
        } else if (i==1){
            let title2=document.createElement('h2');
            title2.textContent="Our STAR";
            document.body.appendChild(title2);
        }else if (i==2){
            let title2=document.createElement('h2');
            title2.textContent="Our STAR";
            document.body.appendChild(title2);
        }
        document.body.appendChild(buttonList[i]);
    }

**/
    //creating the stars
    const btn = document.getElementById("choice") as HTMLInputElement;
    btn.addEventListener("keyup",function(event){
        if(event.keyCode === 13) {
            event.preventDefault();
            choice(btn.value);
        }
    });
    btn.addEventListener("click",function(event){
            event.preventDefault();
            btn.value = "";
    });
    //paths.prototype.DENUB();
    //paths.prototype.NURPO();
    //paths.prototype.DIRAL();
    //paths.prototype.RIVOS();
    //paths.prototype.PILAT();

    //CHOOSE AIRPORT FROM DATABASE
    getAirportsFromAPI(`http://api.aviationstack.com/v1/airports?access_key=200f31d068e2fabecbcc727d586fb80a
&offset=1000&limit=500`);
    var mrk = new google.maps.Marker();
    var path1 = new google.maps.Polyline({
    });
    console.log(store);
    const arp = document.getElementById("airport") as HTMLInputElement;
    /**
    arp.addEventListener("keyup",function(event){
        if(event.keyCode === 13) {
            event.preventDefault();
            let airport: Airport[] = store.getAirports();
//console.log(airport[0].getName());
            for (let i = 0; i < airport.length ; i++){
                if((airport[i].getIcao() == arp.value) || (airport[i].getName() == arp.value) || (airport[i].getPosition() == latlng(arp.value))){
                    mrk = addMarker(airport[i].getPosition(),airport[i].icao,map);
                    let ret = dist(airport[i].getPosition());
                    var label = ret[0];
                    var pos = ret[1] as google.maps.LatLng;
                    path1 = addPath([],"#4D4948",map);
                    path1.getPath().push(pos);
                    path1.getPath().push(airport[i].getPosition());
                    choiceWind(label,windDir);
                    break;

                    let eq: google.maps.LatLng = new google.maps.LatLng(0,0);
                    let startpoint = airport[i].getPosition();
                    let endpoint = dist(airport[i].getPosition())[1] as google.maps.LatLng;
                    let startangle = brg(eq,startpoint);

                    console.log(startangle);
                    let endangle = brg(eq,endpoint);
                    console.log(endangle);
                    let rad = gcd(eq,endpoint);

                    var arcPts = drawArc(eq,startangle, endangle, rad);
                    var piePoly = new google.maps.Polyline({
                        path: arcPts,
                        strokeColor: "#000000",
                        strokeOpacity: 0.5,
                        strokeWeight: 10,
                        map: map
                    });
                    piePoly.setVisible(true);

                }
            }

        }
    });**/

    let windText = document.getElementById('wind') as HTMLInputElement;

    let sub = document.getElementById("submit") as HTMLInputElement;
    sub.addEventListener("click",function(event) {
        event.preventDefault();
        if (arp.value=="" && windText.value==""){
            txt.textContent = "Please introduce Wind Direction and Departure Airport";
        }else if (arp.value=="")txt.textContent = "Please introduce your Departure Airport";
            else if (windText.value=="")txt.textContent = 'Introduce a wind direction between 0 and 360';
            else if(parseFloat(windText.value)<0 || parseFloat(windText.value)>360)txt.textContent = 'Introduce a wind direction between 0 and 360';
        else{
            // console.log(windDir);
            let airport: Airport[] = store.getAirports();
//console.log(airport[0].getName());
            for (let i = 0; i < airport.length; i++) {
                if ((airport[i].getIcao() == arp.value) || (airport[i].getName() == arp.value) || (airport[i].getPosition() == latlng(arp.value))) {
                    mrk = addMarker(airport[i].getPosition(), airport[i].icao, map);
                    let ret = dist(airport[i].getPosition());
                    var label = ret[0];
                    var pos = ret[1] as google.maps.LatLng;
                    path1 = addPath([], "#4D4948", map);
                    path1.getPath().push(pos);
                    path1.getPath().push(airport[i].getPosition());
                    choiceWind(label, parseFloat(windText.value));
                }
            }
        }
    });

    windText.addEventListener("click",function (event) {
        event.preventDefault();
        clearPaths();
        clearPaths4();
        mrk.setMap(null);
        path1.setMap(null);
        windText.value="";
    })

    arp.addEventListener("click",function(event){
        event.preventDefault();

        let airport: Airport[] = store.getAirports();
        //console.log(airport[0].getName());
        mrk.setMap(null);
        path1.setMap(null);
        clearPaths();
        clearPaths4();
        arp.value = "";

    });

    let act = document.getElementById("active") as HTMLElement;
    act.addEventListener("click",function (event){
        event.preventDefault();
        viewActive(parseFloat(windText.value));
    });

    /**
    let clc = document.getElementById("clear") as HTMLElement;
    act.addEventListener("click",function (event){
        event.preventDefault();
        clearPaths();
    });**/
}

(window as any).init = init();

//leaflet!!!!!! for nice drawings
