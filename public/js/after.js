$(document).ready(function(){
    function renderForm(json){
        var html=""

    }
    $('#select').change(function(){
//        alert('this.val(): ' + $(this).val());
        // alert ("1");
        var val = $(this).val();
        var select = $(this);
        $('#myPage').fadeOut("slow",  function () {
            var page= $(this);
            $(this).load('http://' + location.host + select.val(), function () {
                page.fadeIn();
            })
        });
    });
    var opt = 'Login';
    $('#select').trigger('change');
});
