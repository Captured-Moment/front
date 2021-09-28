//#my-map 마이페이지에 지도 생성하기
var mapContainer = document.getElementById('my-map'),
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };
var map = new kakao.maps.Map(mapContainer, mapOption);


// 마커가 표시될 위치입니다
// *** 수정하기 => 마이페이지 유저포스트에 해당하는 위치 리스트 배열로 파싱
var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);


// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

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
    } else { location.href = "#"; }
})