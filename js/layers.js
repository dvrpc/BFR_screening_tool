let volColor = [
  "interpolate",
  ["linear"],
  ["get", "CUR_AADT"],
  1000,
  "#ffffd4",
  5000,
  "#fee391",
  10000,
  "#fec44f",
  20000,
  "#fe9929",
  50000,
  "#d95f0e",
  100000,
  "#993404",
];

let trkColor = [
  "interpolate",
  ["linear"],
  ["get", "TRK_PCT"],
  5,
  "#feebe2",
  10,
  "#fcc5c0",
  15,
  "#fa9fb5",
  20,
  "#f768a1",
  25,
  "#c51b8a",
  100,
  "#7a0177",
];

let road_dietColor = [
  "interpolate",
  ["linear"],
  ["get", "vphpd"],
  850,
  "#1d4e89",
  1000,
  "#9aacae",
];

let PTIcolor = [
  "interpolate",
  ["linear"],
  ["get", "ptiwkdy"],
  1.3,
  "#82E0AA",
  1.7,
  "#FFC300",
  10.0,
  "#FF5733",
];

const layers = {
  boundaries: {
    id: "boundaries",
    type: "line",
    source: "boundaries",
    paint: {
      "line-color": "#d4d5d6",
      "line-width": 1,
    },
    filter: ["all", ["==", "dvrpc_reg", "Yes"], ["==", "state", "PA"]],
  },
  plan: {
    id: "planned-segments",
    type: "line",
    source: "plan",
    paint: {
      "line-width": 3,
      "line-color": [
        "match",
        ["get", "Calendar year"],
        "2024",
        "#27AE60 ", //green
        "2025",
        "#F39C12", //orange
        "2026",
        "red", //red
        "2027",
        "#A569BD", //purple
        "2028",
        "#3498DB", //blue
        "gray",
      ],
    },
  },
  traffic_counts: {
    id: "traffic_counts",
    type: "circle",
    source: "traffic_counts",
    layout: {
      visibility: "none",
    },
    paint: {
      "circle-opacity": 0.4,
      "circle-radius": 3,
      "circle-color": "gray",
    },
  },
  bike_counts: {
    id: "bike_counts",
    type: "circle",
    source: "bike_counts",
    layout: {
      visibility: "none",
    },
    paint: {
      "circle-opacity": 0.9,
      "circle-radius": 4,
      "circle-color": "pink",
    },
  },
  lts: {
    id: "lts",
    type: "line",
    source: "lts_vector",
    "source-layer": "existing_conditions_lts",
    layout: {
      visibility: "none",
    },
    paint: {
      "line-width": 1.25,
      "line-color": [
        "match",
        ["get", "lts_score"],
        1,
        "#2c7d3f ", //dark green
        2,
        "#60e07e", //light green
        3,
        "yellow", //yellow
        4,
        "red", //red
        "gray",
      ],
    },
  },
  bike_fac: {
    id: "bike_fac",
    type: "line",
    source: "lts_vector",
    "source-layer": "existing_conditions_lts",
    filter: ["all", ["!=", "bikefacili", "No Accomodation"]],
    layout: {
      visibility: "none",
    },
    paint: {
      "line-color": [
        "match",
        ["get", "bikefacili"],
        "Bike Lane",
        "#fca9f4", //light pink
        "Bike Route",
        "yellow", //dark pink
        "Buffered Bike Lane",
        "purple",
        "Off-road Trail/Path",
        "green",
        "Protected Bike Lane",
        "blue",
        "Sharrow",
        "orange",
        "gray",
      ],
      "line-width": 2,
    },
    "line-dasharray": [3, 3],
  },
  circuit: {
    id: "circuit",
    type: "line",
    source: "circuit",
    layout: {
      visibility: "none",
    },
    paint: {
      "line-width": 1.5,
      "line-color": [
        "match",
        ["get", "circuit"],
        "Existing",
        "#2f41a3", //dark blue
        "Planned",
        "#2a89a3", //blue
        "In Progress",
        "#664287", //purple
        "Pipeline",
        "#735540", //brown
        "gray",
      ],
      "line-dasharray": [2, 1],
    },
  },
  rail_stops: {
    id: "rail_stops",
    type: "circle",
    source: "rail_stops",
    layout: {
      visibility: "none",
    },
    paint: {
      "circle-opacity": 0.6,
      "circle-radius": 6,
      "circle-color": "red",
    },
  },

  traffic_vol: {
    id: "traffic_vol",
    type: "line",
    source: "traffic",
    layout: { visibility: "none" },
    //filter: ["all", ["==", "DISTRICT_NO", "06"]],
    paint: {
      "line-width": 1.5,
      "line-color": volColor,
    },
  },
  truck_percent: {
    id: "truck_percent",
    type: "line",
    source: "traffic",
    layout: { visibility: "none" },
    //filter: ["all", ["==", "DISTRICT_NO", "06"]],
    paint: {
      "line-width": 1.1,
      "line-color": trkColor,
    },
  },
  septa_bus: {
    id: "septa_bus",
    type: "line",
    source: "septa_bus",
    layout: { visibility: "none" },
    //filter: ["all", ["==", "DISTRICT_NO", "06"]],
    paint: {
      "line-width": 1.1,
      "line-color": "#2f41a3",
    },
  },
  road_diet: {
    id: "road_diet",
    type: "line",
    source: "road_diet",
    layout: { visibility: "none" },
    paint: {
      "line-width": 1.3,
      "line-color": road_dietColor,
    },
  },
  essential_services: {
    id: "essential_services",
    type: "circle",
    source: "essential_services",
    layout: { visibility: "none" },
    paint: {
      "circle-opacity": 0.4,
      "circle-radius": 2.5,
      "circle-color": [
        "match",
        ["get", "type"],
        "Activity Center for Seniors or Disabled",
        "#fca9f4", //light pink
        "Health Facility",
        "yellow",
        "Food Store",
        "purple",
        "School - College, University",
        "green",
        "School - Private",
        "blue",
        "School - Public",
        "orange",
        "gray",
      ],
    },
  },
  inrix: {
    id: "inrix",
    type: "line",
    source: "inrix",
    layout: { visibility: "none" },
    filter: ["all", ["==", "state", "Pennsylvania"]],
    paint: {
      "line-width": 1.4,
      "line-color": PTIcolor,
    },
  },
};

export { layers };
