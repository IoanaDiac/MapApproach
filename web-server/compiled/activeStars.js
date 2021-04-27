import { STARS, waypoints } from "./points.js";
import { addPath } from "./drawingUtils.js";
import { map } from "./index.js";
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
var wps_revda36 = wps.REVDA36();
var wps_denub36 = wps.DENUB36();
var wps_nurpo36 = wps.NURPO36();
var wps_diral36 = wps.DIRAL36();
var wps_rivos36 = wps.RIVOS36();
var wps_pilat36 = wps.PILAT36();
var wps_cetul36 = wps.CETUL36();
var revda = STARS.prototype.REVDA();
var denub = STARS.prototype.DENUB();
var nurpo = STARS.prototype.NURPO();
var diral = STARS.prototype.DIRAL();
var rivos = STARS.prototype.RIVOS();
var pilat = STARS.prototype.PILAT();
var cetul = STARS.prototype.CETUL();
var revda36 = STARS.prototype.REVDA36();
var denub36 = STARS.prototype.DENUB36();
var nurpo36 = STARS.prototype.NURPO36();
var diral36 = STARS.prototype.DIRAL36();
var rivos36 = STARS.prototype.RIVOS36();
var pilat36 = STARS.prototype.PILAT36();
var cetul36 = STARS.prototype.CETUL36();
let ply;
/**
 function remove(pl:any){
    pl.setMap(null);
}**/
var path0 = new google.maps.Polyline();
var path1 = new google.maps.Polyline();
var path2 = new google.maps.Polyline();
var path3 = new google.maps.Polyline();
var path4 = new google.maps.Polyline();
var path5 = new google.maps.Polyline();
var path6 = new google.maps.Polyline();
var wps1 = new Array;
var wps2 = new Array;
for (let i = 0; i <= wps_revda.length; i++) {
    wps1.push(wps_revda[i]);
}
for (let i = 0; i <= wps_denub.length; i++) {
    wps1.push(wps_denub[i]);
}
for (let i = 0; i <= wps_nurpo.length; i++) {
    wps1.push(wps_nurpo[i]);
}
for (let i = 0; i <= wps_rivos.length; i++) {
    wps1.push(wps_rivos[i]);
}
for (let i = 0; i <= wps_diral.length; i++) {
    wps1.push(wps_diral[i]);
}
for (let i = 0; i <= wps_pilat.length; i++) {
    wps1.push(wps_pilat[i]);
}
for (let i = 0; i <= wps_cetul.length; i++) {
    wps1.push(wps_cetul[i]);
}
for (let i = 0; i <= wps_rwy18.length; i++) {
    wps1.push(wps_rwy18[i]);
}
for (let i = 0; i <= wps_revda36.length; i++) {
    wps2.push(wps_revda36[i]);
}
for (let i = 0; i <= wps_denub36.length; i++) {
    wps2.push(wps_denub36[i]);
}
for (let i = 0; i <= wps_nurpo36.length; i++) {
    wps2.push(wps_nurpo36[i]);
}
for (let i = 0; i <= wps_rivos36.length; i++) {
    wps2.push(wps_rivos36[i]);
}
for (let i = 0; i <= wps_diral36.length; i++) {
    wps2.push(wps_diral36[i]);
}
for (let i = 0; i <= wps_pilat36.length; i++) {
    wps2.push(wps_pilat36[i]);
}
for (let i = 0; i <= wps_cetul36.length; i++) {
    wps2.push(wps_cetul36[i]);
}
for (let i = 0; i <= wps_rwy36.length; i++) {
    wps2.push(wps_rwy36[i]);
}
export class pathsActive {
    constructor() {
    }
    REVDA() {
        //clear("REVDA");
        if (path0 != undefined)
            path0.setMap(null);
        if (path1 != undefined)
            path1.setMap(null);
        if (path2 != undefined)
            path2.setMap(null);
        if (path3 != undefined)
            path3.setMap(null);
        if (path4 != undefined)
            path4.setMap(null);
        if (path5 != undefined)
            path5.setMap(null);
        if (path6 != undefined)
            path6.setMap(null);
        for (let i = 0; i <= wps2.length; i++) {
            if (wps2[i] != undefined)
                wps2[i].setMap(null);
        }
        for (let i = 0; i <= wps1.length; i++) {
            if (wps1[i] != undefined)
                wps1[i].setMap(map);
        }
        //create paths
        path0 = addPath([], "#4D4948", map);
        path0.getPath().push(wps_revda[0].getPosition());
        for (let i = 0; i < revda.length; i++) {
            path0.getPath().push(revda[i]);
        }
    }
    DENUB() {
        path1 = addPath([], "#4D4948", map);
        path1.getPath().push(wps_denub[0].getPosition());
        for (let i = 0; i < denub.length; i++) {
            path1.getPath().push(denub[i]);
        }
    }
    NURPO() {
        path2 = addPath([], "#4D4948", map);
        path2.getPath().push(wps_nurpo[0].getPosition());
        for (let i = 0; i < nurpo.length; i++) {
            path2.getPath().push(nurpo[i]);
        }
    }
    DIRAL() {
        path3 = addPath([], "#4D4948", map);
        path3.getPath().push(wps_diral[0].getPosition());
        for (let i = 0; i < diral.length; i++) {
            path3.getPath().push(diral[i]);
        }
    }
    RIVOS() {
        path4 = addPath([], "#4D4948", map);
        path4.getPath().push(wps_rivos[0].getPosition());
        for (let i = 0; i < rivos.length; i++) {
            path4.getPath().push(rivos[i]);
        }
    }
    PILAT() {
        path5 = addPath([], "#4D4948", map);
        path5.getPath().push(wps_pilat[0].getPosition());
        for (let i = 0; i < pilat.length; i++) {
            path5.getPath().push(pilat[i]);
        }
    }
    CETUL() {
        //create paths
        path6 = addPath([], "#4D4948", map);
        path6.getPath().push(wps_cetul[0].getPosition());
        for (let i = 0; i < cetul.length; i++) {
            path6.getPath().push(cetul[i]);
        }
        for (let i = 0; i <= wps_rwy18.length; i++)
            wps_rwy18[i].setMap(map);
    }
    REVDA36() {
        //create paths
        if (path0 != undefined)
            path0.setMap(null);
        if (path1 != undefined)
            path1.setMap(null);
        if (path2 != undefined)
            path2.setMap(null);
        if (path3 != undefined)
            path3.setMap(null);
        if (path4 != undefined)
            path4.setMap(null);
        if (path5 != undefined)
            path5.setMap(null);
        if (path6 != undefined)
            path6.setMap(null);
        for (let i = 0; i <= wps1.length; i++) {
            if (wps1[i] != undefined)
                wps1[i].setMap(null);
        }
        for (let i = 0; i <= wps2.length; i++) {
            if (wps2[i] != undefined)
                wps2[i].setMap(map);
        }
        path0 = addPath([], "#4D4948", map);
        path0.getPath().push(wps_revda36[0].getPosition());
        for (let i = 0; i < revda36.length; i++) {
            path0.getPath().push(revda36[i]);
        }
    }
    DENUB36() {
        //create paths
        path1 = addPath([], "#4D4948", map);
        path1.getPath().push(wps_denub36[0].getPosition());
        for (let i = 0; i < denub36.length; i++) {
            path1.getPath().push(denub36[i]);
        }
    }
    NURPO36() {
        //create paths
        path2 = addPath([], "#4D4948", map);
        path2.getPath().push(wps_nurpo36[0].getPosition());
        for (let i = 0; i < nurpo36.length; i++) {
            path2.getPath().push(nurpo36[i]);
        }
    }
    DIRAL36() {
        //create paths
        path3 = addPath([], "#4D4948", map);
        path3.getPath().push(wps_diral36[0].getPosition());
        for (let i = 0; i < diral36.length; i++) {
            path3.getPath().push(diral36[i]);
        }
    }
    RIVOS36() {
        path4 = addPath([], "#4D4948", map);
        path4.getPath().push(wps_rivos36[0].getPosition());
        for (let i = 0; i < rivos36.length; i++) {
            path4.getPath().push(rivos36[i]);
        }
    }
    PILAT36() {
        path5 = addPath([], "#4D4948", map);
        path5.getPath().push(wps_pilat36[0].getPosition());
        for (let i = 0; i < pilat36.length; i++) {
            path5.getPath().push(pilat36[i]);
        }
    }
    CETUL36() {
        path6 = addPath([], "#4D4948", map);
        path6.getPath().push(wps_cetul36[0].getPosition());
        for (let i = 0; i < cetul36.length; i++) {
            path6.getPath().push(cetul36[i]);
        }
        for (let i = 0; i <= wps_rwy36.length; i++)
            wps_rwy36[i].setMap(map);
    }
}
export function clearPaths() {
    if (path0 != undefined)
        path0.setMap(null);
    if (path1 != undefined)
        path1.setMap(null);
    if (path2 != undefined)
        path2.setMap(null);
    if (path3 != undefined)
        path3.setMap(null);
    if (path4 != undefined)
        path4.setMap(null);
    if (path5 != undefined)
        path5.setMap(null);
    if (path6 != undefined)
        path6.setMap(null);
    for (let i = 0; i <= wps1.length; i++) {
        if (wps1[i] != undefined)
            wps1[i].setMap(null);
    }
    for (let i = 0; i <= wps2.length; i++) {
        if (wps2[i] != undefined)
            wps2[i].setMap(null);
    }
}
//# sourceMappingURL=activeStars.js.map