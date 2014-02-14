/**
 * Created by Admin on 14.01.14.
 */
$(document)
    .on('change', '.btn-file :file', function() {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
        var files = event.target.files;
    });

$(function () {
    function uploadFiles(event)
    {
        event.stopPropagation(); // Stop stuff happening
        event.preventDefault(); // Totally stop stuff happening

        // START A LOADING SPINNER HERE

        // Create a formdata object and add the files
        var data = new FormData();
        $.each(files, function(key, value)
        {
            data.append(key, value);
        });

        $.ajax({
            url: '/upload',
            type: 'POST',
            data: data,
            cache: false,
            dataType: 'json',
            processData: false, // Don't process the files
            contentType: false, // Set content type to false as jQuery will tell the server its a query string request
            success: function(data, textStatus, jqXHR)
            {
                if(typeof data.error === 'undefined')
                {
                    // Success so call function to process the form
//                submitForm(event, data);
                    alert('uploaded!')
                }
                else
                {
                    // Handle errors here
                    console.log('ERRORS: ' + data.error);
                }
            },
            error: function(jqXHR, textStatus, errorThrown)
            {
                // Handle errors here
                console.log('ERRORS: ' + textStatus);
                // STOP LOADING SPINNER
            }
        });
    }
//    alert ('ya add.js');
    var files = '';
    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {

        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }
        files = event.target.files;
    });
    $( "#date_pr" ).appendDtpicker();
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
    $('#send').on('click', uploadFiles);
    $('#submit').on('click', function() {
//        alert('ya submit');
        var form = $('#add');
        var data = {
            "username":$('#username').val(),
            "password": $('#pass').val(),
            "role": $('#role').val(),
            "new": $('#new').val(),
            "name":$('#name').val(),
            "secondName":$('#secondName').val(),
            "surname":$('#surname').val(),
            "date_pr":$( "#date_pr" ).val(),
            "spys":$( "#spys" ).val()
//            "upr":$('#upr').val()
        }
        console.log(data);
//        var data = form.serializeObject();
//        console.log('data: ' + data);
//        alert (JSON.stringify(data));
//        alert ('raw form: ' + JSON.stringify($('#add').serializeArray()));
//        alert ('ajax start: ' + JSON.stringify(data));
        $.ajax({
            url: '/user',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function(data) {
                console.log('success');
                console.log(data);
                if (data.hasOwnProperty('err')){
                    $('p#existence').html(data.err);
                }else if (data.hasOwnProperty('success')){
                    $('p#existence').html("successfully modifiied a user");
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