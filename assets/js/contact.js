// for validating the forms
(function () {
    'use strict';
    window.addEventListener(
        'load', function () {
            var formObject = $('#contact-form');
            var form = formObject[0];
            if (form != undefined) {
                form.addEventListener(
                    'submit',
                    function (event) {
                        var submitBtn = $('button[name="submit"]')[0];
                        submitBtn.disabled = true;
                        submitBtn.innerHTML = 'Sending...';
                        if (form.checkValidity() === false || form.address.value.length) {
                            submitBtn.disabled = false;
                            submitBtn.innerHTML = 'Send';
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        else {
                            var url = form.action;
                            var redirectSuccessUrl = '/thanks';
                            var redirectFailedUrl = '/failed';
                            var xhr = $.ajax({
                                url: url,
                                method: 'POST',
                                dataType: 'json',
                                data: formObject.serialize(),
                                success: function (data) {
                                    submitBtn.disabled = false;
                                    submitBtn.innerHTML = 'Send';
                                    $(location).attr('href', redirectSuccessUrl);
                                },
                                error: function (data) {
                                    submitBtn.disabled = false;
                                    submitBtn.innerHTML = 'Send';
                                    $(location).attr('href', redirectFailedUrl);
                                },
                            });
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    },
                    false
                );
            }
        },
        false
    );
})();
