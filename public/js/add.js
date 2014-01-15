/**
 * Created by Admin on 14.01.14.
 */
$(function () {
//    alert ('ya add.js');
    $.fn.serializeObject = function()
    {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
    $('#submit').on('click', function() {
//        alert('ya submit');
        var form = $('#add');
        var data = {"username":$('#username').val(), "password": $('#pass').val() , "role": $('#role').val(), "new": $('#new').val()}
//        var data = form.serializeObject();
//        console.log('data: ' + data);
//        alert ('data:' + data);
//        alert ('raw form: ' + JSON.stringify($('#add').serializeArray()));
//        alert ('ajax start: ' + JSON.stringify(data));
        $.ajax({
            url: '/add',
            type: 'POST',
            data: JSON.stringify(data)
            , contentType: 'application/json',
            success: function(data) {
                console.log('success');
                console.log(data);
                if (data.hasOwnProperty('err')){
                    $('p#existence').html(data.err);
                }else if (data.hasOwnProperty('success')){
                    $('p#existence').html("successfully added a user");
                }
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
        }) //.done(function (data) {alert(JSON.stringify(data))});
    });
});