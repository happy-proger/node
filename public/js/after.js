$(document).ready(function(){

    function nextPage(){

        $('#select option:selected').next('option').attr('selected', 'selected');
        $("#select").change();

    }
    function prevPage(){

        $('#select option:selected').prev('option').attr('selected', 'selected');
        $('#select').change();
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

    $('#next').bind('click' , nextPage);
    $('#prev').bind('click' , prevPage);
    $('#logout').click(function (){
        window.location = '/logout';
    })

});
