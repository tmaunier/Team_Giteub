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
        window.scrollTo(0,0);
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
        $("#messager").show();
        $('#vehicle').css({
            bottom: 16 + "%",
         });

         $('#maintext').text("Avant de partir pour un long trajet il est bon de vérifier l'état de votre véhicule.\n         Il est également conseillé de vérifier la fluidité du trafic.\n         La présence de travaux et les zones a risques doivent être identifiés avant de partir.\n         Si vous roulez de nuit veillez à faire des pauses régulières. Conduire fatigué c'est équivalent à vider la bière sur le côté.\n         Ces conseils sont d'autant plus importants pour les véhicules à deux roues. Nous ne sommes pas en 2442 avec des exoarmures. Pourtant un bon casque et des équipements adaptés peuvent souvent éviter le pire.");
    });

    $('#now').on("click", function () {
        window.scrollTo(0,0);
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
        $("#messager").hide();



        $('#vehicle').removeClass('vehicle3');
        $('#vehicle').removeClass('vehicle1');
        $('#vehicle').addClass('vehicle2');


        $('#vehicle').css({
            bottom: 7 + "%",
            right: 150 + "px",
        });

        $('#maintext').text("Avant de partir pour un long trajet il est bon de vérifier l'état de votre véhicule. Il est également conseillé de vérifier la fluidité du trafic. \n La présence de travaux et les zones a risques doivent être identifiés avant de partir.\nSi vous roulez de nuit veillez à faire des pauses régulières. Conduire fatigué c'est équivalent à vider la bière sur le côté ;)\n Ces conseils sont d'autant plus important pour les véhicules à deux roues. Nous ne sommes pas en 2442 avec des exoarmures. Pourtant un bon casque et des équipements adaptés peuvent souvent éviter le pire.");
    });

    $('#futur').on("click", function () {
        window.scrollTo(0,0);
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
        $("#messager").hide();
        
        $('#vehicle').removeClass('vehicle2');
        $('#vehicle').removeClass('vehicle1');
        $('#vehicle').addClass('vehicle3');


        $('#maintext').text("Ceci est un message de prévention adressé à la population par les IA civiles :\n Les androïdes, les non-humains, et les populations issues des races aliennes présentes légalement sur la planète sont également concernées.\n    Suite à la liquidation boursière d'un laboratoire de recherche illégale la semaine dernière différents animaux génétiquement modifiés sont encore rescencés aux les abords de la cité.\n Les forces de l'ordre procèdent toujours. Certains de ces spécimens sont capables de voler et de venir perturber les couloirs aériens. Prudence.");
        

    });
});




$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var activeimage = $('#vehicle').attr("src");
    top = scrollTop;


    var scrollTop = $(window).scrollTop();
    var max=$(document).height() - $(window).height()
    $("#pct").text((((scrollTop)/max)*100).toFixed(0)+"%");






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



