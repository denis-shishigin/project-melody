$(document).ready(function () {
    var currentFloor = 2;
    var floorParth = $('.home-image path');
    var counterUp = $('.counter-up'); /* кнопка увелич этажа*/
    var counterDown = $('.counter-down');/* кнопка уменьш  этажа*/
    floorParth.on('mouseover', function() {
        floorParth.removeClass("current-floor");
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);
    });

    counterUp.on("click", function() {
        if (currentFloor < 18) {
            currentFloor++; /*прибавляем единицу*/
        usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
        useGrouping: false }); /*корректируем отображение, что бы было 02*/
        $(".counter").text(usCurrentFloor); /*записываем в кантер текст цифру*/
        floorParth.removeClass("current-floor"); /*удаляем класс*/
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    counterDown.on("click", function() {
        if (currentFloor > 2) { 
            currentFloor--;
        usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
        useGrouping: false });
        $(".counter").text(usCurrentFloor); 
        floorParth.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }     
    })

});