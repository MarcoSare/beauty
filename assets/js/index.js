/* ----------- CONST AN VARIABLES ----------- */
var themeSelect = localStorage.getItem("theme");
const theme = document.getElementById('toogle-theme')
const bars = document.getElementById('bars')
const navSecond = document.getElementById('nav-second')
const navFirst = document.getElementById('nav-first')
const elements = document.querySelectorAll('.swiper-slide');

/* --------------- LOAD THEME ------------------*/
if (themeSelect !== null || themeSelect === 'light') {
    if (themeSelect === 'dark') {
        document.body.classList.add('dark-theme')
        theme.classList.remove('fa-moon')
        theme.classList.add('fa-sun')
    }
}

/* ------------- TOGGLE SIDE BAR ----------------*/
bars.onclick = function () {
    navSecond.classList.toggle('open')
    navFirst.classList.toggle('open-1')
}

/*-------------- CHANGE THEME -------------------*/
theme.onclick = function () {
    if (themeSelect !== 'dark') {
        document.body.classList.add('dark-theme')
        localStorage.setItem("theme", "dark");
        themeSelect = 'dark'
        theme.classList.remove('fa-moon')
        theme.classList.add('fa-sun')
    } else {
        document.body.classList.remove('dark-theme')
        localStorage.setItem("theme", "light");
        themeSelect = 'light'
        theme.classList.remove('fa-sun')
        theme.classList.add('fa-moon')
    }
}

/* ------------------- SWIPER -----------------*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/* ---------- EFECT BLUR ELEMENTS FROM SWIPER ---------*/
elements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        elements.forEach(el => {
            if (el !== element) {
                el.classList.remove("select")
                el.classList.add("not-select")
            }
        });
    });

    element.addEventListener('mouseleave', () => {
        elements.forEach(el => {
            el.classList.remove("not-select")
            el.classList.add("select")
        });
    });
});


/*------------------ SCROLL REVEAL ANIMATION ---------------*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`#home`)
sr.reveal(`#shop`, {delay: 500})
sr.reveal(`#pages`, {delay: 600})
sr.reveal(`#bloc`,{origin: 'left'})
sr.reveal(`#contact`,{origin: 'right'})
sr.reveal(`#footer`,{interval: 100})
