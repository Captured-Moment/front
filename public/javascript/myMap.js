//#my-map 마이페이지에 지도 생성하기
var mapContainer = document.getElementById('my-map'),
    mapOption = {
        center: new kakao.maps.LatLng(37.58280237966771, 126.97702366269891),
        level: 5
    };
var map = new kakao.maps.Map(mapContainer, mapOption);

// 마커가 표시될 위치입니다
// *** 유저가 올린 게시글 위치 받아오기

var positions = [
    {
        title: '향원정',
        address: '서울특별시 ㅇㅇ로 nn',
        latlng: new kakao.maps.LatLng(37.58280237966771, 126.97702366269891)
    },
    {
        title: '경복궁',
        address: '서울특별시 ㅇㅇ로 nn',
        latlng: new kakao.maps.LatLng(37.57803979881764, 126.97688397522738)
    }
]

for (var i = 0; i < positions.length; i++) {
    var marker = new kakao.maps.Marker({
        map: map, //마커를 표시할 지도 #my-map
        position: positions[i].latlng,
        title: positions[i].title
    });
    // marker.setMap(map);
}


// 마커가 지도 위에 표시되도록 설정합니다
// marker.setMap(map);


// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);

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