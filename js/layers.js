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
      "line-width": 1.5,
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
      "circle-opacity": 1,
      "circle-radius": 5,
      "circle-color": "red",
    },
  },
};

export { layers };
