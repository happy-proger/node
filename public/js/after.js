$(document).ready(function(){
        $('#select').change(function(){
        // alert ("1");
        var val = $(this).val();
        var select = $(this);
            $('#myPage').fadeOut("slow",  function () {
                //   alert (select.val());
                $(this).load('http://192.168.1.55:3000' + select.val()).fadeIn();
                });
            });
        });
