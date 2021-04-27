import {addMarker, toDecimal,addMarker2} from "./drawingUtils.js";
import {map} from "./index.js"
export class STARS{
    constructor() {
    }
    REVDA(){
        let loc0 = new google.maps.LatLng(toDecimal(44,3,34,"N"), toDecimal(28,45,9,"E"));
        let loc1 = new google.maps.LatLng(toDecimal(44,6,11.21,"N"), toDecimal(28,41,56.87,"E"));
        let loc2 = new google.maps.LatLng(toDecimal(44,6,26.05,"N"), toDecimal(28,41,22.49,"E"));
        let loc3 = new google.maps.LatLng(toDecimal(44,6,34.01,"N"), toDecimal(28,40,49.79,"E"));
        let loc4 = new google.maps.LatLng(toDecimal(44,6,34.88,"N"), toDecimal(28,39,28.12,"E"));
        let loc5 = new google.maps.LatLng(toDecimal(44,5,29.57,"N"), toDecimal(28,37,4.42,"E"));
        let loc6 = new google.maps.LatLng(toDecimal(44,4,42.92,"N"), toDecimal(28,34,42.82,"E"));
        let loc7 = new google.maps.LatLng(toDecimal(44,4,7.86,"N"), toDecimal(28,31,33.5,"E"));
        let loc8 = new google.maps.LatLng(toDecimal(44,4,7.34,"N"), toDecimal(28,28,52.24,"E"));
        let loc9 = new google.maps.LatLng(toDecimal(44,4,46.09,"N"), toDecimal(28,27,57.75,"E"));
        let loc10 = new google.maps.LatLng(toDecimal(44,5,21.56,"N"), toDecimal(28,27,13.93,"E"));
        let loc11 = new google.maps.LatLng(toDecimal(44,17,8,"N"), toDecimal(28,28,42,"E"));
        let loc12 = new google.maps.LatLng(toDecimal(44,32,3.38,"N"), toDecimal(28,23,45.44,"E"));
        let loc13 = new google.maps.LatLng(toDecimal(44,33,50.29,"N"), toDecimal(28,24,21.72,"E"));
        let loc14 = new google.maps.LatLng(toDecimal(44,34,34.13,"N"), toDecimal(28,27,41.02,"E"));
        let loc15 = new google.maps.LatLng(toDecimal(44,33,59.68,"N"), toDecimal(28,29,39.45,"E"));
        let loc16 = new google.maps.LatLng(toDecimal(44,32,57.78,"N"), toDecimal(28,30,38.72,"E"));
        let loc17 = new google.maps.LatLng(toDecimal(44,27,40,"N"), toDecimal(28,30,8,"E"));
        let loc18 = new google.maps.LatLng(toDecimal(44,24,12,"N"), toDecimal(28,29,39,"E"));
        let loc19 = new google.maps.LatLng(toDecimal(44,21,44.00,"N"), toDecimal(28,29,18.00,"E"));

        return [loc0,loc1,loc2,loc3,loc4,loc5,loc6,loc7,loc8,loc9,loc10,loc11,loc12,loc13,loc14,loc15,loc16,loc17,loc18,loc19]
    }
    DENUB(){
        let loc0 = new google.maps.LatLng(toDecimal(44,11,46,"N"), toDecimal(28,52,36,"E"));
        let loc1 = new google.maps.LatLng(toDecimal(44,13,1.42,"N"), toDecimal(28,47,18.94,"E"));
        let loc2 = new google.maps.LatLng(toDecimal(44,12,42.49,"N"), toDecimal(28,46,10.32,"E"));
        let loc3 = new google.maps.LatLng(toDecimal(44,12,16.92,"N"), toDecimal(28,45,33.36,"E"));
        let loc4 = new google.maps.LatLng(toDecimal(44,11,24.18,"N"), toDecimal(28,44,54.35,"E"));
        let loc5 = new google.maps.LatLng(toDecimal(44,10,21.58,"N"), toDecimal(28,44,5.58,"E"));
        let loc6 = new google.maps.LatLng(toDecimal(44, 9,9.15,"N"), toDecimal(28,43,1.45,"E"));
        let loc7 = new google.maps.LatLng(toDecimal(44,6,34.88,"N"), toDecimal(28,39,28.12,"E"));
        let loc8 = new google.maps.LatLng(toDecimal(44,5,29.57,"N"), toDecimal(28,37,4.42,"E"));
        let loc9 = new google.maps.LatLng(toDecimal(44,4,42.92,"N"), toDecimal(28,34,42.82,"E"));
        let loc10 = new google.maps.LatLng(toDecimal(44,4,7.86,"N"), toDecimal(28,31,33.5,"E"));
        let loc11 = new google.maps.LatLng(toDecimal(44,4,7.34,"N"), toDecimal(28,28,52.24,"E"));
        let loc12 = new google.maps.LatLng(toDecimal(44,4,46.09,"N"), toDecimal(28,27,57.75,"E"));
        let loc13 = new google.maps.LatLng(toDecimal(44,5,21.56,"N"), toDecimal(28,27,13.93,"E"));
        let loc14 = new google.maps.LatLng(toDecimal(44,17,8,"N"), toDecimal(28,28,42,"E"));
        let loc15 = new google.maps.LatLng(toDecimal(44,32,3.38,"N"), toDecimal(28,23,45.44,"E"));
        let loc16 = new google.maps.LatLng(toDecimal(44,33,50.29,"N"), toDecimal(28,24,21.72,"E"));
        let loc17 = new google.maps.LatLng(toDecimal(44,34,34.13,"N"), toDecimal(28,27,41.02,"E"));
        let loc18 = new google.maps.LatLng(toDecimal(44,33,59.68,"N"), toDecimal(28,29,39.45,"E"));
        let loc19 = new google.maps.LatLng(toDecimal(44,32,57.78,"N"), toDecimal(28,30,38.72,"E"));
        let loc20 = new google.maps.LatLng(toDecimal(44,27,40,"N"), toDecimal(28,30,8,"E"));
        let loc21 = new google.maps.LatLng(toDecimal(44,24,12,"N"), toDecimal(28,29,39,"E"));
        let loc22 = new google.maps.LatLng(toDecimal(44,21,44.00,"N"), toDecimal(28,29,18.00,"E"));
        return [loc0,loc1,loc2,loc3,loc4,loc5,loc6,loc7,loc8,loc9,loc10,loc11,loc12,
            loc13,loc14,loc15,loc16,loc17,loc18,loc19,loc20,loc21,loc22]
    }
    NURPO(){
        let loc0 = new google.maps.LatLng(toDecimal(44,22,25.00,"N"), toDecimal(28,52,40,"E"));
        let loc1 = new google.maps.LatLng(toDecimal(44,22,50.19,"N"), toDecimal(28,50,46.87,"E"));
        let loc2 = new google.maps.LatLng(toDecimal(44,23,28.99,"N"), toDecimal(28,49,34.74,"E"));
        let loc3 = new google.maps.LatLng(toDecimal(44,24,56.75,"N"), toDecimal(28,48,27.54,"E"));
        let loc4 = new google.maps.LatLng(toDecimal(44,26,35.89,"N"), toDecimal(28,47,10.75,"E"));
        let loc5 = new google.maps.LatLng(toDecimal(44,27,56.25,"N"), toDecimal(28,45,49.62,"E"));
        let loc6 = new google.maps.LatLng(toDecimal(44,29,0.31,"N"), toDecimal(28,44,25.37,"E"));
        let loc7 = new google.maps.LatLng(toDecimal(44,30,9.54,"N"), toDecimal(28,42,39.70,"E"));
        let loc8 = new google.maps.LatLng(toDecimal(44,30,59.69,"N"), toDecimal(28,41,15.54,"E"));
        let loc9 = new google.maps.LatLng(toDecimal(44,31,24.63,"N"), toDecimal(28,40,21.64,"E"));
        let loc10 = new google.maps.LatLng(toDecimal(44,32,14.17,"N"), toDecimal(28,38,17.13,"E"));
        let loc11 = new google.maps.LatLng(toDecimal(44,32,47.54,"N"), toDecimal(28,36,41.88,"E"));
        let loc12 = new google.maps.LatLng(toDecimal(44,33,25.36,"N"), toDecimal(28,33,59.04,"E"));
        let loc13 = new google.maps.LatLng(toDecimal(44,33,8.63,"N"), toDecimal(28,31,57.25,"E"));
        let loc14 = new google.maps.LatLng(toDecimal(44,32,31.67,"N"), toDecimal(28,31,2.14,"E"));
        let loc15 = new google.maps.LatLng(toDecimal(44,31,59.06,"N"), toDecimal(28,30,39.38,"E"));
        let loc16 = new google.maps.LatLng(toDecimal(44,27,51.67,"N"), toDecimal(28,30,6.64,"E"));
        let loc17 = new google.maps.LatLng(toDecimal(44,21,44.00,"N"), toDecimal(28,29,18.00,"E"));
        return [loc0,loc1,loc2,loc3,loc4,loc5,loc6,loc7,loc8,loc9,loc10,loc11,loc12,
            loc13,loc14,loc15,loc16,loc17]
    }

