// 마커가 표시될 위치입니다
// *** 수정하기 => 마이페이지 유저포스트에 해당하는 위치 리스트 배열로 파싱
// var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);


let mySpotLat = [];
let mySpotLng = [];
var myMarkerPosition = [];
for (i = 0; i < mySpotLat.length; i++) {
    myMarkerPosition = myMarkerPosition.push(new kakao.maps.LatLng(mySpotLat[i], mySpotLat[i]));
}



// 마커를 생성합니다
// var marker = new kakao.maps.Marker({
//     position: markerPosition
// });
for (i = 0; i < myMarkerPosition.length; i++) {
    var marker = new kako.maps.Marker({
        position: myMarkerPosition[i];
    })
}

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);