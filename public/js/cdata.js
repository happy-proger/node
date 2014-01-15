/**
 * Created by Admin on 10.01.14.
 */
$('#Search').click(function () {
    var query = $('#query').valueOf();
    $.ajax({
        url: '/Products/Search',
        type: "POST",
        data: query,
        dataType: 'application/json; charset=utf-8',
        success: function (data) {
            alert(data);
            for (var x = 0; x < data.length; x++) {
                content = data[x].Id;
                content += "<br>";
                content += data[x].Name;
                content += "<br>";
                $(content).appendTo("#ProductList");
                // updateListing(data[x]);
            }
        }
    });
});