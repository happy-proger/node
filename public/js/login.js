/**
 * Created by Admin on 07.02.14.
 */
$(function () {
    function nextPage(){

        $('#select option:selected').next('option').attr('selected', 'selected');
        $("#select").change();

    }
    $('#register').bind('click', nextPage);
})
