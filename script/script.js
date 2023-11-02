
$(document).ready(function () {


    //Nav Bar  and Scroll top top

    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            $("header").addClass('navbar-sticky')
            $("header").addClass('topbar')

        }
        else {
            $("header").removeClass('navbar-sticky')
            $("header").removeClass('topbar')

        }
    })

    // Scroll Top

    $(window).scroll(function () {
        if ($(this).scrollTop() > 180) {
            $("#scroll-top").css("display", "block");
        } else {
            $("#scroll-top").css("display", "none");
        }
    });

    //Scroll Top on click

    $("#scroll-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });



    // Hero section

    var typed = new Typed('#element', {
        strings: ['Web Designer', 'Wordpress Developer', 'Graphics Designer', 'UI / UX Designer'],
        typeSpeed: 50,
        loop: true
    });



    // Counter

    var animationStarted = false;

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 320 && !animationStarted) {
            animationStarted = true;
            $('.counter-count').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });


    // OWL Carousel


    // Projects

    $('.my-project').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<i class="bi bi-caret-left-fill"></i>', '<i class="bi bi-caret-right-fill"></i>'],
        autoplay: true,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 1,

            },
            767: {
                items: 2,

            },
            1000: {
                items: 3
            }
        }
    })

    //Blogs

    $('.my-blogs').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<i class="bi bi-caret-left-fill"></i>', '<i class="bi bi-caret-right-fill"></i>'],
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1,


            },
            767: {
                items: 2,

            },
            1200: {
                items: 3
            }
        }
    })


    // AOS
    AOS.init();

});