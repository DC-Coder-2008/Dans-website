function DarkSide() {

    setTimeout(NeverUnderestimateThePower, 250);
    setTimeout(BlackScreen, 3000);
    setTimeout(DarthVader, 4000);
    setTimeout(DarthVaderTunePlay, 4250);
    setTimeout(Rickroll, 14000)
}

function NeverUnderestimateThePower() {
    ChangeText("Never underestimate the power of the dark side.", ["DarkSideButton"]);
}

function BlackScreen() {
    BgColourChange("#000000");
}

function DarthVader() {
    document.getElementById("body").style.backgroundImage= "url('Images/DarthVader')";
    document.getElementById("body").style.backgroundRepeat= "no-repeat";
    document.getElementById("body").style.backgroundPosition= "center";
    document.getElementById("body").style.backgroundAttachment= "fixed";
}

function DarthVaderTunePlay() {
    var darthVaderTune = document.getElementById("DarthVaderThemeTune");
    darthVaderTune.volume = 1;
    darthVaderTune.currentTime = 0;
    darthVaderTune.play();
    
}



function MathsTrickSolve() {
    let input = parseInt(document.getElementById("mathsTrickInput").value);
    let trimmedInput = input.slice(0,4);
    errorMessage(trimmedInput);
}