    DIRAL(){
        let loc0 = new google.maps.LatLng(toDecimal(44,22,59.00,"N"), toDecimal(28,4,59.00,"E"));
        let loc1 = new google.maps.LatLng(toDecimal(44,23,12.16,"N"), toDecimal(28,6,17.03,"E"));
        let loc2 = new google.maps.LatLng(toDecimal(44,23,20.63,"N"), toDecimal(28, 7,7.79,"E"));
        let loc3 = new google.maps.LatLng(toDecimal(44,23,36.02,"N"), toDecimal(28,7,49.15,"E"));
        let loc4 = new google.maps.LatLng(toDecimal(44,24,1.13,"N"), toDecimal(28, 8,20.43,"E"));
        let loc5 = new google.maps.LatLng(toDecimal(44,25,13.41,"N"), toDecimal(28,9,16.81,"E"));
        let loc6 = new google.maps.LatLng(toDecimal(44,26,41.33,"N"), toDecimal(28,10,29.53,"E"));
        let loc7 = new google.maps.LatLng(toDecimal(44,27,48.41,"N"), toDecimal(28,11,33.61,"E"));
        let loc8 = new google.maps.LatLng(toDecimal(44,29,20.80,"N"), toDecimal(28,13,30.09,"E"));
        let loc9 = new google.maps.LatLng(toDecimal(44,30,43.07,"N"), toDecimal(28,15,44.13,"E"));
        let loc10 = new google.maps.LatLng(toDecimal(44,32,2.43,"N"), toDecimal(28,18,47.40,"E"));
        let loc11 = new google.maps.LatLng(toDecimal(44,33,1.66,"N"), toDecimal(28,22,7.46,"E"));
        let loc12 = new google.maps.LatLng(toDecimal(44,33,41.79,"N"), toDecimal(28,27,18.41,"E"));
        let loc13 = new google.maps.LatLng(toDecimal(44,33,41.60,"N"), toDecimal(28,28,50.6,"E"));
        let loc14 = new google.maps.LatLng(toDecimal(44,33,6.34,"N"), toDecimal(28,29,58.01,"E"));
        let loc15 = new google.maps.LatLng(toDecimal(44,31,59.06,"N"), toDecimal(28,30,39.38,"E"));
        let loc16 = new google.maps.LatLng(toDecimal(44,27,51.67,"N"), toDecimal(28,30,6.64,"E"));
        let loc17 = new google.maps.LatLng(toDecimal(44,21,44.00,"N"), toDecimal(28,29,18.00,"E"));
        return [loc0,loc1,loc2,loc3,loc4,loc5,loc6,loc7,loc8,loc9,loc10,loc11,loc12,
            loc13,loc14,loc15,loc16,loc17]
    }

