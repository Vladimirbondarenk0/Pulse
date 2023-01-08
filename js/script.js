$(document).ready(function () {
    $('.carusel__inner').slick({
        speed: 1200,
        variableWidth: true,
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 4000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png" alt="back"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png" alt="next"></button>',
        responsive: [{
            breakpoint: 900,
            settings: {
                arrows: false,
                dots: true
            }
        }]
    });
});



// const slider = tns({
//     container: '.carusel__inner',
//     items: 1,
//     nav: false,
//     controls: false
//   });

//   document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
//   });

//   document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
//   });