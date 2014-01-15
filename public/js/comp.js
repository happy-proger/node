/**
 * Created by Admin on 10.01.14.
 */
$(document).ready(function(){
//    alert("loaded");
    $('#selectComp').change(function(){
        var val=$(this).val()
        $('#data').fadeOut("quick",  function () {


            var data = {"FIO":val};
//            var select = $(this);
//        alert ("select changed to " + $(this).val());
////        var query = val;
            $.ajax({
                url: '/cdata',
                type: "POST",
                data: data,
                dataType: 'text; charset=utf-8',
                complete: function (data) {
//                alert('complete');
                    console.log(data);
                    var json = JSON.parse(data.responseText);
                    console.log(json);
                    var html = [],
                        item, next;
                    html.push('<ul>');
                    for (var key0 in json){
                        var json0 = json[key0];
                        html.push('<li>'+ key0 + ':' + json0);
                        console.log('Object.keys(json).length: ' + Object.keys(json).length);
                        console.log(json0);
                        if (typeof(json0)== "object") {
                            html.push('<ul>');
                            for (var key1 in json0){
                                var json1 = json0[key1];
                                html.push('<li>'+ key1 + ':' + json1);
                                if (typeof(json1)== "object") {
                                    html.push('<ul>');
                                    for (var key2 in json1){
                                        html.push('<li>'+ key1 + ':' + json1[key2]+'</li>');
                                    }
                                    html.push('</ul>');
                                }
                                html.push('</li>');
                            }
                            html.push('</ul>');
                        }
                        html.push('</li>');
                    }
                    html.push('</ul>');

//                    alert('fadeIn');

                    $('#data').html(html.join(''));
                    $('#data').fadeIn();
                },
                error: function (errMsg) {
//                alert('error');
//                console.log(errMsg);
//                console.log(errMsg.state());
//                console.log(errMsg.error());
                },
                success: function (data) {
//                $('#data').innerHTML = '<p> jj </p>'
                    alert('success');
//                for (var x = 0; x < data.length; x++) {
//                    content = data[x].Id;
//                    content += "<br>";
//                    content += data[x].Name;
//                    content += "<br>";
//                    $(content).appendTo("#ProductList");
                    // updateListing(data[x]);
                },
                failure: function(errMsg) {
                    alert(errMsg);
                }
            })
        });
    });
})

