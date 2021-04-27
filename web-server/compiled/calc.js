import { vorNdb } from "./points.js";
let vor = vorNdb();
function toRadians(degrees) {
    return degrees * Math.PI / 180;
}
;
function toDegrees(radians) {
    return radians * 180 / Math.PI;
}
export function toBrng(ang) {
    return toDegrees(ang + 360) % 360;
}
var EarthRadiusMeters = 6378137.0;
export function gcd(wp1, wp2) {
    let lat1 = toRadians(wp1.lat());
    let lng1 = toRadians(wp1.lng());
    let lat2 = toRadians(wp2.lat());
    let lng2 = toRadians(wp2.lng());
    const delta_lat = lat2 - lat1;
    const delta_lng = lng2 - lng1;
    const a = Math.sin(delta_lat / 2) * Math.sin(delta_lat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(delta_lng / 2) * Math.sin(delta_lng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = EarthRadiusMeters * c;
    return d;
}
export function brg(wp1, wp2) {
    let lat1 = toRadians(wp1.lat());
    let lng1 = toRadians(wp1.lng());
    let lat2 = toRadians(wp2.lat());
    let lng2 = toRadians(wp2.lng());
    //let lat: google.maps.LatLng = wp1.getPosition();
    let y = Math.sin(lng2 - lng1) * Math.cos(lat2);
    let x = Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1);
    var angle = Math.atan2(y, x);
    if (angle < 0.0) {
        angle += Math.PI * 2.0;
    }
    else if (angle > Math.PI) {
        angle -= Math.PI * 2.0;
    }
    return toDegrees(angle);
}
export function destPt(wp1, bearing, dist) {
    let R = EarthRadiusMeters;
    let brng = toRadians(bearing);
    let lat1 = toRadians(wp1.lat());
    let lng1 = toRadians(wp1.lng());
    var lat2 = Math.asin(Math.sin(lat1) * Math.cos(dist / R) +
        Math.cos(lat1) * Math.sin(dist / R) * Math.cos(brng));
    let lng2 = lng1 + Math.atan2(Math.sin(brng) * Math.sin(dist / R) * Math.cos(lat1), Math.cos(dist / R) - Math.sin(lat1) * Math.sin(lat2));
    let wp2 = new google.maps.LatLng(toDegrees(lat2), toDegrees(lng2));
    return wp2;
}
//# sourceMappingURL=calc.js.map