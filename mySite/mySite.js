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
const brand = 'BrandWield';
get(child(dbRef, 'brands/' + brand)).then((snapshot) => {
	if (snapshot.exists()) {
		console.log('Brand Returned: ' + brand);
		console.log(snapshot.val());
	} else {
		console.log("No Brand Returned");
	}

	// Contact
	if (snapshot.val().primaryContact != null) {
		localStorage.setItem('primaryContact', snapshot.val().primaryContact);
	}
	if (snapshot.val().primaryContactEmail != null) {
		localStorage.setItem('primaryContactEmail', snapshot.val().primaryContactEmail);
	}
	if (snapshot.val().primaryContactPhone != null) {
		localStorage.setItem('primaryContactPhone', snapshot.val().primaryContactPhone);
	}
	// Address
	if (snapshot.val().officeAddressStreet1 != null) {
		localStorage.setItem('officeAddressStreet1', snapshot.val().officeAddressStreet1);
	}
	if (snapshot.val().officeAddressStreet2 != null) {
		localStorage.setItem('officeAddressStreet2', snapshot.val().officeAddressStreet2);
	}
	if (snapshot.val().officeAddressCity != null) {
		localStorage.setItem('officeAddressCity', snapshot.val().officeAddressCity);
	}
	if (snapshot.val().officeAddressState != null) {
		localStorage.setItem('officeAddressState', snapshot.val().officeAddressState);
	}
	if (snapshot.val().officeAddressZip != null) {
		localStorage.setItem('officeAddressZip', snapshot.val().officeAddressZip);
	}
	if (snapshot.val().officeAddressCountry != null) {
		localStorage.setItem('officeAddressCountry', snapshot.val().officeAddressCountry);
	}
	// Founding
	if (snapshot.val().founderName != null) {
		localStorage.setItem('founderName', snapshot.val().founderName);
	}
	if (snapshot.val().foundingDate != null) {
		localStorage.setItem('foundingDate', snapshot.val().foundingDate);
	}
	if (snapshot.val().tradeBusinessName != null) {
		localStorage.setItem('tradeBusinessName', snapshot.val().tradeBusinessName);
	}
	if (snapshot.val().legalBusinessName != null) {
		localStorage.setItem('legalBusinessName', snapshot.val().legalBusinessName);
	}
	// Business
	if (snapshot.val().businessType != null) {
		localStorage.setItem('businessType', snapshot.val().businessType);
	}
	if (snapshot.val().slogan != null) {
		localStorage.setItem('slogan', snapshot.val().slogan);
	}
	if (snapshot.val().missionStatement != null) {
		localStorage.setItem('missionStatement', snapshot.val().missionStatement);
	}
	if (snapshot.val().valueProp != null) {
		localStorage.setItem('valueProp', snapshot.val().valueProp);
	}
	// Logos
	if (snapshot.val().squareLogo != null) {
		localStorage.setItem('squareLogo', snapshot.val().squareLogo);
	}
	if (snapshot.val().fullLogo != null) {
		localStorage.setItem('fullLogo', snapshot.val().fullLogo);
	}
	// Colors
	if (snapshot.val().primaryColor != null) {
		localStorage.setItem('primaryColor', snapshot.val().primaryColor);
	}
	if (snapshot.val().secondaryColor != null) {
		localStorage.setItem('secondaryColor', snapshot.val().secondaryColor);
	}
	if (snapshot.val().tertiaryColor != null) {
		localStorage.setItem('tertiaryColor', snapshot.val().tertiaryColor);
	}
	// Fonts
	if (snapshot.val().primaryFont != null) {
		localStorage.setItem('primaryFont', snapshot.val().primaryFont);
	}
	if (snapshot.val().secondaryFont != null) {
		localStorage.setItem('secondaryFont', snapshot.val().secondaryFont);
	}
	if (snapshot.val().tertiaryFont != null) {
		localStorage.setItem('tertiaryFont', snapshot.val().tertiaryFont);
	}
	// Social
	if (snapshot.val().facebookUrl != null) {
		localStorage.setItem('facebookUrl', snapshot.val().facebookUrl);
	}
	if (snapshot.val().facebookUsername != null) {
		localStorage.setItem('facebookUsername', snapshot.val().facebookUsername);
	}
	if (snapshot.val().instagramUrl != null) {
		localStorage.setItem('instagramUrl', snapshot.val().instagramUrl);
	}
	if (snapshot.val().instagramUsername != null) {
		localStorage.setItem('instagramUsername', snapshot.val().instagramUsername);
	}
	if (snapshot.val().linkedinUrl != null) {
		localStorage.setItem('linkedinUrl', snapshot.val().linkedinUrl);
	}
	if (snapshot.val().linkedinUsername != null) {
		localStorage.setItem('linkedinUsername', snapshot.val().linkedinUsername);
	}
	if (snapshot.val().twitterUrl != null) {
		localStorage.setItem('twitterUrl', snapshot.val().twitterUrl);
	}
	if (snapshot.val().twitterUsername != null) {
		localStorage.setItem('twitterUsername', snapshot.val().twitterUsername);
	}
	if (snapshot.val().tiktokUrl != null) {
		localStorage.setItem('tiktokUrl', snapshot.val().tiktokUrl);
	}
	if (snapshot.val().tiktokUsername != null) {
		localStorage.setItem('tiktokUsername', snapshot.val().tiktokUsername);
	}


	localStorage.setItem('mondayOpeningTime', snapshot.val().mondayOpeningTime);
	localStorage.setItem('mondayClosingTime', snapshot.val().mondayClosingTime);
	localStorage.setItem('tuesdayOpeningTime', snapshot.val().tuesdayOpeningTime);
	localStorage.setItem('tuesdayClosingTime', snapshot.val().tuesdayClosingTime);
	localStorage.setItem('wednesdayOpeningTime', snapshot.val().wednesdayOpeningTime);
	localStorage.setItem('wednesdayClosingTime', snapshot.val().wednesdayClosingTime);
	localStorage.setItem('thursdayOpeningTime', snapshot.val().thursdayOpeningTime);
	localStorage.setItem('thursdayClosingTime', snapshot.val().thursdayClosingTime);
	localStorage.setItem('fridayOpeningTime', snapshot.val().fridayOpeningTime);
	localStorage.setItem('fridayClosingTime', snapshot.val().fridayClosingTime);
	localStorage.setItem('saturdayOpeningTime', snapshot.val().saturdayOpeningTime);
	localStorage.setItem('saturdayClosingTime', snapshot.val().saturdayClosingTime);
	localStorage.setItem('sundayOpeningTime', snapshot.val().sundayOpeningTime);
	localStorage.setItem('sundayClosingTime', snapshot.val().sundayClosingTime);

	localStorage.setItem('person1Name', snapshot.val().person1Name);
	localStorage.setItem('person1Title', snapshot.val().person1Title);
	localStorage.setItem('person1Bio', snapshot.val().person1Bio);
	localStorage.setItem('person1Headshot', snapshot.val().person1Headshot);
	localStorage.setItem('person1FacebookUrl', snapshot.val().person1FacebookUrl);
	localStorage.setItem('person1InstagramUrl', snapshot.val().person1InstagramUrl);
	localStorage.setItem('person1LinkedinUrl', snapshot.val().person1LinkedinUrl);
	localStorage.setItem('person1TwitterUrl', snapshot.val().person1TwitterUrl);
	localStorage.setItem('person1TiktokUrl', snapshot.val().person1TiktokUrl);

	localStorage.setItem('person2Name', snapshot.val().person2Name);
	localStorage.setItem('person2Title', snapshot.val().person2Title);
	localStorage.setItem('person2Bio', snapshot.val().person2Bio);
	localStorage.setItem('person2Headshot', snapshot.val().person2Headshot);
	localStorage.setItem('person2FacebookUrl', snapshot.val().person2FacebookUrl);
	localStorage.setItem('person2InstagramUrl', snapshot.val().person2InstagramUrl);
	localStorage.setItem('person2LinkedinUrl', snapshot.val().person2LinkedinUrl);
	localStorage.setItem('person2TwitterUrl', snapshot.val().person2TwitterUrl);
	localStorage.setItem('person2TiktokUrl', snapshot.val().person2TiktokUrl);

	localStorage.setItem('offer1Name', snapshot.val().offer1Name);
	localStorage.setItem('offer1Price', snapshot.val().offer1Price);
	localStorage.setItem('offer1Feature', snapshot.val().offer1Feature);
	localStorage.setItem('offer1Benefit', snapshot.val().offer1Benefit);
	localStorage.setItem('offer1Solution', snapshot.val().offer1Solution);
	localStorage.setItem('offer1Description', snapshot.val().offer1Description);
	localStorage.setItem('offer1Image', snapshot.val().offer1Image);

	localStorage.setItem('offer2Title', snapshot.val().offer2Title);
	localStorage.setItem('offer2Price', snapshot.val().offer2Price);
	localStorage.setItem('offer2Feature', snapshot.val().offer2Feature);
	localStorage.setItem('offer2Benefit', snapshot.val().offer2Benefit);
	localStorage.setItem('offer2Solution', snapshot.val().offer2Solution);
	localStorage.setItem('offer2Description', snapshot.val().offer2Description);
	localStorage.setItem('offer2Image', snapshot.val().offer2Image);

});


