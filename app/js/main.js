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
      $status.html(
        "<span>" +
          (i < 10 ? `0${i}` : i) +
          "</span>/" +
          (slick.$dots[0].children.length < 10
            ? `0${slick.$dots[0].children.length}`
            : slick.$dots[0].children.length)
      );
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
  const $statusflavors = $(".flavors__pagination");
  const $slickflavors = $(".flavors__slider");

  $slickflavors.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      if (!slick.$dots) {
        return;
      }
      let SLIDES_TO_SHOW =
        screen.width <= 400
          ? 1
          : screen.width <= 768
          ? 2
          : screen.width <= 1024
          ? 3
          : 4;
      const page = Math.ceil(((currentSlide || 0) + 1) / SLIDES_TO_SHOW);
      console.log(SLIDES_TO_SHOW);
      $statusflavors.html(
        "<span>" +
          (page < 10 ? `0${page}` : page) +
          "</span>/" +
          (slick.$dots[0].children.length < 10
            ? `0${slick.$dots[0].children.length}`
            : slick.$dots[0].children.length)
      );
    }
  );
  $slickflavors.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //reviews sliders
  const $statusVideoReviews = $(".video__pagination");
  const $statusLetterReviews = $(".letter__pagination");
  const $slickVideoReviews = $(".video-reviews .reviews__slider");
  const $slickLetterReviews = $(".letter-reviews .reviews__slider");
  let $slickReviews = $(".reviews__slider");

  $slickVideoReviews.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      if (!slick.$dots) {
        return;
      }
      let SLIDES_TO_SHOW = screen.width <= 400 ? 1 : screen.width < 768 ? 2 : 3;
      const page = Math.ceil(((currentSlide || 0) + 1) / SLIDES_TO_SHOW);
      $statusVideoReviews.html(
        "<span>" +
          (page < 10 ? `0${page}` : page) +
          "</span>/" +
          (slick.$dots[0].children.length < 10
            ? `0${slick.$dots[0].children.length}`
            : slick.$dots[0].children.length)
      );
    }
  );
  $slickLetterReviews.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      if (!slick.$dots) {
        return;
      }
      let SLIDES_TO_SHOW =
        screen.width <= 400 ? 1 : screen.width <= 768 ? 2 : 3;
      const page = Math.ceil(((currentSlide || 0) + 1) / SLIDES_TO_SHOW);
      $statusLetterReviews.html(
        "<span>" +
          (page < 10 ? `0${page}` : page) +
          "</span>/" +
          (slick.$dots[0].children.length < 10
            ? `0${slick.$dots[0].children.length}`
            : slick.$dots[0].children.length)
      );
    }
  );
  $slickReviews.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrow: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // tabs
  $(".reviews__header").click(function () {
    let data = $(this).data("tab");
    if (!$(this).hasClass("active")) {
      //this is the start of our condition
      $(".reviews__header").removeClass("active");
      $(this).addClass("active");

      $(".tab-reviews__body-wrapper").removeClass("active");
      $("#" + data + "Body").addClass("active");
      $slickReviews.slick("setPosition");
    }
  });

  // events slider
  //intro slider
  const $statusEvents = $(".events__pagination");
  const $slickEvents = $(".events__slider");

  $slickEvents.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      if (!slick.$dots) {
        return;
      }

      let i = (currentSlide ? currentSlide : 0) + 1;
      $statusEvents.html(
        "<span>" +
          (i < 10 ? `0${i}` : i) +
          "</span>/" +
          (slick.$dots[0].children.length < 10
            ? `0${slick.$dots[0].children.length}`
            : slick.$dots[0].children.length)
      );
    }
  );
  $slickEvents.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrow: true,
  });

  // accordion
  $(".accordion__body").hide();
  $(".accordion__header").on("click", function () {
    if ($(this).parent().hasClass("active")) {
      $(".accordion__item").removeClass("active");
      $(".accordion__body").slideUp();
    } else {
      $(".accordion__item").removeClass("active");
      $(".accordion__body").slideUp();
      $(this).parent().addClass("active");
      $(this).siblings().slideDown();
    }
  });

  // form submit
  $(".contact-us__btn").on("click", function () {
    $(".contact-us__text-error").css("opacity", "0");
    const inputs = $(".contact-us__form input:not([type='submit'])");
    if (inputs.val() === "") {
      inputs.addClass("error");
      $(".contact-us__text-error").css("opacity", "1");
    }
  });
  $(".subscribe__btn").on("click", function () {
    $(".subscribe__text-error").css("opacity", "0");
    const inputs = $(".subscribe__form input:not([type='submit'])");
    if (inputs.val() === "") {
      inputs.addClass("error");
      $(".subscribe__text-error").css("opacity", "1");
    }
  });
  $(".identity__btn").on("click", function () {
    $(".identity__text-error").css("opacity", "0");
    const inputs = $(".identity__form input:not([type='submit'])");
    const select = $(".identity__form .dropdown");
    if (inputs.val() === "") {
      inputs.addClass("error");
      select.addClass("error");
      $(".identity__text-error").css("opacity", "1");
    }
  });

  // seo
  $(".seo__wrapper").addClass("hidden");
  $(".seo__btn").on("click", () => {
    $(".seo__wrapper").toggleClass("hidden");
  });

  if (screen.width <= 768) {
    // advantages slider

    const $statusAdvantages = $(".advantages__pagination");
    const $slickAdvantages = $(".advantages__list");
    $statusAdvantages.slick("setPosition");

    $slickAdvantages.on(
      "init reInit afterChange",
      function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        if (!slick.$dots) {
          return;
        }
        let SLIDES_TO_SHOW = screen.width <= 400 ? 2 : 3;
        const page = Math.ceil(((currentSlide || 0) + 1) / SLIDES_TO_SHOW);
        $statusAdvantages.html(
          "<span>" +
            (page < 10 ? `0${page}` : page) +
            "</span>/" +
            (slick.$dots[0].children.length < 10
              ? `0${slick.$dots[0].children.length}`
              : slick.$dots[0].children.length)
        );
      }
    );
    $slickAdvantages.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      arrow: true,
      responsive: [
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  }

  //quantity btn

  $(".product__qty").each(function () {
    const spinner = $(this),
      input = spinner.find(".product__qty-input"),
      btnUp = spinner.find(".product__qty-plus"),
      btnDown = spinner.find(".product__qty-minus"),
      min = input.attr("min");

    btnUp.on("click", () => {
      let oldValue = parseFloat(input.val());
      let newValue = oldValue;
      newValue++;
      spinner.find("input").val(newValue);
      spinner.find("input").trigger("change");
    });

    btnDown.on("click", () => {
      let oldValue = parseFloat(input.val());
      let newValue = oldValue;
      oldValue <= min ? (newValue = oldValue) : newValue--;
      spinner.find("input").val(newValue);
      spinner.find("input").trigger("change");
    });
  });

  /*Dropdown Menu*/
  $(".dropdown").each(function () {
    const dropdown = $(this);
    const dropdownlist = dropdown.find(".dropdown-menu li");
    dropdown.click(function () {
      $(this).attr("tabindex", 1).focus();
      $(this).toggleClass("active");
      $(this).find(".dropdown-menu").slideToggle(300);
    });
    dropdown.focusout(function () {
      $(this).removeClass("active");
      $(this).find(".dropdown-menu").slideUp(300);
    });
    dropdownlist.click(function () {
      $(this).parents(".dropdown").find("span").text($(this).text());
      $(this).parents(".dropdown").find("span").addClass("black");
      $(this)
        .parents(".dropdown")
        .find("input")
        .attr("value", $(this).attr("id"));
    });
  });
});
