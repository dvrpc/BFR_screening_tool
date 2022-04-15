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
    data: "https://opendata.arcgis.com/datasets/0a456d1d865c45baaacf8d26e189b347_0.geojson",
  },
  lts_vector: {
    type: "vector",
    url: "https://tiles.dvrpc.org/data/lts.json",
  },
  circuit: {
    type: "geojson",
    data: "https://opendata.arcgis.com/datasets/1bc286c5bbd14cfca7bedbacc1fafb94_0.geojson",
  },
  rail_stops: {
    type: "geojson",
    data: "https://opendata.arcgis.com/datasets/7bf1c56a02d5413981c031a2772b9507_0.geojson",
  },
  traffic: {
    type: "geojson",
    data: "./data/RMSTRAFFIC_(Traffic_Volumes).geojson",
  },
};

export { sources };
