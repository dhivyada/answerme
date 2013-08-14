$(function () {
    $(".btn.add-option").click(function () {
        var input_element = "<input type='text' name='options[]' placeholder='Option'></input>";
        $(input_element).insertBefore($('.options > :last-child')[0]);
    });
});