    RIVOS(){
        let loc0 = new google.maps.LatLng(toDecimal(44,26,45,"N"), toDecimal(28,7,29,"E"));
        let loc1 = new google.maps.LatLng(toDecimal(44,26,55.25,"N"), toDecimal(28,8,34.07,"E"));
        let loc2 = new google.maps.LatLng(toDecimal(44,26,51.10,"N"), toDecimal(28,9,49.13,"E"));
        let loc3 = new google.maps.LatLng(toDecimal(44,27,20.02,"N"), toDecimal(28,11,0.08,"E"));
        let loc4 = new google.maps.LatLng(toDecimal(44,27,48.41,"N"), toDecimal(28,11,33.61,"E"));
        let loc5 = new google.maps.LatLng(toDecimal(44,29,20.80,"N"), toDecimal(28,13,30.09,"E"));
        let loc6 = new google.maps.LatLng(toDecimal(44,30,43.07,"N"), toDecimal(28,15,44.13,"E"));
        let loc7 = new google.maps.LatLng(toDecimal(44,32,2.43,"N"), toDecimal(28,18,47.40,"E"));
        let loc8 = new google.maps.LatLng(toDecimal(44,33,1.66,"N"), toDecimal(28,22,7.46,"E"));
        let loc9 = new google.maps.LatLng(toDecimal(44,33,41.79,"N"), toDecimal(28,27,18.41,"E"));
        let loc10 = new google.maps.LatLng(toDecimal(44,33,41.60,"N"), toDecimal(28,28,50.6,"E"));
        let loc11 = new google.maps.LatLng(toDecimal(44,33,6.34,"N"), toDecimal(28,29,58.01,"E"));
        let loc12 = new google.maps.LatLng(toDecimal(44,31,59.06,"N"), toDecimal(28,30,39.38,"E"));
        let loc13 = new google.maps.LatLng(toDecimal(44,27,51.67,"N"), toDecimal(28,30,6.64,"E"));
        let loc14 = new google.maps.LatLng(toDecimal(44,21,44.00,"N"), toDecimal(28,29,18.00,"E"));
        return [loc0,loc1,loc2,loc3,loc4,loc5,loc6,loc7,loc8,loc9,loc10,loc11,loc12,
            loc13,loc14]
    }
    PILAT(){
        let loc0 = new google.maps.LatLng(toDecimal(44,33,13,"N"), toDecimal(28,17,23,"E"));
        let loc1 = new google.maps.LatLng(toDecimal(44,33,0.03,"N"), toDecimal(28,18,27.98,"E"));
        let loc2 = new google.maps.LatLng(toDecimal(44,32,44.51,"N"), toDecimal(28,19,28.23,"E"));
        let loc3 = new google.maps.LatLng(toDecimal(44,32,39.80,"N"), toDecimal(28,20,27.21,"E"));
        let loc4 = new google.maps.LatLng(toDecimal(44,33,41.79,"N"), toDecimal(28,27,18.41,"E"));
        let loc5 = new google.maps.LatLng(toDecimal(44,33,41.60,"N"), toDecimal(28,28,50.6,"E"));
        let loc6 = new google.maps.LatLng(toDecimal(44,33,6.34,"N"), toDecimal(28,29,58.01,"E"));
        let loc7 = new google.maps.LatLng(toDecimal(44,31,59.06,"N"), toDecimal(28,30,39.38,"E"));
        let loc8 = new google.maps.LatLng(toDecimal(44,27,51.67,"N"), toDecimal(28,30,6.64,"E"));
        let loc9 = new google.maps.LatLng(toDecimal(44,21,44.00,"N"), toDecimal(28,29,18.00,"E"));
        return [loc0,loc1,loc2,loc3,loc4,loc5,loc6,loc7,loc8,loc9]
    }
    CETUL(){
        let loc0 = new google.maps.LatLng(toDecimal(44,41,51,"N"), toDecimal(28,37,37,"E"));
        let loc1 = new google.maps.LatLng(toDecimal(44,38,14,"N"), toDecimal(28,31,34,"E"));
        let loc2 = new google.maps.LatLng(toDecimal(44,33,3,"N"), toDecimal(28,30,52,"E"));
        let loc3 = new google.maps.LatLng(toDecimal(44,27,40,"N"), toDecimal(28,30,8,"E"));
        let loc4 = new google.maps.LatLng(toDecimal(44,24,12,"N"), toDecimal(28,29,39,"E"));
        let loc5 = new google.maps.LatLng(toDecimal(44,21,44.00,"N"), toDecimal(28,29,18.00,"E"));
        return [loc0,loc1,loc2,loc3,loc4,loc5]
    }
    REVDA36(){
        let loc0 =new google.maps.LatLng(toDecimal(43,44,0,"N"), toDecimal(29,8,36,"E"));
        let loc1 =new google.maps.LatLng(toDecimal(44,3,34,"N"), toDecimal(28,45,9,"E"));
        let loc2 =new google.maps.LatLng(toDecimal(44,6,8.92,"N"), toDecimal(28,41,54.32,"E"));
        let loc3 =new google.maps.LatLng(toDecimal(44,6,25.83,"N"), toDecimal(28,40,16.08,"E"));
        let loc4 =new google.maps.LatLng(toDecimal(44,6,16.92,"N"), toDecimal(28,39,0.75,"E"));
        let loc5 =new google.maps.LatLng(toDecimal(44,4,39.50,"N"), toDecimal(28,34,26.75,"E"));
        let loc6 =new google.maps.LatLng(toDecimal(44,4,1.43,"N"), toDecimal(28,29,32.82,"E"));
        let loc7 =new google.maps.LatLng(toDecimal(44, 4,37.17,"N"), toDecimal(28,28,19.28,"E"));
        let loc8 =new google.maps.LatLng(toDecimal(44,5,55.80,"N"), toDecimal(28,27,24.38,"E"));
        let loc9 =new google.maps.LatLng(toDecimal(44,12,9.48,"N"), toDecimal(28,28,9.33,"E"));
        let loc10 =new google.maps.LatLng(toDecimal(44,14,40,"N"), toDecimal(28,28,21,"E"));
        let loc11 =new google.maps.LatLng(toDecimal(44,21,44.00,"N"), toDecimal(28,29,18.00,"E"));
        return [loc0,loc1,loc2,loc3,loc4,loc5,loc6,loc7,loc8,loc9,loc10,loc11]
    }
    DENUB36(){
        let loc0 = new google.maps.LatLng(toDecimal(44,3,59,"N"), toDecimal(29,26,36,"E"));
        let loc1 = new google.maps.LatLng(toDecimal(44,11,46,"N"), toDecimal(28,52,36,"E"));
        let loc2 = new google.maps.LatLng(toDecimal(44,12,40.45,"N"), toDecimal(28,47,47.43,"E"));
        let loc3 = new google.maps.LatLng(toDecimal(44,12,31.40,"N"), toDecimal(28,46,36.98,"E"));
        let loc4 = new google.maps.LatLng(toDecimal(44,11,31.40,"N"), toDecimal(28,45,4.41,"E"));
        let loc5 = new google.maps.LatLng(toDecimal(44,9,19.70,"N"), toDecimal(28,43,15.55,"E"));
        let loc6 =  new google.maps.LatLng(toDecimal(44, 7,32.98,"N"), toDecimal(28,41,7.60,"E"));
        let loc7 = new google.maps.LatLng(toDecimal(44, 6,59.51,"N"), toDecimal(28,40,10.09,"E"));
        let loc8 = new google.maps.LatLng(toDecimal(44,6,16.92,"N"), toDecimal(28,39,0.75,"E"));
        let loc9 = new google.maps.LatLng(toDecimal(44,4,39.50,"N"), toDecimal(28,34,26.75,"E"));
        let loc10 = new google.maps.LatLng(toDecimal(44,4,1.43,"N"), toDecimal(28,29,32.82,"E"));
        let loc11 = new google.maps.LatLng(toDecimal(44, 4,37.17,"N"), toDecimal(28,28,19.28,"E"));
        let loc12 = new google.maps.LatLng(toDecimal(44,5,55.80,"N"), toDecimal(28,27,24.38,"E"));
        let loc13 = new google.maps.LatLng(toDecimal(44,12,9.48,"N"), toDecimal(28,28,9.33,"E"));
        let loc14 = new google.maps.LatLng(toDecimal(44,14,40,"N"), toDecimal(28,28,21,"E"));
        let loc15 = new google.maps.LatLng(toDecimal(44,21,44.00,"N"), toDecimal(28,29,18.00,"E"));
        return [loc0,loc1,loc2,loc3,loc4,loc5,loc6,loc7,loc8,loc9,loc10,loc11,loc12,
            loc13,loc14,loc15]
    }
    NURPO36(){
        let loc0 = new google.maps.LatLng(toDecimal(44,28,7,"N"), toDecimal(29,18,56,"E"));
        let loc1 = new google.maps.LatLng(toDecimal(44,22,25.00,"N"), toDecimal(28,52,40,"E"));
        let loc2 = new google.maps.LatLng(toDecimal(44,21,16.94,"N"), toDecimal(28,48,9.69,"E"));
        let loc3 = new google.maps.LatLng(toDecimal(44,20,30.79,"N"), toDecimal(28,46,49.49,"E"));
        let loc4 = new google.maps.LatLng(toDecimal(44,19,50.72,"N"), toDecimal(28,46,25.42,"E"));
        let loc5 = new google.maps.LatLng(toDecimal(44,16,29.89,"N"), toDecimal(28,46,39.39,"E"));
        let loc6 = new google.maps.LatLng(toDecimal(44,14,53.86,"N"), toDecimal(28,46,37.32,"E"));
        let loc7 = new google.maps.LatLng(toDecimal(44,13,11.18,"N"), toDecimal(28,45,55.64,"E"));
        let loc8 = new google.maps.LatLng(toDecimal(44,11,31.40,"N"), toDecimal(28,45,4.41,"E"));
        let loc9 = new google.maps.LatLng(toDecimal(44,9,19.70,"N"), toDecimal(28,43,15.55,"E"));
        let loc10 = new google.maps.LatLng(toDecimal(44, 7,32.98,"N"), toDecimal(28,41,7.60,"E"));
        let loc11 = new google.maps.LatLng(toDecimal(44, 6,59.51,"N"), toDecimal(28,40,10.09,"E"));
        let loc12 = new google.maps.LatLng(toDecimal(44,6,16.92,"N"), toDecimal(28,39,0.75,"E"));
        let loc13 = new google.maps.LatLng(toDecimal(44,4,39.50,"N"), toDecimal(28,34,26.75,"E"));
        let loc14 = new google.maps.LatLng(toDecimal(44,4,1.43,"N"), toDecimal(28,29,32.82,"E"));
        let loc15 = new google.maps.LatLng(toDecimal(44, 4,37.17,"N"), toDecimal(28,28,19.28,"E"));
        let loc16 = new google.maps.LatLng(toDecimal(44,5,55.80,"N"), toDecimal(28,27,24.38,"E"));
        let loc17 = new google.maps.LatLng(toDecimal(44,12,9.48,"N"), toDecimal(28,28,9.33,"E"));
        let loc18 = new google.maps.LatLng(toDecimal(44,14,40,"N"), toDecimal(28,28,21,"E"));
        let loc19 = new google.maps.LatLng(toDecimal(44,21,44.00,"N"), toDecimal(28,29,18.00,"E"));
        return [loc0,loc2,loc3,loc4,loc5,loc6,loc7,loc8,loc9,loc10,loc11,loc12,
            loc13,loc14,loc15,loc16,loc17,loc18,loc19]
    }

