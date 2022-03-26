import { make_map } from "./js/map.js";
import { sources } from "./js/sources.js";
import { layers } from "./js/layers.js";

const map = make_map();
map.on("load", () => {
  //move labels on top of linework
  const lays = map.getStyle().layers;
  let firstSymbolId;
  for (const lay of lays) {
    if (lay.type === "symbol") {
      firstSymbolId = lay.id;
      break;
    }
  }
  //load sources
  for (const source in sources) map.addSource(source, sources[source]);
  //load layer styles
  for (const layer in layers) map.addLayer(layers[layer], firstSymbolId);
});

// Step 3: define what happens when the legend form is clicked on

let form = document.getElementById("legend-form");
form.addEventListener("change", function () {
  let boundaries = form.elements["boundaries"];

  if (boundaries.checked) {
    map.setLayoutProperty("boundaries", "visibility", "visible");
  } else {
    map.setLayoutProperty("boundaries", "visibility", "none");
  }

  let plan = form.elements["planned-segments"];

  if (plan.checked) {
    map.setLayoutProperty("planned-segments", "visibility", "visible");
  } else {
    map.setLayoutProperty("planned-segments", "visibility", "none");
  }

  let traffic_counts = form.elements["traffic_counts"];

  if (traffic_counts.checked) {
    map.setLayoutProperty("traffic_counts", "visibility", "visible");
  } else {
    map.setLayoutProperty("traffic_counts", "visibility", "none");
  }
  let bike_counts = form.elements["bike_counts"];

  if (bike_counts.checked) {
    map.setLayoutProperty("bike_counts", "visibility", "visible");
  } else {
    map.setLayoutProperty("bike_counts", "visibility", "none");
  }
  let circuit = form.elements["circuit"];

  if (circuit.checked) {
    map.setLayoutProperty("circuit", "visibility", "visible");
  } else {
    map.setLayoutProperty("circuit", "visibility", "none");
  }
  let lts = form.elements["lts"];

  if (lts.checked) {
    map.setLayoutProperty("lts", "visibility", "visible");
  } else {
    map.setLayoutProperty("lts", "visibility", "none");
  }
  let rail_stops = form.elements["rail_stops"];

  if (rail_stops.checked) {
    map.setLayoutProperty("rail_stops", "visibility", "visible");
  } else {
    map.setLayoutProperty("rail_stops", "visibility", "none");
  }
});
