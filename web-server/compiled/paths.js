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
var path4 = new google.maps.Polyline();
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
for (let i = 0; i <= wps_rwy36.length; i++) {
    wps1.push(wps_rwy36[i]);
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
for (let i = 0; i <= wps_rwy18.length; i++) {
    wps2.push(wps_rwy18[i]);
}
for (let i = 0; i <= wps_rwy36.length; i++) {
    wps2.push(wps_rwy36[i]);
}
//SYMBOL ANIMATION ON POLYLINE
function animatePath(line) {
    let count = 0;
    var l = window.setInterval(() => {
        count = (count + 1) % 200;
        const icons = line.get("icons");
        icons[0].offset = count / 2 + "%";
        //console.log(count);
        line.set("icons", icons);
        if (count == 199)
            clearInterval(l);
    }, 100);
}
const lineSymbol = {
    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    scale: 8,
    strokeColor: "#0000FF",
    size: new google.maps.Size(10, 10),
};
export class paths {
    constructor() {
    }
    REVDA() {
        if (path4 != undefined)
            path4.setMap(null);
        //clear("REVDA");
        for (let i = 0; i <= wps1.length; i++) {
            if (wps1[i] != undefined)
                wps1[i].setMap(null);
        }
        for (let i = 0; i <= wps2.length; i++) {
            if (wps2[i] != undefined)
                wps2[i].setMap(null);
        }
        //create paths
        path4 = addPath([], "#4D4948", map);
        path4.getPath().push(wps_revda[0].getPosition());
        for (let i = 0; i < revda.length; i++) {
            path4.getPath().push(revda[i]);
        }
        path4.setOptions({
            icons: [{
                    icon: lineSymbol,
                    offset: "100%",
                }]
        });
        animatePath(path4);
        // console.log(wps1[0].setVisible(true));
        //create current waypoints
        for (let i = 0; i <= wps_revda.length; i++)
            wps_revda[i].setMap(map);
        for (let i = 0; i <= wps_rwy18.length; i++)
            wps_rwy18[i].setMap(map);
        //wps.RWY36()[0].setVisible(true);
    }
    DENUB() {
        //remove(paths);
        if (path4 != undefined)
            path4.setMap(null);
        for (let i = 0; i <= wps1.length; i++) {
            if (wps1[i] != undefined)
                wps1[i].setMap(null);
        }
        for (let i = 0; i <= wps2.length; i++) {
            if (wps2[i] != undefined)
                wps2[i].setMap(null);
        }
        //create paths
        path4 = addPath([], "#4D4948", map);
        path4.getPath().push(wps_denub[0].getPosition());
        for (let i = 0; i < denub.length; i++) {
            path4.getPath().push(denub[i]);
        }
        path4.setOptions({
            icons: [{
                    icon: lineSymbol,
                    offset: "100%",
                }]
        });
        animatePath(path4);
        //create current waypoints
        for (let i = 0; i <= wps_denub.length; i++)
            wps_denub[i].setMap(map);
        for (let i = 0; i <= wps_rwy18.length; i++)
            wps_rwy18[i].setMap(map);
        //wps.DENUB()[0].setVisible(true);
        //wps.RWY36()[0].setVisible(true);
    }
    NURPO() {
        //remove(paths);
        if (path4 != undefined)
            path4.setMap(null);
        for (let i = 0; i <= wps1.length; i++) {
            if (wps1[i] != undefined)
                wps1[i].setMap(null);
        }
        for (let i = 0; i <= wps2.length; i++) {
            if (wps2[i] != undefined)
                wps2[i].setMap(null);
        }
        //create paths
        path4 = addPath([], "#4D4948", map);
        path4.getPath().push(wps_nurpo[0].getPosition());
        for (let i = 0; i < nurpo.length; i++) {
            path4.getPath().push(nurpo[i]);
        }
        path4.setOptions({
            icons: [{
                    icon: lineSymbol,
                    offset: "100%",
                }]
        });
        animatePath(path4);
        //create current waypoints
        for (let i = 0; i <= wps_nurpo.length; i++)
            wps_nurpo[i].setMap(map);
        for (let i = 0; i <= wps_rwy18.length; i++)
            wps_rwy18[i].setMap(map);
    }
    DIRAL() {
        //remove(paths);
        if (path4 != undefined)
            path4.setMap(null);
        for (let i = 0; i <= wps1.length; i++) {
            if (wps1[i] != undefined)
                wps1[i].setMap(null);
        }
        for (let i = 0; i <= wps2.length; i++) {
            if (wps2[i] != undefined)
                wps2[i].setMap(null);
        }
        //create paths
        path4 = addPath([], "#4D4948", map);
        path4.getPath().push(wps_diral[0].getPosition());
        for (let i = 0; i < diral.length; i++) {
            path4.getPath().push(diral[i]);
        }
        path4.setOptions({
            icons: [{
                    icon: lineSymbol,
                    offset: "100%",
                }]
        });
        animatePath(path4);
        //create current waypoints
        for (let i = 0; i <= wps_diral.length; i++)
            wps_diral[i].setMap(map);
        for (let i = 0; i <= wps_rwy18.length; i++)
            wps_rwy18[i].setMap(map);
    }
    RIVOS() {
        //remove(paths);
        if (path4 != undefined)
            path4.setMap(null);
        for (let i = 0; i <= wps1.length; i++) {
            if (wps1[i] != undefined)
                wps1[i].setMap(null);
        }
        for (let i = 0; i <= wps2.length; i++) {
            if (wps2[i] != undefined)
                wps2[i].setMap(null);
        }
        //create paths
        path4 = addPath([], "#4D4948", map);
        path4.getPath().push(wps_rivos[0].getPosition());
        for (let i = 0; i < rivos.length; i++) {
            path4.getPath().push(rivos[i]);
        }
        path4.setOptions({
            icons: [{
                    icon: lineSymbol,
                    offset: "100%",
                }]
        });
        animatePath(path4);
        //create current waypoints
        for (let i = 0; i <= wps_rivos.length; i++)
            wps_rivos[i].setMap(map);
        for (let i = 0; i <= wps_rwy18.length; i++)
            wps_rwy18[i].setMap(map);
    }
    PILAT() {
        //remove(paths);
        if (path4 != undefined)
            path4.setMap(null);
        for (let i = 0; i <= wps1.length; i++) {
            if (wps1[i] != undefined)
                wps1[i].setMap(null);
        }
        for (let i = 0; i <= wps2.length; i++) {
            if (wps2[i] != undefined)
                wps2[i].setMap(null);
        }
        //create paths
        path4 = addPath([], "#4D4948", map);
        path4.getPath().push(wps_pilat[0].getPosition());
        for (let i = 0; i < pilat.length; i++) {
            path4.getPath().push(pilat[i]);
        }
        path4.setOptions({
            icons: [{
                    icon: lineSymbol,
                    offset: "100%",
                }]
        });
        animatePath(path4);
        //create current waypoints
        for (let i = 0; i <= wps_pilat.length; i++)
            wps_pilat[i].setMap(map);
        for (let i = 0; i <= wps_rwy18.length; i++)
            wps_rwy18[i].setMap(map);
    }
    CETUL() {
        //remove(paths);
        if (path4 != undefined)
            path4.setMap(null);
        for (let i = 0; i <= wps1.length; i++) {
            if (wps1[i] != undefined)
                wps1[i].setMap(null);
        }
        for (let i = 0; i <= wps2.length; i++) {
            if (wps2[i] != undefined)
                wps2[i].setMap(null);
        }
        //create paths
        path4 = addPath([], "#4D4948", map);
        path4.getPath().push(wps_cetul[0].getPosition());
        for (let i = 0; i < cetul.length; i++) {
            path4.getPath().push(cetul[i]);
        }
        path4.setOptions({
            icons: [{
                    icon: lineSymbol,
                    offset: "100%",
                }]
        });
        animatePath(path4);
        //create current waypoints
        for (let i = 0; i <= wps_cetul.length; i++)
            wps_cetul[i].setMap(map);
        for (let i = 0; i <= wps_rwy18.length; i++)
            wps_rwy18[i].setMap(map);
    }
    REVDA36() {
        if (path4 != undefined)
            path4.setMap(null);
        //clear("REVDA");
        for (let i = 0; i <= wps1.length; i++) {
            if (wps1[i] != undefined)
                wps1[i].setMap(null);
        }
        for (let i = 0; i <= wps2.length; i++) {
            if (wps2[i] != undefined)
                wps2[i].setMap(null);
        }
        //create paths
        path4 = addPath([], "#4D4948", map);
        path4.getPath().push(wps_revda36[0].getPosition());
        for (let i = 0; i < revda36.length; i++) {
            path4.getPath().push(revda36[i]);
        }
        path4.setOptions({
            icons: [{
                    icon: lineSymbol,
                    offset: "100%",
                }]
        });
        animatePath(path4);
        // console.log(wps1[0].setVisible(true));
        //create current waypoints
        for (let i = 0; i <= wps_revda36.length; i++)
            wps_revda36[i].setMap(map);
        for (let i = 0; i <= wps_rwy36.length; i++)
            wps_rwy36[i].setMap(map);
        //wps.RWY36()[0].setVisible(true);
    }
    DENUB36() {
        //remove(paths);
        if (path4 != undefined)
            path4.setMap(null);
        for (let i = 0; i <= wps1.length; i++) {
            if (wps1[i] != undefined)
                wps1[i].setMap(null);
        }
        for (let i = 0; i <= wps2.length; i++) {
            if (wps2[i] != undefined)
                wps2[i].setMap(null);
        }
        //create paths
        path4 = addPath([], "#4D4948", map);
        path4.getPath().push(wps_denub36[0].getPosition());
        for (let i = 0; i < denub36.length; i++) {
            path4.getPath().push(denub36[i]);
        }
        path4.setOptions({
            icons: [{
                    icon: lineSymbol,
                    offset: "100%",
                }]
        });
        animatePath(path4);
        //create current waypoints
        for (let i = 0; i <= wps_denub36.length; i++)
            wps_denub36[i].setMap(map);
        for (let i = 0; i <= wps_rwy36.length; i++)
            wps_rwy36[i].setMap(map);
        //wps.DENUB()[0].setVisible(true);
        //wps.RWY36()[0].setVisible(true);
    }
    NURPO36() {
        //remove(paths);
        if (path4 != undefined)
            path4.setMap(null);
        for (let i = 0; i <= wps1.length; i++) {
            if (wps1[i] != undefined)
                wps1[i].setMap(null);
        }
        for (let i = 0; i <= wps2.length; i++) {
            if (wps2[i] != undefined)
                wps2[i].setMap(null);
        }
        //create paths
        path4 = addPath([], "#4D4948", map);
        path4.getPath().push(wps_nurpo36[0].getPosition());
        for (let i = 0; i < nurpo36.length; i++) {
            path4.getPath().push(nurpo36[i]);
        }
        path4.setOptions({
            icons: [{
                    icon: lineSymbol,
                    offset: "100%",
                }]
        });
        animatePath(path4);
        //create current waypoints
        for (let i = 0; i <= wps_nurpo36.length; i++)
            wps_nurpo36[i].setMap(map);
        for (let i = 0; i <= wps_rwy36.length; i++)
            wps_rwy36[i].setMap(map);
    }
    DIRAL36() {
        //remove(paths);
        if (path4 != undefined)
            path4.setMap(null);
        for (let i = 0; i <= wps1.length; i++) {
            if (wps1[i] != undefined)
                wps1[i].setMap(null);
        }
        for (let i = 0; i <= wps2.length; i++) {
            if (wps2[i] != undefined)
                wps2[i].setMap(null);
        }
        //create paths
        path4 = addPath([], "#4D4948", map);
        path4.getPath().push(wps_diral36[0].getPosition());
        for (let i = 0; i < diral36.length; i++) {
            path4.getPath().push(diral36[i]);
        }
        path4.setOptions({
            icons: [{
                    icon: lineSymbol,
                    offset: "100%",
                }]
        });
        animatePath(path4);
        //create current waypoints
        for (let i = 0; i <= wps_diral36.length; i++)
            wps_diral36[i].setMap(map);
        for (let i = 0; i <= wps_rwy36.length; i++)
            wps_rwy36[i].setMap(map);
    }
    RIVOS36() {
        //remove(paths);
        if (path4 != undefined)
            path4.setMap(null);
        for (let i = 0; i <= wps1.length; i++) {
            if (wps1[i] != undefined)
                wps1[i].setMap(null);
        }
        for (let i = 0; i <= wps2.length; i++) {
            if (wps2[i] != undefined)
                wps2[i].setMap(null);
        }
        //create paths
        path4 = addPath([], "#4D4948", map);
        path4.getPath().push(wps_rivos36[0].getPosition());
        for (let i = 0; i < rivos36.length; i++) {
            path4.getPath().push(rivos36[i]);
        }
        path4.setOptions({
            icons: [{
                    icon: lineSymbol,
                    offset: "100%",
                }]
        });
        animatePath(path4);
        //create current waypoints
        for (let i = 0; i <= wps_rivos36.length; i++)
            wps_rivos36[i].setMap(map);
        for (let i = 0; i <= wps_rwy36.length; i++)
            wps_rwy36[i].setMap(map);
    }
    PILAT36() {
        //remove(paths);
        if (path4 != undefined)
            path4.setMap(null);
        for (let i = 0; i <= wps1.length; i++) {
            if (wps1[i] != undefined)
                wps1[i].setMap(null);
        }
        for (let i = 0; i <= wps2.length; i++) {
            if (wps2[i] != undefined)
                wps2[i].setMap(null);
        }
        //create paths
        path4 = addPath([], "#4D4948", map);
        path4.getPath().push(wps_pilat36[0].getPosition());
        for (let i = 0; i < pilat36.length; i++) {
            path4.getPath().push(pilat36[i]);
        }
        path4.setOptions({
            icons: [{
                    icon: lineSymbol,
                    offset: "100%",
                }]
        });
        animatePath(path4);
        //create current waypoints
        for (let i = 0; i <= wps_pilat36.length; i++)
            wps_pilat36[i].setMap(map);
        for (let i = 0; i <= wps_rwy36.length; i++)
            wps_rwy36[i].setMap(map);
    }
    CETUL36() {
        //remove(paths);
        if (path4 != undefined)
            path4.setMap(null);
        for (let i = 0; i <= wps1.length; i++) {
            if (wps1[i] != undefined)
                wps1[i].setMap(null);
        }
        for (let i = 0; i <= wps2.length; i++) {
            if (wps2[i] != undefined)
                wps2[i].setMap(null);
        }
        //create paths
        path4 = addPath([], "#4D4948", map);
        path4.getPath().push(wps_cetul36[0].getPosition());
        for (let i = 0; i < cetul36.length; i++) {
            path4.getPath().push(cetul36[i]);
        }
        path4.setOptions({
            icons: [{
                    icon: lineSymbol,
                    offset: "100%",
                }]
        });
        animatePath(path4);
        //create current waypoints
        for (let i = 0; i <= wps_cetul36.length; i++)
            wps_cetul36[i].setMap(map);
        for (let i = 0; i <= wps_rwy36.length; i++)
            wps_rwy36[i].setMap(map);
    }
}
export function clearPaths4() {
    if (path4 != undefined)
        path4.setMap(null);
    for (let i = 0; i <= wps1.length; i++) {
        if (wps1[i] != undefined)
            wps1[i].setMap(null);
    }
    for (let i = 0; i <= wps2.length; i++) {
        if (wps2[i] != undefined)
            wps2[i].setMap(null);
    }
}
//# sourceMappingURL=paths.js.map