
const rangeSliders = $(".range-slider");
const cards = $(".cards .card");


rangeSliders.on("input", function () {
    const rangeSlider = $(this);
    const rangeVal = rangeSlider.val();
    const card = rangeSlider.closest(".card");
    const dataNum = card.find(".range-lines span[data-num='" + rangeVal + "']");
    const currentMb = card.find(".recipes-mb");
    const currentPrice = card.find(".recipe-price");

    currentMb.text(rangeVal);

    dataNum.siblings().css({ opacity: 0 });
    dataNum.css({ opacity: 1 });

    currentPrice.text(dataNum.attr("data-price"));
});

// initialize the current values
cards.each(function (i, card) {
    const currentMb = $(card).find(".recipes-mb");
    const currentPrice = $(card).find(".recipe-price");
    const dataNum = $(card).find(".range-lines span[data-num]");

    currentMb.text(rangeSliders.eq(i).val());
    currentPrice.text(dataNum.eq(0).attr("data-price"));
});