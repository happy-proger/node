/**
 * Created by Admin on 10.01.14.
 */
$(document).ready(function(){
//    $("#uploadForm").validate();
    $('#upload').click( function () {
        $.ajax({
            url: '/upload',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'multipart',
            success: function(data) {
                console.log('success');
                console.log(data);
                if (data.hasOwnProperty('err')){
                    $('p#existence').html(data.err);
                }else if (data.hasOwnProperty('success')){
                    $('p#existence').html("successfully added a user");
                }
                prevPage();
//                alert ('success');
//            $('form-alert').slideUp();
//            $('#form-success').html(responseText).slideDown('slow');
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
});