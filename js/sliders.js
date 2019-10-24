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
          contain: true,
          pageDots: true,
          // autoPlay: true,
          // autoPlay: 5000,
          verticalCells: true,
          prevNextButtons: false
      });
  }
  let homeFirstSlider = document.querySelector('.home-first-slider') !== null;
  if (homeFirstSlider) {
      front.newSlider('.home-first-slider', {
          cellAlign: 'left',
          contain: true,
          prevNextButtons: true,
      });
  }

  let homeSecondSlider = document.querySelector('.home-second-slider') !== null;
  if (homeSecondSlider) {
      front.newSlider('.home-second-slider', {
          cellAlign: 'left',
          contain: true,
          prevNextButtons: true,
      });
  }

  let homeThirdSlider = document.querySelector('.home-third-slider') !== null;
  if (homeThirdSlider) {
      front.newSlider('.home-third-slider', {
          cellAlign: 'left',
          contain: true,
          prevNextButtons: true,
      });
  }

  let homeFourthSlider = document.querySelector('.home-fourth-slider') !== null;
  if (homeFourthSlider) {
      front.newSlider('.home-fourth-slider', {
          cellAlign: 'left',
          contain: true,
          prevNextButtons: true,
      });
  }
  



  // document.querySelectorAll(".products-carousel") && front.newSlider(".products-carousel", {
  //   cellAlign: "left",
  //   contain: true,
  //   prevNextButtons: true,
  //   wrapAround: true
  // });

  
});