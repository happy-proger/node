/**
 * Created by Admin on 04.02.14.
 */
//AJAX call to create a menu with roles list.
$(function (){
    var data = {list : ['roles']}
    $.ajax({
        url: '/getvars',
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function(data) {
            console.log('success');
            console.log(data);
            //fill the 'upr' list
        },
        complete: function(data) {
//                alert ('complete'+ data);
            console.log('complete');
            console.log(data);
//                inputs.attr('disabled', 'true');
//                $('#submit').removeClass('loading').val('REGISTRATION COMPLETE');
        },
        error: function(err) {
            console.log('err:');
            console.log(err);
//                alert ('err: ' + err.statusCode() + " " + err.statusText);
        }
    })
})