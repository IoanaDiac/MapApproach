//add a marker to the map
import {map} from "./index";

export function toDecimal(deg:number, min:number, sec:number, dir:any) {
    var dd = deg + min/60 + sec/(60*60);
    if (dir == "S" || dir == "W") {
        dd = dd * -1;
    }
    return dd;
}

export function addMarker(location: google.maps.LatLng, label: string, map: google.maps.Map) {
    var marker = new google.maps.Marker({
        position:location,
        map:map,
    })
    if(label){
        let detailWind = new google.maps.InfoWindow({
            content:label,
        })
        marker.addListener("mouseover",()=>{
            detailWind.open(map,marker);
        });
        marker.addListener("mouseout",()=>{
            detailWind.close();
        });
    }
    return marker;
/**
    var icon = {
        url:"https://e7.pngegg.com/pngimages/926/425/png-clipart-airplane-computer-icons-symbol-airport-hand-logo-thumbnail.png",
        scaledSize: new google.maps.Size(50,50),
        origin: new google.maps.Point(0,0),
    }
    return new google.maps.Marker({
        position: location,
        //icon: icon,
        map: map,
    })

 **/
}
export function addMarker2(location: google.maps.LatLng, label: string, map: google.maps.Map) {
    var marker = new google.maps.Marker({
        position: location,
        label:label,
        map: map,
    })
    return marker;
}
const POLYLINE_STROKE_WIDTH_PX = 12;
export function addPath(path: google.maps.LatLng[], pathColor: string, map: google.maps.Map) {
    var polywidth = 1;
    return new google.maps.Polyline( {
        path: path,
        map: map,
        // geodesic: true
        strokeColor: pathColor,
        strokeOpacity: 1.0,
        strokeWeight: polywidth,
    })
}
export function addPath2(path: google.maps.LatLng[], pathColor: string, map: google.maps.Map) {
    var polywidth = 10;
    return new google.maps.Polyline( {
        path: path,
        map: map,
        // geodesic: true
        strokeColor: pathColor,
        strokeOpacity: 1.0,
        strokeWeight: polywidth,
    })
}

export function addSector(path: google.maps.LatLng[][], sectorColor: any, map: google.maps.Map) {
    return new google.maps.Polygon({
        paths: path,
        map: map,
        strokeColor: sectorColor,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: sectorColor,
        fillOpacity: 0.35,
    })
}

export function TMA(center: google.maps.LatLng, radius: number, map: google.maps.Map) {
    return new google.maps.Circle(
        {
            strokeColor: "#000dff",
            strokeOpacity: 1,
            strokeWeight: 2,
            fillColor: "#000dff",
            fillOpacity: 0.35,
            map: map,
            center: center,
            radius: radius,
        }
    )
}
import {destPt} from "./calc.js";

export function drawArc(center:any, initialBearing:any, finalBearing:any, radius:any) {
    var d2r = Math.PI / 180;   // degrees to radians
    var r2d = 180 / Math.PI;   // radians to degrees

    var points = 32;
    var EarthRadiusMeters = 6378137.0;
    // find the raidus in lat/lon
    var rlat = (radius / EarthRadiusMeters) * r2d;
    var rlng = rlat / Math.cos(center.lat() * d2r);
    var extp = [];

    if (initialBearing > finalBearing) {finalBearing += 360;}

    var deltaBearing = finalBearing - initialBearing;
    var bounds = new google.maps.LatLngBounds();

    let wp = new google.maps.LatLng(center.lat(),center.lng());
    deltaBearing = deltaBearing/points;
    for (let i=0;i<points; i++)
    {
        extp.push(destPt(
            wp,initialBearing+i*deltaBearing,radius
        ));
        bounds.extend(extp[extp.length-1]);

    }

    return extp;
}
//Buttons

export interface ButtonType {
    name: String;
    className: String;
    tagName: String;
    createButton(): any;
}