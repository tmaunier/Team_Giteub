var activeimage = $('#vehicle').attr("src");


$('#feel-the-wave').wavify({
    height: 40,
    bones: 9,
    amplitude: 15,
    color: '#ffcd56',
    speed: .45
});

$('#feel-the-wave-two').wavify({
    height: 40,
    bones: 8,
    amplitude: 18,
    color: '#fbc33f',
    speed: .25
});

$('#feel-the-wave-three').wavify({
    height: 38,
    bones: 7,
    amplitude: 20,
    color: '#ffe18b',
    speed: .35
});

$(document).ready(function () {
    $("#personnage1").show();
    $("#personnage2").show();
    $('#past').on("click", function () {
        var activeimage = $('#vehicle').attr("src");
        $("#background").css('background-image', 'url(img/past.gif)');
        $("#background").css('margin-top', '0px');
        $("#personnage1").attr("src", "img/catcute.gif");
        $("#personnage2").attr("src", "img/dog.gif");
        $("#vehicle").attr("src", "img/knight.gif");

        $('#vehicle').removeClass('vehicle3');
        $('#vehicle').removeClass('vehicle2');
        $('#vehicle').addClass('vehicle1');

        $("#personnage3").hide();
        $("#personnage4").hide();
        $("#personnage1").show();
        $("#personnage2").show();
        $("#personnage5").hide();
        $("#personnage6").hide();

        $('#vehicle').css({
            bottom: 16 + "%",

        });
    });

    $('#now').on("click", function () {
        var activeimage = $('#vehicle').attr("src");
        $("#background").css('background-image', 'url(img/now.gif)');
        $("#background").css('margin-top', '-35px');
        $("#vehicle").attr("src", "img/delorean.png");

        $("#personnage3").hide();
        $("#personnage4").hide();
        $("#personnage5").show();
        $("#personnage6").show();
        $("#personnage1").hide();
        $("#personnage2").hide();



        $('#vehicle').removeClass('vehicle3');
        $('#vehicle').removeClass('vehicle1');
        $('#vehicle').addClass('vehicle2');


        $('#vehicle').css({
            bottom: 7 + "%",
            right: 150 + "px",
        });

    });

    $('#futur').on("click", function () {
        var activeimage = $('#vehicle').attr("src");
        $("#background").css('background-image', 'url(img/futur2.gif)');
        $("#background").css('margin-top', '0px');
        $("#vehicle").attr("src", "img/monkey.gif");
        $("#personnage1").hide();
        $("#personnage2").hide();
        $("#personnage5").hide();
        $("#personnage6").hide();
        $("#personnage3").show();
        $("#personnage4").show();

        $('#vehicle').removeClass('vehicle2');
        $('#vehicle').removeClass('vehicle1');
        $('#vehicle').addClass('vehicle3');
    });
});




$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var activeimage = $('#vehicle').attr("src");
    top = scrollTop;

    $('#alcool').css({
        top: $(window).scrollTop() * 0.2 + "px"
    });
    $('#beerlevel').css({
        bottom: 111 - $(window).scrollTop() * 0.2 + "px"
    });
    $('#vehicle').css({
        left: $(window).scrollTop() * 1.5 + "px"
    });

    console.log(activeimage)
    if ($(window).scrollTop() >= ($(document).height() - $(window).height())) {
        $('#personnage1').css({
            bottom: 232 - $(window).scrollTop() * 0.9 + "px",
            right: 14 - $(window).scrollTop() * 0.02 + "%",
            transform: "rotate(" + 90 + "deg)"
        });
        $('#personnage2').css({
            bottom: 232 + $(window).scrollTop() * 1.5 + "px",
            right: 19 - $(window).scrollTop() * 0.02 + "%",
            transform: "rotate(" + 90 + "deg)"
        });
    }
    if ($(window).scrollTop() >= ($(document).height() - $(window).height()) - 150) {

        $('#personnage3').css({
            bottom: 6 + $(window).scrollTop() * 0.009 + "%",
            right: 24 - $(window).scrollTop() * 0.05 + "%",
            transform: "rotate(" + 45 + "deg)"
        });
        $('#personnage4').css({
            bottom: -11 + $(window).scrollTop() * 0.1 + "%",
            right: 15 - $(window).scrollTop() * 0.04 + "%",
            transform: "rotate(" + 90 + "deg)"
        });
    }

    if ($(window).scrollTop() >= ($(document).height() - $(window).height()) - 150) {


        $('#personnage6').css({
            bottom: -11 + $(window).scrollTop() * 0.1 + "%",
            right: 15 - $(window).scrollTop() * 0.04 + "%",
            transform: "rotate(" + 90 + "deg)"
        });
    }



    else {
        $('#personnage1').css({
            bottom: 232 + "px",
            right: 14 + "%",
            transform: "rotate(0)"

        });
        $('#personnage2').css({
            bottom: 232 + "px",
            right: 19 + "%",
            transform: "rotate(0)"

        });

        $('#personnage3').css({
            bottom: 6 + "%",
            right: 24 + "%",
            transform: "rotate(0)"

        });
        $('#personnage4').css({
            bottom: -11 + "%",
            right: 15 + "%",
            transform: "rotate(0)"

        });

        $('#personnage6').css({
            bottom: 7 + "%",
            right: 15 + "%",
            transform: "rotate(0)"

        });


    }

    if (activeimage == "img/monkey.gif") {
        $('#vehicle').css({
            bottom: 5 - $(window).scrollTop() * 0.02 + "%",
            right: 150 - $(window).scrollTop() * 0.2 + "px",
        });
    }

})



