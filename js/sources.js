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
  lts: {
    type: "geojson",
    data: "https://opendata.arcgis.com/datasets/b0497f204cfc41b48fdd536da9b34ffe_0.geojson",
  },
  circuit: {
    type: "geojson",
    data: "https://opendata.arcgis.com/datasets/1bc286c5bbd14cfca7bedbacc1fafb94_0.geojson",
  },
  rail_stops: {
    type: "geojson",
    data: "https://opendata.arcgis.com/datasets/7bf1c56a02d5413981c031a2772b9507_0.geojson",
  },
};

export { sources };
