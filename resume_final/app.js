function slidesPlugin(activeSlide = 1) {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')

    for (const slide of slides) {
        slide.addEventListener('mouseover', () => {
            clearActiveClasses()
            slide.classList.add('active')
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(0)
// тут можно указать номер активного элемента

// Кнопка меню--------------------
const menuBtn = document.querySelector('.btn')
const menu = document.querySelector('.navbar')

menuBtn.addEventListener('click', () => {
 if (menu.classList.contains('shown')){
    menu.classList.remove('shown')
 } else {
    menu.classList.add('shown')
 }
 })
