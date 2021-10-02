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
//인사말 입력 글자수 계산 & 100자 제한
$(document).ready(function () {
    $('#exp-box').on('keyup', function () {
        $('#text-cnt').html("(" + $(this).val().length + " / 100)");
        if ($(this).val().length > 100) {
            $(this).val($(this).val().substring(0, 100));
            $('#text-cnt').html("(100 / 100)");
        }
    });
});

//이름 받아오기
// let myname = document.querySelector("name");
// function getName()