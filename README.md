
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="brandwieldLogos/squareLogo.png" alt="Logo" width="80" height="100%" />
  </a>

# BrandWield Inc.

</div>

## Setting the Stage
```js
// Set the stage
function readThisCode (you) {
	if (you.goal == 'worldDomination') {
		// Set conservative brandWieldEval
		let brandWieldEval = '10,000,000,000';
		// offer generous compensation
		let yourEquity = '40%'
		// get rich
		let yourNetWorth = brandWieldEval * yourEquity;
		// rejoice
		document.getElementById('yourHappiness').value = 'BrandWield Inc.';
	} else {
		// Be a bum
		yourNetWorth = Math.floor(Math.random() * 1, 000, 000);
	}
}
```
## Brand Variables

```html
<!-- Start Brand Variable -->
	<!-- A warning icon to show users that their brand variable input field is either empty, or an invalid value -->
	<!-- Brand variable field label -->
	<!-- An info button, where users can click to get a better idea of the purpose of the field, and what exactly should go in it -->
	<!-- The input field -->
	<!-- An 'unlock' function, unlocking the field & allowing the user the edit its value -->
	<!-- A 'lock' function, allowing users to save the current field's value to their back end -->
	<!-- A button that 'clears' the field's value in a single click -->
<!-- End Brand Variable -->
```
```html
<!-- Slogan -->
<div class="var">
    <span id="warningSlogan" class="material-symbols-outlined" style="display: none;">warning</span>&nbsp;
    <label for="slogan">Slogan</label>
    <span class="material-symbols-outlined" onclick='alert("The slogan is a short phrase that is used to describe your business. It should be catchy and memorable.")'>info</span>
    <input type="text" id="slogan" onkeyup="this.size = this.value.length + 1" style="border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;" readonly>
    <span id="sloganUnlock" class="material-symbols-outlined" onclick="unlockSlogan();">lock_open</span>
    <span id="sloganLock" class="material-symbols-outlined" style="background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;" onclick="lockSlogan();">lock</span>
    <button id="clearSlogan" onclick="clearSlogan();">Clear</button>
</div>

<!-- Mission Statement -->
<div class="var">
    <span id="warningMissionStatement" class="material-symbols-outlined" style="display: none;">warning</span>&nbsp;
    <label for="missionStatement">Mission Statement</label>
    <span class="material-symbols-outlined" onclick='alert("The mission statement is a short phrase that describes the purpose of your business. It should be short and to the point.")'>info</span>
    <input type="text" id="missionStatement" onkeyup="this.size = this.value.length + 1" style="border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;" readonly>
    <span id="missionStatementUnlock" class="material-symbols-outlined" onclick="unlockMissionStatement();">lock_open</span>
    <span id="missionStatementLock" class="material-symbols-outlined" style="background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;" onclick="lockMissionStatement();">lock</span>
    <button id="clearMissionStatement" onclick="clearMissionStatement();">Clear</button>
</div>

<!-- Value Proposition -->
<div class="var">
    <span id="warningValueProposition" class="material-symbols-outlined" style="display: none;">warning</span>&nbsp;
    <label for="valueProp">Value Proposition</label>
    <span class="material-symbols-outlined" onclick='alert("The value proposition is a short phrase that describes the value your business provides to your customers. It should be short and to the point.")'>info</span>
    <input type="text" id="valueProp" onkeyup="this.size = this.value.length + 1" style="border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;" readonly>
    <span id="valuePropUnlock" class="material-symbols-outlined" onclick="unlockValueProp();">lock_open</span>
    <span id="valuePropLock" class="material-symbols-outlined" style="background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;" onclick="lockValueProp();">lock</span>
    <button id="clearValueProp" onclick="clearValueProp();">Clear</button>
</div>
```
```css
.var {
    display: flex;
    padding: 10px 10px 10px 10px;
    border-radius: 40px;
    box-shadow: 5px 10px #888888;
    -webkit-box-shadow: 0 0 15px -9px rgba(0,0,0,0.90);
    -moz-box-shadow: 0 0 15px -9px rgba(0,0,0,0.90);
    margin: 8px auto;
    font-weight: bold;
    align-items: center;
    font-size: 16px;
    transition: .1s;
    position: relative;
    background-color: #fff;
}
.var:hover {
    scale: 1.01;
    transition: .1s;
    background-color: #ececec;
}
.material-symbols-outlined {
	font-variation-settings: 
          'FILL' 0,
		  'wght' 600,
		  'GRAD' 0,
		  'opsz' 48;
	cursor: pointer;
	transition: .1s ease-in-out;
}
```
```js
function unlockPrimaryColor () {
	document.getElementById('primaryColor').setAttribute('style', 'display: block;');
	document.getElementById('primaryColor').setAttribute('style', 'style, border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange; display: block;');
	document.getElementById('primaryColorUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('primaryColorLock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('primaryColorValueDisplay').setAttribute('style', 'display: none;');
}
function lockPrimaryColor () {
	document.getElementById('primaryColor').setAttribute('style', 'display: none;');
	document.getElementById('primaryColorLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('primaryColorUnlock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('primaryColorValueDisplay').innerHTML = 'Current Primary Color Code: ' + document.getElementById('primaryColor').value;
	document.getElementById('primaryColorValueDisplay').setAttribute('style', 'display: block;');
	document.getElementById('primaryColorValueDisplayColor').style.backgroundColor = document.getElementById('primaryColor').value;
	document.getElementById('primaryColorValueDisplayColor').style.borderColor = '#1E1E1EFF';
	document.getElementById('primaryColorValueDisplayColor').style.borderRadius = '25px';
	document.getElementById('primaryColorValueDisplayColor').style.borderWidth = '3px';
	document.getElementById('primaryColorValueDisplayColor').style.borderStyle = 'solid'
	if (document.getElementById('primaryColor').value.length > 0) { document.getElementById('warningPrimaryColor').setAttribute('style', 'display: none;'); }
	if (document.getElementById('primaryColor').value.length < 1) { document.getElementById('warningPrimaryColor').setAttribute('style', 'display: block;'); }
}
function clearPrimaryColor () {
	var confirm = alert('Are you sure you want to clear the primary color?');
	if (confirm) {
		document.getElementById('primaryColor').value = '';
		document.getElementById('primaryColor').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('primaryColor').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningPrimaryColor').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
```
![](../Screen Shot 2022-11-21 at 1.39.43 PM.png)
### Built With

HTML<br>
CSS<br>
JavaScript (plain)<br>


## Funding
BrandWield Inc. is considering an angel round. We may or may not decide to accept investors at this point in time.

## License
Contact me.

## Contact
Jake Labate, Founder & CEO of BrandWield Inc. - [call me](tel:203-907-5536) or [email me](mailto:brandwield@gmail.com?subject=Github Inquiry) anytime.

Project Link: [https://github.com/JakeLabate/BrandWield-Inc](https://github.com/JakeLabate/BrandWield-Inc)



