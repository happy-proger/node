$(document).ready(function(){
        $('#select').change(function(){
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
        });