// Set brand variables
const websiteHeadData = {
	// Misc. Head Tags
	title:  localStorage.getItem('tradeBusinessName') + ' | ' + localStorage.getItem('slogan') + ' | ' + localStorage.getItem('missionStatement'),
	description:  localStorage.getItem('slogan') + ' | ' + localStorage.getItem('missionStatement'),
	keywords:  '',
	baseUrl:  localStorage.getItem('primaryContactWebsite'),
	googleFonts:  localStorage.getItem('primaryFont'),
	canonicalUrl:  localStorage.getItem('primaryContactWebsite'),
	robots:  'index, follow',
	viewport:  'width=device-width, initial-scale=1',
	themeColor:  localStorage.getItem('primaryColor'),
	// HTTP EQUIV Meta Tags
	httpEquiv: {
		ContentType:  'text/html; charset=utf-8',
		ContentLanguage:  'en-US',
		XUACompatible:  'IE=edge,chrome=1'
	},
	// Article Meta Tags
	article: {
		publisher:  'https://brandwield.com',
		modifiedTime:  new Date().toISOString(),
	},
	//  Rel Icons
	icons: {
		icon16: localStorage.getItem('squareLogo'),
		icon32:  localStorage.getItem('squareLogo'),
		icon96:  localStorage.getItem('squareLogo'),
		icon192:  localStorage.getItem('squareLogo'),
	},
	// Open Graph Meta Tags
	og: {
		ogTitle:  localStorage.getItem('tradeBusinessName') + ' | ' + localStorage.getItem('slogan') + ' | ' + localStorage.getItem('missionStatement'),
		ogDescription:  localStorage.getItem('slogan') + ' | ' + localStorage.getItem('missionStatement'),
		ogImage:  'og:image',
		ogImageWidth:  'og:image:width',
		ogImageHeight:  'og:image:height',
		ogImageAlt:  localStorage.getItem('tradeBusinessName') + ' Logo',
		ogUrl:  localStorage.getItem('primaryContactWebsite'),
		ogType:  'website',
		ogLocale:  'en-US',
		ogSiteName:  localStorage.getItem('tradeBusinessName') + ' | ' + localStorage.getItem('slogan'),

	},
	// Twitter Meta Tags
	twitter: {
		twitterCard:  'twitter:card',
		twitterSite:  'twitter:site',
		twitterCreator:  'twitter:creator',
		twitterTitle:  'twitter:title',
		twitterDescription:  'twitter:description',
		twitterImage:  'twitter:image',
		twitterImageAlt:  localStorage.getItem('tradeBusinessName') + ' Logo',
	},
	// Random Variables Used in Schema Markup
	brandTradeName: localStorage.getItem('tradeBusinessName'),
	brandLegalName: localStorage.getItem('legalBusinessName'),
	logo:  localStorage.getItem('logoFull'),
	brandFacebookUrl: localStorage.getItem('facebookUrl'),
	brandInstagramUrl: localStorage.getItem('instagramUrl'),
	brandLinkedinUrl: localStorage.getItem('linkedinUrl'),
	brandTwitterUrl: localStorage.getItem('twitterUrl'),
	brandTiktokUrl: localStorage.getItem('tiktokUrl'),
	brandPhone: localStorage.getItem('primaryContactPhone'),
	brandEmail: localStorage.getItem('primaryContactEmail'),
	brandAddress: {
		street: localStorage.getItem('officeAddressStreet1') + ' ' + localStorage.getItem('officeAddressStreet2'),
		street1: localStorage.getItem('officeAddressStreet1'),
		street2: localStorage.getItem('officeAddressStreet2'),
		city: localStorage.getItem('officeAddressCity'),
		state: localStorage.getItem('officeAddressState'),
		zip: localStorage.getItem('officeAddressZip'),
		country: localStorage.getItem('officeAddressCountry'),
	}
};

