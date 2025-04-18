const sources = {
  boundaries: {
    type: "geojson",
    data: "./data/municipal_boundaries.geojson",
  },
  plan: {
    type: "geojson",
    data: "./data/mapped_plan.geojson",
  },
  traffic_counts: {
    type: "geojson",
    data: "https://arcgis.dvrpc.org/portal/rest/services/transportation/trafficcounts/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
    cluster: true,
    clusterMaxZoom: 12,
    clusterRadius: 25,
  },
  bike_counts: {
    type: "geojson",
    data: "https://arcgis.dvrpc.org/portal/rest/services/Transportation/BicycleCounts/FeatureServer/0/query?where=1%3D1&outfields=*&outSR=4326&f=geojson",
    cluster: true,
    clusterMaxZoom: 12,
    clusterRadius: 25,
  },
  lts_vector: {
    type: "vector",
    url: "https://tiles.dvrpc.org/data/lts_v2.json",
  },
  circuit: {
    type: "geojson",
    data: "https://arcgis.dvrpc.org/portal/rest/services/Transportation/CircuitTrails/FeatureServer/0/query?where=1%3D1&outfields=*&outSR=4326&f=geojson",
  },
  rail_stops: {
    type: "geojson",
    data: "https://arcgis.dvrpc.org/portal/rest/services/Transportation/PassengerRailStations/FeatureServer/0/query?where=1%3D1&outfields=*&outSR=4326&f=geojson",
  },
  traffic: {
    type: "geojson",
    data: "./data/rmstraffic.geojson",
  },
  septa_bus: {
    type: "geojson",
    data: "https://services2.arcgis.com/9U43PSoL47wawX5S/arcgis/rest/services/Transit_Routes_(Spring_2025)/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
  },
  road_diet: {
    type: "geojson",
    data: "./data/road_diet_candidates.geojson",
  },
  rhin: {
    type: "geojson",
    data: "https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/rhin/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
  },
  //inrix: {
  //  type: "geojson",
  //  data: "https://arcgis.dvrpc.org/portal/rest/services/transportation/cmp2021_inrix_traveltimedata/FeatureServer/0/query?where=county='MONTGOMERY'&outFields=state,ptiwkd,ptiwkd0610,ptiwkd1519&outSR=4326&returnGeometry=true&f=geojson",
  //},
  inrix: {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [],
    },
  },
};

export { sources };
