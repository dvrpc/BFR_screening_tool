const make_popup = (e, message, map) => {
  let popup = new mapboxgl.Popup({
    closeButton: true,
    className: "popup-style",
  });

  popup.setLngLat(e.lngLat).setHTML(message).addTo(map);
};
export { make_popup };