// Schema Markup
const schemaMarkup  = {
	'@context': 'https://schema.org',
	'@graph:': [
		{
			'@type': 'Website',
			'@id': websiteHeadData.baseUrl + '/#website',
			'url': websiteHeadData.baseUrl,
			'name': websiteHeadData.title,
			'description': websiteHeadData.description,
			'inLanguage': 'en-US',
			'publisher': 'https://brandwield.com/#publisher',
			'image': websiteHeadData.ogImage,
			'logo': websiteHeadData.logo,
			'sameAs': [websiteHeadData.brandFacebookUrl, websiteHeadData.brandInstagramUrl, websiteHeadData.brandLinkedinUrl, websiteHeadData.brandTwitterUrl, websiteHeadData.brandTiktokUrl],
			'dateModified': websiteHeadData.article.modifiedTime,
		},
		{
			'@type': 'WebPage',
			'@id': websiteHeadData.baseUrl + '/#webpage',
			'url': websiteHeadData.baseUrl,
			'name': websiteHeadData.title,
			'isPartOf': websiteHeadData.baseUrl + '/#website',
			'inLanguage': 'en-US',
			'publisher': 'https://brandwield.com/#publisher',
			'image': websiteHeadData.ogImage,
			'logo': websiteHeadData.logo,
			'dateModified': websiteHeadData.article.modifiedTime,
		},
		{
			'@type': 'Organization',
			'@id': websiteHeadData.baseUrl + '/#organization',
			'url': websiteHeadData.baseUrl,
			'name': websiteHeadData.brandTradeName,
			'alternateName': websiteHeadData.brandLegalName,
			'description': websiteHeadData.description,
			'inLanguage': 'en-US',
			'sameAs': [websiteHeadData.brandFacebookUrl, websiteHeadData.brandInstagramUrl, websiteHeadData.brandLinkedinUrl, websiteHeadData.brandTwitterUrl, websiteHeadData.brandTiktokUrl],
			address: {
				'@type': 'postalAddress',
				"@id": websiteHeadData.baseUrl + '/#postaladdress',
				'streetAddress': websiteHeadData.brandAddress.street,
				'addressLocality': websiteHeadData.brandAddress.city,
				'addressRegion': websiteHeadData.brandAddress.state,
				'postalCode': websiteHeadData.brandAddress.zip,
				'addressCountry': websiteHeadData.brandAddress.country,
			}
		},
		{
			'@type': 'LocalBusiness',
			'@id': websiteHeadData.baseUrl + '/#localbusiness',
			'url': websiteHeadData.baseUrl,
			'name': websiteHeadData.brandTradeName,
			'description': websiteHeadData.description,
			'telephone': websiteHeadData.brandPhone,
			'email': websiteHeadData.brandEmail,
			'sameAs': [websiteHeadData.brandFacebookUrl, websiteHeadData.brandInstagramUrl, websiteHeadData.brandLinkedinUrl, websiteHeadData.brandTwitterUrl, websiteHeadData.brandTiktokUrl],
			address: {
				'@type': 'postalAddress',
				"@id": websiteHeadData.baseUrl + '/#postaladdress',
				'streetAddress': websiteHeadData.brandAddress.street,
				'addressLocality': websiteHeadData.brandAddress.city,
				'addressRegion': websiteHeadData.brandAddress.state,
				'postalCode': websiteHeadData.brandAddress.zip,
				'addressCountry': websiteHeadData.brandAddress.country,
			}
		},
		{
			'@type': 'Brand',
			'@id': websiteHeadData.baseUrl + '/#brand',
			'url': websiteHeadData.baseUrl,
			'name': websiteHeadData.brandTradeName,
			'description': websiteHeadData.description,
			'inLanguage': 'en-US',
			'publisher': websiteHeadData.baseUrl + '/#publisher',
			'logo': websiteHeadData.logo,
			'sameAs': [websiteHeadData.brandFacebookUrl, websiteHeadData.brandInstagramUrl, websiteHeadData.brandLinkedinUrl, websiteHeadData.brandTwitterUrl, websiteHeadData.brandTiktokUrl],
			address: {
				'@type': 'postalAddress',
				"@id": websiteHeadData.baseUrl + '/#postaladdress',
				'streetAddress': websiteHeadData.brandAddress.street,
				'addressLocality': websiteHeadData.brandAddress.city,
				'addressRegion': websiteHeadData.brandAddress.state,
				'postalCode': websiteHeadData.brandAddress.zip,
				'addressCountry': websiteHeadData.brandAddress.country,
			}
		},
		{
			'@type': 'Logo',
			'@id': websiteHeadData.baseUrl + '/#logo',
			'name': websiteHeadData.brandTradeName + ' Logo',
			'url': websiteHeadData.logo,
			'caption': websiteHeadData.brandTradeName + ' Logo',
			'inLanguage': 'en-US',
			'logoOfPage': websiteHeadData.baseUrl + '/#website',
		},
		{
			'@type': 'OfferCatalog',
			'@id': websiteHeadData.baseUrl + '/#offercatalog',
			'name': websiteHeadData.brandTradeName + ' Offer Catalog',
			'url': websiteHeadData.baseUrl,
			'description': websiteHeadData.description,
		}
	]
};

