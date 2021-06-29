if($('div').hasClass('active'))
                $('div.owl-item').css('opacity', '1')
             else $('div.owl-item').css('opacity', '0.7');
$('.owl-carousel').owlCarousel({
    margin: 20,
    stagePadding: 250,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1500: {
            items:2
        },
        1576:{
            items:2
        },
        1600:{
            items:3
        }
    }
})