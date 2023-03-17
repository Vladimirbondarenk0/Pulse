    $(document).ready(function () {
        $('.carusel__inner').slick({
            speed: 1200,
            variableWidth: true,
            infinite: true,
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png" alt="back"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png" alt="next"></button>',
            responsive: [{
                breakpoint: 790,
                settings: {
                    arrows: false,
                    dots: true
                }
            }]
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


        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
            $(this)
                .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
                .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });


        function toggleSlide(item) {
            $(item).each(function (i) {
                $(this).on('click', function (e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                });
            });
        }

        toggleSlide('.catalog-item__link');
        toggleSlide('.catalog-item__back');

        //modal

        $('[data-modal=consultation]').on('click', function () {
            $('.overlay, #consultation').fadeIn('slow');
        });

        $('.modal__close').on('click', function () {
            $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
        });

        $('.button__mini').each(function (i) {
            $(this).on('click', function () {
                $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
                $('.overlay, #order').fadeIn('slow');
            });
        });


        function validateForms(form) {
            $(form).validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    phone: 'required',
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    name: {
                        required: "Пожалуйста, введите свое имя",
                        minlength: jQuery.validator.format("Введите {0} символа!")
                    },
                    phone: 'Пожалуйста, введите свой номер телефона',
                    email: {
                        required: "Пожалуйста, введите свою почту",
                        email: "Неправильно введен адрес почты"
                    }
                }
            });
        }
        validateForms('#consultation-form');
        validateForms('#consultation form');
        validateForms('#order form');

        // phone Mask

        $('input[name=phone]').mask("+38 (999) 999-99-99");

        // submit form  

        $('form').submit(function (e) {
            e.preventDefault();
            if (!$(this).valid()) {
                return;
            }
            $.ajax({
                type: 'POST',
                url: 'mailer/smart.php',
                data: $(this).serialize()
            }).done(function () {
                $(this).find('input').val('');
                $('#consultation, #order').fadeOut();
                $('.overlay, #thanks').fadeIn('slow');

                $('form').trigger('reset');
            });
            return false;
        });

        // Smooth scroll and page up

        $(window).scroll(function () {
            if ($(this).scrollTop() > 1600) {
                $('.pageup').fadeIn();
            } else {
                $('.pageup').fadeOut();
            }
        });

        new WOW().init();

        // animation button

        function buttonHide1() {
            $('.button__header').on('click', function () {
                $(this).removeClass('rollIn');
                $(this).addClass('bounceOut');
            });
        }

        function buttonHide2() {
            $('.button_main').on('click', function () {
                $(this).removeClass('rollIn');
                $(this).addClass('bounceOut');
            });
        }

        const btn = $('.button__header');

        function buttonShow() {
            $('.modal__close').on('click', function () {
                if (btn.hasClass('bounceOut')) {
                    btn.removeClass('bounceOut');
                    btn.addClass('rollIn');
                }
                if ($('.button_main').hasClass('bounceOut')) {
                    $('.button_main').removeClass('bounceOut');
                    $('.button_main').addClass('rollIn');
                }
            });
        }
        buttonHide1();
        buttonHide2();
        buttonShow();

        // sneaker
        const sneaker = $('.benefits__icon_sneaker_animate');

        const sneakerMove = () => {
            const p = new Promise((resolve, reject) => {
                $('.benefits__icon_animate').hover(function () {
                    sneaker.removeClass('flipInX');
                    sneaker.addClass('fadeOutRight');
                });
                resolve();
            });
            p.then(() => {
                setInterval(() => {
                    sneaker.removeClass('fadeOutRight');
                    sneaker.addClass('flipInX');
                }, 3000);
            });
            clearTimeout();
        };
        sneakerMove();

        // cupShake

        $('.cupShake').hover(function () {
            $('.cupShake_animated').addClass('bounce');
        });



    });