// Misc. Head Tags
document.head.innerHTML += '<!-- Misc. Head Tags --><title>' + websiteHeadData.title + '</title>'
document.head.innerHTML += '<meta name="description" content="' + websiteHeadData.description + '">'
document.head.innerHTML += '<meta name="keywords" content="' + websiteHeadData.keywords + '">'
document.head.innerHTML += '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=' + websiteHeadData.googleFonts + ':wght@400&display=swap' + '">'
document.head.innerHTML += '<link rel="canonical" href="' + websiteHeadData.canonicalUrl + '">'
document.head.innerHTML += '<meta name="robots" content="' + websiteHeadData.robots + '">'
document.head.innerHTML += '<meta name="viewport" content="' + websiteHeadData.viewport + '">'
document.head.innerHTML += '<meta name="theme-color" content="' + websiteHeadData.themeColor + '">'

// HTTP EQUIV Meta Tags
document.head.innerHTML += '<!-- HTTP EQUIV Meta Tags--><meta http-equiv="Content-Type" content="' + websiteHeadData.httpEquiv.ContentType + '"/>'
document.head.innerHTML += '<meta http-equiv="Content-Language" content="' + websiteHeadData.httpEquiv.ContentLanguage + '"/>'
document.head.innerHTML += '<meta http-equiv="X-UA-Compatible" content="' + websiteHeadData.httpEquiv.XUACompatible + '"/>'

