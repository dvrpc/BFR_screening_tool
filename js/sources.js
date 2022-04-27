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
    data: "https://gis.penndot.gov/arcgis/rest/services/opendata/roadwaytraffic/MapServer/0/query?where=district_no=%2706%27&outFields=ADTT_CUR,TRK_PCT,CUR_AADT&outSR=4326&f=geojson",
  },
};

export { sources };
