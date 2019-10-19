const navIconEl = document.getElementById('menu-icon');
navIconEl.addEventListener('click', openMenu);

function openMenu(e) {
    e.target.classList.toggle("menu-open");
}

document.body.addEventListener('click', closeMenu);

function closeMenu(e) {
    if(e.target !== navIconEl) {
        navIconEl.classList.remove("menu-open");
    }
}