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
    paint: {
      "circle-opacity": 0.9,
      "circle-radius": 4,
      "circle-color": "pink",
    },
  },
  lts: {
    id: "lts",
    type: "line",
    source: "lts",
    paint: {
      "line-width": 1.25,
      "line-color": [
        "match",
        ["get", "lts_score"],
        "1",
        "#2c7d3f ", //dark green
        "2",
        "#60e07e", //light green
        "3",
        "yellow", //yellow
        "4",
        "red", //red
        "gray",
      ],
    },
  },
  circuit: {
    id: "circuit",
    type: "line",
    source: "circuit",
    paint: {
      "line-width": 1.5,
      "line-color": [
        "match",
        ["get", "circuit"],
        "Existing",
        "dark blue ", //dark blue
        "Planned",
        "blue", //blue
        "In Progress",
        "orange", //orange
        "Pipeline",
        "purple", //purple
        "gray",
      ],
    },
  },
  rail_stops: {
    id: "rail_stops",
    type: "circle",
    source: "rail_stops",
    paint: {
      "circle-opacity": 0.6,
      "circle-radius": 6,
      "circle-color": "red",
    },
  },
};

export { layers };