// Article Meta Tags
document.head.innerHTML += '<!-- Article Meta Tags--><meta property="article:publisher" content="' + websiteHeadData.article.publisher + '" />'
document.head.innerHTML += '<meta property="article:modified_time" content="' + websiteHeadData.article.modifiedTime + '" />'

//  Rel Icons
document.head.innerHTML += '<!-- Rel Icons Tags --><link rel="icon" sizes="16x16" type="image/png" href="' + websiteHeadData.icons.icon16 + '">'
document.head.innerHTML += '<link rel="icon" sizes="32x32" type="image/png" href="' + websiteHeadData.icons.icon32 + '">'
document.head.innerHTML += '<link rel="icon" sizes="96x96" type="image/png" href="' + websiteHeadData.icons.icon96 + '">'
document.head.innerHTML += '<link rel="icon" sizes="192x192" type="image/png" href="' + websiteHeadData.icons.icon192 + '">'

// Open Graph Meta Tags
document.head.innerHTML += '<!-- Open Graph Meta Tags --><meta property="og:title" content="' + websiteHeadData.og.ogTitle + '">'
document.head.innerHTML += '<meta property="og:description" content="' + websiteHeadData.og.ogDescription + '">'
document.head.innerHTML += '<meta property="og:url" content="' + websiteHeadData.og.ogUrl + '">'
document.head.innerHTML += '<meta property="og:image" content="' + websiteHeadData.og.ogImage + '">'
document.head.innerHTML += '<meta property="og:image:alt" content="' + websiteHeadData.ogImageAlt + '">'
document.head.innerHTML += '<meta property="og:image:width" content="' + websiteHeadData.og.ogImageWidth + '">'
document.head.innerHTML += '<meta property="og:image:height" content="' + websiteHeadData.og.ogImageHeight + '">'
document.head.innerHTML += '<meta property="og:type" content="' + websiteHeadData.og.ogType + '">'
document.head.innerHTML += '<meta property="og:locale" content="' + websiteHeadData.og.ogLocale + '">'
document.head.innerHTML += '<meta property="og:site_name" content="' + websiteHeadData.og.ogSiteName + '">'

// Twitter Meta Tags
document.head.innerHTML += '<!-- Twitter Meta Tags --><meta name="twitter:card" content="' + websiteHeadData.twitter.twitterCard + '">'
document.head.innerHTML += '<meta name="twitter:site" content="' + websiteHeadData.twitter.twitterSite + '">'
document.head.innerHTML += '<meta name="twitter:creator" content="' + websiteHeadData.twitter.twitterCreator + '">'
document.head.innerHTML += '<meta name="twitter:title" content="' + websiteHeadData.twitter.twitterTitle + '">'
document.head.innerHTML += '<meta name="twitter:description" content="' + websiteHeadData.twitter.twitterDescription + '">'
document.head.innerHTML += '<meta name="twitter:image" content="' + websiteHeadData.twitter.twitterImage + '">'
document.head.innerHTML += '<meta name="twitter:image:alt" content="' + websiteHeadData.twitter.twitterImageAlt + '">'

// Add the complete schema markup code above to the <head> of the page
document.head.innerHTML += '<!-- Schema Markup JSON --><script type="application/ld+json">' + JSON.stringify(schemaMarkup) + '</script>'

// CSS Variables
document.documentElement.style.setProperty('--primaryColor', localStorage.getItem('primaryColor'));
document.documentElement.style.setProperty('--secondaryColor', localStorage.getItem('secondaryColor'));
document.documentElement.style.setProperty('--tertiaryColor', localStorage.getItem('tertiaryColor'));

document.documentElement.style.setProperty('--primaryFont', localStorage.getItem('primaryFont'));
document.documentElement.style.setProperty('--secondaryFont', localStorage.getItem('secondaryFont'));
document.documentElement.style.setProperty('--tertiaryFont', localStorage.getItem('tertiaryFont'));


