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
    data: "https://arcgis.dvrpc.org/portal/rest/services/Transportation/TrafficCounts/FeatureServer/0/query?where=1%3D1&outFields=recordnum,setdate,setyear,mcd,rdprefix,route,road,cntdir,type,aadt,co_name,mun_name&outSR=4326&f=geojson",
  },
  bike_counts: {
    type: "geojson",
    data: "https://arcgis.dvrpc.org/portal/rest/services/Transportation/BicycleCounts/FeatureServer/0/query?where=1%3D1&outfields=*&outSR=4326&f=geojson",
  },
  lts_vector: {
    type: "vector",
    url: "https://tiles.dvrpc.org/data/lts.json",
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
    data: "https://services2.arcgis.com/9U43PSoL47wawX5S/arcgis/rest/services/Bus_Routes/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
  },
  road_diet: {
    type: "geojson",
    data: "./data/road_diet_candidates.geojson",
  },
  essential_services: {
    type: "geojson",
    data: "https://arcgis.dvrpc.org/portal/rest/services/Planning/ETA_EssentialServicesPts/FeatureServer/0/query?where=1=1&outsr=4326&outfields=*&f=geojson",
  },
  inrix: {
    type: "geojson",
    data: "https://arcgis.dvrpc.org/portal/rest/services/Transportation/CMP2019_INRIX_TravelTimeData/FeatureServer/0/query?where=1=1&outsr=4326&outfields=*&f=geojson",
  },
};

export { sources };
