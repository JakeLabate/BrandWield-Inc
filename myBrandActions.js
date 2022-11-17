
// FOUNDING INFO
// founderName
function unlockFounderName() {
	document.getElementById('founderName').removeAttribute('readonly');
	document.getElementById('founderName').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: orange;');
	document.getElementById('founderNameUnlock').setAttribute('style', 'background-color: orange; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('founderNameLock').setAttribute('style', 'background-color: transparent;');
}
function lockFounderName() {
	document.getElementById('founderName').setAttribute('readonly', true);
	document.getElementById('founderName').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('founderNameLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('founderNameUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('founderName').value.length > 0) { document.getElementById('warningFounderName').setAttribute('style', 'display: none;'); }
	if (document.getElementById('founderName').value.length < 1) { document.getElementById('warningFounderName').setAttribute('style', 'display: block;'); }
}
function clearFounderName() {
	if (confirm('Are you sure you want to CLEAR the founder name?') == true) {
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
	document.getElementById('foundingDate').setAttribute('readonly', true);
	document.getElementById('foundingDate').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('foundingDateLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('foundingDateUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('foundingDate').value != null) { document.getElementById('warningFoundingDate').setAttribute('style', 'display: none;'); }
	if (document.getElementById('foundingDate').value == null) { document.getElementById('warningFoundingDate').setAttribute('style', 'display: block;'); }
}
function clearFoundingDate() {
	if (confirm('Are you sure you want to CLEAR the founding date?') == true) {
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
	document.getElementById('tradeBusinessName').setAttribute('readonly', true);
	document.getElementById('tradeBusinessNameLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('tradeBusinessNameUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('tradeBusinessName').value.length > 0) { document.getElementById('warningTradeBusinessName').setAttribute('style', 'display: none;'); }
	if (document.getElementById('tradeBusinessName').value.length < 1) { document.getElementById('warningTradeBusinessName').setAttribute('style', 'display: block;'); }
}
function clearTradeBusinessName() {
	if (confirm('Are you sure you want to CLEAR the trade business name?') == true) {
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
	document.getElementById('legalBusinessName').setAttribute('readonly', true);
	document.getElementById('legalBusinessName').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('legalBusinessNameLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('legalBusinessNameUnlock').setAttribute('style', 'background-color: transparent;');
	document.getElementById('warningLegalBusinessName').setAttribute('style', 'display: none;');
	if (document.getElementById('legalBusinessName').value.length > 0) { document.getElementById('warningLegalBusinessName').setAttribute('style', 'display: none;'); }
	if (document.getElementById('legalBusinessName').value.length < 1) { document.getElementById('warningLegalBusinessName').setAttribute('style', 'display: block;'); }
}
function clearLegalBusinessName() {
	if (confirm('Are you sure you want to CLEAR the legal business name?') == true) {
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
	document.getElementById('primaryContactPhone').setAttribute('readonly', true);
	document.getElementById('primaryContactPhone').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('primaryContactPhoneLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('primaryContactPhoneUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('primaryContactPhone').value.length > 0) { document.getElementById('warningPrimaryContactPhone').setAttribute('style', 'display: none;'); }
	if (document.getElementById('primaryContactPhone').value.length < 1) { document.getElementById('warningPrimaryContactPhone').setAttribute('style', 'display: block;'); }
}
function clearPrimaryContactPhone () {
	if (confirm('Are you sure you want to CLEAR the phone number?') == true) {
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
	document.getElementById('primaryContactEmail').setAttribute('readonly', true);
	document.getElementById('primaryContactEmail').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('primaryContactEmailLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('primaryContactEmailUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('primaryContactEmail').value.length > 0) { document.getElementById('warningPrimaryContactEmail').setAttribute('style', 'display: none;'); }
	if (document.getElementById('primaryContactEmail').value.length < 1) { document.getElementById('warningPrimaryContactEmail').setAttribute('style', 'display: block;'); }
}
function clearPrimaryContactEmail () {
	if (confirm('Are you sure you want to CLEAR the email address?') == true) {
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
	document.getElementById('primaryContactWebsite').setAttribute('readonly', true);
	document.getElementById('primaryContactWebsite').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('primaryContactWebsiteLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('primaryContactWebsiteUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('primaryContactWebsite').value.length > 0) { document.getElementById('warningPrimaryContactWebsite').setAttribute('style', 'display: none;'); }
	if (document.getElementById('primaryContactWebsite').value.length < 1) { document.getElementById('warningPrimaryContactWebsite').setAttribute('style', 'display: block;'); }
}
function clearPrimaryContactWebsite () {
	if (confirm('Are you sure you want to CLEAR the website?') == true) {
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
	document.getElementById('officeAddressStreet1').setAttribute('readonly', true);
	document.getElementById('officeAddressStreet1').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('officeAddressStreet1Lock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('officeAddressStreet1Unlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('officeAddressStreet1').value.length > 0) { document.getElementById('warningOfficeAddressStreet1').setAttribute('style', 'display: none;'); }
	if (document.getElementById('officeAddressStreet1').value.length < 1) { document.getElementById('warningOfficeAddressStreet1').setAttribute('style', 'display: block;'); }
}
function clearOfficeAddressStreet1() {
	if (confirm('Are you sure you want to CLEAR the office address street #1?') == true) {
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
	document.getElementById('officeAddressStreet2').setAttribute('readonly', true);
	document.getElementById('officeAddressStreet2').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('officeAddressStreet2Lock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('officeAddressStreet2Unlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('officeAddressStreet2').value.length > 0) { document.getElementById('warningOfficeAddressStreet2').setAttribute('style', 'display: none;'); }
	if (document.getElementById('officeAddressStreet2').value.length < 1) { document.getElementById('warningOfficeAddressStreet2').setAttribute('style', 'display: block;'); }
}
function clearOfficeAddressStreet2 () {
	if (confirm('Are you sure you want to CLEAR the office address street #2?') == true) {
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
	document.getElementById('officeAddressCity').setAttribute('readonly', true);
	document.getElementById('officeAddressCity').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('officeAddressCityLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('officeAddressCityUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('officeAddressCity').value.length > 0) { document.getElementById('warningOfficeAddressCity').setAttribute('style', 'display: none;'); }
	if (document.getElementById('officeAddressCity').value.length < 1) { document.getElementById('warningOfficeAddressCity').setAttribute('style', 'display: block;'); }
}
function clearOfficeAddressCity() {
	if (confirm('Are you sure you want to CLEAR the office address city?') == true) {
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
	document.getElementById('officeAddressState').setAttribute('readonly', true);
	document.getElementById('officeAddressState').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('officeAddressStateLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('officeAddressStateUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('officeAddressState').value.length > 0) { document.getElementById('warningOfficeAddressState').setAttribute('style', 'display: none;'); }
	if (document.getElementById('officeAddressState').value.length < 1) { document.getElementById('warningOfficeAddressState').setAttribute('style', 'display: block;'); }
}
function clearOfficeAddressState() {
	if (confirm('Are you sure you want to CLEAR the office address state?') == true) {
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
	document.getElementById('officeAddressZip').setAttribute('readonly', true);
	document.getElementById('officeAddressZip').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('officeAddressZipLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('officeAddressZipUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('officeAddressZip').value.length > 0) { document.getElementById('warningOfficeAddressZip').setAttribute('style', 'display: none;'); }
	if (document.getElementById('officeAddressZip').value.length < 1) { document.getElementById('warningOfficeAddressZip').setAttribute('style', 'display: block;'); }
}
function clearOfficeAddressZip() {
	if (confirm('Are you sure you want to CLEAR the office address zip code?') == true) {
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
	document.getElementById('officeAddressCountry').setAttribute('readonly', true);
	document.getElementById('officeAddressCountry').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('officeAddressCountryLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('officeAddressCountryUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('officeAddressCountry').value.length > 0) { document.getElementById('warningOfficeAddressCountry').setAttribute('style', 'display: none;'); }
	if (document.getElementById('officeAddressCountry').value.length < 1) { document.getElementById('warningOfficeAddressCountry').setAttribute('style', 'display: block;'); }
}
function clearOfficeAddressCountry() {
	if (confirm('Are you sure you want to CLEAR the office address country?') == true) {
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
	document.getElementById('mondayOpeningTime').setAttribute('readonly', true);
	document.getElementById('mondayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('mondayOpeningTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('mondayOpeningTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('mondayOpeningTime').value.length > 0) { document.getElementById('warningMondayOpeningTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('mondayOpeningTime').value.length < 1) { document.getElementById('warningMondayOpeningTime').setAttribute('style', 'display: block;'); }
}
function clearMondayOpeningTime() {
	if (confirm('Are you sure you want to CLEAR the Monday opening time?') == true) {
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
	document.getElementById('mondayClosingTime').setAttribute('readonly', true);
	document.getElementById('mondayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('mondayClosingTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('mondayClosingTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('mondayClosingTime').value.length > 0) { document.getElementById('warningMondayClosingTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('mondayClosingTime').value.length < 1) { document.getElementById('warningMondayClosingTime').setAttribute('style', 'display: block;'); }
}
function clearMondayClosingTime() {
	if (confirm('Are you sure you want to CLEAR the Monday closing time?') == true) {
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
	document.getElementById('tuesdayOpeningTime').setAttribute('readonly', true);
	document.getElementById('tuesdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('tuesdayOpeningTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('tuesdayOpeningTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('tuesdayOpeningTime').value.length > 0) { document.getElementById('warningTuesdayOpeningTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('tuesdayOpeningTime').value.length < 1) { document.getElementById('warningTuesdayOpeningTime').setAttribute('style', 'display: block;'); }
}
function clearTuesdayOpeningTime () {
	if (confirm('Are you sure you want to CLEAR the Tuesday opening time?') == true) {
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
	document.getElementById('tuesdayClosingTime').setAttribute('readonly', true);
	document.getElementById('tuesdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('tuesdayClosingTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('tuesdayClosingTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('tuesdayClosingTime').value.length > 0) { document.getElementById('warningTuesdayClosingTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('tuesdayClosingTime').value.length < 1) { document.getElementById('warningTuesdayClosingTime').setAttribute('style', 'display: block;'); }
}
function clearTuesdayClosingTime () {
	if (confirm('Are you sure you want to CLEAR the Tuesday closing time?') == true) {
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
	document.getElementById('wednesdayOpeningTime').setAttribute('readonly', true);
	document.getElementById('wednesdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('wednesdayOpeningTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('wednesdayOpeningTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('wednesdayOpeningTime').value.length > 0) { document.getElementById('warningWednesdayOpeningTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('wednesdayOpeningTime').value.length < 1) { document.getElementById('warningWednesdayOpeningTime').setAttribute('style', 'display: block;'); }
}
function clearWednesdayOpeningTime () {
	if (confirm('Are you sure you want to CLEAR the Wednesday opening time?') == true) {
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
	document.getElementById('wednesdayClosingTime').setAttribute('readonly', true);
	document.getElementById('wednesdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('wednesdayClosingTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('wednesdayClosingTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('wednesdayClosingTime').value.length > 0) { document.getElementById('warningWednesdayClosingTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('wednesdayClosingTime').value.length < 1) { document.getElementById('warningWednesdayClosingTime').setAttribute('style', 'display: block;'); }
}
function clearWednesdayClosingTime () {
	if (confirm('Are you sure you want to CLEAR the Wednesday closing time?') == true) {
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
	document.getElementById('thursdayOpeningTime').setAttribute('readonly', true);
	document.getElementById('thursdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('thursdayOpeningTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('thursdayOpeningTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('thursdayOpeningTime').value.length > 0) { document.getElementById('warningThursdayOpeningTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('thursdayOpeningTime').value.length < 1) { document.getElementById('warningThursdayOpeningTime').setAttribute('style', 'display: block;'); }
}
function clearThursdayOpeningTime () {
	if (confirm('Are you sure you want to CLEAR the Thursday opening time?') == true) {
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
	document.getElementById('thursdayClosingTime').setAttribute('readonly', true);
	document.getElementById('thursdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('thursdayClosingTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('thursdayClosingTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('thursdayClosingTime').value.length > 0) { document.getElementById('warningThursdayClosingTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('thursdayClosingTime').value.length < 1) { document.getElementById('warningThursdayClosingTime').setAttribute('style', 'display: block;'); }
}
function clearThursdayClosingTime () {
	if (confirm('Are you sure you want to CLEAR the Thursday closing time?') == true) {
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
	document.getElementById('fridayOpeningTime').setAttribute('readonly', true);
	document.getElementById('fridayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('fridayOpeningTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('fridayOpeningTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('fridayOpeningTime').value.length > 0) { document.getElementById('warningFridayOpeningTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('fridayOpeningTime').value.length < 1) { document.getElementById('warningFridayOpeningTime').setAttribute('style', 'display: block;'); }
}
function clearFridayOpeningTime () {
	if (confirm('Are you sure you want to CLEAR the Friday opening time?') == true) {
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
	document.getElementById('fridayClosingTime').setAttribute('readonly', true);
	document.getElementById('fridayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('fridayClosingTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('fridayClosingTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('fridayClosingTime').value.length > 0) { document.getElementById('warningFridayClosingTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('fridayClosingTime').value.length < 1) { document.getElementById('warningFridayClosingTime').setAttribute('style', 'display: block;'); }
}
function clearFridayClosingTime () {
	if (confirm('Are you sure you want to CLEAR the Friday closing time?') == true) {
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
	document.getElementById('saturdayOpeningTime').setAttribute('readonly', true);
	document.getElementById('saturdayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: green;');
	document.getElementById('saturdayOpeningTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('saturdayOpeningTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('saturdayOpeningTime').value.length > 0) { document.getElementById('warningSaturdayOpeningTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('saturdayOpeningTime').value.length < 1) { document.getElementById('warningSaturdayOpeningTime').setAttribute('style', 'display: block;'); }
}
function clearSaturdayOpeningTime () {
	if (confirm('Are you sure you want to CLEAR the Saturday opening time?') == true) {
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
	document.getElementById('saturdayClosingTime').setAttribute('readonly', true);
	document.getElementById('saturdayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('saturdayClosingTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('saturdayClosingTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('saturdayClosingTime').value.length > 0) { document.getElementById('warningSaturdayClosingTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('saturdayClosingTime').value.length < 1) { document.getElementById('warningSaturdayClosingTime').setAttribute('style', 'display: block;'); }
}
function clearSaturdayClosingTime () {
	if (confirm('Are you sure you want to CLEAR the Saturday closing time?') == true) {
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
	document.getElementById('sundayOpeningTime').setAttribute('readonly', true);
	document.getElementById('sundayOpeningTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('sundayOpeningTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('sundayOpeningTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('sundayOpeningTime').value.length > 0) { document.getElementById('warningSundayOpeningTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('sundayOpeningTime').value.length < 1) { document.getElementById('warningSundayOpeningTime').setAttribute('style', 'display: block;'); }
}
function clearSundayOpeningTime () {
	if (confirm('Are you sure you want to CLEAR the Sunday opening time?') == true) {
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
	document.getElementById('sundayClosingTime').setAttribute('readonly', true);
	document.getElementById('sundayClosingTime').setAttribute('style', 'border-width: 3px; border-radius: 30px; border-style: solid; border-color: darkgreen;');
	document.getElementById('sundayClosingTimeLock').setAttribute('style', 'background-color: green; color: white; border-radius: 50%; height: 25px; width: 25px;');
	document.getElementById('sundayClosingTimeUnlock').setAttribute('style', 'background-color: transparent;');
	if (document.getElementById('sundayClosingTime').value.length > 0) { document.getElementById('warningSundayClosingTime').setAttribute('style', 'display: none;'); }
	if (document.getElementById('sundayClosingTime').value.length < 1) { document.getElementById('warningSundayClosingTime').setAttribute('style', 'display: block;'); }
}
function clearSundayClosingTime () {
	if (confirm('Are you sure you want to CLEAR the Sunday closing time?') == true) {
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

// BRAND
// squareLogo
function showSquareImage() {
	document.getElementById("uploadedSquareImage").style.display = "block";
	const file = document.querySelector('#squareLogo').files[0];
	var reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function () {
		localStorage.setItem("image", reader.result);
		document.getElementById("uploadedSquareImage").setAttribute("src", localStorage.getItem("image"))
	}
	if(localStorage.getItem("image"))
		document.getElementById("uploadedSquareImage").setAttribute("src", localStorage.getItem("image"));
}
// fullLogo
function showFullImage() {
	document.getElementById("uploadedFullImage").style.display = "block";
	const file = document.querySelector('#fullLogo').files[0];
	var reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function () {
		localStorage.setItem("image", reader.result);
		document.getElementById("uploadedFullImage").setAttribute("src", localStorage.getItem("image"))
	}
	if(localStorage.getItem("image"))
		document.getElementById("uploadedFullImage").setAttribute("src", localStorage.getItem("image"));
}

// SOCIAL MEDIA
function logInstaPic() {
	let instagramUserField = document.getElementById('instagramUsername').value;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '0759e0a5f5msh13ea66780939408p189da2jsne987576d688f',
			'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
		}
	};

	fetch('https://instagram130.p.rapidapi.com/account-info?username=' + instagramUserField, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.then(response => document.getElementById('instagramProfilePic').setAttribute('src', response.profile_pic_url)) // NOT WORKING (CORS ERROR)
	.catch(err => console.error(err));
}
