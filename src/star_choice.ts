import {paths} from "./paths.js";
import {waypoints,pointsLoc,entry,entryMarker} from "./points.js";
import {map,txt} from "./index.js";
import {gcd} from "./calc.js";
import {pathsActive} from "./activeStars.js";

export function choice(name:any){

    if(name == "REVDA"){
        paths.prototype.REVDA36();
    }else if (name == "DENUB"){
        paths.prototype.DENUB36();
    }else if (name == "NURPO"){
        paths.prototype.NURPO36();
    }else if (name == "DIRAL"){
        paths.prototype.DIRAL36();
    }else if (name == "RIVOS"){
        paths.prototype.RIVOS36();
    }else if (name == "PILAT"){
        paths.prototype.PILAT36();
    }else if (name == "CETUL"){
        paths.prototype.CETUL36();
    }
}
export function choiceWind(name:any,wind:number){
    if (wind>=0 && wind<=360) {
        if (wind>90 && wind <270) {
            let textContent = 'Usable RWY is 18';
            if(name == "REVDA"){
                paths.prototype.REVDA();
            }else if (name == "DENUB"){
                paths.prototype.DENUB();
            }else if (name == "NURPO"){
                paths.prototype.NURPO();
            }else if (name == "DIRAL"){
                paths.prototype.DIRAL();
            }else if (name == "RIVOS"){
                paths.prototype.RIVOS();
            }else if (name == "PILAT"){
                paths.prototype.PILAT();
            }else if (name == "CETUL"){
                paths.prototype.CETUL();
            }
        }
        else if (wind>270 || wind<90){
            let textContent = 'Usable RWY is 36';
            if(name == "REVDA"){
                paths.prototype.REVDA36();
            }else if (name == "DENUB"){
                paths.prototype.DENUB36();
            }else if (name == "NURPO"){
                paths.prototype.NURPO36();
            }else if (name == "DIRAL"){
                paths.prototype.DIRAL36();
            }else if (name == "RIVOS"){
                paths.prototype.RIVOS36();
            }else if (name == "PILAT"){
                paths.prototype.PILAT36();
            }else if (name == "CETUL"){
                paths.prototype.CETUL36();
            }
        }
    }
}
export function viewActive(wind:number){
    if (wind>=0 && wind<=360) {
        if (wind>90 && wind <270) {
            let textContent = 'Usable RWY is 18';
            pathsActive.prototype.REVDA();
            pathsActive.prototype.DENUB();
            pathsActive.prototype.NURPO();
            pathsActive.prototype.DIRAL();
            pathsActive.prototype.RIVOS();
            pathsActive.prototype.PILAT();
            pathsActive.prototype.CETUL();
        } else if (wind>270 || wind<90){
            let textContent = 'Usable RWY is 36';
            pathsActive.prototype.REVDA36();
            pathsActive.prototype.DENUB36();
            pathsActive.prototype.NURPO36();
            pathsActive.prototype.DIRAL36();
            pathsActive.prototype.RIVOS36();
            pathsActive.prototype.PILAT36();
            pathsActive.prototype.CETUL36();
        }
    }
    else {
        txt.textContent = "Please introduce Wind Direction";
    }
}
//fiecare entry point intr-o singura functie
//verifica rwy disponibil => entry point => calcul distanta => ruta pe care o va lua avionul
export function dist(wp1:google.maps.LatLng){
    var pts = entry() ;
    let ok = gcd(wp1,pts[0]);
    let j = 0;
    for(let i = 1 ; i < pts.length ; i++){

        if(gcd(wp1,pts[i])<ok){
            ok = gcd(wp1,pts[i]);
            j = i;
        }
    }

    var mrk = entryMarker();
    //var label = JSON.stringify(mrk[j].getLabel());
    var label = mrk[j].getLabel();
    var pos = mrk[j].getPosition();
    for(let i = 0 ; i < mrk.length ; i++)mrk[i].setMap(null);
    return [label,pos]
}


