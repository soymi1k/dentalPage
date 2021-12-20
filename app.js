var map = new naver.maps.Map("map", {
  center: new naver.maps.LatLng(37.4816620985679, 126.95323042623738),
  zoom: 17,
});

var marker = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.4816620985679, 126.95323042623738),
  map: map,
});
