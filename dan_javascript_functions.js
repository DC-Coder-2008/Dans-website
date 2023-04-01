function ChangeText(text,id) {
	if(text == null || id == null)
	{
		errorMessage("Function 'ChangeText' says: 'ERROR: No source or target'");
		return;
	}

	for(let i = 0; i < id.length; i++) {
		document.getElementById(id[i]).innerHTML= text;
	}
}

function Hide(id) {
	if(id == null)
	{
		errorMessage("Function 'Hide' says: 'ERROR: No target'");
		return;
	}

	for (let i = 0; i < id.length; i++) {
		if(document.getElementById(id[i])) {
			document.getElementById(id[i]).style.display = "none";
		}
	}
}

function Show(id) {
	if(id == null)
	{
		errorMessage("Function 'Show' says: 'ERROR: No target'");
		return;
	}

	for (let i = 0; i < id.length; i++) {
		document.getElementById(id[i]).style.display = "block";
	}
}

function errorMessage(error) {
	console.log(error);
	alert(error);
	
}

function generalSourceChange(source,id) {
	if(source == null || id == null)
	{
		errorMessage("Function 'generalSourceChange'says: 'ERROR: No source or target'");
		return;
	}

	for(let i = 0; i < id.length; i++) {
		document.getElementById(id[i]).src = source;
	}
}

function linkSourceChange(source,id) {
	if(source == null || id == null)
	{
		errorMessage("Function 'linkSourceChange'says: 'ERROR: No source or target'");
		return;
	}

	for(let i = 0;i < id.length; i++) {
		document.getElementById(id[i]).href = source;
	}
}

function random(min,max) {
	max++;
    return Math.floor(Math.random()*(max-min))+min
}

function colourChange(hexColour,id) {

	if(hexColour == null || id == null)
	{
		errorMessage("Function 'colorChange'says: 'ERROR: No source or target'");
		return;
	}

	for(let i = 0; i < id.length; i++) {
		document.getElementById(id[i]).style.color = hexColour ;
	}
}

function randomColourChange(id) {

	if(id == null)
	{
		errorMessage("Function 'randomColorChange'says: 'ERROR: No source or target'");
		return;
	}

	rGen= randomHexAsString(0,16777215);
	let rGenColour = "#"+ rGen;

	for(let i = 0; i < id.length; i++) {
		document.getElementById(id[i]).style.color = rGenColour ;
	}
}

function randomHexAsString (min,max) {
	let randHex= random(min,max)

	return randHex.toString(16);
}

function colourFlashRandom (speed, id) {
	function rGenColour () {randomColourChange(id)}

	setInterval(rGenColour, speed);
}

function BgColourChange(colour) {
	document.getElementById("body").style.backgroundColor= colour;
}

function BgRandomColourChange() {BgColourChange(("#" + randomHexAsString(0,16777215)));}

function oneTime_BgColourFlash() {
	errorMessage("If you have epilepsy, reload the page now before the screen starts to flash.");

	
	BgColourChange(("#" + randomHexAsString(0,16777215)));
	

	setInterval(BgRandomColourChange, 10);

}

function TextSizeChange (setTo,changeBy,id) {

	if (setTo != 0) {

		for(let i = 0; i < id.length; i++) {
			document.getElementById(id[i]).style.fontSize = setTo + "px";
		}
	}

	else {
		for(let i = 0; i < id.length; i++) {
			let elementToRescale = document.getElementById(id[i]);
			let startingFontSize = window.getComputedStyle(elementToRescale, null).getPropertyValue('font-size');
			let startingFontInt = parseInt(startingFontSize);

			resultantFont = (startingFontInt + changeBy) + "px";
			document.getElementById(id[i]).style.fontSize = resultantFont;

		}
	}
}

function Rickroll() {
			
	document.getElementById("DarthVaderThemeTune").pause()

	let rickroll = document.getElementById("rickroll");
	rickroll.volume= 1;
	rickroll.currentTime = 0;
	rickroll.play();

	document.getElementById("body").style.backgroundImage= "url('Gifs/rickroll.gif')"
	document.getElementById("body").style.backgroundRepeat= "no-repeat";
	document.getElementById("body").style.backgroundPosition= "center";
	document.getElementById("body").style.backgroundSize= "720px 720px";
	document.getElementById("body").style.backgroundAttachment= "fixed";

}

function CheckForRickroll(id) {

	for(let i = 0; i < id.length; i++) {
		let element = document.getElementById(id[i]).innerHTML;
		if (element == "Never gonna give you up" || element == "Rick Astley") {
			Rickroll()
		}
	}
}

function WriteToInput (text, id) {

	for(let i = 0; i < id.length; i++) {
		document.getElementById(id[i]).value= text;
	}
	
}