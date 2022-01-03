var map = new naver.maps.Map("map", {
  center: new naver.maps.LatLng(37.481480203672376, 126.95321693593108),
  // disableDoubleTapZoom: true,
  draggable: false,
  keyboardShortcuts: false,
  zoom: 18,
  zoomOrigin: new naver.maps.LatLng(37.481480203672376, 126.95321693593108),
});

var marker = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.481480203672376, 126.95321693593108),
  map: map,
});

const toggleBtn = document.querySelector(".toggleBtn");
const menu = document.querySelector(".menuBox");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
