"use strict";
function drawArc(center, initialBearing, finalBearing, radius) {
    var d2r = Math.PI / 180; // degrees to radians
    var r2d = 180 / Math.PI; // radians to degrees
    var points = 32;
    // find the raidus in lat/lon
    var rlat = (radius / EarthRadiusMeters) * r2d;
    var rlng = rlat / Math.cos(center.lat() * d2r);
    var extp = new Array();
    if (initialBearing > finalBearing)
        finalBearing += 360;
    var deltaBearing = finalBearing - initialBearing;
    deltaBearing = deltaBearing / points;
    for (var i = 0; (i < points + 1); i++) {
        extp.push(center.DestinationPoint(initialBearing + i * deltaBearing, radius));
        bounds.extend(extp[extp.length - 1]);
    }
    return extp;
}
//# sourceMappingURL=arc.js.map