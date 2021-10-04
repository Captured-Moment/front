//#my-map 마이페이지에 지도 생성하기
var mapContainer = document.getElementById('my-map'),
    mapOption = {
        center: new kakao.maps.LatLng(37.52937249581941, 126.93267631786996),
        level: 9
    };
var map = new kakao.maps.Map(mapContainer, mapOption);

// 마커가 표시될 위치입니다
// *** 유저가 올린 게시글 위치 받아오기

var positions = [
    {
        title: '숙명여대',
        address: '서울특별시 용산구 청파동',
        latlng: new kakao.maps.LatLng(37.54675143914647, 126.96471305553834)
    },
    {
        title: '서울식물원',
        address: '서울특별시 강서구 마곡동',
        latlng: new kakao.maps.LatLng(37.56938884525118, 126.83538882643076)
    },
    {
        title: '여의도 한강공원',
        address: '서울특별시 영등포구 여의도동',
        latlng: new kakao.maps.LatLng(37.52937249581941, 126.93267631786996)
    }
]

var markers = []
// var iwContent = []
for (var i = 0; i < positions.length; i++) {
    markers[i] = new kakao.maps.Marker({
        map: map, //마커를 표시할 지도 #my-map
        position: positions[i].latlng,
        title: positions[i].title,
        clickable: true
    });
}
// 마커가 지도 위에 표시되도록 설정합니다
// marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);

var iwContent = [];
for (var i = 0; i < positions.length; i++) {
    iwContent[i] = `<div style="padding:5px;" onclick="location.href='/mypost/mypost'">${positions[i].title}</div>`
    console.log(iwContent[i]);
}

for (var i = 0; i < positions.length; i++) {
    const marker = markers[i];
    const IW = new kakao.maps.InfoWindow(
        {
            content: iwContent[i],
            removable: true
        });
    kakao.maps.event.addListener(marker, 'click', function () {
        // 마커 위에 인포윈도우를 표시합니다
        IW.open(map, marker);
    });

}



const myPostBtn = document.querySelector('#post-list-btn')
const myMapBtn = document.querySelector('#my-map-btn')
const myPostList = document.querySelector('.timeline-tab')
const myMap = document.querySelector('.my-map-cont')

myPostBtn.addEventListener('click', () => {
    if (myPostList.className === 'timeline-tab') {
        myPostList.classList.toggle('active');
        myMap.classList.toggle('active');
    } else { location.href = "#"; }
})
myMapBtn.addEventListener('click', () => {
    if (myMap.className === 'my-map-cont') {
        myPostList.classList.toggle('active');
        myMap.classList.toggle('active');
        map.relayout();
        map.setCenter(mapOption.center);
    } else { location.href = "#"; }
})