$(function () {
  //intro slider
  const $status = $(".intro__pagination");
  const $slickElement = $(".intro__slider");

  $slickElement.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      if (!slick.$dots) {
        return;
      }

      let i = (currentSlide ? currentSlide : 0) + 1;
      $status.html("<span>" + i + "</span>/" + slick.$dots[0].children.length);
    }
  );
  $slickElement.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrow: true,
  });

  //taste slider
  const $statusTastes = $(".tastes__pagination");
  const $slickTastes = $(".tastes__slider");

  $slickTastes.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      if (!slick.$dots) {
        return;
      }

      let i = (currentSlide ? currentSlide : 0) + 1;
      $statusTastes.html(
        "<span>" + i + "</span>/" + slick.$dots[0].children.length
      );
    }
  );
  $slickTastes.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrow: true,
  });
});
