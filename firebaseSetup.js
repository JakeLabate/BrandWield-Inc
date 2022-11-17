
// Import CDN Resources
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

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

// Get Brand Variables
const dbRef = ref(getDatabase());
const brand = 'Labate Group';
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
		document.getElementById('squareLogoBro').src = snapshot.val().squareLogo;
		document.getElementById('squareLogoBro').style.maxWidth = '32px';
		document.getElementById('squareLogoBro').style.maxHeight = '32px';
		localStorage.setItem('squareLogo', snapshot.val().squareLogo);
		document.getElementById("logoIcon").src = snapshot.val().squareLogo;
	} else {
	}
	// fullLogo
	if (snapshot.val().fullLogo != null) {
		document.getElementById('fullLogoBro').src = snapshot.val().fullLogo;
		document.getElementById('fullLogoBro').style.maxWidth = '250px';
		document.getElementById('fullLogoBro').style.maxHeight = '250px';
	} else {
	}

	// Social Media

	if (snapshot.val().facebookUrl != null) {
		document.getElementById('facebookUrl').value = snapshot.val().facebookUrl;
		document.getElementById('facebookUrl').size = document.getElementById('person1FacebookUrl').value.length + 1;
	} else {
		document.getElementById('facebookUrl').placeholder = 'https://facebook.com/myPage';
		document.getElementById('warningFacebookURL').style.display = 'block';
		document.getElementById('facebookUrl').size = document.getElementById('facebookUrl').placeholder.length + 1;
	}

	if (snapshot.val().facebookUsername != null) {
		document.getElementById('facebookUsername').value = snapshot.val().facebookUsername;
		document.getElementById('facebookUsername').size = document.getElementById('facebookUsername').value.length + 1;
	} else {
		document.getElementById('facebookUsername').placeholder = 'myPage';
		document.getElementById('warningFacebookUsername').style.display = 'block';
		document.getElementById('facebookUsername').size = document.getElementById('facebookUsername').placeholder.length + 1;
	}

	if (snapshot.val().instagramUrl != null) {
		document.getElementById('instagramUrl').value = snapshot.val().instagramUrl;
		document.getElementById('instagramUrl').size = document.getElementById('instagramUrl').value.length + 1;
	} else {
		document.getElementById('instagramUrl').placeholder = 'https://instagram.com/myPage';
		document.getElementById('warningInstagramURL').style.display = 'block';
		document.getElementById('instagramUrl').size = document.getElementById('instagramUrl').placeholder.length + 1;
	}

	if (snapshot.val().instagramUsername != null) {
		document.getElementById('instagramUsername').value = snapshot.val().instagramUsername;
		document.getElementById('instagramUsername').size = document.getElementById('instagramUsername').value.length + 1;
	} else {
		document.getElementById('instagramUsername').placeholder = 'myPage';
		document.getElementById('warningInstagramUsername').style.display = 'block';
		document.getElementById('instagramUsername').size = document.getElementById('instagramUsername').placeholder.length + 1;
	}

	if (snapshot.val().linkedinUrl != null) {
		document.getElementById('linkedinUrl').value = snapshot.val().linkedinUrl;
		document.getElementById('linkedinUrl').size = document.getElementById('linkedinUrl').value.length + 1;
	} else {
		document.getElementById('linkedinUrl').placeholder = 'https://linkedin.com/myPage';
		document.getElementById('warningLinkedinURL').style.display = 'block';
		document.getElementById('linkedinUrl').size = document.getElementById('linkedinUrl').placeholder.length + 1;
	}

	if (snapshot.val().linkedinUsername != null) {
		document.getElementById('linkedinUsername').value = snapshot.val().linkedinUsername;
		document.getElementById('linkedinUsername').size = document.getElementById('linkedinUsername').value.length + 1;
	} else {
		document.getElementById('linkedinUsername').placeholder = 'myPage';
		document.getElementById('warningLinkedinUsername').style.display = 'block';
		document.getElementById('linkedinUsername').size = document.getElementById('linkedinUsername').placeholder.length + 1;
	}

	if (snapshot.val().twitterUrl != null) {
		document.getElementById('twitterUrl').value = snapshot.val().twitterUrl;
		document.getElementById('twitterUrl').size = document.getElementById('twitterUrl').value.length + 1;
	} else {
		document.getElementById('twitterUrl').placeholder = 'https://twitter.com/myPage';
		document.getElementById('warningTwitterURL').style.display = 'block';
		document.getElementById('twitterUrl').size = document.getElementById('twitterUrl').placeholder.length + 1;
	}

	if (snapshot.val().twitterUsername != null) {
		document.getElementById('twitterUsername').value = snapshot.val().twitterUsername;
		document.getElementById('twitterUsername').size = document.getElementById('twitterUsername').value.length + 1;
	} else {
		document.getElementById('twitterUsername').placeholder = 'myPage';
		document.getElementById('warningTwitterUsername').style.display = 'block';
		document.getElementById('twitterUsername').size = document.getElementById('twitterUsername').placeholder.length + 1;
	}

	if (snapshot.val().tiktokUrl != null) {
		document.getElementById('tiktokUrl').value = snapshot.val().tiktokUrl;
		document.getElementById('tiktokUrl').size = document.getElementById('tiktokUrl').value.length + 1;
	} else {
		document.getElementById('tiktokUrl').placeholder = 'https://tiktok.com/myPage';
		document.getElementById('warningTiktokURL').style.display = 'block';
		document.getElementById('tiktokUrl').size = document.getElementById('tiktokUrl').placeholder.length + 1;
	}

	if (snapshot.val().tiktokUsername != null) {
		document.getElementById('tiktokUsername').value = snapshot.val().tiktokUsername;
		document.getElementById('tiktokUsername').size = document.getElementById('tiktokUsername').value.length + 1;
	} else {
		document.getElementById('tiktokUsername').placeholder = 'myPage';
		document.getElementById('warningTiktokUsername').style.display = 'block';
		document.getElementById('tiktokUsername').size = document.getElementById('tiktokUsername').placeholder.length + 1;
	}

	// Colors

	if (snapshot.val().primaryColor != null) {
		document.getElementById('primaryColor').value = snapshot.val().primaryColor;
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

	if (snapshot.val().secondaryColor != null) {
		document.getElementById('secondaryColor').value = snapshot.val().secondaryColor;
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

	if (snapshot.val().tertiaryColor != null) {
		document.getElementById('tertiaryColor').value = snapshot.val().tertiaryColor;
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

	// Fonts

	if (snapshot.val().primaryFont != null) {
		document.getElementById('primaryFont').value = snapshot.val().primaryFont;
		document.getElementById('primaryFont').size = document.getElementById('primaryFont').value.length + 1;
	} else {
		document.getElementById('primaryFont').placeholder = 'Arial';
		document.getElementById('warningPrimaryFont').style.display = 'block';
		document.getElementById('primaryFont').size = document.getElementById('primaryFont').placeholder.length + 1;
	}

	if (snapshot.val().secondaryFont != null) {
		document.getElementById('secondaryFont').value = snapshot.val().secondaryFont;
		document.getElementById('secondaryFont').size = document.getElementById('secondaryFont').value.length + 1;
	} else {
		document.getElementById('secondaryFont').placeholder = 'Arial';
		document.getElementById('warningSecondaryFont').style.display = 'block';
		document.getElementById('secondaryFont').size = document.getElementById('secondaryFont').placeholder.length + 1;
	}

	if (snapshot.val().tertiaryFont != null) {
		document.getElementById('tertiaryFont').value = snapshot.val().tertiaryFont;
		document.getElementById('tertiaryFont').size = document.getElementById('tertiaryFont').value.length + 1;
	} else {
		document.getElementById('tertiaryFont').placeholder = 'Arial';
		document.getElementById('warningTertiaryFont').style.display = 'block';
		document.getElementById('tertiaryFont').size = document.getElementById('tertiaryFont').placeholder.length + 1;
	}

	// Contact Info

	if (snapshot.val().primaryContactPhone != null) {
		document.getElementById('primaryContactPhone').value = snapshot.val().primaryContactPhone;
		document.getElementById('primaryContactPhone').size = document.getElementById('primaryContactPhone').value.length + 1;
		document.getElementById('draggablePrimaryContactPhone').innerHTML = 'Contact Phone: ' + snapshot.val().primaryContactPhone;
	} else {
		document.getElementById('primaryContactPhone').placeholder = '555-555-5555';
		document.getElementById('warningPrimaryContactPhone').style.display = 'block';
		document.getElementById('primaryContactPhone').size = document.getElementById('primaryContactPhone').placeholder.length + 1;
	}

	if (snapshot.val().primaryContactEmail != null) {
		document.getElementById('primaryContactEmail').value = snapshot.val().primaryContactEmail;
		document.getElementById('primaryContactEmail').size = document.getElementById('primaryContactEmail').value.length + 2;
		document.getElementById('draggablePrimaryContactEmail').innerHTML = 'Contact Email: ' + snapshot.val().primaryContactEmail;
	} else {
		document.getElementById('primaryContactEmail').placeholder = 'sampleemail@gmail.com';
		document.getElementById('warningPrimaryContactEmail').style.display = 'block';
		document.getElementById('primaryContactEmail').size = document.getElementById('primaryContactEmail').placeholder.length + 3;
	}

	if (snapshot.val().primaryContactWebsite != null) {
		document.getElementById('primaryContactWebsite').value = snapshot.val().primaryContactWebsite;
		document.getElementById('primaryContactWebsite').size = document.getElementById('primaryContactWebsite').value.length + 1;
		document.getElementById('draggablePrimaryContactWebsite').innerHTML = 'Contact Website: ' + snapshot.val().primaryContactWebsite;
	} else {
		document.getElementById('primaryContactWebsite').placeholder = 'https://www.mySite.com';
		document.getElementById('warningPrimaryContactWebsite').style.display = 'block';
		document.getElementById('primaryContactWebsite').size = document.getElementById('primaryContactWebsite').placeholder.length + 1;
	}

	// Address

	if (snapshot.val().officeAddressStreet1 != null) {
		document.getElementById('officeAddressStreet1').value = snapshot.val().officeAddressStreet1;
		document.getElementById('officeAddressStreet1').size = document.getElementById('officeAddressStreet1').value.length + 1;
	} else {
		document.getElementById('officeAddressStreet1').placeholder = '123 Main Street';
		document.getElementById('warningOfficeAddressStreet1').style.display = 'block';
		document.getElementById('officeAddressStreet1').size = document.getElementById('officeAddressStreet1').placeholder.length + 1;
	}

	if (snapshot.val().officeAddressStreet2 != null) {
		document.getElementById('officeAddressStreet2').value = snapshot.val().officeAddressStreet2;
		document.getElementById('officeAddressStreet2').size = document.getElementById('officeAddressStreet2').value.length + 1;
	} else {
		document.getElementById('officeAddressStreet2').placeholder = 'Suite 100';
		document.getElementById('warningOfficeAddressStreet2').style.display = 'block';
		document.getElementById('officeAddressStreet2').size = document.getElementById('officeAddressStreet2').placeholder.length + 1;
	}

	if (snapshot.val().officeAddressCity != null) {
		document.getElementById('officeAddressCity').value = snapshot.val().officeAddressCity;
		document.getElementById('officeAddressCity').size = document.getElementById('officeAddressCity').value.length + 1;
	} else {
		document.getElementById('officeAddressCity').placeholder = 'New York';
		document.getElementById('warningOfficeAddressCity').style.display = 'block';
		document.getElementById('officeAddressCity').size = document.getElementById('officeAddressCity').placeholder.length + 1;
	}

	if (snapshot.val().officeAddressState != null) {
		document.getElementById('officeAddressState').value = snapshot.val().officeAddressState;
		document.getElementById('officeAddressState').size = document.getElementById('officeAddressState').value.length + 1;
	} else {
		document.getElementById('officeAddressState').placeholder = 'NY';
		document.getElementById('warningOfficeAddressState').style.display = 'block';
		document.getElementById('officeAddressState').size = document.getElementById('officeAddressState').placeholder.length + 1;
	}

	if (snapshot.val().officeAddressZip != null) {
		document.getElementById('officeAddressZip').value = snapshot.val().officeAddressZip;
		document.getElementById('officeAddressZip').size = document.getElementById('officeAddressZip').value.length + 1;
	} else {
		document.getElementById('officeAddressZip').placeholder = '10001';
		document.getElementById('warningOfficeAddressZip').style.display = 'block';
		document.getElementById('officeAddressZip').size = document.getElementById('officeAddressZip').placeholder.length + 1;
	}

	if (snapshot.val().officeAddressCountry != null) {
		document.getElementById('officeAddressCountry').value = snapshot.val().officeAddressCountry;
		document.getElementById('officeAddressCountry').size = document.getElementById('officeAddressCountry').value.length + 1;
	} else {
		document.getElementById('officeAddressCountry').placeholder = 'USA';
		document.getElementById('warningOfficeAddressCountry').style.display = 'block';
		document.getElementById('officeAddressCountry').size = document.getElementById('officeAddressCountry').placeholder.length + 1;
	}

	// Hours of Operation

	if (snapshot.val().mondayOpeningTime != null) {
		document.getElementById('mondayOpeningTime').size = document.getElementById('mondayOpeningTime').value.length + 1;
	} else {
		document.getElementById('mondayOpeningTime').placeholder = '9:00 AM';
		document.getElementById('warningMondayOpeningTime').style.display = 'block';
	}

	if (snapshot.val().mondayClosingTime != null) {
		document.getElementById('mondayClosingTime').value = snapshot.val().mondayClosingTime;
	} else {
		document.getElementById('mondayClosingTime').placeholder = '5:00 PM';
		document.getElementById('warningMondayClosingTime').style.display = 'block';
	}

	if (snapshot.val().tuesdayOpeningTime != null) {
		document.getElementById('tuesdayOpeningTime').value = snapshot.val().tuesdayOpeningTime;
	} else {
		document.getElementById('tuesdayOpeningTime').placeholder = '9:00 AM';
		document.getElementById('warningTuesdayOpeningTime').style.display = 'block';
	}

	if (snapshot.val().tuesdayClosingTime != null) {
		document.getElementById('tuesdayClosingTime').value = snapshot.val().tuesdayClosingTime;
	} else {
		document.getElementById('tuesdayClosingTime').placeholder = '5:00 PM';
		document.getElementById('warningTuesdayClosingTime').style.display = 'block';
	}

	if (snapshot.val().wednesdayOpeningTime != null) {
		document.getElementById('wednesdayOpeningTime').value = snapshot.val().wednesdayOpeningTime;
	} else {
		document.getElementById('wednesdayOpeningTime').placeholder = '9:00 AM';
		document.getElementById('warningWednesdayOpeningTime').style.display = 'block';
	}

	if (snapshot.val().wednesdayClosingTime != null) {
		document.getElementById('wednesdayClosingTime').value = snapshot.val().wednesdayClosingTime;
	} else {
		document.getElementById('wednesdayClosingTime').placeholder = '5:00 PM';
		document.getElementById('warningWednesdayClosingTime').style.display = 'block';
	}

	if (snapshot.val().thursdayOpeningTime != null) {
		document.getElementById('thursdayOpeningTime').value = snapshot.val().thursdayOpeningTime;
	} else {
		document.getElementById('thursdayOpeningTime').placeholder = '9:00 AM';
		document.getElementById('warningThursdayOpeningTime').style.display = 'block';
	}

	if (snapshot.val().thursdayClosingTime != null) {
		document.getElementById('thursdayClosingTime').value = snapshot.val().thursdayClosingTime;
	} else {
		document.getElementById('thursdayClosingTime').placeholder = '5:00 PM';
		document.getElementById('warningThursdayClosingTime').style.display = 'block';
	}

	if (snapshot.val().fridayOpeningTime != null) {
		document.getElementById('fridayOpeningTime').value = snapshot.val().fridayOpeningTime;
	} else {
		document.getElementById('fridayOpeningTime').placeholder = '9:00 AM';
		document.getElementById('warningFridayOpeningTime').style.display = 'block';
	}

	if (snapshot.val().fridayClosingTime != null) {
		document.getElementById('fridayClosingTime').value = snapshot.val().fridayClosingTime;
	} else {
		document.getElementById('fridayClosingTime').placeholder = '5:00 PM';
		document.getElementById('warningFridayClosingTime').style.display = 'block';
	}

	if (snapshot.val().saturdayOpeningTime != null) {
		document.getElementById('saturdayOpeningTime').value = snapshot.val().saturdayOpeningTime;
	} else {
		document.getElementById('saturdayOpeningTime').placeholder = '9:00 AM';
		document.getElementById('warningSaturdayOpeningTime').style.display = 'block';
	}

	if (snapshot.val().saturdayClosingTime != null) {
		document.getElementById('saturdayClosingTime').value = snapshot.val().saturdayClosingTime;
	} else {
		document.getElementById('saturdayClosingTime').placeholder = '5:00 PM';
		document.getElementById('warningSaturdayClosingTime').style.display = 'block';
	}

	if (snapshot.val().sundayOpeningTime != null) {
		document.getElementById('sundayOpeningTime').value = snapshot.val().sundayOpeningTime;
	} else {
		document.getElementById('sundayOpeningTime').placeholder = '9:00 AM';
		document.getElementById('warningSundayOpeningTime').style.display = 'block';
	}

	if (snapshot.val().sundayClosingTime != null) {
		document.getElementById('sundayClosingTime').value = snapshot.val().sundayClosingTime;
	} else {
		document.getElementById('sundayClosingTime').placeholder = '5:00 PM';
		document.getElementById('warningSundayClosingTime').style.display = 'block';
	}

	// Founding Info

	if (snapshot.val().founderName != null) {
		document.getElementById('founderName').value = snapshot.val().founderName;
		document.getElementById('founderName').size = document.getElementById('founderName').value.length + 1;
		document.getElementById('draggableFounderName').innerHTML = 'Founder Name: ' + snapshot.val().founderName;
	} else {
		document.getElementById('founder').placeholder = 'John Doe';
		document.getElementById('warningFounderName').style.display = 'block';
		document.getElementById('founderName').size = document.getElementById('founderName').placeholder.length + 1;
	}

	if (snapshot.val().foundingDate != null) {
		document.getElementById('foundingDate').value = snapshot.val().foundingDate;
		document.getElementById('draggableFoundingDate').innerHTML = 'Founding Date: ' + snapshot.val().foundingDate;
	} else {
		document.getElementById('foundingDate').placeholder = '2017';
		document.getElementById('warningFoundingDate').style.display = 'block';
	}

	if (snapshot.val().tradeBusinessName != null) {
		document.getElementById('tradeBusinessName').value = snapshot.val().tradeBusinessName;
		document.getElementById('tradeBusinessName').size = document.getElementById('tradeBusinessName').value.length + 1;
		document.getElementById('draggableTradeBusinessName').innerHTML = 'Trade Business Name: ' + snapshot.val().tradeBusinessName;

	} else {
		document.getElementById('tradeBusinessName').placeholder = 'John\'s Tacos';
		document.getElementById('warningTradeBusinessName').style.display = 'block';
		document.getElementById('tradeBusinessName').size = document.getElementById('tradeBusinessName').placeholder.length + 1;
	}

	if (snapshot.val().legalBusinessName != null) {
		document.getElementById('legalBusinessName').value = snapshot.val().legalBusinessName;
		document.getElementById('legalBusinessName').size = document.getElementById('legalBusinessName').value.length + 1;
		document.getElementById('draggableLegalBusinessName').innerHTML = 'Legal Business Name: ' + snapshot.val().legalBusinessName;

	} else {
		document.getElementById('legalBusinessName').placeholder = 'John\'s Tacos LLC';
		document.getElementById('warningLegalBusinessName').style.display = 'block';
		document.getElementById('legalBusinessName').size = document.getElementById('legalBusinessName').placeholder.length + 1;
	}

	// Basic Info

	if (snapshot.val().businessType != null) {
		document.getElementById('businessType').value = snapshot.val().businessType;
		document.getElementById('businessType').size = document.getElementById('businessType').value.length + 1;
		document.getElementById('draggableBusinessType').innerHTML = 'Business Type: ' + snapshot.val().businessType;

	} else {
		document.getElementById('businessType').placeholder = 'Restaurant';
		document.getElementById('warningBusinessType').style.display = 'block';
	}

	if (snapshot.val().slogan != null) {
		document.getElementById('slogan').value = snapshot.val().slogan;
		document.getElementById('slogan').size = document.getElementById('slogan').value.length + 1;
		document.getElementById('draggableSlogan').innerHTML = 'Slogan: ' + snapshot.val().slogan;
	} else {
		document.getElementById('slogan').placeholder = 'The Best Tacos in Town';
		document.getElementById('warningSlogan').style.display = 'block';
		document.getElementById('slogan').size = document.getElementById('slogan').placeholder.length + 1;
	}

	if (snapshot.val().missionStatement != null) {
		document.getElementById('missionStatement').value = snapshot.val().missionStatement;
		document.getElementById('missionStatement').size = document.getElementById('missionStatement').value.length + 1;
		document.getElementById('draggableMissionStatement').innerHTML = 'Mission Statement: ' + snapshot.val().missionStatement;
	} else {
		document.getElementById('missionStatement').placeholder = 'To provide the best tacos in town';
		document.getElementById('warningMissionStatement').style.display = 'block';
		document.getElementById('missionStatement').size = document.getElementById('missionStatement').placeholder.length + 1;
	}

	if (snapshot.val().valueProp != null) {
		document.getElementById('valueProp').value = snapshot.val().valueProp;
		document.getElementById('valueProp').size = document.getElementById('valueProp').value.length + 1;
		document.getElementById('draggableValueProp').innerHTML = 'Value Proposition: ' + snapshot.val().valueProp;
	} else {
		document.getElementById('valueProp').placeholder = 'We make tacos with only the finest and freshest ingredients';
		document.getElementById('warningValueProp').style.display = 'block';
		document.getElementById('valueProp').size = document.getElementById('valueProp').placeholder.length + 1;
	}

	// People

	// Person 1
	if (snapshot.val().person1Name != null) {
		document.getElementById('person1Name').value = snapshot.val().person1Name;
		document.getElementById('person1Name').size = document.getElementById('person1Name').value.length + 1;
	} else {
		document.getElementById('person1Name').placeholder = 'Harry Doe';
		document.getElementById('warningPerson1Name').style.display = 'block';
		document.getElementById('person1Name').size = document.getElementById('person1Name').placeholder.length + 1;
	}

	if (snapshot.val().person1Title != null) {
		document.getElementById('person1Title').value = snapshot.val().person1Title;
		document.getElementById('person1Title').size = document.getElementById('person1Title').value.length + 1;
	} else {
		document.getElementById('person1Title').placeholder = 'Head Chef';
		document.getElementById('warningPerson1Title').style.display = 'block';
		document.getElementById('person1Title').size = document.getElementById('person1Title').placeholder.length + 1;
	}

	//   if (snapshot.val().person1Headshot != null) {
	//      document.getElementById('person1Headshot').value = snapshot.val().person1Headshot;
	//  } else {
	//      document.getElementById('person1Headshot').placeholder = 'https://via.placeholder.com/150';
	//       document.getElementById('warningPerson1Headshot').style.display = 'block';
	//   }

	if (snapshot.val().person1FacebookUrl != null) {
		document.getElementById('person1FacebookUrl').value = snapshot.val().person1FacebookUrl;
		document.getElementById('person1FacebookUrl').size = document.getElementById('person1FacebookUrl').value.length + 1;

	} else {
		document.getElementById('person1FacebookUrl').placeholder = 'https://facebook.com/harrydoetaco';
		document.getElementById('warningPerson1FacebookUrl').style.display = 'block';
		document.getElementById('person1FacebookUrl').size = document.getElementById('person1FacebookUrl').placeholder.length + 1;
	}

	if (snapshot.val().person1InstagramUrl != null) {
		document.getElementById('person1InstagramUrl').value = snapshot.val().person1InstagramUrl;
		document.getElementById('person1InstagramUrl').size = document.getElementById('person1InstagramUrl').value.length + 1;
	} else {
		document.getElementById('person1InstagramUrl').placeholder = 'https://instagram.com/harrydoe.tacko';
		document.getElementById('warningPerson1InstagramUrl').style.display = 'block';
		document.getElementById('person1InstagramUrl').size = document.getElementById('person1InstagramUrl').placeholder.length + 1;
	}

	if (snapshot.val().person1LinkedinUrl != null) {
		document.getElementById('person1LinkedinUrl').value = snapshot.val().person1LinkedinUrl;
		document.getElementById('person1LinkedinUrl').size = document.getElementById('person1LinkedinUrl').value.length + 1;
	} else {
		document.getElementById('person1LinkedinUrl').placeholder = 'https://linkedin.com/in/harrydoetaco';
		document.getElementById('warningPerson1LinkedinUrl').style.display = 'block';
		document.getElementById('person1LinkedinUrl').size = document.getElementById('person1LinkedinUrl').placeholder.length + 1;
	}

	if (snapshot.val().person1TwitterUrl != null) {
		document.getElementById('person1TwitterUrl').value = snapshot.val().person1TwitterUrl;
		document.getElementById('person1TwitterUrl').size = document.getElementById('person1TwitterUrl').value.length + 1;
	} else {
		document.getElementById('person1TwitterUrl').placeholder = 'https://twitter.com/@harrydoetaco';
		document.getElementById('warningPerson1TwitterUrl').style.display = 'block';
		document.getElementById('person1TwitterUrl').size = document.getElementById('person1TwitterUrl').placeholder.length + 1;
	}

	if (snapshot.val().person1TiktokUrl != null) {
		document.getElementById('person1TiktokUrl').value = snapshot.val().person1TiktokUrl;
		document.getElementById('person1TiktokUrl').size = document.getElementById('person1TiktokUrl').value.length + 1;
	} else {
		document.getElementById('person1TiktokUrl').placeholder = 'https://tiktok.com/@harrydoetaco';
		document.getElementById('warningPerson1TiktokUrl').style.display = 'block';
		document.getElementById('person1TiktokUrl').size = document.getElementById('person1TiktokUrl').placeholder.length + 1;
	}

	// Person 2

	if (snapshot.val().person2Name != null) {
		document.getElementById('person2Name').value = snapshot.val().person2Name;
		document.getElementById('person2Name').size = document.getElementById('person2Name').value.length + 1;
	} else {
		document.getElementById('person2Name').placeholder = 'Harry Doe';
		document.getElementById('warningPerson2Name').style.display = 'block';
		document.getElementById('person2Name').size = document.getElementById('person2Name').placeholder.length + 1;
	}

	if (snapshot.val().person2Title != null) {
		document.getElementById('person2Title').value = snapshot.val().person2Title;
		document.getElementById('person2Title').size = document.getElementById('person2Title').value.length + 1;
	} else {
		document.getElementById('person2Title').placeholder = 'Head Chef';
		document.getElementById('warningPerson2Title').style.display = 'block';
		document.getElementById('person2Title').size = document.getElementById('person2Title').placeholder.length + 1;
	}

	//   if (snapshot.val().person2Headshot != null) {
	//      document.getElementById('person2Headshot').value = snapshot.val().person2Headshot;
	//  } else {
	//       document.getElementById('person2Headshot').placeholder = 'https://via.placeholder.com/250';
	//       document.getElementById('warningPerson2Headshot').style.display = 'block';
	//  }

	if (snapshot.val().person2FacebookUrl != null) {
		document.getElementById('person2FacebookUrl').value = snapshot.val().person2FacebookUrl;
		document.getElementById('person2FacebookUrl').size = document.getElementById('person2FacebookUrl').value.length + 1;
	} else {
		document.getElementById('person2FacebookUrl').placeholder = 'https://facebook.com/harrydoetaco';
		document.getElementById('warningPerson2FacebookUrl').style.display = 'block';
		document.getElementById('person2FacebookUrl').size = document.getElementById('person2FacebookUrl').placeholder.length + 1;
	}

	if (snapshot.val().person2InstagramUrl != null) {
		document.getElementById('person2InstagramUrl').value = snapshot.val().person2InstagramUrl;
		document.getElementById('person2InstagramUrl').size = document.getElementById('person2InstagramUrl').value.length + 1;
	} else {
		document.getElementById('person2InstagramUrl').placeholder = 'https://instagram.com/harrydoe.tacko';
		document.getElementById('warningPerson2InstagramUrl').style.display = 'block';
		document.getElementById('person2InstagramUrl').size = document.getElementById('person2InstagramUrl').placeholder.length + 1;
	}

	if (snapshot.val().person2LinkedinUrl != null) {
		document.getElementById('person2LinkedinUrl').value = snapshot.val().person2LinkedinUrl;
		document.getElementById('person2LinkedinUrl').size = document.getElementById('person2LinkedinUrl').value.length + 1;
	} else {
		document.getElementById('person2LinkedinUrl').placeholder = 'https://linkedin.com/in/harrydoetaco';
		document.getElementById('warningPerson2LinkedinUrl').style.display = 'block';
		document.getElementById('person2LinkedinUrl').size = document.getElementById('person2LinkedinUrl').placeholder.length + 1;
	}

	if (snapshot.val().person2TwitterUrl != null) {
		document.getElementById('person2TwitterUrl').value = snapshot.val().person2TwitterUrl;
		document.getElementById('person2TwitterUrl').size = document.getElementById('person2TwitterUrl').value.length + 1;
	} else {
		document.getElementById('person2TwitterUrl').placeholder = 'https://twitter.com/@harrydoetaco';
		document.getElementById('warningPerson2TwitterUrl').style.display = 'block';
		document.getElementById('person2TwitterUrl').size = document.getElementById('person2TwitterUrl').placeholder.length + 1;
	}

	if (snapshot.val().person2TiktokUrl != null) {
		document.getElementById('person2TiktokUrl').value = snapshot.val().person2TiktokUrl;
		document.getElementById('person2TiktokUrl').size = document.getElementById('person2TiktokUrl').value.length + 1;
	} else {
		document.getElementById('person2TiktokUrl').placeholder = 'https://tiktok.com/@harrydoetaco';
		document.getElementById('warningPerson2TiktokUrl').style.display = 'block';
		document.getElementById('person2TiktokUrl').size = document.getElementById('person2TiktokUrl').placeholder.length + 1;
	}

	// Offers

	// Offer 1
	if (snapshot.val().offer1Name != null) {
		document.getElementById('offer1Name').value = snapshot.val().offer1Title;
		document.getElementById('offer1Name').size = document.getElementById('offer1Name').value.length + 1;
	} else {
		document.getElementById('offer1Name').placeholder = 'Free Tacos';
		document.getElementById('warningOffer1Name').style.display = 'block';
		document.getElementById('offer1Name').size = document.getElementById('offer1Name').placeholder.length + 1;
	}

	if (snapshot.val().offer1Price != null) {
		document.getElementById('offer1Price').value = snapshot.val().offer1Price;
		document.getElementById('offer1Price').size = document.getElementById('offer1Price').value.length + 1;
	} else {
		document.getElementById('offer1Price').placeholder = '$0';
		document.getElementById('warningOffer1Price').style.display = 'block';
		document.getElementById('offer1Price').size = document.getElementById('offer1Price').placeholder.length + 1;
	}

	if (snapshot.val().offer1Feature != null) {
		document.getElementById('offer1Feature').value = snapshot.val().offer1Feature;
		document.getElementById('offer1Feature').size = document.getElementById('offer1Feature').value.length + 1;
	} else {
		document.getElementById('offer1Feature').placeholder = 'Free Tacos for a Year';
		document.getElementById('warningOffer1Feature').style.display = 'block';
		document.getElementById('offer1Feature').size = document.getElementById('offer1Feature').placeholder.length + 1;
	}

	if (snapshot.val().offer1Benefit != null) {
		document.getElementById('offer1Benefit').value = snapshot.val().offer1Benefit;
		document.getElementById('offer1Benefit').size = document.getElementById('offer1Benefit').value.length + 1;
	} else {
		document.getElementById('offer1Benefit').placeholder = 'Free Tacos for a Year';
		document.getElementById('warningOffer1Benefit').style.display = 'block';
		document.getElementById('offer1Benefit').size = document.getElementById('offer1Benefit').placeholder.length + 1;
	}

	if (snapshot.val().offer1Solution != null) {
		document.getElementById('offer1Solution').value = snapshot.val().offer1Solution;
		document.getElementById('offer1Solution').size = document.getElementById('offer1Solution').value.length + 1;
	} else {
		document.getElementById('offer1Solution').placeholder = 'Free Tacos for a Year';
		document.getElementById('warningOffer1Solution').style.display = 'block';
		document.getElementById('offer1Solution').size = document.getElementById('offer1Solution').placeholder.length + 1;
	}

	if (snapshot.val().offer1Description != null) {
		document.getElementById('offer1Description').value = snapshot.val().offer1Description;
		document.getElementById('offer1Description').size = document.getElementById('offer1Description').value.length + 1;
	} else {
		document.getElementById('offer1Description').placeholder = 'Free tacos for everyone!';
		document.getElementById('warningOffer1Description').style.display = 'block';
		document.getElementById('offer1Description').size = document.getElementById('offer1Description').placeholder.length + 1;
	}

	//   if (snapshot.val().offer1Image != null) {
	//      document.getElementById('offer1Image').value = snapshot.val().offer1Image;
	//   } else {
	//      document.getElementById('offer1Image').placeholder = 'https://via.placeholder.com/150';
	//       document.getElementById('warningOffer1Image').style.display = 'block';
	//   }

	// Offer 2

	if (snapshot.val().offer2Title != null) {
		document.getElementById('offer2Name').value = snapshot.val().offer2Name;
		document.getElementById('offer2Name').size = document.getElementById('offer2Name').value.length + 1;
	} else {
		document.getElementById('offer2Name').placeholder = 'Free Tacos';
		document.getElementById('warningOffer2Name').style.display = 'block';
		document.getElementById('offer2Name').size = document.getElementById('offer2Name').placeholder.length + 1;
	}

	if (snapshot.val().offer2Price != null) {
		document.getElementById('offer2Price').value = snapshot.val().offer2Price;
		document.getElementById('offer2Price').size = document.getElementById('offer2Price').value.length + 1;
	} else {
		document.getElementById('offer2Price').placeholder = '$0';
		document.getElementById('warningOffer2Price').style.display = 'block';
		document.getElementById('offer2Price').size = document.getElementById('offer2Price').placeholder.length + 1;
	}

	if (snapshot.val().offer2Feature != null) {
		document.getElementById('offer2Feature').value = snapshot.val().offer2Feature;
		document.getElementById('offer2Feature').size = document.getElementById('offer2Feature').value.length + 1;
	} else {
		document.getElementById('offer2Feature').placeholder = 'Free Tacos for a Year';
		document.getElementById('warningOffer2Feature').style.display = 'block';
		document.getElementById('offer2Feature').size = document.getElementById('offer2Feature').placeholder.length + 1;
	}

	if (snapshot.val().offer2Benefit != null) {
		document.getElementById('offer2Benefit').value = snapshot.val().offer2Benefit;
		document.getElementById('offer2Benefit').size = document.getElementById('offer2Benefit').value.length + 1;
	} else {
		document.getElementById('offer2Benefit').placeholder = 'Free Tacos for a Year';
		document.getElementById('warningOffer2Benefit').style.display = 'block';
		document.getElementById('offer2Benefit').size = document.getElementById('offer2Benefit').placeholder.length + 1;
	}

	if (snapshot.val().offer2Solution != null) {
		document.getElementById('offer2Solution').value = snapshot.val().offer2Solution;
		document.getElementById('offer2Solution').size = document.getElementById('offer2Solution').value.length + 1;
	} else {
		document.getElementById('offer2Solution').placeholder = 'Free Tacos for a Year';
		document.getElementById('warningOffer2Solution').style.display = 'block';
		document.getElementById('offer2Solution').size = document.getElementById('offer2Solution').placeholder.length + 1;
	}

	if (snapshot.val().offer2Description != null) {
		document.getElementById('offer2Description').value = snapshot.val().offer2Description;
		document.getElementById('offer2Description').size = document.getElementById('offer2Description').value.length + 1;
	} else {
		document.getElementById('offer2Description').placeholder = 'Free tacos for everyone!';
		document.getElementById('warningOffer2Description').style.display = 'block';
		document.getElementById('offer2Description').size = document.getElementById('offer2Description').placeholder.length + 1;
	}

	//  if (snapshot.val().offer2Image != null) {
	//       document.getElementById('offer2Image').value = snapshot.val().offer2Image;
	//   } else {
	//       document.getElementById('offer2Image').placeholder = 'https://via.placeholder.com/150';
//        document.getElementById('warningOffer2Image').style.display = 'block';
	//  }



});