    DIRAL36(){
        let loc0 = new google.maps.LatLng(toDecimal(44,30,39,"N"), toDecimal(27,33,15,"E"));
        let loc1 = new google.maps.LatLng(toDecimal(44,17,8,"N"), toDecimal(28,28,42,"E"));
        let loc2 = new google.maps.LatLng(toDecimal(44,7,45.19,"N"), toDecimal(28,35,0.58,"E"));
        let loc3 = new google.maps.LatLng(toDecimal(44, 5,28.60,"N"), toDecimal(28,35,18.04,"E"));
        let loc4 = new google.maps.LatLng(toDecimal(44, 3,57.87,"N"), toDecimal(28,31,57.47,"E"));
        let loc5 = new google.maps.LatLng(toDecimal(44,4,42.38,"N"), toDecimal(28,27,39.39,"E"));
        let loc6 = new google.maps.LatLng(toDecimal(44, 6,0.59,"N"), toDecimal(28,27,7.74,"E"));
        let loc7 = new google.maps.LatLng(toDecimal(44,17,8,"N"), toDecimal(28,28,42,"E"));
        let loc8 = new google.maps.LatLng(toDecimal(44,21,44.00,"N"), toDecimal(28,29,18.00,"E"));
        return [loc0,loc1,loc2,loc3,loc4,loc5,loc6,loc7,loc8]
    }

