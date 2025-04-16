import { make_map } from "./js/map.js";
import { sources } from "./js/sources.js";
import { layers } from "./js/layers.js";
import { add_pointer_when_hovering } from "./js/hover.js";
import { make_popup } from "./js/popup.js";
import { make_popup_message } from "./js/click.js";

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
  for (const layer in layers) map.addLayer(layers[layer], "road-label");
  // set the pointer style when hovering specific layers
  [
    "planned-segments",
    "traffic_counts",
    "bike_counts",
    "lts",
    "circuit",
    "rail_stops",
    "bike_fac",
    "traffic_vol",
    "truck_percent",
    "septa_bus",
    "road_diet",
    "rhin",
    "inrix",
  ].forEach((layer) => {
    add_pointer_when_hovering(map, layer);
  });
});

map.on("zoomend", function () {
  const currentZoom = map.getZoom();

  // Only fetch inrix data when zoomed in enough and layer is visible
  if (
    currentZoom >= 8 &&
    map.getLayoutProperty("inrix", "visibility") === "visible"
  ) {
    // Get the current map bounds
    const bounds = map.getBounds();

    // Create a bounding box parameter for the API
    const bbox = `${bounds.getWest()},${bounds.getSouth()},${bounds.getEast()},${bounds.getNorth()}`;

    // Build the URL with spatial filter
    const url = `https://arcgis.dvrpc.org/portal/rest/services/transportation/cmp2021_inrix_traveltimedata/FeatureServer/0/query?outFields=ptiwkd,ptiwkd0610,ptiwkd1519&geometry=${bbox}&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&returnGeometry=true&f=geojson`;

    console.log("Fetching data with URL:", url);

    // Fetch data for current view
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.features) {
          console.log(`Loaded ${data.features.length} features`);

          // Update the source with the new data
          map.getSource("inrix").setData(data);

          // Make sure the layer is visible and the filter is not excluding all features
          // Temporarily remove the filter to see if that's causing the issue
          map.setFilter("inrix", null);

          // Force the layer to re-render
          map.setLayoutProperty("inrix", "visibility", "visible");

          // Log a sample feature to inspect its properties
          if (data.features.length > 0) {
            console.log(
              "Sample feature properties:",
              data.features[0].properties
            );
          }
        } else {
          console.error("Invalid GeoJSON structure:", data);
        }
      })
      .catch((error) => {
        console.error("Error loading inrix data:", error);
      });
  }
});
//define what happens when the legend form is clicked on

let form = document.getElementById("legend-form");
form.addEventListener("change", function () {
  let boundaries = form.elements["boundaries"];
  let plan = form.elements["planned-segments"];
  let traffic_counts = form.elements["traffic_counts"];
  let bike_counts = form.elements["bike_counts"];
  let circuit = form.elements["circuit"];
  let lts = form.elements["lts"];
  let rail_stops = form.elements["rail_stops"];
  let bike_fac = form.elements["bike_fac"];
  let traffic_vol = form.elements["traffic_vol"];
  let truck_percent = form.elements["truck_percent"];
  let septa_bus = form.elements["septa_bus"];
  let road_diet = form.elements["road_diet"];
  let rhin = form.elements["rhin"];
  let inrix = form.elements["inrix"];

  let checkboxes = [
    boundaries,
    plan,
    traffic_counts,
    bike_counts,
    circuit,
    lts,
    rail_stops,
    bike_fac,
    traffic_vol,
    truck_percent,
    septa_bus,
    road_diet,
    rhin,
    inrix,
  ];
  checkboxes.forEach((box) => {
    if (box.checked) {
      map.setLayoutProperty(box.id, "visibility", "visible");
      document.getElementById(box.id + "-legend").style.display = "inline";
    } else {
      map.setLayoutProperty(box.id, "visibility", "none");
      document.getElementById(box.id + "-legend").style.display = "none";
    }
  });
});

// make a popup when the user clicks on one or more of the map layers
map.on("click", (e) => {
  // set bbox as area around clicked point
  const bbox = [
    [e.point.x - 5, e.point.y - 5],
    [e.point.x + 5, e.point.y + 5],
  ];

  // get all features near the user's click
  let features = map.queryRenderedFeatures(bbox, {
    layers: [
      "planned-segments",
      "traffic_counts",
      "bike_counts",
      "lts",
      "circuit",
      "rail_stops",
      "bike_fac",
      "traffic_vol",
      "truck_percent",
      "septa_bus",
      "road_diet",
      "rhin",
      "inrix",
    ],
  });

  // as long as there's at least one feature, make the message
  // and then add the popup to the map
  if (features.length > 0) {
    let lat = e.lngLat.wrap().lat;
    let lng = e.lngLat.wrap().lng;
    let message = make_popup_message(features, lat, lng);
    make_popup(e, message, map);
  }
});
