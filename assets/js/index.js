var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",

    spaceBetween: 30,
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const elementos = document.querySelectorAll('.swiper-slide');

// Agrega un evento mouseenter a cada elemento
elementos.forEach(elemento => {
    elemento.addEventListener('mouseenter', () => {
        // Recorre todos los elementos y cambia el color de fondo
        elementos.forEach(el => {
            if (el !== elemento) {
                el.classList.remove("select")
                el.classList.add("not-select")
            }

        });
    });


    elemento.addEventListener('mouseleave', () => {
        elementos.forEach(el => {
            el.classList.remove("not-select")
            el.classList.add("select")
        });
    });
});


const bars = document.getElementById('bars')
const navSecond = document.getElementById('nav-second')
const navFirst = document.getElementById('nav-first')

bars.onclick = function(){
    navSecond.classList.toggle('open')
    navFirst.classList.toggle('open-1')
}