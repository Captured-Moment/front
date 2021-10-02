var loadFile = function (event) {
    var output = document.getElementById('preview');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src) // free memory
    }
};
$(document).ready(function () {
    $('#photo-exp-box').on('keyup', function () {
        $('#text-cnt').html("(" + $(this).val().length + " / 140)");
        if ($(this).val().length > 140) {
            $(this).val($(this).val().substring(0, 140));
            $('#text-cnt').html("(140 / 140)");
        }
    });
});
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

