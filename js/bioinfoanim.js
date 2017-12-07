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

$( document ).ready(function() {

$('#past').on("click", function () {
    $("#background").css('background-image', 'url(img/past.gif)');
    });

$('#now').on("click", function () {
    $("#background").css('background-image', 'url(img/now.gif)');
    });

$('#futur').on("click", function () {
    $("#background").css('background-image', 'url(img/futur.gif)');
    });
});
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    top = scrollTop;
    $('#alcool').css({
        top: $(window).scrollTop() * 0.2 + "px"
    });
    $('#beerlevel').css({
        bottom: 111 - $(window).scrollTop() * 0.2 + "px"
    });
})