    RIVOS36(){
        let loc0 = new google.maps.LatLng(toDecimal(44,39,21,"N"), toDecimal(27,39,17,"E"));
        let loc1 = new google.maps.LatLng(toDecimal(44,17,8,"N"), toDecimal(28,28,42,"E"));
        let loc2 = new google.maps.LatLng(toDecimal(44,7,45.19,"N"), toDecimal(28,35,0.58,"E"));
        let loc3 = new google.maps.LatLng(toDecimal(44, 5,28.60,"N"), toDecimal(28,35,18.04,"E"));
        let loc4 = new google.maps.LatLng(toDecimal(44, 3,57.87,"N"), toDecimal(28,31,57.47,"E"));
        let loc5 = new google.maps.LatLng(toDecimal(44,4,42.38,"N"), toDecimal(28,27,39.39,"E"));
        let loc6 = new google.maps.LatLng(toDecimal(44, 6,0.59,"N"), toDecimal(28,27,7.74,"E"));
        let loc7 = new google.maps.LatLng(toDecimal(44,17,8,"N"), toDecimal(28,28,42,"E"));
        let loc8 = new google.maps.LatLng(toDecimal(44,21,44.00,"N"), toDecimal(28,29,18.00,"E")); // ARP
        return [loc0,loc1,loc2,loc3,loc4,loc5,loc6,loc7,loc8]
    }
    PILAT36(){
        let loc0 = new google.maps.LatLng(toDecimal(44,49,26,"N"), toDecimal(28,5,52,"E"));
        let loc1 = new google.maps.LatLng(toDecimal(44,17,8,"N"), toDecimal(28,28,42,"E"));
        let loc2 = new google.maps.LatLng(toDecimal(44,7,45.19,"N"), toDecimal(28,35,0.58,"E"));
        let loc3 = new google.maps.LatLng(toDecimal(44, 5,28.60,"N"), toDecimal(28,35,18.04,"E"));
        let loc4 = new google.maps.LatLng(toDecimal(44, 3,57.87,"N"), toDecimal(28,31,57.47,"E"));
        let loc5 = new google.maps.LatLng(toDecimal(44,4,42.38,"N"), toDecimal(28,27,39.39,"E"));
        let loc6 = new google.maps.LatLng(toDecimal(44, 6,0.59,"N"), toDecimal(28,27,7.74,"E"));
        let loc7 = new google.maps.LatLng(toDecimal(44,17,8,"N"), toDecimal(28,28,42,"E"));
        let loc8 = new google.maps.LatLng(toDecimal(44,21,44.00,"N"), toDecimal(28,29,18.00,"E"));
        return [loc0,loc1,loc2,loc3,loc4,loc5,loc6,loc7,loc8]
    }
    CETUL36(){
        let loc0 =new google.maps.LatLng(toDecimal(44,41,51,"N"), toDecimal(28,37,37,"E"));
        let loc1 =new google.maps.LatLng(toDecimal(44,17,8,"N"), toDecimal(28,28,42,"E"));
        let loc2 =new google.maps.LatLng(toDecimal(44,7,45.19,"N"), toDecimal(28,35,0.58,"E"));
        let loc3 =new google.maps.LatLng(toDecimal(44, 5,28.60,"N"), toDecimal(28,35,18.04,"E"));
        let loc4 =new google.maps.LatLng(toDecimal(44, 3,57.87,"N"), toDecimal(28,31,57.47,"E"));
        let loc5 =new google.maps.LatLng(toDecimal(44,4,42.38,"N"), toDecimal(28,27,39.39,"E"));
        let loc6 =new google.maps.LatLng(toDecimal(44, 6,0.59,"N"), toDecimal(28,27,7.74,"E"));
        let loc7 =new google.maps.LatLng(toDecimal(44,17,8,"N"), toDecimal(28,28,42,"E"));
        let loc8 =new google.maps.LatLng(toDecimal(44,21,44.00,"N"), toDecimal(28,29,18.00,"E"));
        return [loc0,loc1,loc2,loc3,loc4,loc5,loc6,loc7,loc8]
    }
}
export function pointsLoc(){
    //let loc1 = new google.maps.LatLng(toDecimal(,"N"), toDecimal(,"E"));
    /**
    let loc2 = new google.maps.LatLng(toDecimal(46,16,50,"N"), toDecimal(27,0,16,"E"));
    let loc3 = new google.maps.LatLng(toDecimal(46,17,32,"N"), toDecimal(26,46,4,"E"));
    let loc4 = new google.maps.LatLng(toDecimal(46,45,22,"N"), toDecimal(26,43,45,"E"));
    let loc5 = new google.maps.LatLng(toDecimal(46,43,10,"N"), toDecimal(27,2,26,"E"));
    let loc6 = new google.maps.LatLng(toDecimal(46,36,23,"N"), toDecimal(27,17,18,"E"));
    let loc7 = new google.maps.LatLng(toDecimal(46,13,2,"N"), toDecimal(27,3,12,"E"));
     **/
    //CONSTANTA
    let loc0 = new google.maps.LatLng(toDecimal(44,55,30,"N"), toDecimal(27,49,21,"E"));
    let loc1 = new google.maps.LatLng(toDecimal(44,49,26,"N"), toDecimal(28,5,52,"E"));
    let loc2 = new google.maps.LatLng(toDecimal(44,25,48,"N"), toDecimal(29,26,58,"E"));
    let loc3 = new google.maps.LatLng(toDecimal(43,43,43,"N"), toDecimal(29,26,35,"E"));
    let loc4 = new google.maps.LatLng(toDecimal(43,44,44,"N"), toDecimal(29,2,0,"E"));
    let loc5 = new google.maps.LatLng(toDecimal(43,40,40,"N"), toDecimal(29,0,0,"E"));
    let loc6 = new google.maps.LatLng(toDecimal(43,45,45,"N"), toDecimal(28,36,0,"E"));
    let loc7 = new google.maps.LatLng(43.739006, 28.579103);
    let loc8 = new google.maps.LatLng(43.734755, 28.445044 );
    let loc9 = new google.maps.LatLng(43.752971, 28.348808);
    let loc10 = new google.maps.LatLng(43.758435, 28.236603);
    let loc11 = new google.maps.LatLng(43.801697, 28.104452);
    let loc12 = new google.maps.LatLng(43.841671, 28.000253 );
    let loc13 = new google.maps.LatLng(43.841161, 27.997426 );
    let loc14 = new google.maps.LatLng(toDecimal(43,50,31.6,"N"), toDecimal(27,59,40.4,"E"));
    let loc15 = new google.maps.LatLng(43.898022, 27.977582 );
    let loc16 = new google.maps.LatLng(43.940181, 27.953757 );
    let loc17 = new google.maps.LatLng(43.983923, 27.944248 );
    let loc18 = new google.maps.LatLng(44.008400, 27.916761);
    let loc19 = new google.maps.LatLng(43.966174, 27.843957 );
    let loc20 = new google.maps.LatLng(43.958473, 27.755107);
    let loc21 = new google.maps.LatLng(43.953446, 27.734752 );
    let loc22 = new google.maps.LatLng(43.959329, 27.710088 );
    let loc23 = new google.maps.LatLng(44.029570, 27.673633 );
    let loc24 = new google.maps.LatLng(44.048194, 27.643044);
    let loc25 = new google.maps.LatLng(44.012369, 27.612419 );
    let loc26 = new google.maps.LatLng(44.022306, 27.466514 );
    let loc27 = new google.maps.LatLng(44.012583, 27.397722);
    let loc28 = new google.maps.LatLng( 44.038329, 27.370532);
    let loc29 = new google.maps.LatLng(44.058707, 27.356401);
    let loc30 = new google.maps.LatLng(44.074861, 27.291473 );
    let loc31 = new google.maps.LatLng(toDecimal(44,5,1.4,"N"), toDecimal(27,17,24.8,"E"));
    let loc32 = new google.maps.LatLng(44.109397, 27.283592  );


    //RWY
    let loc_rwy_start = new google.maps.LatLng(toDecimal(44,20,47.20,"N"), toDecimal(28,29,10.73,"E"));
    let loc_rwy_end = new google.maps.LatLng(toDecimal(44,22,40.04,"N"), toDecimal(28,29,26.13,"E"));
    //let loc17 = new google.maps.LatLng(toDecimal(43,45,45,"N"), toDecimal(28,36,0,"E"));
    //let loc18 = new google.maps.LatLng(toDecimal(43,45,45,"N"), toDecimal(28,36,0,"E"));

    let vor1 = new google.maps.LatLng(toDecimal(44,17,8,"N"), toDecimal(28,28,42,"E"));
    return [loc0,loc1,loc2,loc3,loc4,loc5,loc6,loc7,loc8,loc9,loc10,loc11,loc12,loc13,loc14,loc15,loc16,
        loc17,loc18,loc19,loc20,loc21,loc22,loc23,loc24,loc25,loc26,loc27,loc28,loc29,loc30,loc31, loc32,
        loc_rwy_start,loc_rwy_end,vor1];
}

