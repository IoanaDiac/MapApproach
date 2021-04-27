import { STARS, waypoints } from "./points";
import { addPath } from "./drawingUtils";
import { map } from "./index";
var path4 = new google.maps.Polyline();
var wps = new waypoints();
var wps_revda = wps.REVDA();
var wps_denub = wps.DENUB();
var wps_nurpo = wps.NURPO();
var wps_diral = wps.DIRAL();
var wps_rivos = wps.RIVOS();
var wps_pilat = wps.PILAT();
var wps_cetul = wps.CETUL();
var wps_rwy18 = wps.RWY18();
var wps_rwy36 = wps.RWY36();
var revda = STARS.prototype.REVDA();
var denub = STARS.prototype.DENUB();
var nurpo = STARS.prototype.NURPO();
var diral = STARS.prototype.DIRAL();
var rivos = STARS.prototype.RIVOS();
var pilat = STARS.prototype.PILAT();
var cetul = STARS.prototype.CETUL();
export function poly(name) {
    if (name == "REVDA") {
        path4 = addPath([], "#4D4948", map);
        path4.getPath().push(wps_revda[0].getPosition());
        for (let i = 0; i < revda.length; i++) {
            path4.getPath().push(revda[i]);
        }
    }
    else if (name == "DENUB") {
    }
    else if (name == "NURPO") {
    }
    else if (name == "DIRAL") {
    }
    else if (name == "RIVOS") {
    }
    else if (name == "PILAT") {
    }
    else if (name == "CETUL") {
    }
    return path4;
}
//# sourceMappingURL=polylines.js.map