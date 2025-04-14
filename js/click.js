const make_popup_message = (featurelist, lat, lng) => {
  // Review every feature that was clicked on, and add a section
  // to the popup message for each one, split by a horizontal rule tag
  // console.log(lat);
  let messages = [];

  // Use different popup templates depending on the source layer,
  // in order to account for slightly different columns and names
  featurelist.forEach((feature) => {
    console.log(feature.layer);
    if (feature.layer.source == "plan") {
      let msg = `
          <h4>${feature.properties["Loc Road Name RMS"]} / SR ${feature.properties.sr}</h4>
          <p>Planned Year: ${feature.properties["Calendar year"]}<br/>
          From: ${feature.properties["Intersection From"]}<br/>
          To: ${feature.properties["Intersection To"]}<br/>
          Municipalities: ${feature.properties["Municipality Name1"]}<br/>
          <a href="https://maps.google.com/maps?q=&amp;layer=c&amp;cbll=${lat},${lng}" rel="nofollow ugc" target="_blank">Open Google Streetview</a>
          </p>
          `;
      if (messages.indexOf(msg) == -1) {
        messages.push(msg);
      }
    } else if (feature.layer.source == "circuit") {
      let msg = `
        <h4>Trail: ${feature.properties["main_trail"]}</h4>
        <p>Status: ${feature.properties.circuit}</p>
        `;
      if (messages.indexOf(msg) == -1) {
        messages.push(msg);
      }
    } else if (feature.layer.source == "traffic_counts") {
      let msg = `
        <p>Road: ${feature.properties["road"]}</br>
        Count Number: ${feature.properties["recordnum"]}</br>
        Year: ${feature.properties["setyear"]}</br>
        Count Type: ${feature.properties["type"]}</br>
        AADT: ${feature.properties["aadt"]}
        </p>`;
      if (messages.indexOf(msg) == -1) {
        messages.push(msg);
      }
    } else if (feature.layer.source == "bike_counts") {
      let msg = `
          <p>Road: ${feature.properties["road"]}</br>
          Count Number: ${feature.properties["recordnum"]}</br>
          Year: ${feature.properties["setyear"]}</br>
          Facility Type: ${feature.properties["bikepedfacility"]}</br>
          AADB: ${feature.properties["aadb"]}
          </p>`;
      if (messages.indexOf(msg) == -1) {
        messages.push(msg);
      }
    } else if (feature.layer.source == "rail_stops") {
      let msg = `
            <p>Station: ${feature.properties["station"]}</br>
            Line: ${feature.properties["line"]}</br>
            Service Type: ${feature.properties["type"]}</br>
            Operator: ${feature.properties["operator"]}
            </p>`;
      if (messages.indexOf(msg) == -1) {
        messages.push(msg);
      }
    } else if (feature.layer.id == "lts") {
      let msg = `
              <p>Lanes: ${feature.properties["totnumla~1"]}</br>
              Speed: ${feature.properties["vcur_prt~3"]}</br>
              Slope: ${feature.properties["rise_run"]}</br>
              </p>`;
      if (messages.indexOf(msg) == -1) {
        messages.push(msg);
      }
      // } else if (feature.layer.id == "bike_fac") {
      //   let msg = `
      //          <p>
      //          Bicycle Facility: ${feature.properties["bike_fac~2"]}
      //          </p>`;
      //   if (messages.indexOf(msg) == -1) {
      //     messages.push(msg);
      //   }
    } else if (feature.layer.source == "traffic") {
      let msg = `
             <p>
             AADT: ${feature.properties["CUR_AADT"]}</br>
             Truck Percent: ${feature.properties["TRK_PCT"]}%</br>
             Truck Volume: ${feature.properties["ADTT_CUR"]}
             </p>`;
      if (messages.indexOf(msg) == -1) {
        messages.push(msg);
      }
    } else if (feature.layer.source == "septa_bus") {
      let msg = `
             <p>
             Line: ${feature.properties["LineAbbr"]}</br>
             </p>`;
      if (messages.indexOf(msg) == -1) {
        messages.push(msg);
      }
    } else if (feature.layer.source == "road_diet") {
      let msg = `
             <p>
             St. Rt. No: ${feature.properties["st_rt_no"]}</br>
             VPHPD: ${feature.properties["vphpd"]}
             </p>`;
      if (messages.indexOf(msg) == -1) {
        messages.push(msg);
      }
    } else if (feature.layer.source == "rhin") {
      let msg = `
             <p>
             Crash Count: ${feature.properties["crashcount"]}</br>
             Total Killed: ${feature.properties["total_killed"]}</br>
             Total Major Injury: ${feature.properties["total_maj_inj"]}</br>
             </p>`;
      if (messages.indexOf(msg) == -1) {
        messages.push(msg);
      }
    } else if (feature.layer.source == "inrix") {
      let msg = `
             <p>
             AM PTI: ${feature.properties["ptiwkd0610"]}</br>
             PM PTI: ${feature.properties["ptiwkd15019"]}</br>
             PTI Weekday Overall: ${feature.properties["ptiwkd"]}</br>
             </p>`;
      if (messages.indexOf(msg) == -1) {
        messages.push(msg);
      }
    }
  });

  return messages.join("<hr>");
};

export { make_popup_message };
