$(document).ready(function () {

    $('#mainWeb').hide();
    $('.moveButton a').click(function () {
        $('#mainWeb').show();
        $('#intro').hide();
    });


    $('.notLighted').click(function () {
        $('.menu .enlight').removeClass('enlight');
        $(this).addClass('enlight');
    });


    $(window).scroll(function () {
        $(".menu").addClass('darkMenuOnScroll');
    });


    $('.floorBallArticle').hide();

    $('.linkTofloorball').click(function () {
        $('.floorBallArticle').toggle();

    });


    $('.footOrienteeringArticle').hide();

    $('.linkToOrienteering').click(function () {
        $('.footOrienteeringArticle').toggle();

    });


    $('.sidenavLink').click(function () {
        closeNav();
    });
}); 

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}




