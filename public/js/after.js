$(document).ready(function(){
        $('#select').change(function(){
        // alert ("1");
        var val = $(this).val();
        var select = $(this);
            $('#myPage').fadeOut("slow",  function () {
                var page= $(this);
                $(this).load('http://192.168.1.55:3000' + select.val(), function () {
                    page.fadeIn();
                })
                });
            });
        });
