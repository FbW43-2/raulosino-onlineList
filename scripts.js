
$(document).on('click', '#generate', function () {
    $('#content-div').append(
        '<div class="task-div">' +
        '<div class="task-content">' +
        '<div class="d-flex task-title center">' +
        '<h3 class="task-title">' + $("#task-title").val() + '</h3>' +
        '<input type="checkbox" class="task-check">' +
        '</div>' +
        '<p class="task-description">' + $("#text-area").val() + '</p>' +
        ' </div>' +
        '<button type="button" class="btn btn-primary delete">X</button>' +
        '</div>');
    $("#task-title").val("");
    $("#text-area").val("");
});


$(document).on('click', '.delete', function () {
    $(this).parent('div').remove();
});



