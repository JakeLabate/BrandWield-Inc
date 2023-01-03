console.log("firebaseSetup.js loaded");

// Firebase CDN Resources: https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import { getFirestore, doc, getDoc, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
	apiKey: "AIzaSyAPuMZxmsEfVmwrFhVNrpbVkbudksJQWxM",
	authDomain: "labate-firestore.firebaseapp.com",
	databaseURL: "https://labate-firestore-default-rtdb.firebaseio.com",
	projectId: "labate-firestore",
	storageBucket: "labate-firestore.appspot.com",
	messagingSenderId: "544978849115",
	appId: "1:544978849115:web:c3d13f876cbc58ec1cde7e",
	measurementId: "G-SC3X25RVX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const firestore = getFirestore(app)

// Get Brand Variables
const dbRef = ref(getDatabase());
const brandID = '5k9PkwGSN7wrnoXAqS77';

getDoc(doc(firestore, "brands", brandID)).then((snapshot) => {
	const brandData = snapshot.data();
	if (brandData) {
		if (brandData.legalBusinessName !== null || brandData.legalBusinessName !== '') {
			console.log('Brand Returned: ' + brandData.legalBusinessName);
		} else {
			console.log('Brand Returned!');
		}
		console.log(brandData);
	} else {
		console.log("No Brand Returned");
	}

	loadUserBrand();

	// Social Media
	function loadFacebookUrl () {
		if (brandData.facebookUrl != null) {
			// set local storage
			localStorage.setItem('facebookUrl', brandData.facebookUrl);

			// Create an 'option' element under the 'brandList(s)' for search reference in the Brand Search
			document.getElementById('url').appendChild(document.createElement('option')).setAttribute('value', brandData.facebookUrl);
			document.getElementById('url').lastChild.innerHTML = 'Facebook URL';

			document.getElementById('facebookUrl').value = brandData.facebookUrl;
			document.getElementById('facebookUrl').size = document.getElementById('person1FacebookUrl').value.length + 1;
		} else {
			document.getElementById('facebookUrl').placeholder = 'https://facebook.com/myPage';
			document.getElementById('warningFacebookURL').style.display = 'block';
			document.getElementById('facebookUrl').size = document.getElementById('facebookUrl').placeholder.length + 1;
		}
	}
	function loadFacebookUsername () {
		if (brandData.facebookUsername != null) {
			// set local storage
			localStorage.setItem('facebookUsername', brandData.facebookUsername);

			document.getElementById('facebookUsername').value = brandData.facebookUsername;
			document.getElementById('facebookUsername').size = document.getElementById('facebookUsername').value.length + 1;
		} else {
			document.getElementById('facebookUsername').placeholder = 'myPage';
			document.getElementById('warningFacebookUsername').style.display = 'block';
			document.getElementById('facebookUsername').size = document.getElementById('facebookUsername').placeholder.length + 1;
		}
	}
	function loadInstagramUrl () {
		if (brandData.instagramUrl != null) {
			// set local storage
			localStorage.setItem('instagramUrl', brandData.instagramUrl);

			// Create an 'option' element under the 'brandList' list for search reference in the Brand Reference Popup
			document.getElementById('url').appendChild(document.createElement('option')).setAttribute('value', brandData.instagramUrl);
			document.getElementById('url').lastChild.innerHTML = 'Instagram URL';

			document.getElementById('instagramUrl').value = brandData.instagramUrl;
			document.getElementById('instagramUrl').size = document.getElementById('instagramUrl').value.length + 1;
		} else {
			document.getElementById('instagramUrl').placeholder = 'https://instagram.com/myPage';
			document.getElementById('warningInstagramURL').style.display = 'block';
			document.getElementById('instagramUrl').size = document.getElementById('instagramUrl').placeholder.length + 1;
		}
	}
	function loadInstagramUsername() {
		if (brandData.instagramUsername != null) {
			// set local storage
			localStorage.setItem('instagramUsername', brandData.instagramUsername);

			// Create an 'option' element under the 'brandList' list for search reference in the Brand Reference Popup
			document.getElementById('valueAll').appendChild(document.createElement('option')).setAttribute('value', brandData.instagramUsername);
			document.getElementById('valueAll').lastChild.innerHTML = 'Instagram Username';

			document.getElementById('instagramUsername').value = brandData.instagramUsername;
			document.getElementById('instagramUsername').size = document.getElementById('instagramUsername').value.length + 1;
		} else {
			document.getElementById('instagramUsername').placeholder = 'myPage';
			document.getElementById('warningInstagramUsername').style.display = 'block';
			document.getElementById('instagramUsername').size = document.getElementById('instagramUsername').placeholder.length + 1;
		}
	}
	function loadLinkedinUrl () {
		if (brandData.linkedinUrl != null) {
			// set local storage
			localStorage.setItem('linkedinUrl', brandData.linkedinUrl);

			// Create an 'option' element under the 'brandList' list for search reference in the Brand Reference Popup
			document.getElementById('url').appendChild(document.createElement('option')).setAttribute('value', brandData.linkedinUrl);
			document.getElementById('url').lastChild.innerHTML = 'LinkedIn URL';

			document.getElementById('linkedinUrl').value = brandData.linkedinUrl;
			document.getElementById('linkedinUrl').size = document.getElementById('linkedinUrl').value.length + 1;
		} else {
			document.getElementById('linkedinUrl').placeholder = 'https://linkedin.com/myPage';
			document.getElementById('warningLinkedinURL').style.display = 'block';
			document.getElementById('linkedinUrl').size = document.getElementById('linkedinUrl').placeholder.length + 1;
		}
	}
	function loadLinkedinUsername () {
		if (brandData.linkedinUsername != null) {
			// set local storage
			localStorage.setItem('linkedinUsername', brandData.linkedinUsername);

			// Create an 'option' element under the 'brandList' list for search reference in the Brand Reference Popup
			document.getElementById('valueAll').appendChild(document.createElement('option')).setAttribute('value', brandData.linkedinUsername);
			document.getElementById('valueAll').lastChild.innerHTML = 'LinkedIn Username';

			document.getElementById('linkedinUsername').value = brandData.linkedinUsername;
			document.getElementById('linkedinUsername').size = document.getElementById('linkedinUsername').value.length + 1;
		} else {
			document.getElementById('linkedinUsername').placeholder = 'myPage';
			document.getElementById('warningLinkedinUsername').style.display = 'block';
			document.getElementById('linkedinUsername').size = document.getElementById('linkedinUsername').placeholder.length + 1;
		}
	}
	function loadTwitterUrl() {
		if (brandData.twitterUrl != null) {
			// set local storage
			localStorage.setItem('twitterUrl', brandData.twitterUrl);

			// Create an 'option' element under the 'brandList' list for search reference in the Brand Reference Popup
			document.getElementById('url').appendChild(document.createElement('option')).setAttribute('value', brandData.twitterUrl);
			document.getElementById('url').lastChild.innerHTML = 'Twitter URL';

			document.getElementById('twitterUrl').value = brandData.twitterUrl;
			document.getElementById('twitterUrl').size = document.getElementById('twitterUrl').value.length + 1;
		} else {
			document.getElementById('twitterUrl').placeholder = 'https://twitter.com/myPage';
			document.getElementById('warningTwitterURL').style.display = 'block';
			document.getElementById('twitterUrl').size = document.getElementById('twitterUrl').placeholder.length + 1;
		}
	}
	function loadTwitterUsername () {
		if (brandData.twitterUsername != null) {
			// set local storage
			localStorage.setItem('twitterUsername', brandData.twitterUsername);

			// Create an 'option' element under the 'brandList' list for search reference in the Brand Reference Popup
			document.getElementById('valueAll').appendChild(document.createElement('option')).setAttribute('value', brandData.twitterUsername);
			document.getElementById('valueAll').lastChild.innerHTML = 'Twitter Username';

			document.getElementById('twitterUsername').value = brandData.twitterUsername;
			document.getElementById('twitterUsername').size = document.getElementById('twitterUsername').value.length + 1;
		} else {
			document.getElementById('twitterUsername').placeholder = 'myPage';
			document.getElementById('warningTwitterUsername').style.display = 'block';
			document.getElementById('twitterUsername').size = document.getElementById('twitterUsername').placeholder.length + 1;
		}
	}
	function loadTiktokUrl () {
		if (brandData.tiktokUrl != null) {
			// set local storage
			localStorage.setItem('tiktokUrl', brandData.tiktokUrl);

			// Create an 'option' element under the 'brandList' list for search reference in the Brand Reference Popup
			document.getElementById('url').appendChild(document.createElement('option')).setAttribute('value', brandData.tiktokUrl);
			document.getElementById('url').lastChild.innerHTML = 'TikTok URL';

			document.getElementById('tiktokUrl').value = brandData.tiktokUrl;
			document.getElementById('tiktokUrl').size = document.getElementById('tiktokUrl').value.length + 1;
		} else {
			document.getElementById('tiktokUrl').placeholder = 'https://tiktok.com/myPage';
			document.getElementById('warningTiktokURL').style.display = 'block';
			document.getElementById('tiktokUrl').size = document.getElementById('tiktokUrl').placeholder.length + 1;
		}
	}
	function loadTiktokUsername () {
		if (brandData.tiktokUsername != null) {
			// set local storage
			localStorage.setItem('tiktokUsername', brandData.tiktokUsername);

			// Create an 'option' element under the 'brandList' list for search reference in the Brand Reference Popup
			document.getElementById('valueAll').appendChild(document.createElement('option')).setAttribute('value', brandData.tiktokUsername);
			document.getElementById('valueAll').lastChild.innerHTML = 'TikTok Username';

			document.getElementById('tiktokUsername').value = brandData.tiktokUsername;
			document.getElementById('tiktokUsername').size = document.getElementById('tiktokUsername').value.length + 1;
		} else {
			document.getElementById('tiktokUsername').placeholder = 'myPage';
			document.getElementById('warningTiktokUsername').style.display = 'block';
			document.getElementById('tiktokUsername').size = document.getElementById('tiktokUsername').placeholder.length + 1;
		}
	}
	function loadSocialMedia () {
		loadFacebookUrl();
		loadFacebookUsername();
		loadInstagramUrl();
		loadInstagramUsername();
		loadLinkedinUrl();
		loadLinkedinUsername();
		loadTwitterUrl();
		loadTwitterUsername();
		loadTiktokUrl();
		loadTiktokUsername();
	}

	// Logos
	function loadSquareLogo() {
		// square logo
		if (brandData.squareLogo != null) {
			// set local storage
			localStorage.setItem('squareLogo', brandData.squareLogo);

			document.getElementById('file').appendChild(document.createElement('option')).setAttribute('value', brandData.squareLogo);
			document.getElementById('file').lastChild.innerHTML = 'Square Logo';
			document.getElementById('file').lastChild.appendChild(document.createElement('img')).setAttribute('src', brandData.squareLogo);

			document.getElementById('squareLogoBro').src = brandData.squareLogo;
			document.getElementById('squareLogoBro').style.maxWidth = '32px';
			document.getElementById('squareLogoBro').style.maxHeight = '32px';
		} else {
		}
	}
	function loadFullLogo () {
		// fullLogo
		if (brandData.fullLogo != null) {
			// set local storage
			localStorage.setItem('fullLogo', brandData.fullLogo);

			document.getElementById('file').appendChild(document.createElement('option')).setAttribute('value', brandData.fullLogo);
			document.getElementById('file').lastChild.innerHTML = 'Full Logo';
			document.getElementById('file').lastChild.appendChild(document.createElement('img')).setAttribute('src', brandData.fullLogo);

			document.getElementById('fullLogoBro').src = brandData.fullLogo;
			document.getElementById('fullLogoBro').style.maxWidth = '250px';
			document.getElementById('fullLogoBro').style.maxHeight = '250px';
		} else {
		}
	}
	function loadLogos () {
		loadSquareLogo();
		loadFullLogo();
	}

	// Address
	function loadOfficeAddressStreet1() {
		// Address
		if (brandData.officeAddressStreet1 != null) {
			console.log('officeAddressStreet1');
			// set local storage
			localStorage.setItem('officeAddressStreet1', brandData.officeAddressStreet1);

			// Create an 'option' element under the 'brandList' list for search reference in the Brand Reference Popup
			document.getElementById('valueAll').appendChild(document.createElement('option')).setAttribute('value', brandData.officeAddressStreet1);
			document.getElementById('valueAll').lastChild.innerHTML = 'Office Address Street 1';

			document.getElementById('officeAddressStreet1').value = brandData.officeAddressStreet1;
			document.getElementById('officeAddressStreet1').size = document.getElementById('officeAddressStreet1').value.length + 1;
		} else {
			document.getElementById('officeAddressStreet1').placeholder = '123 Main Street';
			document.getElementById('warningOfficeAddressStreet1').style.display = 'block';
			document.getElementById('officeAddressStreet1').size = document.getElementById('officeAddressStreet1').placeholder.length + 1;
		}
	}
	function loadOfficeAddressStreet2() {
		if (brandData.officeAddressStreet2 != null) {
			// set local storage
			localStorage.setItem('officeAddressStreet2', brandData.officeAddressStreet2);

			// Create an 'option' element under the 'brandList' list for search reference in the Brand Reference Popup
			document.getElementById('valueAll').appendChild(document.createElement('option')).setAttribute('value', brandData.officeAddressStreet2);
			document.getElementById('valueAll').lastChild.innerHTML = 'Office Address Street 2';

			document.getElementById('officeAddressStreet2').value = brandData.officeAddressStreet2;
			document.getElementById('officeAddressStreet2').size = document.getElementById('officeAddressStreet2').value.length + 1;
		} else {
			document.getElementById('officeAddressStreet2').placeholder = 'Suite 100';
			document.getElementById('warningOfficeAddressStreet2').style.display = 'block';
			document.getElementById('officeAddressStreet2').size = document.getElementById('officeAddressStreet2').placeholder.length + 1;
		}
	}
	function loadOfficeAddressCity() {
		if (brandData.officeAddressCity != null) {
			// set local storage
			localStorage.setItem('officeAddressCity', brandData.officeAddressCity);
			// Create an 'option' element under the 'brandList' list for search reference in the Brand Reference Popup

			// Create an 'option' element under the 'brandList' list for search reference in the Brand Reference Popup
			document.getElementById('valueAll').appendChild(document.createElement('option')).setAttribute('value', brandData.officeAddressCity);
			document.getElementById('valueAll').lastChild.innerHTML = 'Office Address City';

			document.getElementById('officeAddressCity').value = brandData.officeAddressCity;
			document.getElementById('officeAddressCity').size = document.getElementById('officeAddressCity').value.length + 1;
		} else {
			document.getElementById('officeAddressCity').placeholder = 'New York';
			document.getElementById('warningOfficeAddressCity').style.display = 'block';
			document.getElementById('officeAddressCity').size = document.getElementById('officeAddressCity').placeholder.length + 1;
		}
	}
	function loadOfficeAddressState() {
		if (brandData.officeAddressState != null) {
			// set local storage
			localStorage.setItem('officeAddressState', brandData.officeAddressState);

			// Create an 'option' element under the 'brandList' list for search reference in the Brand Reference Popup
			document.getElementById('valueAll').appendChild(document.createElement('option')).setAttribute('value', brandData.officeAddressState);
			document.getElementById('valueAll').lastChild.innerHTML = 'Office Address State';

			document.getElementById('officeAddressState').value = brandData.officeAddressState;
			document.getElementById('officeAddressState').size = document.getElementById('officeAddressState').value.length + 1;
		} else {
			document.getElementById('officeAddressState').placeholder = 'NY';
			document.getElementById('warningOfficeAddressState').style.display = 'block';
			document.getElementById('officeAddressState').size = document.getElementById('officeAddressState').placeholder.length + 1;
		}
	}
	function loadOfficeAddressZip() {
		if (brandData.officeAddressZip != null) {
			// set local storage
			localStorage.setItem('officeAddressZip', brandData.officeAddressZip);

			// Create an 'option' element under the 'brandList' list for search reference in the Brand Reference Popup
			document.getElementById('valueAll').appendChild(document.createElement('option')).setAttribute('value', brandData.officeAddressZip);
			document.getElementById('valueAll').lastChild.innerHTML = 'Office Address Zip';

			document.getElementById('officeAddressZip').value = brandData.officeAddressZip;
			document.getElementById('officeAddressZip').size = document.getElementById('officeAddressZip').value.length + 1;
		} else {
			document.getElementById('officeAddressZip').placeholder = '10001';
			document.getElementById('warningOfficeAddressZip').style.display = 'block';
			document.getElementById('officeAddressZip').size = document.getElementById('officeAddressZip').placeholder.length + 1;
		}
	}
	function loadOfficeAddressCountry() {
		if (brandData.officeAddressCountry != null) {
			// set local storage
			localStorage.setItem('officeAddressCountry', brandData.officeAddressCountry);

			// Create an 'option' element under the 'brandList' list for search reference in the Brand Reference Popup
			document.getElementById('valueAll').appendChild(document.createElement('option')).setAttribute('value', brandData.officeAddressCountry);
			document.getElementById('valueAll').lastChild.innerHTML = 'Office Address Country';

			document.getElementById('officeAddressCountry').value = brandData.officeAddressCountry;
			document.getElementById('officeAddressCountry').size = document.getElementById('officeAddressCountry').value.length + 1;
		} else {
			document.getElementById('officeAddressCountry').placeholder = 'USA';
			document.getElementById('warningOfficeAddressCountry').style.display = 'block';
			document.getElementById('officeAddressCountry').size = document.getElementById('officeAddressCountry').placeholder.length + 1;
		}
	}
	function loadOfficeAddress() {
		loadOfficeAddressStreet1();
		loadOfficeAddressStreet2();
		loadOfficeAddressCity();
		loadOfficeAddressState();
		loadOfficeAddressZip();
		loadOfficeAddressCountry();
	}

	// Hours of Operation
	function loadMondayOpeningTime() {
		// Hours of Operation
		if (brandData.mondayOpeningTime != null) {
			// set local storage
			localStorage.setItem('mondayOpeningTime', brandData.mondayOpeningTime);
			document.getElementById('mondayOpeningTime').size = document.getElementById('mondayOpeningTime').value.length + 1;
		} else {
			document.getElementById('mondayOpeningTime').placeholder = '9:00 AM';
			document.getElementById('warningMondayOpeningTime').style.display = 'block';
		}
	}
	function loadMondayClosingTime() {
		if (brandData.mondayClosingTime != null) {
			// set local storage
			localStorage.setItem('mondayClosingTime', brandData.mondayClosingTime);
			document.getElementById('mondayClosingTime').value = brandData.mondayClosingTime;
		} else {
			document.getElementById('mondayClosingTime').placeholder = '5:00 PM';
			document.getElementById('warningMondayClosingTime').style.display = 'block';
		}
	}
	function loadTuesdayOpeningTime() {
		if (brandData.tuesdayOpeningTime != null) {
			// set local storage
			localStorage.setItem('tuesdayOpeningTime', brandData.tuesdayOpeningTime);
			document.getElementById('tuesdayOpeningTime').value = brandData.tuesdayOpeningTime;
		} else {
			document.getElementById('tuesdayOpeningTime').placeholder = '9:00 AM';
			document.getElementById('warningTuesdayOpeningTime').style.display = 'block';
		}
	}
	function loadTuesdayClosingTime() {
		if (brandData.tuesdayClosingTime != null) {
			// set local storage
			localStorage.setItem('tuesdayClosingTime', brandData.tuesdayClosingTime);
			document.getElementById('tuesdayClosingTime').value = brandData.tuesdayClosingTime;
		} else {
			document.getElementById('tuesdayClosingTime').placeholder = '5:00 PM';
			document.getElementById('warningTuesdayClosingTime').style.display = 'block';
		}
	}
	function loadWednesdayOpeningTime() {
		if (brandData.wednesdayOpeningTime != null) {
			// set local storage
			localStorage.setItem('wednesdayOpeningTime', brandData.wednesdayOpeningTime);
			document.getElementById('wednesdayOpeningTime').value = brandData.wednesdayOpeningTime;
		} else {
			document.getElementById('wednesdayOpeningTime').placeholder = '9:00 AM';
			document.getElementById('warningWednesdayOpeningTime').style.display = 'block';
		}
	}
	function loadWednesdayClosingTime() {
		if (brandData.wednesdayClosingTime != null) {
			// set local storage
			localStorage.setItem('wednesdayClosingTime', brandData.wednesdayClosingTime);
			document.getElementById('wednesdayClosingTime').value = brandData.wednesdayClosingTime;
		} else {
			document.getElementById('wednesdayClosingTime').placeholder = '5:00 PM';
			document.getElementById('warningWednesdayClosingTime').style.display = 'block';
		}
	}
	function loadThursdayOpeningTime() {
		if (brandData.thursdayOpeningTime != null) {
			// set local storage
			localStorage.setItem('thursdayOpeningTime', brandData.thursdayOpeningTime);
			document.getElementById('thursdayOpeningTime').value = brandData.thursdayOpeningTime;
		} else {
			document.getElementById('thursdayOpeningTime').placeholder = '9:00 AM';
			document.getElementById('warningThursdayOpeningTime').style.display = 'block';
		}
	}
	function loadThursdayClosingTime() {
		if (brandData.thursdayClosingTime != null) {
			// set local storage
			localStorage.setItem('thursdayClosingTime', brandData.thursdayClosingTime);
			document.getElementById('thursdayClosingTime').value = brandData.thursdayClosingTime;
		} else {
			document.getElementById('thursdayClosingTime').placeholder = '5:00 PM';
			document.getElementById('warningThursdayClosingTime').style.display = 'block';
		}
	}
	function loadFridayOpeningTime() {
		if (brandData.fridayOpeningTime != null) {
			// set local storage
			localStorage.setItem('fridayOpeningTime', brandData.fridayOpeningTime);
			document.getElementById('fridayOpeningTime').value = brandData.fridayOpeningTime;
		} else {
			document.getElementById('fridayOpeningTime').placeholder = '9:00 AM';
			document.getElementById('warningFridayOpeningTime').style.display = 'block';
		}
	}
	function loadFridayClosingTime() {
		if (brandData.fridayClosingTime != null) {
			// set local storage
			localStorage.setItem('fridayClosingTime', brandData.fridayClosingTime);
			document.getElementById('fridayClosingTime').value = brandData.fridayClosingTime;
		} else {
			document.getElementById('fridayClosingTime').placeholder = '5:00 PM';
			document.getElementById('warningFridayClosingTime').style.display = 'block';
		}
	}
	function loadSaturdayOpeningTime() {
		if (brandData.saturdayOpeningTime != null) {
			// set local storage
			localStorage.setItem('saturdayOpeningTime', brandData.saturdayOpeningTime);
			document.getElementById('saturdayOpeningTime').value = brandData.saturdayOpeningTime;
		} else {
			document.getElementById('saturdayOpeningTime').placeholder = '9:00 AM';
			document.getElementById('warningSaturdayOpeningTime').style.display = 'block';
		}
	}
	function loadSaturdayClosingTime() {
		if (brandData.saturdayClosingTime != null) {
			// set local storage
			localStorage.setItem('saturdayClosingTime', brandData.saturdayClosingTime);
			document.getElementById('saturdayClosingTime').value = brandData.saturdayClosingTime;
		} else {
			document.getElementById('saturdayClosingTime').placeholder = '5:00 PM';
			document.getElementById('warningSaturdayClosingTime').style.display = 'block';
		}
	}
	function loadSundayOpeningTime() {
		if (brandData.sundayOpeningTime != null) {
			// set local storage
			localStorage.setItem('sundayOpeningTime', brandData.sundayOpeningTime);
			document.getElementById('sundayOpeningTime').value = brandData.sundayOpeningTime;
		} else {
			document.getElementById('sundayOpeningTime').placeholder = '9:00 AM';
			document.getElementById('warningSundayOpeningTime').style.display = 'block';
		}
	}
	function loadSundayClosingTime() {
		if (brandData.sundayClosingTime != null) {
			// set local storage
			localStorage.setItem('sundayClosingTime', brandData.sundayClosingTime);
			document.getElementById('sundayClosingTime').value = brandData.sundayClosingTime;
		} else {
			document.getElementById('sundayClosingTime').placeholder = '5:00 PM';
			document.getElementById('warningSundayClosingTime').style.display = 'block';
		}
	}
	function loadHoursOfOperation() {
		loadMondayOpeningTime();
		loadMondayClosingTime();
		loadTuesdayOpeningTime();
		loadTuesdayClosingTime();
		loadWednesdayOpeningTime();
		loadWednesdayClosingTime();
		loadThursdayOpeningTime();
		loadThursdayClosingTime();
		loadFridayOpeningTime();
		loadFridayClosingTime();
		loadSaturdayOpeningTime();
		loadSaturdayClosingTime();
		loadSundayOpeningTime();
		loadSundayClosingTime();
	}

	// Founding
	function loadFounderName() {
		// Founding Info
		if (brandData.founderName != null) {
			// set local storage
			localStorage.setItem('founderName', brandData.founderName);
			document.getElementById('founderName').value = brandData.founderName;
			document.getElementById('founderName').size = document.getElementById('founderName').value.length + 1;
		} else {
			document.getElementById('founder').placeholder = 'John Doe';
			document.getElementById('warningFounderName').style.display = 'block';
			document.getElementById('founderName').size = document.getElementById('founderName').placeholder.length + 1;
		}
	}
	function loadFoundingDae() {
		if (brandData.foundingDate != null) {
			// set local storage
			localStorage.setItem('foundingDate', brandData.foundingDate);
			document.getElementById('foundingDate').value = brandData.foundingDate;
		} else {
			document.getElementById('foundingDate').placeholder = '2017';
			document.getElementById('warningFoundingDate').style.display = 'block';
		}
	}
	function loadTradeBusinessName() {
		if (brandData.tradeBusinessName != null) {
			// set local storage
			localStorage.setItem('tradeBusinessName', brandData.tradeBusinessName);
			document.getElementById('tradeBusinessName').value = brandData.tradeBusinessName;
			document.getElementById('tradeBusinessName').size = document.getElementById('tradeBusinessName').value.length + 1;

		} else {
			document.getElementById('tradeBusinessName').placeholder = 'John\'s Tacos';
			document.getElementById('warningTradeBusinessName').style.display = 'block';
			document.getElementById('tradeBusinessName').size = document.getElementById('tradeBusinessName').placeholder.length + 1;
		}
	}
	function loadLegalBusinessName() {
		if (brandData.legalBusinessName != null) {
			// set local storage
			localStorage.setItem('legalBusinessName', brandData.legalBusinessName);
			document.getElementById('legalBusinessName').value = brandData.legalBusinessName;
			document.getElementById('legalBusinessName').size = document.getElementById('legalBusinessName').value.length + 1;

		} else {
			document.getElementById('legalBusinessName').placeholder = 'John\'s Tacos LLC';
			document.getElementById('warningLegalBusinessName').style.display = 'block';
			document.getElementById('legalBusinessName').size = document.getElementById('legalBusinessName').placeholder.length + 1;
		}
	}
	function loadFounding() {
		loadFounderName();
		loadFoundingDae();
		loadTradeBusinessName();
		loadLegalBusinessName();
	}

	// Business
	function loadBusinessType() {
		// Basic Info
		if (brandData.businessType != null) {
			// set local storage
			localStorage.setItem('businessType', brandData.businessType);
			document.getElementById('businessType').value = brandData.businessType;
			document.getElementById('businessType').size = document.getElementById('businessType').value.length + 1;

		} else {
			document.getElementById('businessType').placeholder = 'Restaurant';
			document.getElementById('warningBusinessType').style.display = 'block';
		}
	}
	function loadSlogan() {
		if (brandData.slogan != null) {
			// set local storage
			localStorage.setItem('slogan', brandData.slogan);
			document.getElementById('slogan').value = brandData.slogan;
			document.getElementById('slogan').size = document.getElementById('slogan').value.length + 1;
		} else {
			document.getElementById('slogan').placeholder = 'The Best Tacos in Town';
			document.getElementById('warningSlogan').style.display = 'block';
			document.getElementById('slogan').size = document.getElementById('slogan').placeholder.length + 1;
		}
	}
	function loadMissionStatement() {
		if (brandData.missionStatement != null) {
			// set local storage
			localStorage.setItem('missionStatement', brandData.missionStatement);
			document.getElementById('missionStatement').value = brandData.missionStatement;
			document.getElementById('missionStatement').size = document.getElementById('missionStatement').value.length + 1;
		} else {
			document.getElementById('missionStatement').placeholder = 'To provide the best tacos in town';
			document.getElementById('warningMissionStatement').style.display = 'block';
			document.getElementById('missionStatement').size = document.getElementById('missionStatement').placeholder.length + 1;
		}
	}
	function loadValueProp() {
		if (brandData.valueProp != null) {
			// set local storage
			localStorage.setItem('valueProp', brandData.valueProp);
			document.getElementById('valueProp').value = brandData.valueProp;
			document.getElementById('valueProp').size = document.getElementById('valueProp').value.length + 1;
		} else {
			document.getElementById('valueProp').placeholder = 'We make tacos with only the finest and freshest ingredients';
			document.getElementById('warningValueProp').style.display = 'block';
			document.getElementById('valueProp').size = document.getElementById('valueProp').placeholder.length + 1;
		}
	}
	function loadBusiness() {
		loadBusinessType();
		loadSlogan();
		loadMissionStatement();
		loadValueProp();
	}

	// PEOPLE
	// person 1
	function loadPerson1Name() {
		// Person 1
		if (brandData.person1Name != null) {
			// set local storage
			localStorage.setItem('person1Name', brandData.person1Name);
			document.getElementById('person1Name').value = brandData.person1Name;
			document.getElementById('person1Name').size = document.getElementById('person1Name').value.length + 1;
		} else {
			document.getElementById('person1Name').placeholder = 'Harry Doe';
			document.getElementById('warningPerson1Name').style.display = 'block';
			document.getElementById('person1Name').size = document.getElementById('person1Name').placeholder.length + 1;
		}
	}
	function loadPerson1Title() {
		if (brandData.person1Title != null) {
			// set local storage
			localStorage.setItem('person1Title', brandData.person1Title);
			document.getElementById('person1Title').value = brandData.person1Title;
			document.getElementById('person1Title').size = document.getElementById('person1Title').value.length + 1;
		} else {
			document.getElementById('person1Title').placeholder = 'Head Chef';
			document.getElementById('warningPerson1Title').style.display = 'block';
			document.getElementById('person1Title').size = document.getElementById('person1Title').placeholder.length + 1;
		}
	}
	function loadPerson1Headshot() {
		//   if (brandData.person1Headshot != null) {
		//     // set local storage
		//     localStorage.setItem('person1Headshot', brandData.person1Headshot);
		//      document.getElementById('person1Headshot').value = brandData.person1Headshot;
		//  } else {
		//      document.getElementById('person1Headshot').placeholder = 'https://via.placeholder.com/150';
		//       document.getElementById('warningPerson1Headshot').style.display = 'block';
		//   }
	}
	function loadPerson1FacebookUrl() {
		if (brandData.person1FacebookUrl != null) {
			// set local storage
			localStorage.setItem('person1FacebookUrl', brandData.person1FacebookUrl);
			document.getElementById('person1FacebookUrl').value = brandData.person1FacebookUrl;
			document.getElementById('person1FacebookUrl').size = document.getElementById('person1FacebookUrl').value.length + 1;

		} else {
			document.getElementById('person1FacebookUrl').placeholder = 'https://facebook.com/harrydoetaco';
			document.getElementById('warningPerson1FacebookUrl').style.display = 'block';
			document.getElementById('person1FacebookUrl').size = document.getElementById('person1FacebookUrl').placeholder.length + 1;
		}
	}
	function loadPerson1InstagramUrl() {
		if (brandData.person1InstagramUrl != null) {
			// set local storage
			localStorage.setItem('person1InstagramUrl', brandData.person1InstagramUrl);
			document.getElementById('person1InstagramUrl').value = brandData.person1InstagramUrl;
			document.getElementById('person1InstagramUrl').size = document.getElementById('person1InstagramUrl').value.length + 1;
		} else {
			document.getElementById('person1InstagramUrl').placeholder = 'https://instagram.com/harrydoe.tacko';
			document.getElementById('warningPerson1InstagramUrl').style.display = 'block';
			document.getElementById('person1InstagramUrl').size = document.getElementById('person1InstagramUrl').placeholder.length + 1;
		}
	}
	function loadPerson1LinkedInUrl() {
		if (brandData.person1LinkedinUrl != null) {
			// set local storage
			localStorage.setItem('person1LinkedinUrl', brandData.person1LinkedinUrl);
			document.getElementById('person1LinkedinUrl').value = brandData.person1LinkedinUrl;
			document.getElementById('person1LinkedinUrl').size = document.getElementById('person1LinkedinUrl').value.length + 1;
		} else {
			document.getElementById('person1LinkedinUrl').placeholder = 'https://linkedin.com/in/harrydoetaco';
			document.getElementById('warningPerson1LinkedinUrl').style.display = 'block';
			document.getElementById('person1LinkedinUrl').size = document.getElementById('person1LinkedinUrl').placeholder.length + 1;
		}
	}
	function loadPerson1TwitterUrl() {
		if (brandData.person1TwitterUrl != null) {
			// set local storage
			localStorage.setItem('person1TwitterUrl', brandData.person1TwitterUrl);
			document.getElementById('person1TwitterUrl').value = brandData.person1TwitterUrl;
			document.getElementById('person1TwitterUrl').size = document.getElementById('person1TwitterUrl').value.length + 1;
		} else {
			document.getElementById('person1TwitterUrl').placeholder = 'https://twitter.com/@harrydoetaco';
			document.getElementById('warningPerson1TwitterUrl').style.display = 'block';
			document.getElementById('person1TwitterUrl').size = document.getElementById('person1TwitterUrl').placeholder.length + 1;
		}
	}
	function loadPerson1TiktokUrl() {
		if (brandData.person1TiktokUrl != null) {
			// set local storage
			localStorage.setItem('person1TiktokUrl', brandData.person1TiktokUrl);
			document.getElementById('person1TiktokUrl').value = brandData.person1TiktokUrl;
			document.getElementById('person1TiktokUrl').size = document.getElementById('person1TiktokUrl').value.length + 1;
		} else {
			document.getElementById('person1TiktokUrl').placeholder = 'https://tiktok.com/@harrydoetaco';
			document.getElementById('warningPerson1TiktokUrl').style.display = 'block';
			document.getElementById('person1TiktokUrl').size = document.getElementById('person1TiktokUrl').placeholder.length + 1;
		}
	}
	function loadPerson1() {
		loadPerson1Name();
		loadPerson1Title();
		loadPerson1Headshot();
		loadPerson1FacebookUrl();
		loadPerson1InstagramUrl();
		loadPerson1LinkedInUrl();
		loadPerson1TwitterUrl();
		loadPerson1TiktokUrl();
	}

	// person 2
	function loadPerson2Name() {
		// Person 2
		if (brandData.person2Name != null) {
			// set local storage
			localStorage.setItem('person2Name', brandData.person2Name);
			document.getElementById('person2Name').value = brandData.person2Name;
			document.getElementById('person2Name').size = document.getElementById('person2Name').value.length + 1;
		} else {
			document.getElementById('person2Name').placeholder = 'Harry Doe';
			document.getElementById('warningPerson2Name').style.display = 'block';
			document.getElementById('person2Name').size = document.getElementById('person2Name').placeholder.length + 1;
		}
	}
	function loadPerson2Title() {
		if (brandData.person2Title != null) {
			// set local storage
			localStorage.setItem('person2Title', brandData.person2Title);
			document.getElementById('person2Title').value = brandData.person2Title;
			document.getElementById('person2Title').size = document.getElementById('person2Title').value.length + 1;
		} else {
			document.getElementById('person2Title').placeholder = 'Head Chef';
			document.getElementById('warningPerson2Title').style.display = 'block';
			document.getElementById('person2Title').size = document.getElementById('person2Title').placeholder.length + 1;
		}
	}
	function loadPerson2Headshot() {
		//   if (brandData.person2Headshot != null) {
		//       // set local storage
		//       localStorage.setItem('person2Headshot', brandData.person2Headshot);
		//      document.getElementById('person2Headshot').value = brandData.person2Headshot;
		//  } else {
		//       document.getElementById('person2Headshot').placeholder = 'https://via.placeholder.com/250';
		//       document.getElementById('warningPerson2Headshot').style.display = 'block';
		//  }
	}
	function loadPerson2FacebookUrl() {
		if (brandData.person2FacebookUrl != null) {
			// set local storage
			localStorage.setItem('person2FacebookUrl', brandData.person2FacebookUrl);
			document.getElementById('person2FacebookUrl').value = brandData.person2FacebookUrl;
			document.getElementById('person2FacebookUrl').size = document.getElementById('person2FacebookUrl').value.length + 1;
		} else {
			document.getElementById('person2FacebookUrl').placeholder = 'https://facebook.com/harrydoetaco';
			document.getElementById('warningPerson2FacebookUrl').style.display = 'block';
			document.getElementById('person2FacebookUrl').size = document.getElementById('person2FacebookUrl').placeholder.length + 1;
		}
	}
	function loadPerson2InstagramUrl() {
		if (brandData.person2InstagramUrl != null) {
			// set local storage
			localStorage.setItem('person2InstagramUrl', brandData.person2InstagramUrl);
			document.getElementById('person2InstagramUrl').value = brandData.person2InstagramUrl;
			document.getElementById('person2InstagramUrl').size = document.getElementById('person2InstagramUrl').value.length + 1;
		} else {
			document.getElementById('person2InstagramUrl').placeholder = 'https://instagram.com/harrydoe.tacko';
			document.getElementById('warningPerson2InstagramUrl').style.display = 'block';
			document.getElementById('person2InstagramUrl').size = document.getElementById('person2InstagramUrl').placeholder.length + 1;
		}
	}
	function loadPerson2LinkedinUrl() {
		if (brandData.person2LinkedinUrl != null) {
			// set local storage
			localStorage.setItem('person2LinkedinUrl', brandData.person2LinkedinUrl);
			document.getElementById('person2LinkedinUrl').value = brandData.person2LinkedinUrl;
			document.getElementById('person2LinkedinUrl').size = document.getElementById('person2LinkedinUrl').value.length + 1;
		} else {
			document.getElementById('person2LinkedinUrl').placeholder = 'https://linkedin.com/in/harrydoetaco';
			document.getElementById('warningPerson2LinkedinUrl').style.display = 'block';
			document.getElementById('person2LinkedinUrl').size = document.getElementById('person2LinkedinUrl').placeholder.length + 1;
		}
	}
	function loadPerson2TwitterUrl() {
		if (brandData.person2TwitterUrl != null) {
			// set local storage
			localStorage.setItem('person2TwitterUrl', brandData.person2TwitterUrl);
			document.getElementById('person2TwitterUrl').value = brandData.person2TwitterUrl;
			document.getElementById('person2TwitterUrl').size = document.getElementById('person2TwitterUrl').value.length + 1;
		} else {
			document.getElementById('person2TwitterUrl').placeholder = 'https://twitter.com/@harrydoetaco';
			document.getElementById('warningPerson2TwitterUrl').style.display = 'block';
			document.getElementById('person2TwitterUrl').size = document.getElementById('person2TwitterUrl').placeholder.length + 1;
		}
	}
	function loadPerson2TiktokUrl() {
		if (brandData.person2TiktokUrl != null) {
			// set local storage
			localStorage.setItem('person2TiktokUrl', brandData.person2TiktokUrl);
			document.getElementById('person2TiktokUrl').value = brandData.person2TiktokUrl;
			document.getElementById('person2TiktokUrl').size = document.getElementById('person2TiktokUrl').value.length + 1;
		} else {
			document.getElementById('person2TiktokUrl').placeholder = 'https://tiktok.com/@harrydoetaco';
			document.getElementById('warningPerson2TiktokUrl').style.display = 'block';
			document.getElementById('person2TiktokUrl').size = document.getElementById('person2TiktokUrl').placeholder.length + 1;
		}
	}
	function loadPerson2() {
		loadPerson2Name();
		loadPerson2Title();
		loadPerson2Headshot();
		loadPerson2FacebookUrl();
		loadPerson2InstagramUrl();
		loadPerson2LinkedinUrl();
		loadPerson2TwitterUrl();
		loadPerson2TiktokUrl();
	}

	function loadPeople() {
		loadPerson1();
		loadPerson2();
	}

	// offer 1
	function loadOffer1Name() {
		if (brandData.offer1Name != null) {
			// set local storage
			localStorage.setItem('offer1Name', brandData.offer1Name);
			document.getElementById('offer1Name').value = brandData.offer1Name;
			document.getElementById('offer1Name').size = document.getElementById('offer1Name').value.length + 1;
		} else {
			document.getElementById('offer1Name').placeholder = 'Free Tacos';
			document.getElementById('warningOffer1Name').style.display = 'block';
			document.getElementById('offer1Name').size = document.getElementById('offer1Name').placeholder.length + 1;
		}
	}
	function loadOffer1Price() {
		if (brandData.offer1Price != null) {
			// set local storage
			localStorage.setItem('offer1Price', brandData.offer1Price);
			document.getElementById('offer1Price').value = brandData.offer1Price;
			document.getElementById('offer1Price').size = document.getElementById('offer1Price').value.length + 1;
		} else {
			document.getElementById('offer1Price').placeholder = '$0';
			document.getElementById('warningOffer1Price').style.display = 'block';
			document.getElementById('offer1Price').size = document.getElementById('offer1Price').placeholder.length + 1;
		}
	}
	function loadOffer1Feature() {
		if (brandData.offer1Feature != null) {
			// set local storage
			localStorage.setItem('offer1Feature', brandData.offer1Feature);
			document.getElementById('offer1Feature').value = brandData.offer1Feature;
			document.getElementById('offer1Feature').size = document.getElementById('offer1Feature').value.length + 1;
		} else {
			document.getElementById('offer1Feature').placeholder = 'Free Tacos for a Year';
			document.getElementById('warningOffer1Feature').style.display = 'block';
			document.getElementById('offer1Feature').size = document.getElementById('offer1Feature').placeholder.length + 1;
		}
	}
	function loadOffer1Benefit() {
		if (brandData.offer1Benefit != null) {
			// set local storage
			localStorage.setItem('offer1Benefit', brandData.offer1Benefit);
			document.getElementById('offer1Benefit').value = brandData.offer1Benefit;
			document.getElementById('offer1Benefit').size = document.getElementById('offer1Benefit').value.length + 1;
		} else {
			document.getElementById('offer1Benefit').placeholder = 'Free Tacos for a Year';
			document.getElementById('warningOffer1Benefit').style.display = 'block';
			document.getElementById('offer1Benefit').size = document.getElementById('offer1Benefit').placeholder.length + 1;
		}
	}
	function loadOffer1Solution() {
		if (brandData.offer1Solution != null) {
			// set local storage
			localStorage.setItem('offer1Solution', brandData.offer1Solution);
			document.getElementById('offer1Solution').value = brandData.offer1Solution;
			document.getElementById('offer1Solution').size = document.getElementById('offer1Solution').value.length + 1;
		} else {
			document.getElementById('offer1Solution').placeholder = 'Free Tacos for a Year';
			document.getElementById('warningOffer1Solution').style.display = 'block';
			document.getElementById('offer1Solution').size = document.getElementById('offer1Solution').placeholder.length + 1;
		}
	}
	function loadOffer1Description() {
		if (brandData.offer1Description != null) {
			// set local storage
			localStorage.setItem('offer1Description', brandData.offer1Description);
			document.getElementById('offer1Description').value = brandData.offer1Description;
			document.getElementById('offer1Description').size = document.getElementById('offer1Description').value.length + 1;
		} else {
			document.getElementById('offer1Description').placeholder = 'Free tacos for everyone!';
			document.getElementById('warningOffer1Description').style.display = 'block';
			document.getElementById('offer1Description').size = document.getElementById('offer1Description').placeholder.length + 1;
		}
	}
	function loadOffer1Image() {
		if (brandData.offer1Image != null) {
			// set local storage
			localStorage.setItem('offer1Image', brandData.offer1Image);
			document.getElementById('offer1Image').value = brandData.offer1Image;
		} else {
			document.getElementById('offer1Image').placeholder = 'https://via.placeholder.com/150';
			document.getElementById('warningOffer1Image').style.display = 'block';
		}
	}
	function loadOffer1() {
		loadOffer1Name();
		loadOffer1Price();
		loadOffer1Feature();
		loadOffer1Benefit();
		loadOffer1Solution();
		loadOffer1Description();
		loadOffer1Image();
	}

	// offer 2
	function loadOffer2Name() {
		if (brandData.offer2Name != null) {
			// set local storage
			localStorage.setItem('offer2Title', brandData.offer2Name);
			document.getElementById('offer2Name').value = brandData.offer2Name;
			document.getElementById('offer2Name').size = document.getElementById('offer2Name').value.length + 1;
		} else {
			document.getElementById('offer2Name').placeholder = 'Free Tacos';
			document.getElementById('warningOffer2Name').style.display = 'block';
			document.getElementById('offer2Name').size = document.getElementById('offer2Name').placeholder.length + 1;
		}
	}
	function loadOffer2Price() {
		if (brandData.offer2Price != null) {
			// set local storage
			localStorage.setItem('offer2Price', brandData.offer2Price);
			document.getElementById('offer2Price').value = brandData.offer2Price;
			document.getElementById('offer2Price').size = document.getElementById('offer2Price').value.length + 1;
		} else {
			document.getElementById('offer2Price').placeholder = '$0';
			document.getElementById('warningOffer2Price').style.display = 'block';
			document.getElementById('offer2Price').size = document.getElementById('offer2Price').placeholder.length + 1;
		}
	}
	function loadOffer2Feature() {
		if (brandData.offer2Feature != null) {
			// set local storage
			localStorage.setItem('offer2Feature', brandData.offer2Feature);
			document.getElementById('offer2Feature').value = brandData.offer2Feature;
			document.getElementById('offer2Feature').size = document.getElementById('offer2Feature').value.length + 1;
		} else {
			document.getElementById('offer2Feature').placeholder = 'Free Tacos for a Year';
			document.getElementById('warningOffer2Feature').style.display = 'block';
			document.getElementById('offer2Feature').size = document.getElementById('offer2Feature').placeholder.length + 1;
		}
	}
	function loadOffer2Benefit() {
		if (brandData.offer2Benefit != null) {
			// set local storage
			localStorage.setItem('offer2Benefit', brandData.offer2Benefit);
			document.getElementById('offer2Benefit').value = brandData.offer2Benefit;
			document.getElementById('offer2Benefit').size = document.getElementById('offer2Benefit').value.length + 1;
		} else {
			document.getElementById('offer2Benefit').placeholder = 'Free Tacos for a Year';
			document.getElementById('warningOffer2Benefit').style.display = 'block';
			document.getElementById('offer2Benefit').size = document.getElementById('offer2Benefit').placeholder.length + 1;
		}
	}
	function loadOffer2Solution() {
		if (brandData.offer2Solution != null) {
			// set local storage
			localStorage.setItem('offer2Solution', brandData.offer2Solution);
			document.getElementById('offer2Solution').value = brandData.offer2Solution;
			document.getElementById('offer2Solution').size = document.getElementById('offer2Solution').value.length + 1;
		} else {
			document.getElementById('offer2Solution').placeholder = 'Free Tacos for a Year';
			document.getElementById('warningOffer2Solution').style.display = 'block';
			document.getElementById('offer2Solution').size = document.getElementById('offer2Solution').placeholder.length + 1;
		}
	}
	function loadOffer2Description() {
		if (brandData.offer2Description != null) {
			// set local storage
			localStorage.setItem('offer2Description', brandData.offer2Description);
			document.getElementById('offer2Description').value = brandData.offer2Description;
			document.getElementById('offer2Description').size = document.getElementById('offer2Description').value.length + 1;
		} else {
			document.getElementById('offer2Description').placeholder = 'Free tacos for everyone!';
			document.getElementById('warningOffer2Description').style.display = 'block';
			document.getElementById('offer2Description').size = document.getElementById('offer2Description').placeholder.length + 1;
		}
	}
	function loadOffer2Image() {
		if (brandData.offer2Image != null) {
			// set local storage
			localStorage.setItem('offer2Image', brandData.offer2Image);
			document.getElementById('offer2Image').value = brandData.offer2Image;
		} else {
			document.getElementById('offer2Image').placeholder = 'https://via.placeholder.com/150';
			document.getElementById('warningOffer2Image').style.display = 'block';
		}
	}
	function loadOffer2() {
		loadOffer2Name();
		loadOffer2Price();
		loadOffer2Feature();
		loadOffer2Benefit();
		loadOffer2Solution();
		loadOffer2Description();
		loadOffer2Image();
	}

	function loadOffers() {
		loadOffer1();
		loadOffer2();
	}

	// Colors
	function loadPrimaryColor () {
		if (brandData.primaryColor != null) {
			// set local storage
			localStorage.setItem('primaryColor', brandData.primaryColor);

			document.getElementById('color').appendChild(document.createElement('option')).setAttribute('value', brandData.primaryColor);
			document.getElementById('color').lastChild.innerHTML = 'Primary Color';

			document.getElementById('primaryColor').value = brandData.primaryColor;
			// document.getElementById('inputEventPrimaryColor').value = '#ffffff';
			document.getElementById('primaryColorValueDisplay').innerHTML = 'Current Primary Color Code: ' + document.getElementById('primaryColor').value;
			document.getElementById('primaryColorValueDisplay').setAttribute('style', 'display: block;');
			document.getElementById('primaryColorValueDisplayColor').style.backgroundColor = document.getElementById('primaryColor').value;
			document.getElementById('primaryColorValueDisplayColor').style.borderColor = '#1E1E1EFF';
			document.getElementById('primaryColorValueDisplayColor').style.borderRadius = '25px';
			document.getElementById('primaryColorValueDisplayColor').style.borderWidth = '3px';
			document.getElementById('primaryColorValueDisplayColor').style.borderStyle = 'solid'

		} else {
			document.getElementById('primaryColor').placeholder = '#1d1d6e';
			document.getElementById('warningPrimaryColor').style.display = 'block';
		}
	}
	function loadSecondaryColor () {
		if (brandData.secondaryColor != null) {
			// set local storage
			localStorage.setItem('secondaryColor', brandData.secondaryColor);

			document.getElementById('color').appendChild(document.createElement('option')).setAttribute('value', brandData.secondaryColor);
			document.getElementById('color').lastChild.innerHTML = 'Secondary Color';

			document.getElementById('secondaryColor').value = brandData.secondaryColor;
			document.getElementById('secondaryColorValueDisplay').innerHTML = 'Current Primary Color Code: ' + document.getElementById('secondaryColor').value;
			document.getElementById('secondaryColorValueDisplay').setAttribute('style', 'display: block;');
			document.getElementById('secondaryColorValueDisplayColor').style.backgroundColor = document.getElementById('secondaryColor').value;
			document.getElementById('secondaryColorValueDisplayColor').style.borderColor = '#1E1E1EFF';
			document.getElementById('secondaryColorValueDisplayColor').style.borderRadius = '25px';
			document.getElementById('secondaryColorValueDisplayColor').style.borderWidth = '3px';
			document.getElementById('secondaryColorValueDisplayColor').style.borderStyle = 'solid'
		} else {
			document.getElementById('secondaryColor').placeholder = '#136513';
			document.getElementById('warningSecondaryColor').style.display = 'block';
		}
	}
	function loadTertiaryColor () {
		if (brandData.tertiaryColor != null) {
			// set local storage
			localStorage.setItem('tertiaryColor', brandData.tertiaryColor);

			document.getElementById('color').appendChild(document.createElement('option')).setAttribute('value', brandData.tertiaryColor);
			document.getElementById('color').lastChild.innerHTML = 'Tertiary Color';

			document.getElementById('tertiaryColor').value = brandData.tertiaryColor;
			document.getElementById('tertiaryColorValueDisplay').innerHTML = 'Current Primary Color Code: ' + document.getElementById('tertiaryColor').value;
			document.getElementById('tertiaryColorValueDisplay').setAttribute('style', 'display: block;');
			document.getElementById('tertiaryColorValueDisplayColor').style.backgroundColor = document.getElementById('tertiaryColor').value;
			document.getElementById('tertiaryColorValueDisplayColor').style.borderColor = '#1E1E1EFF';
			document.getElementById('tertiaryColorValueDisplayColor').style.borderRadius = '25px';
			document.getElementById('tertiaryColorValueDisplayColor').style.borderWidth = '3px';
			document.getElementById('tertiaryColorValueDisplayColor').style.borderStyle = 'solid'
		} else {
			document.getElementById('tertiaryColor').placeholder = '#9d2626';
			document.getElementById('warningTertiaryColor').style.display = 'block';
		}
	}
	function loadColors () {
		loadPrimaryColor();
		loadSecondaryColor();
		loadTertiaryColor();
	}

	// Fonts
	function loadPrimaryFont () {
		if (brandData.primaryFont != null) {
			localStorage.setItem('primaryFont', brandData.primaryFont);

			document.getElementById('text').appendChild(document.createElement('option')).setAttribute('value', brandData.tertiaryFont);
			document.getElementById('text').lastChild.innerHTML = 'Tertiary Font';

			document.getElementById('primaryFont').value = brandData.primaryFont;
			document.getElementById('primaryFont').size = document.getElementById('primaryFont').value.length + 1;
		} else {
			document.getElementById('primaryFont').placeholder = 'Arial';
			document.getElementById('warningPrimaryFont').style.display = 'block';
			document.getElementById('primaryFont').size = document.getElementById('primaryFont').placeholder.length + 1;
		}
	}
	function loadSecondaryFont () {
		if (brandData.secondaryFont != null) {
			// set local storage
			localStorage.setItem('secondaryFont', brandData.secondaryFont);

			document.getElementById('text').appendChild(document.createElement('option')).setAttribute('value', brandData.secondaryFont);
			document.getElementById('text').lastChild.innerHTML = 'Secondary Font';

			document.getElementById('secondaryFont').value = brandData.secondaryFont;
			document.getElementById('secondaryFont').size = document.getElementById('secondaryFont').value.length + 1;
		} else {
			document.getElementById('secondaryFont').placeholder = 'Arial';
			document.getElementById('warningSecondaryFont').style.display = 'block';
			document.getElementById('secondaryFont').size = document.getElementById('secondaryFont').placeholder.length + 1;
		}
	}
	function loadTertiaryFont () {
		if (brandData.tertiaryFont != null) {
			// set local storage
			localStorage.setItem('tertiaryFont', brandData.tertiaryFont);

			document.getElementById('text').appendChild(document.createElement('option')).setAttribute('value', brandData.primaryFont);
			document.getElementById('text').lastChild.innerHTML = 'Primary Font';

			document.getElementById('tertiaryFont').value = brandData.tertiaryFont;
			document.getElementById('tertiaryFont').size = document.getElementById('tertiaryFont').value.length + 1;
		} else {
			document.getElementById('tertiaryFont').placeholder = 'Arial';
			document.getElementById('warningTertiaryFont').style.display = 'block';
			document.getElementById('tertiaryFont').size = document.getElementById('tertiaryFont').placeholder.length + 1;
		}
	}
	function loadFonts () {
		loadPrimaryFont();
		loadSecondaryFont();
		loadTertiaryFont();
	}

	// Contact
	function loadPrimaryContactPhone () {
		if (brandData.primaryContactPhone != null) {
			// set local storage
			localStorage.setItem('primaryContactPhone', brandData.primaryContactPhone);

			// Create an 'option' element under the 'brandList' list for search reference in the Brand Reference Popup
			document.getElementById('valueAll').appendChild(document.createElement('option')).setAttribute('value', brandData.primaryContactPhone);
			document.getElementById('valueAll').lastChild.innerHTML = 'Primary Contact Phone';

			document.getElementById('primaryContactPhone').value = brandData.primaryContactPhone;
			document.getElementById('primaryContactPhone').size = document.getElementById('primaryContactPhone').value.length + 1;
		} else {
			document.getElementById('primaryContactPhone').placeholder = '555-555-5555';
			document.getElementById('warningPrimaryContactPhone').style.display = 'block';
			document.getElementById('primaryContactPhone').size = document.getElementById('primaryContactPhone').placeholder.length + 1;
		}
	}
	function loadPrimaryContactEmail () {
		if (brandData.primaryContactEmail != null) {
			// set local storage
			localStorage.setItem('primaryContactEmail', brandData.primaryContactEmail);

			// Create an 'option' element under the 'brandList' list for search reference in the Brand Reference Popup
			document.getElementById('valueAll').appendChild(document.createElement('option')).setAttribute('value', brandData.primaryContactEmail);
			document.getElementById('valueAll').lastChild.innerHTML = 'Primary Contact Email';

			document.getElementById('primaryContactEmail').value = brandData.primaryContactEmail;
			document.getElementById('primaryContactEmail').size = document.getElementById('primaryContactEmail').value.length + 2;
		} else {
			document.getElementById('primaryContactEmail').placeholder = 'sampleemail@gmail.com';
			document.getElementById('warningPrimaryContactEmail').style.display = 'block';
			document.getElementById('primaryContactEmail').size = document.getElementById('primaryContactEmail').placeholder.length + 3;
		}
	}
	function loadPrimaryContactWebsite () {
		if (brandData.primaryContactWebsite != null) {
			// set local storage
			localStorage.setItem('primaryContactWebsite', brandData.primaryContactWebsite);

			// Create an 'option' element under the 'brandList' list for search reference in the Brand Reference Popup
			document.getElementById('valueAll').appendChild(document.createElement('option')).setAttribute('value', brandData.primaryContactWebsite);
			document.getElementById('valueAll').lastChild.innerHTML = 'Primary Contact Website';

			document.getElementById('primaryContactWebsite').value = brandData.primaryContactWebsite;
			document.getElementById('primaryContactWebsite').size = document.getElementById('primaryContactWebsite').value.length + 1;
		} else {
			document.getElementById('primaryContactWebsite').placeholder = 'https://www.mySite.com';
			document.getElementById('warningPrimaryContactWebsite').style.display = 'block';
			document.getElementById('primaryContactWebsite').size = document.getElementById('primaryContactWebsite').placeholder.length + 1;
		}
	}
	function loadContact () {
		loadPrimaryContactPhone();
		loadPrimaryContactEmail();
		loadPrimaryContactWebsite();
	}

	// Load User Brand
	function loadUserBrand () {
		loadSocialMedia ();
		loadLogos ();
		loadOfficeAddress();
		loadHoursOfOperation();
		loadFounding();
		loadBusiness();
		loadPeople();
		loadColors ();
		loadFonts ();
		loadContact ();
		loadOffers();
	}

});

