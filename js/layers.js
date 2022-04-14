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
        ["get", "Year"],
        "2022",
        "#27AE60 ", //green
        "2023",
        "#F39C12", //orange
        "2024",
        "red", //red
        "2025",
        "#A569BD", //purple
        "2026",
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
        "#bd35af", //dark pink
        "Buffered Bike Lane",
        "teal",
        "Off-Road Trail/Path",
        "green",
        "Protected Bike Lane",
        "dark blue",
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
};

export { layers };
