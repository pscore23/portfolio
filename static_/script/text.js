var object = {
    loop: false,
    minDisplayTime: 2000,
    initialDelay: 500,
    autoStart: true,
    in: {
        effect: 'fadeInUp',
        delayScale: 1,
        delay: 100,
        sync: false,
        shuffle: true,
    },
    out: {
    }
}

var element;

function randomInit1() {
    element = $(".animation");
    $(element[0]).textillate(object);
}

function randomAnimeControl() {
    var elemPos = $(element[1]).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scroll >= elemPos - windowHeight) {
        $(element[1]).textillate(object);
    }
}

$(window).on('load', function () {
    randomInit1();
    randomAnimeControl();
});

