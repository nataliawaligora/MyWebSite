$(document).ready(function () {
    $('#mainWeb').hide();
    $('.moveButton a').click(function () {
        $('#mainWeb').show();
        $('#intro').hide();
    })


});

$(document).ready(function () {
    $('.picture, .greetingTittle').hide();
    $('.moveButton a').mouseover(function () {
        $('.picture,.greetingTittle').show();
        $('#name').hide();
    });
    $('.moveButton a').mouseout(function () {
        $('.picture, .greetingTittle').hide();
        $('#name').show();

    })
});

$(document).ready(function () {
    $('.notLighted').click(function () {
        $('.menu .enlight').removeClass('enlight');
        $(this).addClass('enlight');

    })
});

// $(document).ready(function () {
//     $('.uniPicture').hide();
//     $('#floorball').hide();
//
//
//     $('.linkTofloorball').click(function () {
//         console.log('click pokazujacy');
//         $('#floorball').show();
//         $('.uniPicture').show();
//         $('.linkTofloorball').addClass('hideButton');
//         $('.linkTofloorball, .hideButton').removeClass('linkTofloorball');
//
//         $('.hideButton').click(function () {
//             $('#floorball').hide();
//             $('.uniPicture').hide();
//             $('.hideButton').addClass('linkTofloorball');
//             $('.hideButton, .linkTofloorball').removeClass('hideButton');
//             $(this).off();
//         });
//     });
//
// });

$(document).ready(function () {
    $('.uniPicture').hide();
    $('#floorball').hide();

    $('.linkTofloorball').click(function () {
        $('.uniPicture').toggle();
        $('#floorball').toggle();
    });
});


