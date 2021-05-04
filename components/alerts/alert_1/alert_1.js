'strict mode';

let alertIntervalObject;

const alert = document.querySelector('.alert');

const alertIcon = document.querySelector('.alert__icon i');

const alertTitle = document.querySelector('.alert__title');

const alertMessage = document.querySelector('.alert__message');

const alertClose = document.querySelector('.alert__close');


function showAlert(type, title, message) {

    alert.classList.add('alert--show');

    alert.classList.add('alert--' + type);

    alertIcon.classList.add(getAlertIcon(type));

    alertTitle.textContent = title;

    alertMessage.textContent = message;

    alertIntervalObject = setTimeout(function () {
        clearAlertClasses();
    }, 5000);
}

function closeAlert() {
    clearAlertClasses();
}

alertClose.addEventListener('click', () => {
    clearAlertClasses();
});

function getAlertIcon(type) {

    switch (type) {
        case "success": return "fa-check"; break;
        case "danger": return "fa-times"; break;
        case "info": return "fa-exclamation"; break;
        case "warning": return "exclamation-triangle"; break;
        default: return "fa-exclamation"; break;
    }
}

function clearAlertClasses() {

    clearInterval(alertIntervalObject);

    alert.classList.remove('alert--show');

}
