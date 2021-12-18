$('form').on('submit', function(e) {
    e.preventDefault();

    let formData = new FormData($(this)[0]);

    console.log(1);
    $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        data: formData,
        contentType: false,
        cache: false,
        processData: false,

        success(data) {

            let obj = $.parseJSON(data);
            console.log(obj);
        }

    });

});