
const overlay = document.querySelector('.overlay');

const sidebarToggle = document.querySelector('.sidebarToggle');

const sidebarClose = document.querySelector('.sidebar__close');

sidebarToggle.addEventListener('click', () => {

    document.querySelector('.sidebar').classList.toggle('sidebar--show');
    document.querySelector('.overlay').classList.toggle('overlay--show');

});

sidebarClose.addEventListener('click', () => {

    document.querySelector('.sidebar').classList.toggle('sidebar--show');
    document.querySelector('.overlay').classList.toggle('overlay--show');


});
