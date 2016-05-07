
    (function () {
        $('section').on('click', function () {
            $('.paperActive:visible').hide();
            $(this).find('.paperActive').show();

        })

    });