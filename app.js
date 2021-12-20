var map = new naver.maps.Map("map", {
  center: new naver.maps.LatLng(37.481480203672376, 126.95321693593108),
  zoom: 18,
});

var marker = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.481480203672376, 126.95321693593108),
  map: map,
});
