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
    let input = document.getElementById("mathsTrickInput").value;
    let trimmedInput = input.slice(0,4);
    let part1 = trimmedInput.substring(0,2)
    let part2 = trimmedInput.substring(2)
    let output1 = parseInt(part1)+1;
    let output2 = parseInt(part2)+1;

    let fullOutput = "Your first number is "+ output1 + " and your second number is " + output2 +".";
    errorMessage(fullOutput);

}

function ValidateForm () {

    let valid = true

    const formData = {
        Fname: document.getElementById("Fname").value.trim(),
        Midname: document.getElementById("Midname").value.trim(),
        Surname: document.getElementById("Surname").value.trim(),
        Age: document.getElementById("Age").value.trim(),
        DoB: document.getElementById("DoB").value.trim(),
        Pets: document.getElementById("PetsOtherInput").value.trim(),
        Country: document.getElementById("Country").value.trim(),
    }
        

    if (formData.Fname == null || formData.Fname == "") {
        valid = false;
    }

    if (formData.Surname == null || formData.Surname == "") {
        valid = false;
    }

    if (isNaN( parseInt( formData.Age)) == true) {
        valid = false;
    }

    const DoB = formData.DoB.split("/");

    if (DoB.length != 3) {
        valid=false;
    }


    for (let i = 0; i < DoB.length; i++) {
        if (DoB[i] == "") {
            valid=false
        }
        if (isNaN(parseInt(DoB[i])) == true) {
            valid = false
        }
    }



    if (formData.Country == null || formData.Country == "") {
        valid = false;
    }

    
    if ( isNaN( parseInt( formData.Pets)) == true) {
            valid = false;
    }

    let validatedFormData = {

    }

    if (valid == true) {
        Hide(["errorMessage"]);

        validatedFormData = {
            Fname: document.getElementById("Fname").value.trim(),
            Midname: document.getElementById("Midname").value.trim(),
            Surname: document.getElementById("Surname").value.trim(),
            Age: parseInt(document.getElementById("Age").value.trim()),
            DoB: parseInt(DoB[0]) + "/" + parseInt(DoB[1]) + "/" + parseInt(DoB[2]),
            Pets: parseInt(document.getElementById("PetsOtherInput").value.trim()),
            Country: document.getElementById("Country").value.trim(),
        }
            
    }
    else {
        Show(["errorMessage"]);
    }

}