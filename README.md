<br />
<div align="center">
  <a href="https://github.com/JakeLabate/BrandWield-Inc">
    <img src="media/brandwieldLogos/squareLogo.png" alt="Logo" width="80" height="100%" />
  </a>

# BrandWield Inc.
**_Making content vision and content production, synonymous_**<br />

</div>

// Mission Statement
```js
// audit BrandWield's mission statement
function auditMissionStatement () {
	if (contentMarketer.vision != contentMarketer.production) {
		brandWield.mission = 'incomplete'
	}
	else {
		reviseMissionStatement
	}
}
```
// Seeking Co-founder
```js
// set conservative eval
let brandWieldEval = '$10,000,000,000';
// offer generous compensation
let yourEquity = '40%'
// get rich
let yourNetWorth = brandWieldEval * yourEquity;

// propose a partnership
if (you.goal == 'worldDomination' && you.futureTitle == 'coFounder' && you.intellengenct == 'fuckingBrilliant' && you.ambition == 'unlimited' && you.personality == 'genuine') 
{
    // rejoice
    document.getElementById('you.happiness').value = 'BrandWield Inc.';
}
```
## Google Cloud Firebase
We use [Google Firebase](https://console.firebase.google.com/) to store data on our users.
```js
// Import CDN Resources
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

// Firebase Config
const firebaseConfig = {
	apiKey: "API-123456789",
	authDomain: "labate-firestore.firebaseapp.com",
	databaseURL: "https://labate-firestore-default-rtdb.firebaseio.com",
	projectId: "labate-firestore",
	storageBucket: "labate-firestore.appspot.com",
	messagingSenderId: "544978849115",
	appId: "1:544978849115:web:c3d13f876cbc58ec1cde7e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(); 

// Get Brand Variables
const dbRef = ref(getDatabase());
const brand = 'BrandWield';
get(child(dbRef, 'brands/' + brand)).then((snapshot) => {
	if (snapshot.exists()) {
		console.log('Brand Returned: ' + brand);
		console.log(snapshot.val());
	} else {
		console.log("No Brand Returned");
	}

	// Set Brand Variables in BrandWield App if they exist
	// squareLogo
	if (snapshot.val().squareLogo != null) {
		// set local storage
		localStorage.setItem('squareLogo', snapshot.val().squareLogo);
		document.getElementById('logoIcon').src = snapshot.val().squareLogo;
		document.getElementById('squareLogoBro').src = snapshot.val().squareLogo;
		document.getElementById('squareLogoBro').style.maxWidth = '32px';
		document.getElementById('squareLogoBro').style.maxHeight = '32px';
	}
	
	// Other variables ...etc etc etc

});
```
## Brand Variables

```html
<!-- Mission Statement (one of many brand variables) -->
<div class="var">
    
    <!-- A warning icon to show users that their brand variable input field is either empty, or an invalid value -->
    <span id="warningMissionStatement" class="material-symbols-outlined" style="display: none;">warning</span>&nbsp;
    
    <!-- Brand variable field label -->
    <label for="missionStatement">Mission Statement</label>
    
    <!-- An info button, where users can click to get a better idea of the purpose of the field, and what exactly should go in it -->
    <span class="material-symbols-outlined" onclick='alert("The mission statement is a short phrase that describes the purpose of your business. It should be short and to the point.")'>info</span>
    
    <!-- The input field -->
    <input type="text" id="missionStatement" onkeyup="this.size = this.value.length + 1" style="border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;" readonly>
    
    <!-- An 'unlock' function, unlocking the field & allowing the user the edit its value -->
    <span id="missionStatementUnlock" class="material-symbols-outlined" onclick="unlockMissionStatement();">lock_open</span>
    
    <!-- A 'lock' function, allowing users to save the current field's value to their back end -->
    <span id="missionStatementLock" class="material-symbols-outlined" style="background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;" onclick="lockMissionStatement();">lock</span>
    
    <!-- A button that 'clears' the field's value in a single click -->
    <button id="clearMissionStatement" onclick="clearMissionStatement();">Clear</button>

</div>
```
```js
// primaryColor variable-editing functions
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
Rendered UI
![Screenshot of brand variables UI](../Screen Shot 2022-11-21 at 1.39.43 PM.png)
### Built With

HTML 5<br>
CSS 3<br>
JavaScript ES6 (plain js)<br>

## Funding
BrandWield Inc. is considering an angel round. We may or may not decide to accept investors at this point in time.

## License
Contact me.

## Contact
Jake Labate, Founder & CEO of BrandWield Inc, <a href="203-907-5536">call me</a> or <a href="brandwield@gmail">email me</a>.

Project Link: [https://github.com/JakeLabate/BrandWield-Inc](https://github.com/JakeLabate/BrandWield-Inc)