// Set the CLASSES in the HTML to the value of the brand variables

// CONTACT
document.querySelectorAll('.primaryContactPhone').forEach(function (element) {
	element.innerHTML = localStorage.getItem('primaryContactPhone');
	element.href = 'tel:' + localStorage.getItem('primaryContactPhone');
	element.title = 'Call ' + localStorage.getItem('tradeBusinessName');
	element.target = '_blank';
});
document.querySelectorAll('.primaryContactEmail').forEach(function (element) {
	element.innerHTML = localStorage.getItem('primaryContactEmail');
	element.href = 'mailto:' + localStorage.getItem('primaryContactEmail');
	element.title = 'Email ' + localStorage.getItem('tradeBusinessName');
	element.target = '_blank';
});
document.querySelectorAll('.primaryContactWebsite').forEach(function (element) {
	element.innerHTML = localStorage.getItem('primaryContactWebsite');
	element.href = localStorage.getItem('primaryContactWebsite');
	element.title = 'Visit ' + localStorage.getItem('primaryContactWebsite'); + ' Website';
	element.target = '_blank';
});
// ADDRESS
document.querySelectorAll('.officeAddressStreet1').forEach(function (element) {
	element.innerHTML = localStorage.getItem('officeAddressStreet1')
});
document.querySelectorAll('.officeAddressStreet2').forEach(function (element) {
	element.innerHTML = localStorage.getItem('officeAddressStreet2')
});
document.querySelectorAll('.officeAddressCity').forEach(function (element) {
	element.innerHTML = localStorage.getItem('officeAddressCity')
});
document.querySelectorAll('.officeAddressState').forEach(function (element) {
	element.innerHTML = localStorage.getItem('officeAddressState')
});
document.querySelectorAll('.officeAddressZip').forEach(function (element) {
	element.innerHTML = localStorage.getItem('officeAddressZip')
});
document.querySelectorAll('.officeAddressCountry').forEach(function (element) {
	element.innerHTML = localStorage.getItem('officeAddressCountry')
});
document.querySelectorAll('.officeAddressFull').forEach(function (element) {
	element.href = 'https://www.google.com/maps/place/' + localStorage.getItem('tradeBusinessName') + ', ' + localStorage.getItem('officeAddressStreet1') + ', ' + localStorage.getItem('officeAddressStreet2') + ', ' + localStorage.getItem('officeAddressCity') + ' ' + localStorage.getItem('officeAddressState') + ' ' + localStorage.getItem('officeAddressZip') + ', ' + localStorage.getItem('officeAddressCountry');
});
// BASIC
document.querySelectorAll('.businessType').forEach(function (element) {
	element.innerHTML = localStorage.getItem('businessType')
});
document.querySelectorAll('.slogan').forEach(function (element) {
	element.innerHTML = localStorage.getItem('slogan');
});
document.querySelectorAll('.missionStatement').forEach(function (element) {
	element.innerHTML = localStorage.getItem('missionStatement');
});
document.querySelectorAll('.valueProp').forEach(function (element) {
	element.innerHTML = localStorage.getItem('valueProp');
});
// Logos
document.querySelectorAll('.squareLogo').forEach(function (element) {
	element.href = '#top';
	element.src = localStorage.getItem('squareLogo');
	element.alt = localStorage.getItem('tradeBusinessName'); + ' Logo';
	element.title = localStorage.getItem('tradeBusinessName');
});
document.querySelectorAll('.fullLogo').forEach(function (element) {
	element.href = '#top';
	element.src = localStorage.getItem('fullLogo');
	element.alt = localStorage.getItem('tradeBusinessName'); + ' Logo';
	element.title = localStorage.getItem('tradeBusinessName');
});
// COLORS
document.querySelectorAll('.primaryColor').forEach(function (element) {
	element.style.color = localStorage.getItem('primaryColor');
});
document.querySelectorAll('.secondaryColor').forEach(function (element) {
	element.style.color = localStorage.getItem('secondaryColor');
});
document.querySelectorAll('.tertiaryColor').forEach(function (element) {
	element.style.color = localStorage.getItem('tertiaryColor');
});
// FONTS
document.querySelectorAll('.primaryFont').forEach(function (element) {
	element.style.fontFamily = localStorage.getItem('primaryFont');
});
document.querySelectorAll('.secondaryFont').forEach(function (element) {
	element.style.fontFamily = localStorage.getItem('secondaryFont');
});
document.querySelectorAll('.tertiaryFont').forEach(function (element) {
	element.style.fontFamily = localStorage.getItem('tertiaryFont');
});
// FOUNDING
document.querySelectorAll('.founderName').forEach(function (element) {
	element.innerHTML = localStorage.getItem('founderName');
});
document.querySelectorAll('.foundingDate').forEach(function (element) {
	element.innerHTML = localStorage.getItem('foundingDate');
});
document.querySelectorAll('.tradeBusinessName').forEach(function (element) {
	element.innerHTML = localStorage.getItem('tradeBusinessName');
});
document.querySelectorAll('.legalBusinessName').forEach(function (element) {
	element.innerHTML = localStorage.getItem('legalBusinessName');
});
// SOCIAL MEDIA
document.querySelectorAll('.facebookUrl').forEach(function (element) {
	element.href = localStorage.getItem('facebookUrl');
	element.title = 'Visit ' + localStorage.getItem('tradeBusinessName') + ' on Facebook';
	element.target = '_blank';
});
document.querySelectorAll('.instagramUrl').forEach(function (element) {
	element.href = localStorage.getItem('instagramUrl');
	element.title = 'Visit ' + localStorage.getItem('tradeBusinessName') + ' on Instagram';
	element.target = '_blank';
});
document.querySelectorAll('.linkedinUrl').forEach(function (element) {
	element.href = localStorage.getItem('linkedinUrl');
	element.title = 'Visit ' + localStorage.getItem('tradeBusinessName') + ' on LinkedIn';
	element.target = '_blank';
});
document.querySelectorAll('.twitterUrl').forEach(function (element) {
	element.href = localStorage.getItem('twitterUrl');
	element.title = 'Visit ' + localStorage.getItem('tradeBusinessName') + ' on Twitter';
	element.target = '_blank';
});
document.querySelectorAll('.tiktokUrl').forEach(function (element) {
	element.href = localStorage.getItem('tiktokUrl');
	element.title = 'Visit ' + localStorage.getItem('tradeBusinessName') + ' on TikTok';
	element.target = '_blank';
});
// PEOPLE
// Person 1
document.querySelectorAll('.person1Name').forEach(function (element) {
	element.innerHTML = localStorage.getItem('person1Name');
});
document.querySelectorAll('.person1Title').forEach(function (element) {
	element.innerHTML = localStorage.getItem('person1Title');
});
document.querySelectorAll('.person1Bio').forEach(function (element) {
	element.innerHTML = localStorage.getItem('person1Bio');
});
document.querySelectorAll('.person1Headshot').forEach(function (element) {
	element.src = localStorage.getItem('person1Headshot');
	element.alt = localStorage.getItem('person1Name'); + ' Headshot';
	element.title = localStorage.getItem('person1Name');
} );
document.querySelectorAll('.person1FacebookUrl').forEach(function (element) {
	element.href = localStorage.getItem('person1FacebookUrl');
	element.title = 'Visit ' + localStorage.getItem('person1Name') + ' on Facebook';
	element.target = '_blank';
});
document.querySelectorAll('.person1InstagramUrl').forEach(function (element) {
	element.href = localStorage.getItem('person1InstagramUrl');
	element.title = 'Visit ' + localStorage.getItem('person1Name') + ' on Instagram';
	element.target = '_blank';
});
document.querySelectorAll('.person1LinkedinUrl').forEach(function (element) {
	element.href = localStorage.getItem('person1LinkedinUrl');
	element.title = 'Visit ' + localStorage.getItem('person1Name') + ' on LinkedIn';
	element.target = '_blank';
});
document.querySelectorAll('.person1TwitterUrl').forEach(function (element) {
	element.href = localStorage.getItem('person1TwitterUrl');
	element.title = 'Visit ' + localStorage.getItem('person1Name') + ' on Twitter';
	element.target = '_blank';
});
document.querySelectorAll('.person1TiktokUrl').forEach(function (element) {
	element.href = localStorage.getItem('person1TiktokUrl');
	element.title = 'Visit ' + localStorage.getItem('person1Name') + ' on TikTok';
	element.target = '_blank';
});
// Person 2
document.querySelectorAll('.person2Name').forEach(function (element) {
	element.innerHTML = localStorage.getItem('person2Name');
});
document.querySelectorAll('.person2Title').forEach(function (element) {
	element.innerHTML = localStorage.getItem('person2Title');
});
document.querySelectorAll('.person2Headshot').forEach(function (element) {
	element.src = localStorage.getItem('person2Headshot');
	element.alt = localStorage.getItem('person2Name'); + ' Headshot';
	element.title = localStorage.getItem('person2Name');
} );
document.querySelectorAll('.person2FacebookUrl').forEach(function (element) {
	element.href = localStorage.getItem('person2FacebookUrl');
	element.title = 'Visit ' + localStorage.getItem('person2Name') + ' on Facebook';
	element.target = '_blank';
});
document.querySelectorAll('.person2InstagramUrl').forEach(function (element) {
	element.href = localStorage.getItem('person2InstagramUrl');
	element.title = 'Visit ' + localStorage.getItem('person2Name') + ' on Instagram';
	element.target = '_blank';
});
document.querySelectorAll('.person2LinkedinUrl').forEach(function (element) {
	element.href = localStorage.getItem('person2LinkedinUrl');
	element.title = 'Visit ' + localStorage.getItem('person2Name') + ' on LinkedIn';
	element.target = '_blank';
});
document.querySelectorAll('.person2TwitterUrl').forEach(function (element) {
	element.href = localStorage.getItem('person2TwitterUrl');
	element.title = 'Visit ' + localStorage.getItem('person2Name') + ' on Twitter';
	element.target = '_blank';
});
document.querySelectorAll('.person2TiktokUrl').forEach(function (element) {
	element.href = localStorage.getItem('person2TiktokUrl');
	element.title = 'Visit ' + localStorage.getItem('person2Name') + ' on TikTok';
	element.target = '_blank';
});
// Person 3
document.querySelectorAll('.person3Name').forEach(function (element) {
	element.innerHTML = localStorage.getItem('person3Name');
});
document.querySelectorAll('.person3Title').forEach(function (element) {
	element.innerHTML = localStorage.getItem('person3Title');
});
document.querySelectorAll('.person3Headshot').forEach(function (element) {
	element.src = localStorage.getItem('person3Headshot');
	element.alt = localStorage.getItem('person3Name'); + ' Headshot';
	element.title = localStorage.getItem('person3Name');
} );
document.querySelectorAll('.person3FacebookUrl').forEach(function (element) {
	element.href = localStorage.getItem('person3FacebookUrl');
	element.title = 'Visit ' + localStorage.getItem('person3Name') + ' on Facebook';
	element.target = '_blank';
});
document.querySelectorAll('.person3InstagramUrl').forEach(function (element) {
	element.href = localStorage.getItem('person3InstagramUrl');
	element.title = 'Visit ' + localStorage.getItem('person3Name') + ' on Instagram';
	element.target = '_blank';
});
document.querySelectorAll('.person3LinkedinUrl').forEach(function (element) {
	element.href = localStorage.getItem('person3LinkedinUrl');
	element.title = 'Visit ' + localStorage.getItem('person3Name') + ' on LinkedIn';
	element.target = '_blank';
});
document.querySelectorAll('.person3TwitterUrl').forEach(function (element) {
	element.href = localStorage.getItem('person3TwitterUrl');
	element.title = 'Visit ' + localStorage.getItem('person3Name') + ' on Twitter';
	element.target = '_blank';
});
document.querySelectorAll('.person3TiktokUrl').forEach(function (element) {
	element.href = localStorage.getItem('person3TiktokUrl');
	element.title = 'Visit ' + localStorage.getItem('person3Name') + ' on TikTok';
	element.target = '_blank';
});
// Person 4
document.querySelectorAll('.person4Name').forEach(function (element) {
	element.innerHTML = localStorage.getItem('person4Name');
});
document.querySelectorAll('.person4Title').forEach(function (element) {
	element.innerHTML = localStorage.getItem('person4Title');
});
document.querySelectorAll('.person4Headshot').forEach(function (element) {
	element.src = localStorage.getItem('person4Headshot');
	element.alt = localStorage.getItem('person4Name'); + ' Headshot';
	element.title = localStorage.getItem('person4Name');
} );
document.querySelectorAll('.person4FacebookUrl').forEach(function (element) {
	element.href = localStorage.getItem('person4FacebookUrl');
	element.title = 'Visit ' + localStorage.getItem('person4Name') + ' on Facebook';
	element.target = '_blank';
});
document.querySelectorAll('.person4InstagramUrl').forEach(function (element) {
	element.href = localStorage.getItem('person4InstagramUrl');
	element.title = 'Visit ' + localStorage.getItem('person4Name') + ' on Instagram';
	element.target = '_blank';
});
document.querySelectorAll('.person4LinkedinUrl').forEach(function (element) {
	element.href = localStorage.getItem('person4LinkedinUrl');
	element.title = 'Visit ' + localStorage.getItem('person4Name') + ' on LinkedIn';
	element.target = '_blank';
});
document.querySelectorAll('.person4TwitterUrl').forEach(function (element) {
	element.href = localStorage.getItem('person4TwitterUrl');
	element.title = 'Visit ' + localStorage.getItem('person4Name') + ' on Twitter';
	element.target = '_blank';
});
document.querySelectorAll('.person4TiktokUrl').forEach(function (element) {
	element.href = localStorage.getItem('person4TiktokUrl');
	element.title = 'Visit ' + localStorage.getItem('person4Name') + ' on TikTok';
	element.target = '_blank';
});