export class waypoints{

    //STARs
    constructor(){
    }
    REVDA(){
        var marker0: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(43,44,0,"N"), toDecimal(29,6,36,"E")),"REVDA",map);
        var marker1: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,3,34,"N"), toDecimal(28,45,9,"E")),"BIRLU",map);
        var marker2: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,4,12,"N"), toDecimal(28,26,55,"E")),"PEVEX",map);
        var marker3: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,27,40,"N"), toDecimal(28,30,8,"E")),"FAF",map);
        var marker4: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,24,12,"N"), toDecimal(28,29,39,"E")),"SDF",map);
        return [marker0,marker1,marker2,marker3,marker4]
    }
    DENUB(){
        var marker0: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,3,59,"N"), toDecimal(29,26,36,"E")),"DENUB",map);
        var marker1: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,11,46,"N"), toDecimal(28,52,36,"E")),"LERVU",map);
        var marker2: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,4,12,"N"), toDecimal(28,26,55,"E")),"PEVEX",map);
        var marker3: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,27,40,"N"), toDecimal(28,30,8,"E")),"FAF",map);
        var marker4: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,24,12,"N"), toDecimal(28,29,39,"E")),"SDF",map);
        return [marker0,marker1,marker2,marker3,marker4]
    }
    NURPO(){
        let marker0: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,28,7,"N"), toDecimal(29,18,56, "E")), "NURPO", map);
        let marker1: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,22,25,"N"), toDecimal(28,52,40, "E")), "VADNU", map);
        let marker2: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,33,3,"N"), toDecimal(28,30,52,"E")),"BAKOB",map);
        var marker3: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,27,40,"N"), toDecimal(28,30,8,"E")),"FAF",map);
        var marker4: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,24,12,"N"), toDecimal(28,29,39,"E")),"SDF",map);
        return [marker0,marker1,marker2,marker3,marker4]
    }
    DIRAL(){
        let marker0: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,30,39,"N"), toDecimal(27,33,15,"E")),"DIRAL",map);
        let marker1: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,22,59,"N"), toDecimal(28,4,59,"E")),"NAMUV",map);
        let marker2: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,26,45,"N"), toDecimal(28,7,29,"E")),"EBEKU",map);
        let marker3: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,33,13,"N"), toDecimal(28, 17,23, "E")), "MIVNU", map);
        let marker4: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,33,3,"N"), toDecimal(28,30,52,"E")),"BAKOB",map);
        var marker5: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,27,40,"N"), toDecimal(28,30,8,"E")),"FAF",map);
        var marker6: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,24,12,"N"), toDecimal(28,29,39,"E")),"SDF",map);
        return [marker0,marker1,marker2,marker3,marker4,marker5,marker6]
    }
    RIVOS(){
        let marker0: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,39,21,"N"), toDecimal(27,39,17,"E")), "RIVOS", map);
        let marker1: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,26,45,"N"), toDecimal(28,7,29,"E")),"EBEKU",map);
        let marker2: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,33,13,"N"), toDecimal(28, 17,23, "E")), "MIVNU", map);
        let marker3: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,33,3,"N"), toDecimal(28,30,52,"E")),"BAKOB",map);
        var marker4: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,27,40,"N"), toDecimal(28,30,8,"E")),"FAF",map);
        var marker5: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,24,12,"N"), toDecimal(28,29,39,"E")),"SDF",map);
        return [marker0,marker1,marker2,marker3,marker4,marker5]
    }
    PILAT(){
        let marker0: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,49,26,"N"), toDecimal(28, 5,52, "E")), "PILAT", map);
        let marker1: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,33,13,"N"), toDecimal(28, 17,23, "E")), "MIVNU", map);
        let marker2: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,33,3,"N"), toDecimal(28,30,52,"E")),"BAKOB",map);
        var marker3: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,27,40,"N"), toDecimal(28,30,8,"E")),"FAF",map);
        var marker4: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,24,12,"N"), toDecimal(28,29,39,"E")),"SDF",map);
        return [marker0,marker1,marker2,marker3,marker4]
    }
    CETUL(){
        let marker0: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,41,51,"N"), toDecimal(28,37,37,"E")),"CETUL",map);
        let marker1: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,38,14,"N"), toDecimal(28,31,34,"E")),"DINBA",map);
        let marker2: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,33,3,"N"), toDecimal(28,30,52,"E")),"BAKOB",map);
        var marker3: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,27,40,"N"), toDecimal(28,30,8,"E")),"FAF",map);
        var marker4: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,24,12,"N"), toDecimal(28,29,39,"E")),"SDF",map);
        return [marker0,marker1,marker2,marker3,marker4]
    }

    REVDA36(){
        var marker0: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(43,44,0,"N"), toDecimal(29,6,36,"E")),"REVDA",map);
        var marker1: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,3,34,"N"), toDecimal(28,45,9,"E")),"BIRLU",map);
        var marker2: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,4,12,"N"), toDecimal(28,26,55,"E")),"PEVEX",map);
        let marker3: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,14,40,"N"), toDecimal(28,28,22,"E")),"FAF",map);
        return [marker0,marker1,marker2,marker3]
    }
    DENUB36(){
        var marker0: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,3,59,"N"), toDecimal(29,26,36,"E")),"DENUB",map);
        var marker1: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,11,46,"N"), toDecimal(28,52,36,"E")),"LERVU",map);
        var marker2: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,4,12,"N"), toDecimal(28,26,55,"E")),"PEVEX",map);
        let marker3: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,14,40,"N"), toDecimal(28,28,22,"E")),"FAF",map);
        return [marker0,marker1,marker2,marker3]
    }
    NURPO36(){
        let marker0: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,28,7,"N"), toDecimal(29,18,56, "E")), "NURPO", map);
        let marker1: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,22,25,"N"), toDecimal(28,52,40, "E")), "VADNU", map);
        var marker2: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,4,12,"N"), toDecimal(28,26,55,"E")),"PEVEX",map);
        let marker3: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,14,40,"N"), toDecimal(28,28,22,"E")),"FAF",map);
        return [marker0,marker1,marker2,marker3]
    }
    DIRAL36(){
        let marker0: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,30,39,"N"), toDecimal(27,33,15,"E")),"DIRAL",map);
        let marker1: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,22,59,"N"), toDecimal(28,4,59,"E")),"NAMUV",map);
        var marker2: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,4,12,"N"), toDecimal(28,26,55,"E")),"PEVEX",map);
        var marker3: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,9,42,"N"), toDecimal(28,27,40,"E")),"RUTOX",map);
        let marker4: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,14,40,"N"), toDecimal(28,28,22,"E")),"FAF",map);
        return [marker0,marker1,marker2,marker3,marker4]
    }
    RIVOS36(){
        let marker0: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,39,21,"N"), toDecimal(27,39,17,"E")), "RIVOS", map);
        let marker1: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,26,45,"N"), toDecimal(28,7,29,"E")),"EBEKU",map);
        var marker2: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,4,12,"N"), toDecimal(28,26,55,"E")),"PEVEX",map);
        var marker3: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,9,42,"N"), toDecimal(28,27,40,"E")),"RUTOX",map);
        let marker4: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,14,40,"N"), toDecimal(28,28,22,"E")),"FAF",map);
        return [marker0,marker1,marker2,marker3,marker4]
    }
    PILAT36(){
        let marker0: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,49,26,"N"), toDecimal(28, 5,52, "E")), "PILAT", map);
        let marker1: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,33,13,"N"), toDecimal(28, 17,23, "E")), "MIVNU", map);
        var marker2: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,4,12,"N"), toDecimal(28,26,55,"E")),"PEVEX",map);
        var marker3: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,9,42,"N"), toDecimal(28,27,40,"E")),"RUTOX",map);
        let marker4: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,14,40,"N"), toDecimal(28,28,22,"E")),"FAF",map);
        return [marker0,marker1,marker2,marker3,marker4]
    }
    CETUL36() {
        let marker0: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44, 41, 51, "N"), toDecimal(28, 37, 37, "E")), "CETUL", map);
        var marker1: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,4,12,"N"), toDecimal(28,26,55,"E")),"PEVEX",map);
        var marker2: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,9,42,"N"), toDecimal(28,27,40,"E")),"RUTOX",map);
        let marker3: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,14,40,"N"), toDecimal(28,28,22,"E")),"FAF",map);
        return [marker0, marker1, marker2, marker3]
    }
    //CONSTANTA TMA
    TMA(){
        let marker0: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,55,30,"N"), toDecimal(27,49,21,"E")),"",map);
        let marker1: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,49,26,"N"), toDecimal(28,5,52,"E")),"",map);
        let marker2: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,25,48,"N"), toDecimal(29,26,58,"E")),"",map);
        let marker3: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(43,43,43,"N"), toDecimal(29,26,35,"E")),"",map);
        let marker4: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(43,44,44,"N"), toDecimal(29,2,0,"E")),"",map);
        let marker5: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(43,40,40,"N"), toDecimal(29,0,0,"E")),"",map);
        let marker6: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(43,45,45,"N"), toDecimal(28,36,0,"E")),"",map);
    }
    RWY18(){
        // Approach RWY 18
        let marker0: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,27,40,"N"), toDecimal(28,30,8,"E")),"FAF",map);
        let marker1: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,24,12,"N"),  toDecimal(28,29,39,"E")),"SDF",map);
        //RWY
        let marker2: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,20,47.20,"N"), toDecimal(28,29,10.73,"E")),"36",map);
        let marker3: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,22,40.04,"N"), toDecimal(28,29,26.13,"E")),"18",map);
        let icon = {
            url:"https://i.ibb.co/jyM2KX6/output-onlinepngtools.png",
            scaledSize: new google.maps.Size(30,48),
            origin: new google.maps.Point(0,0),
        }
        marker2.setIcon(icon);
        marker3.setIcon(icon);
        return [marker0,marker1,marker2,marker3];
    }
    RWY36(){
        // Approach RWY 36
        let marker0: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,14,40,"N"), toDecimal(28,28,22,"E")),"FAF",map);
        let marker1: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,9,42,"N"), toDecimal(28,27,40,"E")),"RUTOX",map);
        //RWY
        let marker2: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,20,47.20,"N"), toDecimal(28,29,10.73,"E")),"36",map);
        let marker3: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,22,40.04,"N"), toDecimal(28,29,26.13,"E")),"18",map);
        let icon = {
            url:"https://i.ibb.co/jyM2KX6/output-onlinepngtools.png",
            scaledSize: new google.maps.Size(30,48),
            origin: new google.maps.Point(0,0),
        }
        marker2.setIcon(icon);
        marker3.setIcon(icon);
        return [marker0,marker1,marker2,marker3];
    }
}
export function entry(){
    var marker0 = new google.maps.LatLng(toDecimal(43,44,0,"N"), toDecimal(29,6,36,"E"));
    var marker1 = new google.maps.LatLng(toDecimal(44,3,59,"N"), toDecimal(29,26,36,"E"));
    let marker2 = new google.maps.LatLng(toDecimal(44,28,7,"N"), toDecimal(29,18,56, "E"));
    let marker3 = new google.maps.LatLng(toDecimal(44,30,39,"N"), toDecimal(27,33,15,"E"));
    let marker4 = new google.maps.LatLng(toDecimal(44,39,21,"N"), toDecimal(27,39,17,"E"));
    let marker5 = new google.maps.LatLng(toDecimal(44,49,26,"N"), toDecimal(28, 5,52, "E"));
    let marker6 = new google.maps.LatLng(toDecimal(44,41,51,"N"), toDecimal(28,37,37,"E"));
    return [marker0,marker1,marker2,marker3,marker4,marker5,marker6]
}
export function entryMarker(){
    var marker0: google.maps.Marker = addMarker2(new google.maps.LatLng(toDecimal(43,44,0,"N"), toDecimal(29,6,36,"E")),"REVDA",map);
    var marker1: google.maps.Marker = addMarker2(new google.maps.LatLng(toDecimal(44,3,59,"N"), toDecimal(29,26,36,"E")),"DENUB",map);
    let marker2: google.maps.Marker = addMarker2(new google.maps.LatLng(toDecimal(44,28,7,"N"), toDecimal(29,18,56, "E")), "NURPO", map);
    let marker3: google.maps.Marker = addMarker2(new google.maps.LatLng(toDecimal(44,30,39,"N"), toDecimal(27,33,15,"E")),"DIRAL",map);
    let marker4: google.maps.Marker = addMarker2(new google.maps.LatLng(toDecimal(44,39,21,"N"), toDecimal(27,39,17,"E")), "RIVOS", map);
    let marker5: google.maps.Marker = addMarker2(new google.maps.LatLng(toDecimal(44,49,26,"N"), toDecimal(28, 5,52, "E")), "PILAT", map);
    let marker6: google.maps.Marker = addMarker2(new google.maps.LatLng(toDecimal(44,41,51,"N"), toDecimal(28,37,37,"E")),"CETUL",map);
    return [marker0,marker1,marker2,marker3,marker4,marker5,marker6]
}
export function vorNdb(){
    let VOR: google.maps.Marker = addMarker(new google.maps.LatLng(toDecimal(44,17,8,"N"), toDecimal(28,28,42,"E")),"VOR/DME",map)
    let icon = {
        url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/VOR-DME.svg/1172px-VOR-DME.svg.png",
        scaledSize: new google.maps.Size(39,34),
        origin: new google.maps.Point(0,0),
    }
    VOR.setIcon(icon);
    return [VOR];
}