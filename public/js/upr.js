/**
 * Created by Admin on 14.01.14.
 */
$(function () {
//    alert ('ya add.js');
//    for (var i=0; i<$('#prov').length; i++){
//        if ($('#prov').options[i].value  == $('#prov_s').value)
//        {
//            $('#prov').selectedIndex=i;
//        }
//        alert ($('#prov').options[i].value);
//    }

//    alert ($('#prov').options[1].val());
//    $("#prov [value=$('#prov_s').value]").attr("selected","selected");
    function addRow(tableID) {

        var table = document.getElementById(tableID);

        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);

        var cell1 = row.insertCell(0);
        var element1 = document.createElement("input");
        element1.type = "checkbox";
        cell1.appendChild(element1);

        var cell2 = row.insertCell(1);
        cell2.innerHTML = rowCount + 1;

        var cell3 = row.insertCell(2);
        var element2 = document.createElement("input");
        element2.type = "text";
        cell3.appendChild(element2);

    }

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
    $('#add_channel').on('click', function() {
        var tr = $('#cinfo0');
        var clone = tr.clone();
        clone.find(':text').val('');
        tr.after(clone);
    });
    $('#submit').on('click', function() {
//        alert('ya submit');
        $('#cinfo0').each(function(){
            
        })
        var inet_i = $('#inet').serializeObject();
        var inet_o = [];
        for (var i=0;i<inet_i.desc.length;i++){
            inet_o.push({
                "desc":inet_i.desc[i],
                "purp":inet_i.purp[i],
                "prov":inet_i.prov[i],
                "ctype":inet_i.ctype[i],
                "dspd":inet_i.dspd[i],
                "uspd":inet_i.uspd[i],
                "cq":inet_i.cq[i]
        })
        }
        var data = $('#cinfo').serializeObject();
        data.channels = inet_o;
//        var form = $('#add');
//        var data = {
//            "name":$('#name').val(),
//            "desc":$('#desc').val(),
//            "purp":$('#purp').val(),
//            "prov":$('#prov').val(),
//            "ctype":$('#ctype').val(),
//            "dspd":$('#dspd').val(),
//            "uspd":$('#uspd').val(),
//            "cq":$('#cq').val(),
//            "MFU_color":$('#MFU_color').val(),
//            "MFU_bw":$('#MFU_bw').val(),
//            "Copier_color":$('#Copier_color').val(),
//            "Copier_bw":$('#Copier_bw').val(),
//            "Scanner_color":$('#Scanner_color').val(),
//            "Scanner_bw":$('#Scanner_bw').val()
//        }
//        alert(JSON.stringify(data));
//        var in1 = $('#in1').serializeObject();
//        alert (JSON.stringify(in1))
//        alert (JSON.stringify($('#inet').serializeObject()))
        alert (JSON.stringify(data))
//        console.log('data: ' + data);
//        alert (JSON.stringify(data));
//        alert ('raw form: ' + JSON.stringify($('#add').serializeArray()));
//        alert ('ajax start: ' + JSON.stringify(data));
        $.ajax({
            url: '/upr',
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
    $('#prov option ,#purp option ,#ctype option').each(function(){
//        alert(this.value+$(this).attr("name")+this.name)
        if (this.value  == $(this).attr("name")){
//            alert(this.value)
            $(this).attr("selected", true)
        } else {
            $(this).attr("selected", false)
        }
//        alert(this.text);
    });

});