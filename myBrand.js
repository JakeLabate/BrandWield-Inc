console.log('myBrand.js loaded');

// FOUNDING INFO
// founderName
function unlockFounderName() {
	document.getElementById('founderName').removeAttribute('readonly');
	document.getElementById('founderName').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('founderNameUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('founderNameLock').setAttribute('style', 'background-color: transparent;');
}
function lockFounderName() {
	document.getElementById('founderName').append('readonly');
	document.getElementById('founderName').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('founderNameLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('founderNameUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('founderName').value.length > 0) { document.getElementById('warningFounderName').setAttribute('style', 'display: none;'); }
	if (document.getElementById('founderName').value.length < 1) { document.getElementById('warningFounderName').setAttribute('style', 'display: block;'); }
}
function clearFounderName() {
	if (confirm('Are you sure you want to CLEAR the founder name?') === true) {
		document.getElementById('founderName').value = '';
		document.getElementById('founderName').size = 20;
		document.getElementById('founderName').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('founderName').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningFounderName').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// foundingDate
function unlockFoundingDate() {
	document.getElementById('foundingDate').removeAttribute('readonly');
	document.getElementById('foundingDate').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('foundingDateUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('foundingDateLock').setAttribute('style', 'background-color: transparent;');
}
function lockFoundingDate() {
	document.getElementById('foundingDate').append('readonly');
	document.getElementById('foundingDate').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('foundingDateLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('foundingDateUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('foundingDate').value != null) { document.getElementById('warningFoundingDate').setAttribute('style', 'display: none;'); }
	if (document.getElementById('foundingDate').value == null) { document.getElementById('warningFoundingDate').setAttribute('style', 'display: block;'); }
}
function clearFoundingDate() {
	if (confirm('Are you sure you want to CLEAR the founding date?') === true) {
		document.getElementById('foundingDate').value = '';
		document.getElementById('foundingDate').size = 20;
		document.getElementById('foundingDate').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('foundingDate').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningFoundingDate').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// tradeBusinessName
function unlockTradeBusinessName() {
	document.getElementById('tradeBusinessName').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('tradeBusinessName').removeAttribute('readonly');
	document.getElementById('tradeBusinessNameUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('tradeBusinessNameLock').setAttribute('style', 'background-color: transparent;');
}
function lockTradeBusinessName() {
	document.getElementById('tradeBusinessName').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('tradeBusinessName').append('readonly');
	document.getElementById('tradeBusinessNameLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('tradeBusinessNameUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('tradeBusinessName').value.length > 0) { document.getElementById('warningTradeBusinessName').setAttribute('style', 'display: none;'); }
	if (document.getElementById('tradeBusinessName').value.length < 1) { document.getElementById('warningTradeBusinessName').setAttribute('style', 'display: block;'); }
}
function clearTradeBusinessName() {
	if (confirm('Are you sure you want to CLEAR the trade business name?') === true) {
		document.getElementById('tradeBusinessName').value = '';
		document.getElementById('tradeBusinessName').size = 20;
		document.getElementById('tradeBusinessName').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('tradeBusinessName').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningTradeBusinessName').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// legalBusinessName
function unlockLegalBusinessName() {
	document.getElementById('legalBusinessName').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('legalBusinessName').removeAttribute('readonly');
	document.getElementById('legalBusinessNameUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('legalBusinessNameLock').setAttribute('style', 'background-color: transparent;');
}
function lockLegalBusinessName() {
	document.getElementById('legalBusinessName').append('readonly');
	document.getElementById('legalBusinessName').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('legalBusinessNameLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('legalBusinessNameUnlock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('warningLegalBusinessName').setAttribute('style', 'display: none;');
	if (document.getElementById('legalBusinessName').value.length > 0) { document.getElementById('warningLegalBusinessName').setAttribute('style', 'display: none;'); }
	if (document.getElementById('legalBusinessName').value.length < 1) { document.getElementById('warningLegalBusinessName').setAttribute('style', 'display: block;'); }
}
function clearLegalBusinessName() {
	if (confirm('Are you sure you want to CLEAR the legal business name?') === true) {
		document.getElementById('legalBusinessName').value = '';
		document.getElementById('legalBusinessName').size = 20;
		document.getElementById('legalBusinessName').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('legalBusinessName').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningLegalBusinessName').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}

// PRIMARY CONTACT INFO
// primaryContactPhone
function unlockPrimaryContactPhone () {
	document.getElementById('primaryContactPhone').removeAttribute('readonly');
	document.getElementById('primaryContactPhone').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('primaryContactPhoneUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('primaryContactPhoneLock').setAttribute('style', 'background-color: transparent;');
}
function lockPrimaryContactPhone () {
	document.getElementById('primaryContactPhone').append('readonly');
	document.getElementById('primaryContactPhone').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('primaryContactPhoneLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('primaryContactPhoneUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('primaryContactPhone').value.length > 0) { document.getElementById('warningPrimaryContactPhone').setAttribute('style', 'display: none;'); }
	if (document.getElementById('primaryContactPhone').value.length < 1) { document.getElementById('warningPrimaryContactPhone').setAttribute('style', 'display: block;'); }
}
function clearPrimaryContactPhone () {
	if (confirm('Are you sure you want to CLEAR the phone number?') === true) {
		document.getElementById('primaryContactPhone').value = '';
		document.getElementById('primaryContactPhone').size = 20;
		document.getElementById('primaryContactPhone').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('primaryContactPhone').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningPrimaryContactPhone').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// primaryContactEmail
function unlockPrimaryContactEmail () {
	document.getElementById('primaryContactEmail').removeAttribute('readonly');
	document.getElementById('primaryContactEmail').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('primaryContactEmailUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('primaryContactEmailLock').setAttribute('style', 'background-color: transparent;');
}
function lockPrimaryContactEmail () {
	document.getElementById('primaryContactEmail').append('readonly');
	document.getElementById('primaryContactEmail').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('primaryContactEmailLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('primaryContactEmailUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('primaryContactEmail').value.length > 0) { document.getElementById('warningPrimaryContactEmail').setAttribute('style', 'display: none;'); }
	if (document.getElementById('primaryContactEmail').value.length < 1) { document.getElementById('warningPrimaryContactEmail').setAttribute('style', 'display: block;'); }
}
function clearPrimaryContactEmail () {
	if (confirm('Are you sure you want to CLEAR the email address?') === true) {
		document.getElementById('primaryContactEmail').value = '';
		document.getElementById('primaryContactEmail').size = 20;
		document.getElementById('primaryContactEmail').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('primaryContactEmail').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningPrimaryContactEmail').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// primaryContactWebsite
function unlockPrimaryContactWebsite () {
	document.getElementById('primaryContactWebsite').removeAttribute('readonly');
	document.getElementById('primaryContactWebsite').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('primaryContactWebsiteUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('primaryContactWebsiteLock').setAttribute('style', 'background-color: transparent;');
}
function lockPrimaryContactWebsite () {
	document.getElementById('primaryContactWebsite').append('readonly');
	document.getElementById('primaryContactWebsite').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('primaryContactWebsiteLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('primaryContactWebsiteUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('primaryContactWebsite').value.length > 0) { document.getElementById('warningPrimaryContactWebsite').setAttribute('style', 'display: none;'); }
	if (document.getElementById('primaryContactWebsite').value.length < 1) { document.getElementById('warningPrimaryContactWebsite').setAttribute('style', 'display: block;'); }
}
function clearPrimaryContactWebsite () {
	if (confirm('Are you sure you want to CLEAR the website?') === true) {
		document.getElementById('primaryContactWebsite').value = '';
		document.getElementById('primaryContactWebsite').size = 20;
		document.getElementById('primaryContactWebsite').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('primaryContactWebsite').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningPrimaryContactWebsite').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}

// ADDRESS
// officeAddressStreet1
function unlockOfficeAddressStreet1() {
	document.getElementById('officeAddressStreet1').removeAttribute('readonly');
	document.getElementById('officeAddressStreet1').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('officeAddressStreet1Unlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('officeAddressStreet1Lock').setAttribute('style', 'background-color: transparent;');
}
function lockOfficeAddressStreet1() {
	document.getElementById('officeAddressStreet1').append('readonly');
	document.getElementById('officeAddressStreet1').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('officeAddressStreet1Lock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('officeAddressStreet1Unlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('officeAddressStreet1').value.length > 0) { document.getElementById('warningOfficeAddressStreet1').setAttribute('style', 'display: none;'); }
	if (document.getElementById('officeAddressStreet1').value.length < 1) { document.getElementById('warningOfficeAddressStreet1').setAttribute('style', 'display: block;'); }
}
function clearOfficeAddressStreet1() {
	if (confirm('Are you sure you want to CLEAR the office address street #1?') === true) {
		document.getElementById('officeAddressStreet1').value = '';
		document.getElementById('officeAddressStreet1').size = 20;
		document.getElementById('officeAddressStreet1').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('officeAddressStreet1').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningOfficeAddressStreet1').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// officeAddressStreet2
function unlockOfficeAddressStreet2 () {
	document.getElementById('officeAddressStreet2').removeAttribute('readonly');
	document.getElementById('officeAddressStreet2').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('officeAddressStreet2Unlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('officeAddressStreet2Lock').setAttribute('style', 'background-color: transparent;');
}
function lockOfficeAddressStreet2 () {
	document.getElementById('officeAddressStreet2').append('readonly');
	document.getElementById('officeAddressStreet2').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('officeAddressStreet2Lock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('officeAddressStreet2Unlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('officeAddressStreet2').value.length > 0) { document.getElementById('warningOfficeAddressStreet2').setAttribute('style', 'display: none;'); }
	if (document.getElementById('officeAddressStreet2').value.length < 1) { document.getElementById('warningOfficeAddressStreet2').setAttribute('style', 'display: block;'); }
}
function clearOfficeAddressStreet2 () {
	if (confirm('Are you sure you want to CLEAR the office address street #2?') === true) {
		document.getElementById('officeAddressStreet2').value = '';
		document.getElementById('officeAddressStreet2').size = 20;
		document.getElementById('officeAddressStreet2').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('officeAddressStreet2').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningOfficeAddressStreet2').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// officeAddressCity
function unlockOfficeAddressCity() {
	document.getElementById('officeAddressCity').removeAttribute('readonly');
	document.getElementById('officeAddressCity').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('officeAddressCityUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('officeAddressCityLock').setAttribute('style', 'background-color: transparent;');
}
function lockOfficeAddressCity() {
	document.getElementById('officeAddressCity').append('readonly');
	document.getElementById('officeAddressCity').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('officeAddressCityLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('officeAddressCityUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('officeAddressCity').value.length > 0) { document.getElementById('warningOfficeAddressCity').setAttribute('style', 'display: none;'); }
	if (document.getElementById('officeAddressCity').value.length < 1) { document.getElementById('warningOfficeAddressCity').setAttribute('style', 'display: block;'); }
}
function clearOfficeAddressCity() {
	if (confirm('Are you sure you want to CLEAR the office address city?') === true) {
		document.getElementById('officeAddressCity').value = '';
		document.getElementById('officeAddressCity').size = 20;
		document.getElementById('officeAddressCity').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('officeAddressCity').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningOfficeAddressCity').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// officeAddressState
function unlockOfficeAddressState() {
	document.getElementById('officeAddressState').removeAttribute('readonly');
	document.getElementById('officeAddressState').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('officeAddressStateUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('officeAddressStateLock').setAttribute('style', 'background-color: transparent;');
}
function lockOfficeAddressState() {
	document.getElementById('officeAddressState').append('readonly');
	document.getElementById('officeAddressState').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('officeAddressStateLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('officeAddressStateUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('officeAddressState').value.length > 0) { document.getElementById('warningOfficeAddressState').setAttribute('style', 'display: none;'); }
	if (document.getElementById('officeAddressState').value.length < 1) { document.getElementById('warningOfficeAddressState').setAttribute('style', 'display: block;'); }
}
function clearOfficeAddressState() {
	if (confirm('Are you sure you want to CLEAR the office address state?') === true) {
		document.getElementById('officeAddressState').value = '';
		document.getElementById('officeAddressState').size = 20;
		document.getElementById('officeAddressState').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('officeAddressState').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningOfficeAddressState').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// officeAddressZip
function unlockOfficeAddressZip() {
	document.getElementById('officeAddressZip').removeAttribute('readonly');
	document.getElementById('officeAddressZip').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('officeAddressZipUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('officeAddressZipLock').setAttribute('style', 'background-color: transparent;');
}
function lockOfficeAddressZip() {
	document.getElementById('officeAddressZip').append('readonly');
	document.getElementById('officeAddressZip').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('officeAddressZipLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('officeAddressZipUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('officeAddressZip').value.length > 0) { document.getElementById('warningOfficeAddressZip').setAttribute('style', 'display: none;'); }
	if (document.getElementById('officeAddressZip').value.length < 1) { document.getElementById('warningOfficeAddressZip').setAttribute('style', 'display: block;'); }
}
function clearOfficeAddressZip() {
	if (confirm('Are you sure you want to CLEAR the office address zip code?') === true) {
		document.getElementById('officeAddressZip').value = '';
		document.getElementById('officeAddressZip').size = 20;
		document.getElementById('officeAddressZip').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('officeAddressZip').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningOfficeAddressZip').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// officeAddressCountry
function unlockOfficeAddressCountry() {
	document.getElementById('officeAddressCountry').removeAttribute('readonly');
	document.getElementById('officeAddressCountry').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('officeAddressCountryUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('officeAddressCountryLock').setAttribute('style', 'background-color: transparent;');
}
function lockOfficeAddressCountry() {
	document.getElementById('officeAddressCountry').append('readonly');
	document.getElementById('officeAddressCountry').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('officeAddressCountryLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('officeAddressCountryUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('officeAddressCountry').value.length > 0) { document.getElementById('warningOfficeAddressCountry').setAttribute('style', 'display: none;'); }
	if (document.getElementById('officeAddressCountry').value.length < 1) { document.getElementById('warningOfficeAddressCountry').setAttribute('style', 'display: block;'); }
}
function clearOfficeAddressCountry() {
	if (confirm('Are you sure you want to CLEAR the office address country?') === true) {
		document.getElementById('officeAddressCountry').value = '';
		document.getElementById('officeAddressCountry').size = 20;
		document.getElementById('officeAddressCountry').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('officeAddressCountry').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningOfficeAddressCountry').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}

// HOURS OF OPERATION
// mondayOpeningTime
function unlockMondayOpeningTime() {
	document.getElementById('mondayOpeningTime').removeAttribute('readonly');
	document.getElementById('mondayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('mondayOpeningTimeUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('mondayOpeningTimeLock').setAttribute('style', 'background-color: transparent;');
}
function lockMondayOpeningTime() {
	document.getElementById('mondayOpeningTime').append('readonly');
	document.getElementById('mondayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('mondayOpeningTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('mondayOpeningTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('mondayOpeningTime').value.length > 0) { document.getElementById('warningMondayOpeningTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('mondayOpeningTime').value.length < 1) { document.getElementById('warningMondayOpeningTime').setAttribute('style', 'display: block;'); }
}
function clearMondayOpeningTime() {
	if (confirm('Are you sure you want to CLEAR the Monday opening time?') === true) {
		document.getElementById('mondayOpeningTime').value = '';
		document.getElementById('mondayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('mondayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningMondayOpeningTime').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// mondayClosingTime
function unlockMondayClosingTime() {
	document.getElementById('mondayClosingTime').removeAttribute('readonly');
	document.getElementById('mondayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('mondayClosingTimeUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('mondayClosingTimeLock').setAttribute('style', 'background-color: transparent;');
}
function lockMondayClosingTime() {
	document.getElementById('mondayClosingTime').append('readonly');
	document.getElementById('mondayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('mondayClosingTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('mondayClosingTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('mondayClosingTime').value.length > 0) { document.getElementById('warningMondayClosingTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('mondayClosingTime').value.length < 1) { document.getElementById('warningMondayClosingTime').setAttribute('style', 'display: block;'); }
}
function clearMondayClosingTime() {
	if (confirm('Are you sure you want to CLEAR the Monday closing time?') === true) {
		document.getElementById('mondayClosingTime').value = '';
		document.getElementById('mondayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('mondayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningMondayClosingTime').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// tuesdayOpeningTime
function unlockTuesdayOpeningTime () {
	document.getElementById('tuesdayOpeningTime').removeAttribute('readonly');
	document.getElementById('tuesdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('tuesdayOpeningTimeUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('tuesdayOpeningTimeLock').setAttribute('style', 'background-color: transparent;');
}
function lockTuesdayOpeningTime () {
	document.getElementById('tuesdayOpeningTime').append('readonly');
	document.getElementById('tuesdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('tuesdayOpeningTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('tuesdayOpeningTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('tuesdayOpeningTime').value.length > 0) { document.getElementById('warningTuesdayOpeningTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('tuesdayOpeningTime').value.length < 1) { document.getElementById('warningTuesdayOpeningTime').setAttribute('style', 'display: block;'); }
}
function clearTuesdayOpeningTime () {
	if (confirm('Are you sure you want to CLEAR the Tuesday opening time?') === true) {
		document.getElementById('tuesdayOpeningTime').value = '';
		document.getElementById('tuesdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('tuesdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningTuesdayOpeningTime').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// tuesdayClosingTime
function unlockTuesdayClosingTime () {
	document.getElementById('tuesdayClosingTime').removeAttribute('readonly');
	document.getElementById('tuesdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('tuesdayClosingTimeUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('tuesdayClosingTimeLock').setAttribute('style', 'background-color: transparent;');
}
function lockTuesdayClosingTime () {
	document.getElementById('tuesdayClosingTime').append('readonly');
	document.getElementById('tuesdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('tuesdayClosingTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('tuesdayClosingTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('tuesdayClosingTime').value.length > 0) { document.getElementById('warningTuesdayClosingTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('tuesdayClosingTime').value.length < 1) { document.getElementById('warningTuesdayClosingTime').setAttribute('style', 'display: block;'); }
}
function clearTuesdayClosingTime () {
	if (confirm('Are you sure you want to CLEAR the Tuesday closing time?') === true) {
		document.getElementById('tuesdayClosingTime').value = '';
		document.getElementById('tuesdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('tuesdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningTuesdayClosingTime').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// wednesdayOpeningTime
function unlockWednesdayOpeningTime () {
	document.getElementById('wednesdayOpeningTime').removeAttribute('readonly');
	document.getElementById('wednesdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('wednesdayOpeningTimeUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('wednesdayOpeningTimeLock').setAttribute('style', 'background-color: transparent;');
}
function lockWednesdayOpeningTime () {
	document.getElementById('wednesdayOpeningTime').append('readonly');
	document.getElementById('wednesdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('wednesdayOpeningTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('wednesdayOpeningTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('wednesdayOpeningTime').value.length > 0) { document.getElementById('warningWednesdayOpeningTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('wednesdayOpeningTime').value.length < 1) { document.getElementById('warningWednesdayOpeningTime').setAttribute('style', 'display: block;'); }
}
function clearWednesdayOpeningTime () {
	if (confirm('Are you sure you want to CLEAR the Wednesday opening time?') === true) {
		document.getElementById('wednesdayOpeningTime').value = '';
		document.getElementById('wednesdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('wednesdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningWednesdayOpeningTime').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// wednesdayClosingTime
function unlockWednesdayClosingTime () {
	document.getElementById('wednesdayClosingTime').removeAttribute('readonly');
	document.getElementById('wednesdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('wednesdayClosingTimeUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('wednesdayClosingTimeLock').setAttribute('style', 'background-color: transparent;');
}
function lockWednesdayClosingTime () {
	document.getElementById('wednesdayClosingTime').append('readonly');
	document.getElementById('wednesdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('wednesdayClosingTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('wednesdayClosingTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('wednesdayClosingTime').value.length > 0) { document.getElementById('warningWednesdayClosingTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('wednesdayClosingTime').value.length < 1) { document.getElementById('warningWednesdayClosingTime').setAttribute('style', 'display: block;'); }
}
function clearWednesdayClosingTime () {
	if (confirm('Are you sure you want to CLEAR the Wednesday closing time?') === true) {
		document.getElementById('wednesdayClosingTime').value = '';
		document.getElementById('wednesdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('wednesdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningWednesdayClosingTime').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// thursdayOpeningTime
function unlockThursdayOpeningTime () {
	document.getElementById('thursdayOpeningTime').removeAttribute('readonly');
	document.getElementById('thursdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('thursdayOpeningTimeUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('thursdayOpeningTimeLock').setAttribute('style', 'background-color: transparent;');
}
function lockThursdayOpeningTime () {
	document.getElementById('thursdayOpeningTime').append('readonly');
	document.getElementById('thursdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('thursdayOpeningTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('thursdayOpeningTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('thursdayOpeningTime').value.length > 0) { document.getElementById('warningThursdayOpeningTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('thursdayOpeningTime').value.length < 1) { document.getElementById('warningThursdayOpeningTime').setAttribute('style', 'display: block;'); }
}
function clearThursdayOpeningTime () {
	if (confirm('Are you sure you want to CLEAR the Thursday opening time?') === true) {
		document.getElementById('thursdayOpeningTime').value = '';
		document.getElementById('thursdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('thursdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningThursdayOpeningTime').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// thursdayClosingTime
function unlockThursdayClosingTime () {
	document.getElementById('thursdayClosingTime').removeAttribute('readonly');
	document.getElementById('thursdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('thursdayClosingTimeUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('thursdayClosingTimeLock').setAttribute('style', 'background-color: transparent;');
}
function lockThursdayClosingTime () {
	document.getElementById('thursdayClosingTime').append('readonly');
	document.getElementById('thursdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('thursdayClosingTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('thursdayClosingTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('thursdayClosingTime').value.length > 0) { document.getElementById('warningThursdayClosingTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('thursdayClosingTime').value.length < 1) { document.getElementById('warningThursdayClosingTime').setAttribute('style', 'display: block;'); }
}
function clearThursdayClosingTime () {
	if (confirm('Are you sure you want to CLEAR the Thursday closing time?') === true) {
		document.getElementById('thursdayClosingTime').value = '';
		document.getElementById('thursdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('thursdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningThursdayClosingTime').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// fridayOpeningTime
function unlockFridayOpeningTime () {
	document.getElementById('fridayOpeningTime').removeAttribute('readonly');
	document.getElementById('fridayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('fridayOpeningTimeUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('fridayOpeningTimeLock').setAttribute('style', 'background-color: transparent;');
}
function lockFridayOpeningTime () {
	document.getElementById('fridayOpeningTime').append('readonly');
	document.getElementById('fridayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('fridayOpeningTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('fridayOpeningTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('fridayOpeningTime').value.length > 0) { document.getElementById('warningFridayOpeningTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('fridayOpeningTime').value.length < 1) { document.getElementById('warningFridayOpeningTime').setAttribute('style', 'display: block;'); }
}
function clearFridayOpeningTime () {
	if (confirm('Are you sure you want to CLEAR the Friday opening time?') === true) {
		document.getElementById('fridayOpeningTime').value = '';
		document.getElementById('fridayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('fridayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningFridayOpeningTime').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// fridayClosingTime
function unlockFridayClosingTime () {
	document.getElementById('fridayClosingTime').removeAttribute('readonly');
	document.getElementById('fridayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('fridayClosingTimeUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('fridayClosingTimeLock').setAttribute('style', 'background-color: transparent;');
}
function lockFridayClosingTime () {
	document.getElementById('fridayClosingTime').append('readonly');
	document.getElementById('fridayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('fridayClosingTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('fridayClosingTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('fridayClosingTime').value.length > 0) { document.getElementById('warningFridayClosingTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('fridayClosingTime').value.length < 1) { document.getElementById('warningFridayClosingTime').setAttribute('style', 'display: block;'); }
}
function clearFridayClosingTime () {
	if (confirm('Are you sure you want to CLEAR the Friday closing time?') === true) {
		document.getElementById('fridayClosingTime').value = '';
		document.getElementById('fridayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('fridayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningFridayClosingTime').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// saturdayOpeningTime
function unlockSaturdayOpeningTime () {
	document.getElementById('saturdayOpeningTime').removeAttribute('readonly');
	document.getElementById('saturdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('saturdayOpeningTimeUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('saturdayOpeningTimeLock').setAttribute('style', 'background-color: transparent;');
}
function lockSaturdayOpeningTime () {
	document.getElementById('saturdayOpeningTime').append('readonly');
	document.getElementById('saturdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: green;');
	document.getElementById('saturdayOpeningTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('saturdayOpeningTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('saturdayOpeningTime').value.length > 0) { document.getElementById('warningSaturdayOpeningTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('saturdayOpeningTime').value.length < 1) { document.getElementById('warningSaturdayOpeningTime').setAttribute('style', 'display: block;'); }
}
function clearSaturdayOpeningTime () {
	if (confirm('Are you sure you want to CLEAR the Saturday opening time?') === true) {
		document.getElementById('saturdayOpeningTime').value = '';
		document.getElementById('saturdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('saturdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: green;');
			document.getElementById('warningSaturdayOpeningTime').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// saturdayClosingTime
function unlockSaturdayClosingTime () {
	document.getElementById('saturdayClosingTime').removeAttribute('readonly');
	document.getElementById('saturdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('saturdayClosingTimeUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('saturdayClosingTimeLock').setAttribute('style', 'background-color: transparent;');
}
function lockSaturdayClosingTime () {
	document.getElementById('saturdayClosingTime').append('readonly');
	document.getElementById('saturdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('saturdayClosingTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('saturdayClosingTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('saturdayClosingTime').value.length > 0) { document.getElementById('warningSaturdayClosingTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('saturdayClosingTime').value.length < 1) { document.getElementById('warningSaturdayClosingTime').setAttribute('style', 'display: block;'); }
}
function clearSaturdayClosingTime () {
	if (confirm('Are you sure you want to CLEAR the Saturday closing time?') === true) {
		document.getElementById('saturdayClosingTime').value = '';
		document.getElementById('saturdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('saturdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: green;');
			document.getElementById('warningSaturdayClosingTime').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// sundayOpeningTime
function unlockSundayOpeningTime () {
	document.getElementById('sundayOpeningTime').removeAttribute('readonly');
	document.getElementById('sundayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('sundayOpeningTimeUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('sundayOpeningTimeLock').setAttribute('style', 'background-color: transparent;');
}
function lockSundayOpeningTime () {
	document.getElementById('sundayOpeningTime').append('readonly');
	document.getElementById('sundayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('sundayOpeningTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('sundayOpeningTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('sundayOpeningTime').value.length > 0) { document.getElementById('warningSundayOpeningTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('sundayOpeningTime').value.length < 1) { document.getElementById('warningSundayOpeningTime').setAttribute('style', 'display: block;'); }
}
function clearSundayOpeningTime () {
	if (confirm('Are you sure you want to CLEAR the Sunday opening time?') === true) {
		document.getElementById('sundayOpeningTime').value = '';
		document.getElementById('sundayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('sundayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: green;');
			document.getElementById('warningSundayOpeningTime').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// sundayClosingTime
function unlockSundayClosingTime () {
	document.getElementById('sundayClosingTime').removeAttribute('readonly');
	document.getElementById('sundayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('sundayClosingTimeUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('sundayClosingTimeLock').setAttribute('style', 'background-color: transparent;');
}
function lockSundayClosingTime () {
	document.getElementById('sundayClosingTime').append('readonly');
	document.getElementById('sundayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('sundayClosingTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('sundayClosingTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('sundayClosingTime').value.length > 0) { document.getElementById('warningSundayClosingTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('sundayClosingTime').value.length < 1) { document.getElementById('warningSundayClosingTime').setAttribute('style', 'display: block;'); }
}
function clearSundayClosingTime () {
	if (confirm('Are you sure you want to CLEAR the Sunday closing time?') === true) {
		document.getElementById('sundayClosingTime').value = '';
		document.getElementById('sundayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('sundayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: green;');
			document.getElementById('warningSundayClosingTime').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}

// BASIC
// businessType
function unlockBusinessType () {
	document.getElementById('businessType').setAttribute('style', 'display: block;');
	document.getElementById('businessType').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('businessTypeUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('businessTypeLock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('businessTypeValueDisplay').setAttribute('style', 'display: none;');
}
function lockBusinessType () {
	document.getElementById('businessType').setAttribute('style', 'display: none;');
	document.getElementById('businessTypeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('businessTypeUnlock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('businessTypeValueDisplay').innerHTML = 'Current Business Type: ' + document.getElementById('businessType').value;
	document.getElementById('businessTypeValueDisplay').setAttribute('style', 'display: block;');
	if (document.getElementById('businessType').value == null) { document.getElementById('warningBusinessType').setAttribute('style', 'display: block;'); }
	if (document.getElementById('businessType').value != null) { document.getElementById('warningBusinessType').setAttribute('style', 'display: none;'); }
}
function clearBusinessType () {
	if (confirm('Are you sure you want to CLEAR the Business Type?') === true) {
		document.getElementById('businessType').value = '';
		document.getElementById('businessType').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('businessType').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: green;');
			document.getElementById('warningBusinessType').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// slogan
function unlockSlogan () {
	document.getElementById('slogan').removeAttribute('readonly');
	document.getElementById('slogan').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('sloganUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('sloganLock').setAttribute('style', 'background-color: transparent;');
}
function lockSlogan () {
	document.getElementById('slogan').append('readonly');
	document.getElementById('slogan').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('sloganLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('sloganUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('slogan').value.length > 0) { document.getElementById('warningSlogan').setAttribute('style', 'display: block;'); }
	if (document.getElementById('slogan').value.length < 1) { document.getElementById('warningSlogan').setAttribute('style', 'display: none;'); }
}
function clearSlogan () {
	if (confirm('Are you sure you want to CLEAR the Slogan?') === true) {
		document.getElementById('slogan').value = '';
		document.getElementById('slogan').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('slogan').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningSlogan').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// missionStatement
function unlockMissionStatement () {
	document.getElementById('missionStatement').removeAttribute('readonly');
	document.getElementById('missionStatement').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('missionStatementUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('missionStatementLock').setAttribute('style', 'background-color: transparent;');
}
function lockMissionStatement () {
	document.getElementById('missionStatement').append('readonly');
	document.getElementById('missionStatement').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('missionStatementLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('missionStatementUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('missionStatement').value.length > 0) { document.getElementById('warningMissionStatement').setAttribute('style', 'display: block;'); }
	if (document.getElementById('missionStatement').value.length < 1) { document.getElementById('warningMissionStatement').setAttribute('style', 'display: none;'); }
}
function clearMissionStatement () {
	if (confirm('Are you sure you want to CLEAR the Mission Statement?') === true) {
		document.getElementById('missionStatement').value = '';
		document.getElementById('missionStatement').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function () {
			document.getElementById('missionStatement').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningMissionStatement').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// valueProp
function unlockValueProp () {
	document.getElementById('valueProp').removeAttribute('readonly');
	document.getElementById('valueProp').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('valuePropUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('valuePropLock').setAttribute('style', 'background-color: transparent;');
}
function lockValueProp () {
	document.getElementById('valueProp').append('readonly');
	document.getElementById('valueProp').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('valuePropLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('valuePropUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('valueProp').value.length > 0) { document.getElementById('warningValueProposition').setAttribute('style', 'display: block;'); }
	if (document.getElementById('valueProp').value.length < 1) { document.getElementById('warningValueProposition').setAttribute('style', 'display: none;'); }
}
function clearValueProp () {
	if (confirm('Are you sure you want to CLEAR the Value Proposition?') === true) {
		document.getElementById('valueProp').value = '';
		document.getElementById('valueProp').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('valueProp').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningValueProposition').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}

// SOCIAL MEDIA
// facebookUrl
function unlockFacebookUrl () {
	document.getElementById('facebookUrl').removeAttribute('readonly');
	document.getElementById('facebookUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('facebookUrlUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('facebookUrlLock').setAttribute('style', 'background-color: transparent;');
}
function lockFacebookUrl () {
	document.getElementById('facebookUrl').append('readonly');
	document.getElementById('facebookUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('facebookUrlLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('facebookUrlUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('facebookUrl').value.length > 0) { document.getElementById('warningFacebookURL').setAttribute('style', 'display: none;'); }
	if (document.getElementById('facebookUrl').value.length < 1) { document.getElementById('warningFacebookURL').setAttribute('style', 'display: block;'); }
}
function clearFacebookUrl () {
	if (confirm('Are you sure you want to CLEAR the Facebook URL?') === true) {
		document.getElementById('facebookUrl').value = '';
		document.getElementById('facebookUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('facebookUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningFacebookURL').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// facebookUsername
function unlockFacebookUsername () {
	document.getElementById('facebookUsername').removeAttribute('readonly');
	document.getElementById('facebookUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('facebookUsernameUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('facebookUsernameLock').setAttribute('style', 'background-color: transparent;');
}
function lockFacebookUsername () {
	document.getElementById('facebookUsername').append('readonly');
	document.getElementById('facebookUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('facebookUsernameLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('facebookUsernameUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('facebookUsername').value.length > 0) { document.getElementById('warningFacebookUsername').setAttribute('style', 'display: none;'); }
	if (document.getElementById('facebookUsername').value.length < 1) { document.getElementById('warningFacebookUsername').setAttribute('style', 'display: block;'); }
}
function clearFacebookUsername () {
	if (confirm('Are you sure you want to CLEAR the Facebook Username?') === true) {
		document.getElementById('facebookUsername').value = '';
		document.getElementById('facebookUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('facebookUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningFacebookUsername').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// instagramUrl
function unlockInstagramUrl () {
	document.getElementById('instagramUrl').removeAttribute('readonly');
	document.getElementById('instagramUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('instagramUrlUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('instagramUrlLock').setAttribute('style', 'background-color: transparent;');
}
function lockInstagramUrl () {
	document.getElementById('instagramUrl').append('readonly');
	document.getElementById('instagramUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('instagramUrlLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('instagramUrlUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('instagramUrl').value.length > 0) { document.getElementById('warningInstagramURL').setAttribute('style', 'display: none;'); }
	if (document.getElementById('instagramUrl').value.length < 1) { document.getElementById('warningInstagramURL').setAttribute('style', 'display: block;'); }
}
function clearInstagramUrl () {
	if (confirm('Are you sure you want to CLEAR the Instagram URL?') === true) {
		document.getElementById('instagramUrl').value = '';
		document.getElementById('instagramUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('instagramUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningInstagramURL').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// instagramUsername
function unlockInstagramUsername () {
	document.getElementById('instagramUsername').removeAttribute('readonly');
	document.getElementById('instagramUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('instagramUsernameUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('instagramUsernameLock').setAttribute('style', 'background-color: transparent;');
}
function lockInstagramUsername () {
	document.getElementById('instagramUsername').append('readonly');
	document.getElementById('instagramUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('instagramUsernameLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('instagramUsernameUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('instagramUsername').value.length > 0) { document.getElementById('warningInstagramUsername').setAttribute('style', 'display: none;'); }
	if (document.getElementById('instagramUsername').value.length < 1) { document.getElementById('warningInstagramUsername').setAttribute('style', 'display: block;'); }

	// Get Instagram Profile Pic from username API - https://rapidapi.com/fariswdcash-434L2ELS8qx/api/instagram-profile1
	const instaUrlOptions = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '0759e0a5f5msh13ea66780939408p189da2jsne987576d688f',
			'X-RapidAPI-Host': 'instagram-profile1.p.rapidapi.com'
		}
	};
	fetch('https://instagram-profile1.p.rapidapi.com/getid/' + document.getElementById('instagramUsername').value, instaUrlOptions)
	.then(response => response.json())
	.then(response => {
		document.getElementById('instagramProfilePic').style.display = 'inline';
		document.getElementById('instagramProfilePic').src = response.profile_pic_url_proxy;
		document.getElementById('instagramProfilePic').alt = response.username;
		document.getElementById('instagramProfilePic').style.borderRadius = '50%';
	}).catch(err => console.error(err));

}
function clearInstagramUsername () {
	if (confirm('Are you sure you want to CLEAR the Instagram Username?') === true) {
		document.getElementById('instagramUsername').value = '';
		document.getElementById('instagramUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');

		// Clear Instagram Profile Pic
		document.getElementById('instagramProfilePic').src = null;
		document.getElementById('instagramProfilePic').alt = null;
		document.getElementById('instagramProfilePic').style.display = 'none';

		setTimeout(function() {
			document.getElementById('instagramUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningInstagramUsername').setAttribute('style', 'display: block;');
		}, 800);

	} else {
		confirm.close();
	}
}
// linkedinUrl
function unlockLinkedinUrl () {
	document.getElementById('linkedinUrl').removeAttribute('readonly');
	document.getElementById('linkedinUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('linkedinUrlUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('linkedinUrlLock').setAttribute('style', 'background-color: transparent;');
}
function lockLinkedinUrl () {
	document.getElementById('linkedinUrl').append('readonly');
	document.getElementById('linkedinUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('linkedinUrlLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('linkedinUrlUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('linkedinUrl').value.length > 0) { document.getElementById('warningLinkedinURL').setAttribute('style', 'display: none;'); }
	if (document.getElementById('linkedinUrl').value.length < 1) { document.getElementById('warningLinkedinURL').setAttribute('style', 'display: block;'); }
}
function clearLinkedinUrl () {
	if (confirm('Are you sure you want to CLEAR the LinkedIn URL?') === true) {
		document.getElementById('linkedinUrl').value = '';
		document.getElementById('linkedinUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('linkedinUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningLinkedinURL').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// linkedinUsername
function unlockLinkedinUsername () {
	document.getElementById('linkedinUsername').removeAttribute('readonly');
	document.getElementById('linkedinUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('linkedinUsernameUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('linkedinUsernameLock').setAttribute('style', 'background-color: transparent;');
}
function lockLinkedinUsername () {
	document.getElementById('linkedinUsername').append('readonly');
	document.getElementById('linkedinUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('linkedinUsernameLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('linkedinUsernameUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('linkedinUsername').value.length > 0) { document.getElementById('warningLinkedinUsername').setAttribute('style', 'display: none;'); }
	if (document.getElementById('linkedinUsername').value.length < 1) { document.getElementById('warningLinkedinUsername').setAttribute('style', 'display: block;'); }
}
function clearLinkedinUsername () {
	if (confirm('Are you sure you want to CLEAR the LinkedIn Username?') === true) {
		document.getElementById('linkedinUsername').value = '';
		document.getElementById('linkedinUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('linkedinUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningLinkedinUsername').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// twitterUrl
function unlockTwitterUrl () {
	document.getElementById('twitterUrl').removeAttribute('readonly');
	document.getElementById('twitterUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('twitterUrlUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('twitterUrlLock').setAttribute('style', 'background-color: transparent;');
}
function lockTwitterUrl () {
	document.getElementById('twitterUrl').append('readonly');
	document.getElementById('twitterUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('twitterUrlLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('twitterUrlUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('twitterUrl').value.length > 0) { document.getElementById('warningTwitterURL').setAttribute('style', 'display: none;'); }
	if (document.getElementById('twitterUrl').value.length < 1) { document.getElementById('warningTwitterURL').setAttribute('style', 'display: block;'); }
}
function clearTwitterUrl () {
	if (confirm('Are you sure you want to CLEAR the Twitter URL?') === true) {
		document.getElementById('twitterUrl').value = '';
		document.getElementById('twitterUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('twitterUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningTwitterURL').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// twitterUsername
function unlockTwitterUsername () {
	document.getElementById('twitterUsername').removeAttribute('readonly');
	document.getElementById('twitterUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('twitterUsernameUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('twitterUsernameLock').setAttribute('style', 'background-color: transparent;');
}
function lockTwitterUsername () {
	document.getElementById('twitterUsername').append('readonly');
	document.getElementById('twitterUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('twitterUsernameLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('twitterUsernameUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('twitterUsername').value.length > 0) { document.getElementById('warningTwitterUsername').setAttribute('style', 'display: none;'); }
	if (document.getElementById('twitterUsername').value.length < 1) { document.getElementById('warningTwitterUsername').setAttribute('style', 'display: block;'); }
}
function clearTwitterUsername () {
	if (confirm('Are you sure you want to CLEAR the Twitter Username?') === true) {
		document.getElementById('twitterUsername').value = '';
		document.getElementById('twitterUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('twitterUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningTwitterUsername').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// tiktokUrl
function unlockTiktokUrl () {
	document.getElementById('tiktokUrl').removeAttribute('readonly');
	document.getElementById('tiktokUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('tiktokUrlUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('tiktokUrlLock').setAttribute('style', 'background-color: transparent;');
}
function lockTiktokUrl () {
	document.getElementById('tiktokUrl').append('readonly');
	document.getElementById('tiktokUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('tiktokUrlLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('tiktokUrlUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('tiktokUrl').value.length > 0) { document.getElementById('warningTiktokURL').setAttribute('style', 'display: none;'); }
	if (document.getElementById('tiktokUrl').value.length < 1) { document.getElementById('warningTiktokURL').setAttribute('style', 'display: block;'); }
}
function clearTiktokUrl () {
	if (confirm('Are you sure you want to CLEAR the TikTok URL?') === true) {
		document.getElementById('tiktokUrl').value = '';
		document.getElementById('tiktokUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('tiktokUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningTiktokURL').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// tiktokUsername
function unlockTiktokUsername () {
	document.getElementById('tiktokUsername').removeAttribute('readonly');
	document.getElementById('tiktokUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('tiktokUsernameUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('tiktokUsernameLock').setAttribute('style', 'background-color: transparent;');
}
function lockTiktokUsername () {
	document.getElementById('tiktokUsername').append('readonly');
	document.getElementById('tiktokUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('tiktokUsernameLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('tiktokUsernameUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('tiktokUsername').value.length > 0) { document.getElementById('warningTiktokUsername').setAttribute('style', 'display: none;'); }
	if (document.getElementById('tiktokUsername').value.length < 1) { document.getElementById('warningTiktokUsername').setAttribute('style', 'display: block;'); }
}
function clearTiktokUsername () {
	if (confirm('Are you sure you want to CLEAR the TikTok Username?') === true) {
		document.getElementById('tiktokUsername').value = '';
		document.getElementById('tiktokUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('tiktokUsername').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningTiktokUsername').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}

// BRAND
// squareLogo
function unlockSquareLogo () {
	document.getElementById('squareLogo').setAttribute('style', 'display: block;');
	document.getElementById('squareLogo').setAttribute('style', 'style, border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange; display: block;');
	document.getElementById('squareLogoUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('squareLogoLock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('squareLogoValueDisplay').setAttribute('style', 'display: none;');
}
function lockSquareLogo () {
	document.getElementById('squareLogo').setAttribute('style', 'display: none;');
	document.getElementById('squareLogoLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('squareLogoUnlock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('squareLogoValueDisplay').innerHTML = 'Current Square Logo: ' + document.getElementById('squareLogo').value;
	document.getElementById('squareLogoValueDisplay').setAttribute('style', 'display: block;');
	if (document.getElementById('squareLogo').value != null) {
		document.getElementById('warningSquareLogo').setAttribute('style', 'display: none;');
	}
	if (document.getElementById('squareLogo').value == null) {
		document.getElementById('warningSquareLogo').setAttribute('style', 'display: block;');
	}

	// list all elements where the class is 'contentVar:Icon'
	var elements = document.getElementsByClassName('contentVar:Icon');
	// list the value of the title attribute for each parent element of the elements found with the class 'contentVar:Icon', but show them all in 1 alert box
	for(var i = 0; i < elements.length; i ++) {
		confirm('This change will effect the following ' + elements.length + ' content pieces: ' + elements[i].parentNode.getAttribute('title')); // This creates a new alert box for each item, we want 1 alert box to list ALL .parentNode item titles.
	}
}
function clearSquareLogo () {
	var confirm = alert('Are you sure you want to clear the square logo?');
	if (confirm) {
		document.getElementById('squareLogo').value = '';
		document.getElementById('squareLogo').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('squareLogo').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningSquareLogo').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
function showSquareImage() {
	document.getElementById("uploadedSquareImage").style.display = "block";
	const file = document.querySelector('#squareLogo').files[0];
	let reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function () {
		localStorage.setItem("image", reader.result);
		document.getElementById("uploadedSquareImage").setAttribute("src", localStorage.getItem("image"))
	}
	if(localStorage.getItem("image"))
		document.getElementById("uploadedSquareImage").setAttribute("src", localStorage.getItem("image"));
}
// fullLogo
function unlockFullLogo () {
	document.getElementById('fullLogo').setAttribute('style', 'display: block;');
	document.getElementById('fullLogo').setAttribute('style', 'style, border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange; display: block;');
	document.getElementById('fullLogoUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('fullLogoLock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('fullLogoValueDisplay').setAttribute('style', 'display: none;');
}
function lockFullLogo () {
	document.getElementById('fullLogo').setAttribute('style', 'display: none;');
	document.getElementById('fullLogoLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('fullLogoUnlock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('fullLogoValueDisplay').innerHTML = 'Current Full Logo: ' + document.getElementById('fullLogo').value;
	document.getElementById('fullLogoValueDisplay').setAttribute('style', 'display: block;');
	if (document.getElementById('fullLogo').value != null) { document.getElementById('warningFullLogo').setAttribute('style', 'display: none;'); }
	if (document.getElementById('fullLogo').value == null) { document.getElementById('warningFullLogo').setAttribute('style', 'display: block;'); }
}
function clearFullLogo () {
	var confirm = alert('Are you sure you want to clear the full logo?');
	if (confirm) {
		document.getElementById('fullLogo').value = '';
		document.getElementById('fullLogo').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('fullLogo').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningFullLogo').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
function showFullImage() {
	document.getElementById("uploadedFullImage").style.display = "block";
	const file = document.querySelector('#fullLogo').files[0];
	let reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function () {
		localStorage.setItem("image", reader.result);
		document.getElementById("uploadedFullImage").setAttribute("src", localStorage.getItem("image"))
	}
	if(localStorage.getItem("image"))
		document.getElementById("uploadedFullImage").setAttribute("src", localStorage.getItem("image"));
}

// COLORS
// primaryColor
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
// secondaryColor
function unlockSecondaryColor () {
	document.getElementById('secondaryColor').setAttribute('style', 'display: block;');
	document.getElementById('secondaryColor').setAttribute('style', 'style, border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange; display: block;');
	document.getElementById('secondaryColorUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('secondaryColorLock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('secondaryColorValueDisplay').setAttribute('style', 'display: none;');
}
function lockSecondaryColor () {
	document.getElementById('secondaryColor').setAttribute('style', 'display: none;');
	document.getElementById('secondaryColorLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('secondaryColorUnlock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('secondaryColorValueDisplay').innerHTML = 'Current Secondary Color Code: ' + document.getElementById('secondaryColor').value;
	document.getElementById('secondaryColorValueDisplay').setAttribute('style', 'display: block;');
	document.getElementById('secondaryColorValueDisplayColor').style.backgroundColor = document.getElementById('secondaryColor').value;
	document.getElementById('secondaryColorValueDisplayColor').style.borderColor = '#1E1E1EFF';
	document.getElementById('secondaryColorValueDisplayColor').style.borderRadius = '25px';
	document.getElementById('secondaryColorValueDisplayColor').style.borderWidth = '3px';
	document.getElementById('secondaryColorValueDisplayColor').style.borderStyle = 'solid'
	if (document.getElementById('secondaryColor').value.length > 0) { document.getElementById('warningSecondaryColor').setAttribute('style', 'display: none;'); }
	if (document.getElementById('secondaryColor').value.length < 1) { document.getElementById('warningSecondaryColor').setAttribute('style', 'display: block;'); }
}
function clearSecondaryColor () {
	var confirm = alert('Are you sure you want to clear the secondary color?');
	if (confirm) {
		document.getElementById('secondaryColor').value = '';
		document.getElementById('secondaryColor').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('secondaryColor').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningSecondaryColor').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// tertiaryColor
function unlockTertiaryColor () {
	document.getElementById('tertiaryColor').setAttribute('style', 'display: block;');
	document.getElementById('tertiaryColor').setAttribute('style', 'style, border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange; display: block;');
	document.getElementById('tertiaryColorUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('tertiaryColorLock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('tertiaryColorValueDisplay').setAttribute('style', 'display: block;');
}
function lockTertiaryColor () {
	document.getElementById('tertiaryColor').setAttribute('style', 'display: none;');
	document.getElementById('tertiaryColorLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('tertiaryColorUnlock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('tertiaryColorValueDisplay').innerHTML = 'Current Tertiary Color Code: ' + document.getElementById('tertiaryColor').value;
	document.getElementById('tertiaryColorValueDisplay').setAttribute('style', 'display: block;');
	document.getElementById('tertiaryColorValueDisplayColor').style.backgroundColor = document.getElementById('tertiaryColor').value;
	document.getElementById('tertiaryColorValueDisplayColor').style.borderColor = '#1e1e1e';
	document.getElementById('tertiaryColorValueDisplayColor').style.borderRadius = '25px';
	document.getElementById('tertiaryColorValueDisplayColor').style.borderWidth = '3px';
	document.getElementById('tertiaryColorValueDisplayColor').style.borderStyle = 'solid'
	if (document.getElementById('tertiaryColor').value.length > 0) { document.getElementById('warningTertiaryColor').setAttribute('style', 'display: none;'); }
	if (document.getElementById('tertiaryColor').value.length < 1) { document.getElementById('warningTertiaryColor').setAttribute('style', 'display: block;'); }
}
function clearTertiaryColor () {
	var confirm = alert('Are you sure you want to clear the tertiary color?');
	if (confirm) {
		document.getElementById('tertiaryColor').value = '';
		document.getElementById('tertiaryColor').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('tertiaryColor').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningTertiaryColor').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}

// FONTS
// primaryFont
function unlockPrimaryFont () {
	document.getElementById('primaryFont').removeAttribute('readonly');
	document.getElementById('primaryFont').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('primaryFontUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('primaryFontLock').setAttribute('style', 'background-color: transparent;');
}
function lockPrimaryFont () {
	document.getElementById('primaryFont').append('readonly');
	document.getElementById('primaryFont').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('primaryFontLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('primaryFontUnlock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('warningPrimaryFont').setAttribute('style', 'display: none;');
	if (document.getElementById('primaryFont').value.length > 0) { document.getElementById('warningPrimaryFont').setAttribute('style', 'display: none;'); }
	if (document.getElementById('primaryFont').value.length < 1) { document.getElementById('warningPrimaryFont').setAttribute('style', 'display: block;'); }
}
function clearPrimaryFont () {
	let confirm = alert('Are you sure you want to clear the primary font?');
	if (confirm) {
		document.getElementById('primaryFont').value = '';
		document.getElementById('primaryFont').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('primaryFont').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningPrimaryFont').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// secondaryFont
function unlockSecondaryFont () {
	document.getElementById('secondaryFont').removeAttribute('readonly');
	document.getElementById('secondaryFont').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('secondaryFontUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('secondaryFontLock').setAttribute('style', 'background-color: transparent;');
}
function lockSecondaryFont () {
	document.getElementById('secondaryFont').append('readonly');
	document.getElementById('secondaryFont').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('secondaryFontLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('secondaryFontUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('secondaryFont').value.length > 0) { document.getElementById('warningSecondaryFont').setAttribute('style', 'display: none;'); }
	if (document.getElementById('secondaryFont').value.length < 1) { document.getElementById('warningSecondaryFont').setAttribute('style', 'display: block;'); }
}
function clearSecondaryFont () {
	let confirm = alert('Are you sure you want to clear the secondary font?');
	if (confirm) {
		document.getElementById('secondaryFont').value = '';
		document.getElementById('secondaryFont').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('secondaryFont').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningSecondaryFont').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// tertiaryFont
function unlockTertiaryFont () {
	document.getElementById('tertiaryFont').removeAttribute('readonly');
	document.getElementById('tertiaryFont').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('tertiaryFontUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('tertiaryFontLock').setAttribute('style', 'background-color: transparent;');
}
function lockTertiaryFont () {
	document.getElementById('tertiaryFont').append('readonly');
	document.getElementById('tertiaryFont').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('tertiaryFontLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('tertiaryFontUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('tertiaryFont').value.length > 0) { document.getElementById('warningTertiaryFont').setAttribute('style', 'display: none;'); }
	if (document.getElementById('tertiaryFont').value.length < 1) { document.getElementById('warningTertiaryFont').setAttribute('style', 'display: block;'); }
}
function clearTertiaryFont () {
	let confirm = alert('Are you sure you want to clear the tertiary font?');
	if (confirm) {
		document.getElementById('tertiaryFont').value = '';
		document.getElementById('tertiaryFont').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('tertiaryFont').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningTertiaryFont').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}

// PEOPLE
// person1
// person1Name
function unlockPerson1Name () {
	document.getElementById('person1Name').removeAttribute('readonly');
	document.getElementById('person1Name').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('person1NameUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person1NameLock').setAttribute('style', 'background-color: transparent;');
}
function lockPerson1Name () {
	document.getElementById('person1Name').append('readonly');
	document.getElementById('person1Name').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('person1NameLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person1NameUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('person1Name').value.length > 0) { document.getElementById('warningPerson1Name').setAttribute('style', 'display: none;'); }
	if (document.getElementById('person1Name').value.length < 1) { document.getElementById('warningPerson1Name').setAttribute('style', 'display: block;'); }
}
function clearPerson1Name () {
	let confirm = alert('Are you sure you want to clear the person 1 name?');
	if (confirm) {
		document.getElementById('person1Name').value = '';
		document.getElementById('person1Name').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('person1Name').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningPerson1Name').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// person1Title
function unlockPerson1Title () {
	document.getElementById('person1Title').removeAttribute('readonly');
	document.getElementById('person1Title').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('person1TitleUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person1TitleLock').setAttribute('style', 'background-color: transparent;');
}
function lockPerson1Title () {
	document.getElementById('person1Title').append('readonly');
	document.getElementById('person1Title').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('person1TitleLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person1TitleUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('person1Title').value.length > 0) { document.getElementById('warningPerson1Title').setAttribute('style', 'display: none;'); }
	if (document.getElementById('person1Title').value.length < 1) { document.getElementById('warningPerson1Title').setAttribute('style', 'display: block;'); }
}
function clearPerson1Title () {
	let confirm = alert('Are you sure you want to clear the person 1 title?');
	if (confirm) {
		document.getElementById('person1Title').value = '';
		document.getElementById('person1Title').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('person1Title').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningPerson1Title').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// person1Headshot
function unlockPerson1Headshot () {
	document.getElementById('person1Headshot').setAttribute('style', 'display: block;');
	document.getElementById('person1Headshot').setAttribute('style', 'style, border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange; display: block;');
	document.getElementById('person1HeadshotUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person1HeadshotLock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('person1HeadshotValueDisplay').setAttribute('style', 'display: none;');
}
function lockPerson1Headshot () {
	document.getElementById('person1Headshot').setAttribute('style', 'display: none;');
	document.getElementById('person1HeadshotLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person1HeadshotUnlock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('person1HeadshotValueDisplay').innerHTML = 'Current Person 1 Headshot: ' + document.getElementById('person1Headshot').value;
	document.getElementById('person1HeadshotValueDisplay').setAttribute('style', 'display: block;');
	if (document.getElementById('person1Headshot').value != null) { document.getElementById('warningPerson1Image').setAttribute('style', 'display: none;'); }
	if (document.getElementById('person1Headshot').value == null) { document.getElementById('warningPerson1Image').setAttribute('style', 'display: block;'); }
}
function clearPerson1Headshot () {
	let confirm = alert('Are you sure you want to clear the person 1 headshot?');
	if (confirm) {
		document.getElementById('person1Headshot').value = '';
		document.getElementById('person1Headshot').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred; display: block;');
		setTimeout(function() {
			document.getElementById('person1Headshot').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen; display: block;');
			document.getElementById('warningPerson1Image').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// person1FacebookUrl
function unlockPerson1FacebookUrl () {
	document.getElementById('person1FacebookUrl').removeAttribute('readonly');
	document.getElementById('person1FacebookUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('person1FacebookUrlUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person1FacebookUrlLock').setAttribute('style', 'background-color: transparent;');
}
function lockPerson1FacebookUrl () {
	document.getElementById('person1FacebookUrl').append('readonly');
	document.getElementById('person1FacebookUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('person1FacebookUrlLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person1FacebookUrlUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('person1FacebookUrl').value.length > 0) { document.getElementById('warningPerson1Facebook').setAttribute('style', 'display: none;'); }
	if (document.getElementById('person1FacebookUrl').value.length < 1) { document.getElementById('warningPerson1Facebook').setAttribute('style', 'display: block;'); }
}
function clearPerson1FacebookUrl () {
	let confirm = alert('Are you sure you want to clear the person 1 Facebook URL?');
	if (confirm) {
		document.getElementById('person1FacebookUrl').value = '';
		document.getElementById('person1FacebookUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('person1FacebookUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningPerson1Facebook').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// person1TInstagramUrl
function unlockPerson1InstagramUrl () {
	document.getElementById('person1InstagramUrl').removeAttribute('readonly');
	document.getElementById('person1InstagramUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('person1InstagramUrlUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person1InstagramUrlLock').setAttribute('style', 'background-color: transparent;');
}
function lockPerson1InstagramUrl () {
	document.getElementById('person1InstagramUrl').append('readonly');
	document.getElementById('person1InstagramUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('person1InstagramUrlLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person1InstagramUrlUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('person1InstagramUrl').value.length > 0) { document.getElementById('warningPerson1Instagram').setAttribute('style', 'display: none;'); }
	if (document.getElementById('person1InstagramUrl').value.length < 1) { document.getElementById('warningPerson1Instagram').setAttribute('style', 'display: block;'); }
}
function clearPerson1InstagramUrl () {
	let confirm = alert('Are you sure you want to clear the person 1 Instagram URL?');
	if (confirm) {
		document.getElementById('person1InstagramUrl').value = '';
		document.getElementById('person1InstagramUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('person1InstagramUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningPerson1Instagram').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// person1LinkedinUrl
function unlockPerson1LinkedinUrl () {
	document.getElementById('person1LinkedinUrl').removeAttribute('readonly');
	document.getElementById('person1LinkedinUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('person1LinkedinUrlUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person1LinkedinUrlLock').setAttribute('style', 'background-color: transparent;');
}
function lockPerson1LinkedinUrl () {
	document.getElementById('person1LinkedinUrl').append('readonly');
	document.getElementById('person1LinkedinUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('person1LinkedinUrlLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person1LinkedinUrlUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('person1LinkedinUrl').value.length > 0) { document.getElementById('warningPerson1Linkedin').setAttribute('style', 'display: none;'); }
	if (document.getElementById('person1LinkedinUrl').value.length < 1) { document.getElementById('warningPerson1Linkedin').setAttribute('style', 'display: block;'); }
}
function clearPerson1LinkedinUrl () {
	let confirm = alert('Are you sure you want to clear the person 1 LinkedIn URL?');
	if (confirm) {
		document.getElementById('person1LinkedinUrl').value = '';
		document.getElementById('person1LinkedinUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('person1LinkedinUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningPerson1Linkedin').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// person1TwitterUrl
function unlockPerson1TwitterUrl () {
	document.getElementById('person1TwitterUrl').removeAttribute('readonly');
	document.getElementById('person1TwitterUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('person1TwitterUrlUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person1TwitterUrlLock').setAttribute('style', 'background-color: transparent;');
}
function lockPerson1TwitterUrl () {
	document.getElementById('person1TwitterUrl').append('readonly');
	document.getElementById('person1TwitterUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('person1TwitterUrlLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person1TwitterUrlUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('person1TwitterUrl').value.length > 0) { document.getElementById('warningPerson1Twitter').setAttribute('style', 'display: none;'); }
	if (document.getElementById('person1TwitterUrl').value.length < 1) { document.getElementById('warningPerson1Twitter').setAttribute('style', 'display: block;'); }
}
function clearPerson1TwitterUrl () {
	let confirm = alert('Are you sure you want to clear the person 1 Twitter URL?');
	if (confirm) {
		document.getElementById('person1TwitterUrl').value = '';
		document.getElementById('person1TwitterUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('person1TwitterUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningPerson1Twitter').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// person1TiktokUrl
function unlockPerson1TiktokUrl () {
	document.getElementById('person1TiktokUrl').removeAttribute('readonly');
	document.getElementById('person1TiktokUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('person1TiktokUrlUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person1TiktokUrlLock').setAttribute('style', 'background-color: transparent;');
}
function lockPerson1TiktokUrl () {
	document.getElementById('person1TiktokUrl').append('readonly');
	document.getElementById('person1TiktokUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('person1TiktokUrlLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person1TiktokUrlUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('person1TiktokUrl').value.length > 0) { document.getElementById('warningPerson1Tiktok').setAttribute('style', 'display: none;'); }
	if (document.getElementById('person1TiktokUrl').value.length < 1) { document.getElementById('warningPerson1Tiktok').setAttribute('style', 'display: block;'); }
}
function clearPerson1TiktokUrl () {
	let confirm = alert('Are you sure you want to clear the person 1 TikTok URL?');
	if (confirm) {
		document.getElementById('person1TiktokUrl').value = '';
		document.getElementById('person1TiktokUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('person1TiktokUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningPerson1Tiktok').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}

// person2
// person2Name
function unlockPerson2Name () {
	document.getElementById('person2Name').removeAttribute('readonly');
	document.getElementById('person2Name').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('person2NameUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person2NameLock').setAttribute('style', 'background-color: transparent;');
}
function lockPerson2Name () {
	document.getElementById('person2Name').append('readonly');
	document.getElementById('person2Name').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('person2NameLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person2NameUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('person2Name').value.length > 0) { document.getElementById('warningPerson2Name').setAttribute('style', 'display: none;'); }
	if (document.getElementById('person2Name').value.length < 1) { document.getElementById('warningPerson2Name').setAttribute('style', 'display: block;'); }
}
function clearPerson2Name () {
	let confirm = alert('Are you sure you want to clear the person 2 name?');
	if (confirm) {
		document.getElementById('person2Name').value = '';
		document.getElementById('person2Name').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('person2Name').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningPerson2Name').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// person2Title
function unlockPerson2Title () {
	document.getElementById('person2Title').removeAttribute('readonly');
	document.getElementById('person2Title').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('person2TitleUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person2TitleLock').setAttribute('style', 'background-color: transparent;');
}
function lockPerson2Title () {
	document.getElementById('person2Title').append('readonly');
	document.getElementById('person2Title').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('person2TitleLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person2TitleUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('person2Title').value.length > 0) { document.getElementById('warningPerson2Title').setAttribute('style', 'display: none;'); }
	if (document.getElementById('person2Title').value.length < 1) { document.getElementById('warningPerson2Title').setAttribute('style', 'display: block;'); }
}
function clearPerson2Title () {
	let confirm = alert('Are you sure you want to clear the person 2 title?');
	if (confirm) {
		document.getElementById('person2Title').value = '';
		document.getElementById('person2Title').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('person2Title').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningPerson2Title').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// person2Headshot
function unlockPerson2Headshot () {
	document.getElementById('person2Headshot').setAttribute('style', 'display: block;');
	document.getElementById('person2Headshot').setAttribute('style', 'style, border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange; display: block;');
	document.getElementById('person2HeadshotUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person2HeadshotLock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('person2HeadshotValueDisplay').setAttribute('style', 'display: none;');
}
function lockPerson2Headshot () {
	document.getElementById('person2Headshot').setAttribute('style', 'display: none;');
	document.getElementById('person2HeadshotLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person2HeadshotUnlock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('person2HeadshotValueDisplay').innerHTML = 'Current Person 2 Headshot: ' + document.getElementById('person2Headshot').value;
	document.getElementById('person2HeadshotValueDisplay').setAttribute('style', 'display: block;');
	if (document.getElementById('person2Headshot').value != null) { document.getElementById('warningPerson2Image').setAttribute('style', 'display: none;'); }
	if (document.getElementById('person2Headshot').value == null) { document.getElementById('warningPerson2Image').setAttribute('style', 'display: block;'); }
}
function clearPerson2Headshot () {
	let confirm = alert('Are you sure you want to clear the person 2 headshot?');
	if (confirm) {
		document.getElementById('person2Headshot').value = '';
		document.getElementById('person2Headshot').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred; display: block;');
		setTimeout(function() {
			document.getElementById('person2Headshot').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen; display: block;');
			document.getElementById('warningPerson2Image').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// person2FacebookUrl
function unlockPerson2FacebookUrl () {
	document.getElementById('person2FacebookUrl').removeAttribute('readonly');
	document.getElementById('person2FacebookUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('person2FacebookUrlUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person2FacebookUrlLock').setAttribute('style', 'background-color: transparent;');
}
function lockPerson2FacebookUrl () {
	document.getElementById('person2FacebookUrl').append('readonly');
	document.getElementById('person2FacebookUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('person2FacebookUrlLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person2FacebookUrlUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('person2FacebookUrl').value.length > 0) { document.getElementById('warningPerson2Facebook').setAttribute('style', 'display: none;'); }
	if (document.getElementById('person2FacebookUrl').value.length < 1) { document.getElementById('warningPerson2Facebook').setAttribute('style', 'display: block;'); }
}
function clearPerson2FacebookUrl () {
	let confirm = alert('Are you sure you want to clear the person 2 Facebook URL?');
	if (confirm) {
		document.getElementById('person2FacebookUrl').value = '';
		document.getElementById('person2FacebookUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('person2FacebookUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningPerson2Facebook').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// person2TInstagramUrl
function unlockPerson2InstagramUrl () {
	document.getElementById('person2InstagramUrl').removeAttribute('readonly');
	document.getElementById('person2InstagramUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('person2InstagramUrlUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person2InstagramUrlLock').setAttribute('style', 'background-color: transparent;');
}
function lockPerson2InstagramUrl () {
	document.getElementById('person2InstagramUrl').append('readonly');
	document.getElementById('person2InstagramUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('person2InstagramUrlLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person2InstagramUrlUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('person2InstagramUrl').value.length > 0) { document.getElementById('warningPerson2Instagram').setAttribute('style', 'display: none;'); }
	if (document.getElementById('person2InstagramUrl').value.length < 1) { document.getElementById('warningPerson2Instagram').setAttribute('style', 'display: block;'); }
}
function clearPerson2InstagramUrl () {
	let confirm = alert('Are you sure you want to clear the person 2 Instagram URL?');
	if (confirm) {
		document.getElementById('person2InstagramUrl').value = '';
		document.getElementById('person2InstagramUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('person2InstagramUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningPerson2Instagram').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// person2LinkedinUrl
function unlockPerson2LinkedinUrl () {
	document.getElementById('person2LinkedinUrl').removeAttribute('readonly');
	document.getElementById('person2LinkedinUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('person2LinkedinUrlUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person2LinkedinUrlLock').setAttribute('style', 'background-color: transparent;');
}
function lockPerson2LinkedinUrl () {
	document.getElementById('person2LinkedinUrl').append('readonly');
	document.getElementById('person2LinkedinUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('person2LinkedinUrlLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person2LinkedinUrlUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('person2LinkedinUrl').value.length > 0) { document.getElementById('warningPerson2Linkedin').setAttribute('style', 'display: none;'); }
	if (document.getElementById('person2LinkedinUrl').value.length < 1) { document.getElementById('warningPerson2Linkedin').setAttribute('style', 'display: block;'); }
}
function clearPerson2LinkedinUrl () {
	let confirm = alert('Are you sure you want to clear the person 2 LinkedIn URL?');
	if (confirm) {
		document.getElementById('person2LinkedinUrl').value = '';
		document.getElementById('person2LinkedinUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('person2LinkedinUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningPerson2Linkedin').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// person2TwitterUrl
function unlockPerson2TwitterUrl () {
	document.getElementById('person2TwitterUrl').removeAttribute('readonly');
	document.getElementById('person2TwitterUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('person2TwitterUrlUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person2TwitterUrlLock').setAttribute('style', 'background-color: transparent;');
}
function lockPerson2TwitterUrl () {
	document.getElementById('person2TwitterUrl').append('readonly');
	document.getElementById('person2TwitterUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('person2TwitterUrlLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person2TwitterUrlUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('person2TwitterUrl').value.length > 0) { document.getElementById('warningPerson2Twitter').setAttribute('style', 'display: none;'); }
	if (document.getElementById('person2TwitterUrl').value.length < 1) { document.getElementById('warningPerson2Twitter').setAttribute('style', 'display: block;'); }
}
function clearPerson2TwitterUrl () {
	let confirm = alert('Are you sure you want to clear the person 2 Twitter URL?');
	if (confirm) {
		document.getElementById('person2TwitterUrl').value = '';
		document.getElementById('person2TwitterUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('person2TwitterUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningPerson2Twitter').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// person2TiktokUrl
function unlockPerson2TiktokUrl () {
	document.getElementById('person2TiktokUrl').removeAttribute('readonly');
	document.getElementById('person2TiktokUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('person2TiktokUrlUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person2TiktokUrlLock').setAttribute('style', 'background-color: transparent;');
}
function lockPerson2TiktokUrl () {
	document.getElementById('person2TiktokUrl').append('readonly');
	document.getElementById('person2TiktokUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('person2TiktokUrlLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('person2TiktokUrlUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('person2TiktokUrl').value.length > 0) { document.getElementById('warningPerson2Tiktok').setAttribute('style', 'display: none;'); }
	if (document.getElementById('person2TiktokUrl').value.length < 1) { document.getElementById('warningPerson2Tiktok').setAttribute('style', 'display: block;'); }
}
function clearPerson2TiktokUrl () {
	let confirm = alert('Are you sure you want to clear the person 2 TikTok URL?');
	if (confirm) {
		document.getElementById('person2TiktokUrl').value = '';
		document.getElementById('person2TiktokUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('person2TiktokUrl').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningPerson2Tiktok').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}

// OFFERS
// offer1
// offer1Name
function unlockOffer1Name () {
	document.getElementById('offer1Name').removeAttribute('readonly');
	document.getElementById('offer1Name').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('offer1NameUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer1NameLock').setAttribute('style', 'background-color: transparent;');
}
function lockOffer1Name () {
	document.getElementById('offer1Name').append('readonly');
	document.getElementById('offer1Name').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('offer1NameLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer1NameUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('offer1Name').value.length > 0) { document.getElementById('warningOffer1Name').setAttribute('style', 'display: none;'); }
	if (document.getElementById('offer1Name').value.length < 1) { document.getElementById('warningOffer1Name').setAttribute('style', 'display: block;'); }
}
function clearOffer1Name () {
	let confirm = alert('Are you sure you want to clear the offer 1 name?');
	if (confirm) {
		document.getElementById('offer1Name').value = '';
		document.getElementById('offer1Name').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('offer1Name').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningOffer1Name').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// offer1Price
function unlockOffer1Price () {
	document.getElementById('offer1Price').removeAttribute('readonly');
	document.getElementById('offer1Price').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('offer1PriceUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer1PriceLock').setAttribute('style', 'background-color: transparent;');
}
function lockOffer1Price () {
	document.getElementById('offer1Price').append('readonly');
	document.getElementById('offer1Price').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('offer1PriceLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer1PriceUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('offer1Price').value.length > 0) { document.getElementById('warningOffer1Price').setAttribute('style', 'display: none;'); }
	if (document.getElementById('offer1Price').value.length < 1) { document.getElementById('warningOffer1Price').setAttribute('style', 'display: block;'); }
}
function clearOffer1Price () {
	let confirm = alert('Are you sure you want to clear the offer 1 price?');
	if (confirm) {
		document.getElementById('offer1Price').value = '';
		document.getElementById('offer1Price').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('offer1Price').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningOffer1Price').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// offer1Feature
function unlockOffer1Feature () {
	document.getElementById('offer1Feature').removeAttribute('readonly');
	document.getElementById('offer1Feature').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('offer1FeatureUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer1FeatureLock').setAttribute('style', 'background-color: transparent;');
}
function lockOffer1Feature () {
	document.getElementById('offer1Feature').append('readonly');
	document.getElementById('offer1Feature').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('offer1FeatureLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer1FeatureUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('offer1Feature').value.length > 0) { document.getElementById('warningOffer1Feature').setAttribute('style', 'display: none;'); }
	if (document.getElementById('offer1Feature').value.length < 1) { document.getElementById('warningOffer1Feature').setAttribute('style', 'display: block;'); }
}
function clearOffer1Feature () {
	let confirm = alert('Are you sure you want to clear the offer 1 feature?');
	if (confirm) {
		document.getElementById('offer1Feature').value = '';
		document.getElementById('offer1Feature').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('offer1Feature').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningOffer1Feature').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// offer1Benefit
function unlockOffer1Benefit () {
	document.getElementById('offer1Benefit').removeAttribute('readonly');
	document.getElementById('offer1Benefit').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('offer1BenefitUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer1BenefitLock').setAttribute('style', 'background-color: transparent;');
}
function lockOffer1Benefit () {
	document.getElementById('offer1Benefit').append('readonly');
	document.getElementById('offer1Benefit').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('offer1BenefitLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer1BenefitUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('offer1Benefit').value.length > 0) { document.getElementById('warningOffer1Benefit').setAttribute('style', 'display: none;'); }
	if (document.getElementById('offer1Benefit').value.length < 1) { document.getElementById('warningOffer1Benefit').setAttribute('style', 'display: block;'); }
}
function clearOffer1Benefit () {
	let confirm = alert('Are you sure you want to clear the offer 1 benefit?');
	if (confirm) {
		document.getElementById('offer1Benefit').value = '';
		document.getElementById('offer1Benefit').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('offer1Benefit').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningOffer1Benefit').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// offer1Solution
function unlockOffer1Solution () {
	document.getElementById('offer1Solution').removeAttribute('readonly');
	document.getElementById('offer1Solution').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('offer1SolutionUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer1SolutionLock').setAttribute('style', 'background-color: transparent;');
}
function lockOffer1Solution () {
	document.getElementById('offer1Solution').append('readonly');
	document.getElementById('offer1Solution').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('offer1SolutionLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer1SolutionUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('offer1Solution').value.length > 0) { document.getElementById('warningOffer1Solution').setAttribute('style', 'display: none;'); }
	if (document.getElementById('offer1Solution').value.length < 1) { document.getElementById('warningOffer1Solution').setAttribute('style', 'display: block;'); }
}
function clearOffer1Solution () {
	let confirm = alert('Are you sure you want to clear the offer 1 solution?');
	if (confirm) {
		document.getElementById('offer1Solution').value = '';
		document.getElementById('offer1Solution').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('offer1Solution').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningOffer1Solution').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// offer1Description
function unlockOffer1Description () {
	document.getElementById('offer1Description').removeAttribute('readonly');
	document.getElementById('offer1Description').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('offer1DescriptionUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer1DescriptionLock').setAttribute('style', 'background-color: transparent;');
}
function lockOffer1Description () {
	document.getElementById('offer1Description').append('readonly');
	document.getElementById('offer1Description').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('offer1DescriptionLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer1DescriptionUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('offer1Description').value.length > 0) { document.getElementById('warningOffer1Description').setAttribute('style', 'display: none;'); }
	if (document.getElementById('offer1Description').value.length < 1) { document.getElementById('warningOffer1Description').setAttribute('style', 'display: block;'); }
}
function clearOffer1Description () {
	let confirm = alert('Are you sure you want to clear the offer 1 description?');
	if (confirm) {
		document.getElementById('offer1Description').value = '';
		document.getElementById('offer1Description').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('offer1Description').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningOffer1Description').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// offer1Image
function unlockOffer1Image () {
	document.getElementById('offer1Image').setAttribute('style', 'display: block;');
	document.getElementById('offer1Image').setAttribute('style', 'style, border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange; display: block;');
	document.getElementById('offer1ImageUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer1ImageLock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('offer1ImageValueDisplay').setAttribute('style', 'display: none;');
}
function lockOffer1Image () {
	document.getElementById('offer1Image').setAttribute('style', 'display: none;');
	document.getElementById('offer1ImageLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer1ImageUnlock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('offer1ImageValueDisplay').innerHTML = 'Current Person 1 Headshot: ' + document.getElementById('offer1Image').value;
	document.getElementById('offer1ImageValueDisplay').setAttribute('style', 'display: block;');
	if (document.getElementById('offer1Image').value != null) { document.getElementById('warningOffer1Image').setAttribute('style', 'display: none;'); }
	if (document.getElementById('offer1Image').value == null) { document.getElementById('warningOffer1Image').setAttribute('style', 'display: block;'); }
}
function clearOffer1Image () {
	let confirm = alert('Are you sure you want to clear the offer 1 image?');
	if (confirm) {
		document.getElementById('offer1Image').value = '';
		document.getElementById('offer1Image').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred; display: block;');
		setTimeout(function() {
			document.getElementById('offer1Image').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen; display: block;');
			document.getElementById('warningOffer1Image').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}

// offer2
// offer2Name
function unlockOffer2Name () {
	document.getElementById('offer2Name').removeAttribute('readonly');
	document.getElementById('offer2Name').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('offer2NameUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer2NameLock').setAttribute('style', 'background-color: transparent;');
}
function lockOffer2Name () {
	document.getElementById('offer2Name').append('readonly');
	document.getElementById('offer2Name').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('offer2NameLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer2NameUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('offer2Name').value.length > 0) { document.getElementById('warningOffer2Name').setAttribute('style', 'display: none;'); }
	if (document.getElementById('offer2Name').value.length < 1) { document.getElementById('warningOffer2Name').setAttribute('style', 'display: block;'); }
}
function clearOffer2Name () {
	let confirm = alert('Are you sure you want to clear the offer 2 name?');
	if (confirm) {
		document.getElementById('offer2Name').value = '';
		document.getElementById('offer2Name').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('offer2Name').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningOffer2Name').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// offer2Price
function unlockOffer2Price () {
	document.getElementById('offer2Price').removeAttribute('readonly');
	document.getElementById('offer2Price').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('offer2PriceUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer2PriceLock').setAttribute('style', 'background-color: transparent;');
}
function lockOffer2Price () {
	document.getElementById('offer2Price').append('readonly');
	document.getElementById('offer2Price').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('offer2PriceLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer2PriceUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('offer2Price').value.length > 0) { document.getElementById('warningOffer2Price').setAttribute('style', 'display: none;'); }
	if (document.getElementById('offer2Price').value.length < 1) { document.getElementById('warningOffer2Price').setAttribute('style', 'display: block;'); }
}
function clearOffer2Price () {
	let confirm = alert('Are you sure you want to clear the offer 2 price?');
	if (confirm) {
		document.getElementById('offer2Price').value = '';
		document.getElementById('offer2Price').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('offer2Price').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningOffer2Price').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// offer2Feature
function unlockOffer2Feature () {
	document.getElementById('offer2Feature').removeAttribute('readonly');
	document.getElementById('offer2Feature').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('offer2FeatureUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer2FeatureLock').setAttribute('style', 'background-color: transparent;');
}
function lockOffer2Feature () {
	document.getElementById('offer2Feature').append('readonly');
	document.getElementById('offer2Feature').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('offer2FeatureLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer2FeatureUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('offer2Feature').value.length > 0) { document.getElementById('warningOffer2Feature').setAttribute('style', 'display: none;'); }
	if (document.getElementById('offer2Feature').value.length < 1) { document.getElementById('warningOffer2Feature').setAttribute('style', 'display: block;'); }
}
function clearOffer2Feature () {
	let confirm = alert('Are you sure you want to clear the offer 2 feature?');
	if (confirm) {
		document.getElementById('offer2Feature').value = '';
		document.getElementById('offer2Feature').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('offer2Feature').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningOffer2Feature').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// offer2Benefit
function unlockOffer2Benefit () {
	document.getElementById('offer2Benefit').removeAttribute('readonly');
	document.getElementById('offer2Benefit').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('offer2BenefitUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer2BenefitLock').setAttribute('style', 'background-color: transparent;');
}
function lockOffer2Benefit () {
	document.getElementById('offer2Benefit').append('readonly');
	document.getElementById('offer2Benefit').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('offer2BenefitLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer2BenefitUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('offer2Benefit').value.length > 0) { document.getElementById('warningOffer2Benefit').setAttribute('style', 'display: none;'); }
	if (document.getElementById('offer2Benefit').value.length < 1) { document.getElementById('warningOffer2Benefit').setAttribute('style', 'display: block;'); }
}
function clearOffer2Benefit () {
	let confirm = alert('Are you sure you want to clear the offer 2 benefit?');
	if (confirm) {
		document.getElementById('offer2Benefit').value = '';
		document.getElementById('offer2Benefit').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('offer2Benefit').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningOffer2Benefit').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// offer2Solution
function unlockOffer2Solution () {
	document.getElementById('offer2Solution').removeAttribute('readonly');
	document.getElementById('offer2Solution').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('offer2SolutionUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer2SolutionLock').setAttribute('style', 'background-color: transparent;');
}
function lockOffer2Solution () {
	document.getElementById('offer2Solution').append('readonly');
	document.getElementById('offer2Solution').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('offer2SolutionLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer2SolutionUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('offer2Solution').value.length > 0) { document.getElementById('warningOffer2Solution').setAttribute('style', 'display: none;'); }
	if (document.getElementById('offer2Solution').value.length < 1) { document.getElementById('warningOffer2Solution').setAttribute('style', 'display: block;'); }
}
function clearOffer2Solution () {
	let confirm = alert('Are you sure you want to clear the offer 2 solution?');
	if (confirm) {
		document.getElementById('offer2Solution').value = '';
		document.getElementById('offer2Solution').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('offer2Solution').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningOffer2Solution').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// offer2Description
function unlockOffer2Description () {
	document.getElementById('offer2Description').removeAttribute('readonly');
	document.getElementById('offer2Description').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('offer2DescriptionUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer2DescriptionLock').setAttribute('style', 'background-color: transparent;');
}
function lockOffer2Description () {
	document.getElementById('offer2Description').append('readonly');
	document.getElementById('offer2Description').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('offer2DescriptionLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer2DescriptionUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('offer2Description').value.length > 0) { document.getElementById('warningOffer2Description').setAttribute('style', 'display: none;'); }
	if (document.getElementById('offer2Description').value.length < 1) { document.getElementById('warningOffer2Description').setAttribute('style', 'display: block;'); }
}
function clearOffer2Description () {
	let confirm = alert('Are you sure you want to clear the offer 2 description?');
	if (confirm) {
		document.getElementById('offer2Description').value = '';
		document.getElementById('offer2Description').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred;');
		setTimeout(function() {
			document.getElementById('offer2Description').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
			document.getElementById('warningOffer2Description').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}
// offer2Image
function unlockOffer2Image () {
	document.getElementById('offer2Image').setAttribute('style', 'display: block;');
	document.getElementById('offer2Image').setAttribute('style', 'style, border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange; display: block;');
	document.getElementById('offer2ImageUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer2ImageLock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('offer2ImageValueDisplay').setAttribute('style', 'display: none;');
}
function lockOffer2Image () {
	document.getElementById('offer2Image').setAttribute('style', 'display: none;');
	document.getElementById('offer2ImageLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('offer2ImageUnlock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('offer2ImageValueDisplay').innerHTML = 'Current Person 2 Headshot: ' + document.getElementById('offer2Image').value;
	document.getElementById('offer2ImageValueDisplay').setAttribute('style', 'display: block;');
	if (document.getElementById('offer2Image').value != null) { document.getElementById('warningOffer2Image').setAttribute('style', 'display: none;'); }
	if (document.getElementById('offer2Image').value == null) { document.getElementById('warningOffer2Image').setAttribute('style', 'display: block;'); }
}
function clearOffer2Image () {
	let confirm = alert('Are you sure you want to clear the offer 2 image?');
	if (confirm) {
		document.getElementById('offer2Image').value = '';
		document.getElementById('offer2Image').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkred; display: block;');
		setTimeout(function() {
			document.getElementById('offer2Image').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen; display: block;');
			document.getElementById('warningOffer2Image').setAttribute('style', 'display: block;');
		}, 800);
	} else {
		confirm.close();
	}
}