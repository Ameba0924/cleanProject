window.marker = null;

function initialize_google() {
  var map;
  var latitude = $('#map_canvas').attr('data-latitude');
  var longitude = $('#map_canvas').attr('data-longitude');
  var nottingham = new google.maps.LatLng(latitude, longitude);
  var style = [
    {
        "stylers": [
            {
                "hue": "#2c3e50"
            },
            {
                "saturation": 250
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 50
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
];
  var mapOptions = {
    center: nottingham,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    backgroundColor: "#000",
    zoom: 15,
    panControl: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE
    }
  }
  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
  var mapType = new google.maps.StyledMapType(style, {
    name: "Grayscale"
  });
  map.mapTypes.set('grey', mapType);
  map.setMapTypeId('grey');
  var marker_image = 'plugins/google-map/images/marker.png';
  var pinIcon = new google.maps.MarkerImage(marker_image, null, null, null, new google.maps.Size(37, 37));
  marker = new google.maps.Marker({
    position: nottingham,
    map: map,
    icon: pinIcon,
    title: 'Shoper'
  });
}

function initialize_kakao() {
  var latitude = $('#map_canvas').attr('data-latitude');
  var longitude = $('#map_canvas').attr('data-longitude');
  var container = document.getElementById('map_canvas'); //지도를 담을 영역의 DOM 레퍼런스
  var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

  var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

  // 마커생성
  var marker = new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(latitude, longitude)
});
  marker.setMap(map); // 지도에 올린다.


  var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    clickable: true,
    content: '<div class="customOverlay"><a href="http://kko.to/kteJq9kv4L" target="_blank"><font style="font-size:0.7em; font-weight:bold">청소광</font></a></div>',
    position: new kakao.maps.LatLng(latitude, longitude),
    xAnchor: 0.5,
    yAnchor: 0,
    zIndex: 3
});

  customOverlay.setMap(map);
}

// var map = document.getElementById('map_canvas');
// if (map != null) {
//   google.maps.event.addDomListener(window, 'load', initialize);
// }

initialize_kakao();