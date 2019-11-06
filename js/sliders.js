window.addEventListener("load", function () {
  $(".carousel").addClass("loadSlider");
});

jQuery(function () {
  /*home*/
    let primaryScreenCarousel = document.querySelector('.primary-screen-carousel') !== null;
    var mainCarousel;
    if (primaryScreenCarousel) {
        mainCarousel = front.newSlider('.primary-screen-carousel', {
            cellAlign: 'center',
            contain: false,
            pageDots: true,
            // autoPlay: true,
            // autoPlay: 5000,
            verticalCells: true,
            prevNextButtons: false
        });
    }

    let productSliders = document.querySelectorAll('.products-carousel');
        for ( var i=0, len = productSliders.length; i < len; i++ ) {
        let productSlider = productSliders[i];
        new Flickity( productSlider, {
            cellSelector: '.products-carousel__item',
            cellAlign: 'left',
            contain: true,
            prevNextButtons: true,
            pageDots: false,
            wrapAround: true
        });
    }

    let aboutSliders = document.querySelectorAll('.about-item__slider');
        for ( var i=0, len = aboutSliders.length; i < len; i++ ) {
        let aboutSlider = aboutSliders[i];
        new Flickity( aboutSlider, {
            cellSelector: '.slider-item',
            pageDots: true,
            percentPosition: true,
            prevNextButtons: false,
            wrapAround: true
        });
    }
});