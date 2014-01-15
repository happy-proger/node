/**
 * Created by Admin on 13.01.14.
 */
$(document).ready(function() {

    $('#select_role').change(function(){
//        alert('this.val(): ' + $(this).val());
        // alert ("1");
        var role = $('#select_role').val();
        console.log('val: ' +  role);
        var select = $(this);
        $('#Form').fadeOut("slow",  function () {
//            $('#Form').fadeIn();
            var page= $(this);
            $.ajax({
                url: '/add',
                type: "POST",
                data: {role: role},
                dataType: 'html',
                complete: function (data) {
//                    alert(data);
                    console.log(data);
//                    var json = JSON.parse(data.responseText);
//                    alert ( 'response' +data.responseText);
                    $('#Form').html(data.responseText);
                    $('#Form').fadeIn();
                }})
        })
    });

    $('#select_role').trigger('change')
});