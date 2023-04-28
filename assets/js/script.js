$(document).ready(function () {
    $(".menu-wrap").click(function () {
        $(this).toggleClass("active")
        $(".menu-wrapper").toggleClass("opened")
        $("#menu_wrap_text").toggleClass("invert")
        $("#mob_menu").toggleClass("active")
        setTimeout(() => {
            $("#mob_logo").toggleClass("none")
            $("#mob_logo_fff").toggleClass("show")
        }, 150)
    })

    $(".blog-title").click(function () {
        $(".blog-title").removeClass("active");
        $(this).addClass("active");
        $(".card-container").removeClass("active");
        $(".card-container." + $(this).data("target")).addClass("active");
    });

    // tariflerdeki inputun deyeri deyisdikce oxlarin itmesi ve deyerlerin deyismesi
    const rangeSliders = $(".styled-slider");
    const cards = $(".cards .card");

    cards.each(function (i, card) {
        const currentMb = $(card).find(".recipes-mb");
        const currentPrice = $(card).find(".recipe-price");
        const dataNum = $(card).find(".range-lines span[data-num]");
        currentMb.text(rangeSliders.eq(i).val());
        currentPrice.text(dataNum.eq(0).attr("data-price"));
    });
    rangeSliders.on("input", function () {
        const rangeSlider = $(this);
        const rangeVal = rangeSlider.val();
        const card = rangeSlider.closest(".card");
        const dataNum = card.find(".range-lines span[data-num='" + rangeVal + "']");
        const dataNums = card.find(".range-lines span");
        const currentMb = card.find(".recipes-mb");
        const currentPrice = card.find(".recipe-price");
        currentMb.text(rangeVal);
        currentPrice.text(dataNum.attr("data-price"));
        for (let i = 0; i < dataNums.length; i++) {
            if (i < rangeVal / 4 - 1) {
                dataNums.eq(i).css({ opacity: 0 });
            }
            else {
                dataNums.eq(i).css({ opacity: 1 });
            }
        }
    });
    // --------------------------------------------

    $("#wowslider .ws_cover").remove()
    

    // -----------------------------------------

    $('#innovations .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        smartSpeed: 600,
        responsive: {
            0: {
                items: 1,
                stagePadding: 20,
                mouseDrag: true,
            },
            600: {
                items: 2,
                mouseDrag: true,
            },
            1000: {
                items: 4,
                mouseDrag: false,
            }
        }
    })

    $('.services_nav').slick({
        asNavFor: ".services_nav_for",
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: !1,
        speed: 300,
        centerPadding: "0px",
        focusOnSelect: !0,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-arrow-left fa-rotate-180'></i></button>",
        responsive: [
            {
                breakpoint: 1581,
                settings: { slidesToShow: 4, slidesToScroll: 1 }
            },
            {
                breakpoint: 1281,
                settings: { slidesToShow: 3, slidesToScroll: 1 }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1, centerMode: !0,
                    variableWidth: !0,
                    infinite: !0,
                    touchThreshold: 100
                }
            },
        ],
    });
    $('.services_nav_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
        speed: 300,
        autoplay: !1,
        autoplaySpeed: 4e3,
        adaptiveHeight: !0,
        touchThreshold: 100,
        asNavFor: ".services_nav",
    });
    const progressCircle = document.querySelector("#heading-slider svg");
    var swiper = new Swiper("#heading-slider .mySwiper", {
        spaceBetween: 30,
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          type: 'custom',
            renderCustom: function (swiper, current, total) {
                return current; 
            }
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
              progressCircle.style.setProperty("--progress", 2 - progress);
            }
          }
      });

      $(".lang_social .current_lang").on("click",()=>{
        $("#other-lang").toggleClass("active")
      })
      $(document).on("click", (event) => {
        const target = $(event.target);
        target.is("#other-lang") || target.parents("#other-lang").length || target.is(".current_lang") || target.parents(".current_lang").length ? null : $("#other-lang").removeClass("active");
      });
      
})

