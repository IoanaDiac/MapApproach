import { map } from "./index.js";
import { toDecimal } from "./drawingUtils";
export function animate() {
    const lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
        scale: 8,
        strokeColor: "#393",
    };
    // Create the polyline and add the symbol to it via the 'icons' property.
    const line = new google.maps.Polyline({
        path: [
            { lat: toDecimal(43, 44, 0, "N"), lng: toDecimal(29, 6, 36, "E") },
            { lat: toDecimal(44, 3, 34, "N"), lng: toDecimal(28, 45, 9, "E") },
        ],
        icons: [
            {
                icon: lineSymbol,
                offset: "100%",
            },
        ],
        map: map,
    });
    animatePath(line);
}
// Use the DOM setInterval() function to change the offset of the symbol
// at fixed intervals.
export function animatePath(line) {
    let count = 0;
    window.setInterval(() => {
        count = (count + 1) % 200;
        const icons = line.get("icons");
        icons[0].offset = count / 2 + "%";
        line.set("icons", icons);
    }, 20);
}
//# sourceMappingURL=animate.js.map