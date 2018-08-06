$(document).ready(function() {

    var valueOptions = [];
    var crystalImgChoices = [
        "assets/images/diamond-309694_1280.png",
        "assets/images/gems-clipart-diamond-shape-15.png",
        "assets/images/gems-clipart-sapphire-8.png",
        "assets/images/ruby-gem-md.png"];
    var wins = 0;
    var losses = 0;
    var counter = 0;
    var target = Math.floor(Math.random() * 102) + 19;


    // FUNCTIONS
    // fills valueOptions with 4 random numbers between 1 and 10
    function assignValue() {
        for (var i = 0; i < crystalImgChoices.length; i++) {
            var value = Math.floor(Math.random() * 12) + 1;
            valueOptions.push(value);
        }
    }
    // page setup/reset
    function setup() {
        counter = 0;
        target = Math.floor(Math.random() * 102) + 19;
        assignValue();
        document.getElementById("target").textContent = target;
        document.getElementById("score").textContent = counter;
    }
    
    setup();

    // for loop to append crystals for each valueOption
    for (var i = 0; i < valueOptions.length; i++) {
        var crystalImg = $("<img>");
        crystalImg.addClass("crystal-img");
        crystalImg.attr("src", crystalImgChoices[i]);
        crystalImg.attr("data-crystalvalue", valueOptions[i]);
        $("#crystals").append(crystalImg);
    };

    // GAME
    $(".crystal-img").on("click", function() {
        var crystalValue = $(this).attr("data-crystalvalue");
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        document.getElementById("score").textContent = counter;

        if (counter == target) {
            wins++;
            document.getElementById("wins").textContent = wins;
            setup();
        }

        if (counter > target) {
            losses++;
            document.getElementById("losses").textContent = losses;
            setup();
        }
    });
    
});