get(child(dbRef, 'assetTemplates/copy/email')).then((snapshot) => {
	if (snapshot.exists()) {
		console.log(snapshot.val());
	} else {
		console.log("No data available");
	}

	// console log the return
	for (var key in snapshot.val()) {

		let value = snapshot.val()[key];

		// Create a new div for each project
		let div = document.createElement('div');
		div.setAttribute('class', 'emailTemplate');
		div.innerHTML =

			'<details>' +
				'<summary>' + key + '</summary><br>' +
				'<span>' + value + '</span>' +
			'</details>'

		// replace the placeholder values with the actual values
		div.innerHTML = div.innerHTML.replace(/{{officeAddressStreet1}}/g, localStorage.getItem('officeAddressStreet1'));
		div.innerHTML = div.innerHTML.replace(/{{officeAddressStreet2}}/g, localStorage.getItem('officeAddressStreet2'));
		div.innerHTML = div.innerHTML.replace(/{{officeAddressCity}}/g, localStorage.getItem('officeAddressCity'));
		div.innerHTML = div.innerHTML.replace(/{{officeAddressState}}/g, localStorage.getItem('officeAddressState'));
		div.innerHTML = div.innerHTML.replace(/{{officeAddressZip}}/g, localStorage.getItem('officeAddressZip'));
		div.innerHTML = div.innerHTML.replace(/{{officeAddressCountry}}/g, localStorage.getItem('officeAddressCountry'));

		div.innerHTML = div.innerHTML.replace(/{{primaryContactPhone}}/g, localStorage.getItem('primaryContactPhone'));
		div.innerHTML = div.innerHTML.replace(/{{primaryContactEmail}}/g, localStorage.getItem('primaryContactEmail'));
		div.innerHTML = div.innerHTML.replace(/{{primaryContactWebsite}}/g, localStorage.getItem('primaryContactWebsite'));

		div.innerHTML = div.innerHTML.replace(/{{facebookUrl}}/g, localStorage.getItem('facebookUrl'));
		div.innerHTML = div.innerHTML.replace(/{{facebookUsername}}/g, localStorage.getItem('facebookUsername'));
		div.innerHTML = div.innerHTML.replace(/{{instagramUrl}}/g, localStorage.getItem('instagramUrl'));
		div.innerHTML = div.innerHTML.replace(/{{instagramUsername}}/g, localStorage.getItem('instagramUsername'));
		div.innerHTML = div.innerHTML.replace(/{{linkedinUrl}}/g, localStorage.getItem('linkedinUrl'));
		div.innerHTML = div.innerHTML.replace(/{{linkedinUsername}}/g, localStorage.getItem('linkedinUsername'));
		div.innerHTML = div.innerHTML.replace(/{{twitterUrl}}/g, localStorage.getItem('twitterUrl'));
		div.innerHTML = div.innerHTML.replace(/{{twitterUsername}}/g, localStorage.getItem('twitterUsername'));
		div.innerHTML = div.innerHTML.replace(/{{tiktokUrl}}/g, localStorage.getItem('tiktokUrl'));
		div.innerHTML = div.innerHTML.replace(/{{tiktokUsername}}/g, localStorage.getItem('tiktokUsername'));

		div.innerHTML = div.innerHTML.replace(/{{mondayOpeningTime}}/g, localStorage.getItem('mondayOpeningTime'));
		div.innerHTML = div.innerHTML.replace(/{{mondayClosingTime}}/g, localStorage.getItem('mondayClosingTime'));
		div.innerHTML = div.innerHTML.replace(/{{tuesdayOpeningTime}}/g, localStorage.getItem('tuesdayOpeningTime'));
		div.innerHTML = div.innerHTML.replace(/{{tuesdayClosingTime}}/g, localStorage.getItem('tuesdayClosingTime'));
		div.innerHTML = div.innerHTML.replace(/{{wednesdayOpeningTime}}/g, localStorage.getItem('wednesdayOpeningTime'));
		div.innerHTML = div.innerHTML.replace(/{{wednesdayClosingTime}}/g, localStorage.getItem('wednesdayClosingTime'));
		div.innerHTML = div.innerHTML.replace(/{{thursdayOpeningTime}}/g, localStorage.getItem('thursdayOpeningTime'));
		div.innerHTML = div.innerHTML.replace(/{{thursdayClosingTime}}/g, localStorage.getItem('thursdayClosingTime'));
		div.innerHTML = div.innerHTML.replace(/{{fridayOpeningTime}}/g, localStorage.getItem('fridayOpeningTime'));
		div.innerHTML = div.innerHTML.replace(/{{fridayClosingTime}}/g, localStorage.getItem('fridayClosingTime'));
		div.innerHTML = div.innerHTML.replace(/{{saturdayOpeningTime}}/g, localStorage.getItem('saturdayOpeningTime'));
		div.innerHTML = div.innerHTML.replace(/{{saturdayClosingTime}}/g, localStorage.getItem('saturdayClosingTime'));
		div.innerHTML = div.innerHTML.replace(/{{sundayOpeningTime}}/g, localStorage.getItem('sundayOpeningTime'));
		div.innerHTML = div.innerHTML.replace(/{{sundayClosingTime}}/g, localStorage.getItem('sundayClosingTime'));

		div.innerHTML = div.innerHTML.replace(/{{founderName}}/g, localStorage.getItem('founderName'));
		div.innerHTML = div.innerHTML.replace(/{{foundingDate}}/g, localStorage.getItem('foundingDate'));
		div.innerHTML = div.innerHTML.replace(/{{tradeBusinessName}}/g, localStorage.getItem('tradeBusinessName'));
		div.innerHTML = div.innerHTML.replace(/{{legalBusinessName}}/g, localStorage.getItem('legalBusinessName'));

		div.innerHTML = div.innerHTML.replace(/{{businessType}}/g, localStorage.getItem('businessType'));
		div.innerHTML = div.innerHTML.replace(/{{slogan}}/g, localStorage.getItem('slogan'));
		div.innerHTML = div.innerHTML.replace(/{{missionStatement}}/g, localStorage.getItem('missionStatement'));
		div.innerHTML = div.innerHTML.replace(/{{valueProp}}/g, localStorage.getItem('valueProp'));

		// add the new div to the section with the id of "projects"
		document.getElementById('copy/email').appendChild(div);

	}}).catch((error) => {
	console.error(error);
	});