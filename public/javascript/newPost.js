//1. 사진 업로드
// 1-1. 사진 미리보기
var loadFile = function (event) {
    var output = document.getElementById('preview');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src) // free memory
    }
};
// 1-2. 사진 업로드 파일명 표출
$(document).ready(function () {
    var fileTarget = $('.filebox .upload-hidden');
    fileTarget.on('change', function () {
        // 값이 변경되면 
        if (window.FileReader) { // modern browser 
            var filename = $(this)[0].files[0].name;
        } else { // old IE 
            var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
        }

        // 추출한 파일명 삽입 
        $(this).siblings('.upload-name').val(filename);
    });
});
//2. 주소표출 (좌표값=>주소로 변환하여 표출)
var geocoder = new kakao.maps.services.Geocoder();

var coord = new kakao.maps.LatLng(37.54679397126236, 126.96469159786623);
var callback = function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
        const element = document.getElementById('spot-addr');
        element.textContent = result[0].address.address_name;
    }
};

geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);

//3. 해시태그 리스트로 선택하여 추가하기
const items = document.querySelector('.hashtags');
const input = document.querySelector('#hashtag');
function addTag() {
    const text = input.value;
    const tag_cnt = document.getElementsByClassName('item');
    const tag_length = tag_cnt.length;

    let overlap = false;
    function checkOverlap() {
        for (i = 0; i < tag_length; i++) {
            if (tag_cnt[i].title === text) {
                overlap = true;
                break;
            } else {
                overlap = false;
            }
        }
    }
    checkOverlap();

    if (text !== '' && tag_length < 3 && overlap === false) {
        const item = createItem(text);
        items.appendChild(item);
    } else if (tag_cnt.length >= 3) {
        alert("해시태그는 최대 3개까지 입력가능합니다.");
    } else if (overlap === true) {
        alert("이미 추가한 해시태그입니다.");
    }
}

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item_row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');
    item.setAttribute('title', `${text}`);

    const name = document.createElement('span');
    name.setAttribute('class', 'item_name');
    name.innerText = text;
    console.log(text);

    const deleteBtn = document.createElement('div');
    deleteBtn.setAttribute('id', 'break-btn-pink');
    // deleteBtn.innerHTML = '<li id="break-btn-pink"></li>';
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    });

    item.appendChild(name);
    item.appendChild(deleteBtn);
    itemRow.appendChild(item);

    return itemRow;
}

// 4.사진 설명 입력칸 > 글자수 표시 및 제한
$(document).ready(function () {
    $('#exp-box').on('keyup', function () {
        $('#text-cnt').html("(" + $(this).val().length + " / 140)");
        if ($(this).val().length > 140) {
            $(this).val($(this).val().substring(0, 140));
            $('#text-cnt').html("(140 / 140)");
        }
    });
});


