import { waypoints } from "./points.js";
var wps = waypoints;
export function clear(fct) {
    if (fct != "REVDA") {
        {
            for (let i = 0; i <= wps.prototype.REVDA().length; i++) {
                if (wps.prototype.REVDA()[i] != undefined)
                    wps.prototype.REVDA()[i].setVisible(false);
            }
        }
    }
    if (fct != "DENUB") {
        for (let i = 0; i <= wps.prototype.DENUB().length; i++) {
            if (wps.prototype.DENUB()[i] != undefined)
                wps.prototype.DENUB()[i].setVisible(false);
        }
    }
    if (fct != "NURPO") {
        for (let i = 0; i <= wps.prototype.NURPO().length; i++) {
            if (wps.prototype.NURPO()[i] != undefined)
                wps.prototype.NURPO()[i].setVisible(false);
        }
    }
    if (fct != "DIRAL") {
        for (let i = 0; i <= wps.prototype.DIRAL().length; i++) {
            if (wps.prototype.DIRAL()[i] != undefined)
                wps.prototype.DIRAL()[i].setVisible(false);
        }
    }
    if (fct != "RIVOS") {
        for (let i = 0; i <= wps.prototype.RIVOS().length; i++) {
            if (wps.prototype.RIVOS()[i] != undefined)
                wps.prototype.RIVOS()[i].setVisible(false);
        }
    }
    if (fct != "PILAT") {
        for (let i = 0; i <= wps.prototype.PILAT().length; i++) {
            if (wps.prototype.PILAT()[i] != undefined)
                wps.prototype.PILAT()[i].setVisible(false);
        }
    }
    if (fct != "CETUL") {
        for (let i = 0; i <= wps.prototype.CETUL().length; i++) {
            if (wps.prototype.CETUL()[i] != undefined)
                wps.prototype.CETUL()[i].setVisible(false);
        }
    }
    for (let i = 0; i <= wps.prototype.RWY18().length; i++) {
        if (wps.prototype.RWY18()[i] != undefined)
            wps.prototype.RWY18()[i].setVisible(false);
    }
    for (let i = 0; i <= wps.prototype.RWY36().length; i++) {
        if (wps.prototype.RWY36()[i] != undefined)
            wps.prototype.RWY36()[i].setVisible(false);
    }
}
//# sourceMappingURL=clear_map.js.map