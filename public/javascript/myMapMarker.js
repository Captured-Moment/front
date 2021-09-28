// 마커가 표시될 위치입니다
// *** 유저가 올린 게시글 위치 받아오기

var positions = [
    {
        title: '이태원',
        address: '서울특별시 ㅇㅇ로 nn',
        latlng: new kakao.maps.LatLng(37.5348667934032, 126.99458761280985)
    },
    {
        title: '이태원',
        address: '서울특별시 ㅇㅇ로 nn',
        latlng: new kakao.maps.LatLng(37.5348667934032, 126.99458761280985)
    }
]
for (i in positions) {
    var marker = new kakao.maps.Marker({
        map: map, //마커를 표시할 지도 #my-map
        position: positions[i].latlng,
        title: positions[i].title
    });
}
// 마커가 지도 위에 표시되도록 설정합니다
// marker.setMap(map);