//HAMBURGER MENU
const btn = document.getElementById('btn-menu');
const linksContainer = document.querySelector('nav ul');

btn.addEventListener('click', () => {
    linksContainer.classList.toggle('active-menu');
})

//PANELS
const panels = document.querySelectorAll('.panel');

//querySelectorAll returns a nodeList. So I can iterate each element with forEach
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        panel.classList.toggle('active');
    })
})

//SLIDESHOW
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 4000;
let slideInterval;

const nextSlide = () => {
    //select current class
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for next slide
    if (current.nextElementSibling) {
        //add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        //add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => {
        current.classList.remove('current');
    })
}

const prevSlide = () => {
    //select current class
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for previous slide
    if (current.previousElementSibling) {
        //add current to next sibling
        current.previousElementSibling.classList.add('current');
    } else {
        //add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => {
        current.classList.remove('current');
    })
}

//button events 
next.addEventListener('click', () => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})

prev.addEventListener('click', () => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})

//auto slide
if (auto) {
    //run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}

