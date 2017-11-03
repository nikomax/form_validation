function error(input, message) {
    input.parent().find('.errorBox').remove();
    input.addClass('error');
    input.parent().append(`<div class="errorBox">${message}</div>`);
}

function removeError(input) {
    input.removeClass('error');
    input.parent().find('.errorBox').remove();
}

function validName(form) {
    var name = form.find('.form__item_name').find('input');
    if ($(name).val() == 0) {
        error($(name), 'Empty field');
    } else {
        removeError($(name));
    }
}

function validPhone(form) {
    var phonePattern = /[0-9]{10}/;
    var phone = form.find('.form__item_phone').find('input');
    if ($(phone).val() == 0) {
        error($(phone), 'Empty field');
    } else if (!phonePattern.test($(phone).val())) {
        error($(phone), 'Wrong value (10 numbers)');
    } else {
        removeError($(phone));
    }
}

function validEmail(form) {
    var emailPattern = /[0-9a-zA-Z]+@[0-9a-zA-Z^.]+\.[a-zA-Z]{2,4}/;
    var email = form.find('.form__item_email').find('input');
    if ($(email).val() == 0) {
        error($(email), 'Empty field');
    } else if (!emailPattern.test($(email).val())) {
        error($(email), 'Wrong value (example@examle.com)');
    } else {
        removeError($(email));
    }
}

function validPassword(form) {
    var passwordPattern = /[A-Za-z0-9]{6,}/;
    var password = form.find('.form__item_password').find('input');
    if ($(password).val() == 0) {
        error($(password), 'Empty field');
    } else if (!passwordPattern.test($(password).val())) {
        error($(password), 'Wrong value (min 6 charts, only letters and numbers)');
    } else {
        removeError($(password));
    }
}

function formValidation(form) {
    validName(form);
    validEmail(form);
    validPassword(form);
    validPhone(form);
    if (!form.find('.form__item').find('input').hasClass('error')) {
        alert('Form send');
    }
}

$('.form').on('submit', function (event) {
    event.preventDefault();
    formValidation($(this));
});