$(document).ready(function(){
    var weight = 0;

    //beer alcohol content
    var beerAlcoholContent = .54;

    //wine alcohol content
    var wineAlcoholContent = .6;

    //shot alcohol content
    var shotAlcoholContent = .6;

    //average absortion rate
    var absortion = 7.5;

    //per hour since last drink
    var timePass = 0.015;


    $("#submitButton").click(function(){

        var beer = document.getElementById("beer").value;
        var wine = document.getElementById("wine").value;
        var shot = document.getElementById("shot").value;
        var weight = document.getElementById("weight").value;
        var time = document.getElementById("time").value;

        var drinkTotal = ((beer * beerAlcoholContent) + (wine * wineAlcoholContent) + (shot * shotAlcoholContent));
        var total = (drinkTotal * absortion);
        var result = ((total) / (weight) - (time*timePass));


        document.getElementById("result").innerHTML = result;


    });

    console.log(total);



});