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
    var target = Math.floor(Math.random() * 50) + 1;

    // fills valueOptions with 4 random numbers between 1 and 10
    function assignValue() {
        for (var i = 0; i < crystalImgChoices.length; i++) {
            var value = Math.floor(Math.random() * 10) + 1;
            valueOptions.push(value);
        }
    }

    assignValue();
    console.log(valueOptions);
    console.log("target: " + target);

    // for loop to append crystals for each valueOption
    for (var i = 0; i < valueOptions.length; i++) {
        var crystalImg = $("<img>");
        crystalImg.addClass("crystal-img");
        crystalImg.attr("src", crystalImgChoices[i]);
        crystalImg.attr("data-crystalvalue", valueOptions[i]);
        $("#crystals").append(crystalImg);

        // console.log("asdf" + crystalImg.attr("data-crystalvalue"));
    };


    $(".crystal-img").on("click", function() {
        var crystalValue = $(this).attr("data-crystalvalue");
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        console.log("value: " + crystalValue);
        console.log("counter:" + counter);
        console.log(this);
        console.log($(this));
    });
    
});