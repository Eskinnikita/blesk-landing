
$(document).ready(function () {
    $("#toTop").hide();
    $(function toTop() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $('#toTop').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $('#offer').click(function () {
            $('#toTop').fadeOut();
        })
    });

    $(document).on('click', '#send_request', function () {
        var data = {
            type: 'request',
            name: $('#request_name').val(),
            phone: $('#request_phone').val()
        }

        if (data.name != '' || data.phone != '') {
            $.ajax({
                url: '/ajax/send.php',
                data: data,
                type: 'POST',
                success: function (response) {
                    var response = $.parseJSON(response);
                    if (response.success == '1') {
                        if (data['type'] == 'request') {
                            $('#offerModal').modal('toggle');
                            alert('Мы Вам перезвоним в ближайшее время.');
                        }
                    }
                }
            })
        }
        else {
            alert('Заполните форму!')
        }

    });
});
