console.log("newContent.js loaded");

// Output Content Tabs
function openCity(evt, outputTabName) {
	let i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	tabcontent[i].style.display = "none";
}
	tablinks = document.getElementsByClassName("socialTab");
	for (i = 0; i < tablinks.length; i++) {
	tablinks[i].className = tablinks[i].className.replace(" active", "");
}
	document.getElementById(outputTabName).style.display = "block";
	evt.currentTarget.className += " active";

}

// Generate hashtags as user enters input
function generateHashtagsForTitle () {

	// make 'hashtagsContainer' visible
	document.getElementById("hashtagsContainer").style.display = 'block';

	// set the words to all lowercase
	let titleWordsLower = localStorage.getItem('titleWords').toLowerCase();

	// remove all non-alphanumeric characters
	let titleWordsLowerNoSpecial = titleWordsLower.replace(/[^a-z0-9]/gi, ' ');

	// remove all 'words' that are 1 or 2 characters long
	let titleWordsLowerNoSpecialNoJunk = titleWordsLowerNoSpecial.replace(/\b\w{1,2}\b/g, '');

	// remove fluffy words
	let titleWordsLowerNoSpecialNoJunkNoCommon = titleWordsLowerNoSpecialNoJunk.replace(/\b(the|and|that|have|for|not|with|you|why|this|but|his|from|they|say|her|she|will|one|all|would|there|their|what|out|about|who|get|which|when|make|can|like|time|just|him|know|take|into|year|your|good|some|could|them|see|other|than|then|now|only|come|its|over|also|back|after|use|two|how|our|well|way|even|new|want|because|any|these|give|day|most)\b/g, '');

	// add a '#' to the beginning of each word
	let titleWordsHashtag = titleWordsLowerNoSpecialNoJunkNoCommon.replace(/\b(\w)/g, '#$1');

	// replace all commas in the string with a space
	let titleWordsHashtagNoCommas = titleWordsHashtag.replace(/,/g, ' ');

	// remove duplicate hashtags
	let noDuplicates = titleWordsHashtagNoCommas.split(" ");
	uniq = [...new Set(noDuplicates)];

	// place the hashtags in the hashtagsContainer
	document.getElementById("hashtagsHereForTitle").innerText = uniq.join(" ");

}
function generateHashtagsForLocation () {

	// make 'hashtagsContainer' visible
	document.getElementById("hashtagsContainer").style.display = 'block';

	// set the words to all lowercase
	let locationWordsLower = localStorage.getItem('locationWords').toLowerCase();

	// remove all non-alphanumeric characters
	let locationWordsLowerNoSpecial = locationWordsLower.replace(/[^a-z0-9]/gi, ' ');

	// remove all 'words' that are 1 or 2 characters long
	let locationWordsLowerNoSpecialNoJunk = locationWordsLowerNoSpecial.replace(/\b\w{1,2}\b/g, '');

	// remove fluffy words
	let locationWordsLowerNoSpecialNoJunkNoCommon = locationWordsLowerNoSpecialNoJunk.replace(/\b(the|and|that|have|for|not|with|you|this|but|his|from|they|say|her|she|will|one|all|would|there|their|what|out|about|who|get|which|when|make|can|like|time|just|him|know|take|into|year|your|good|some|could|them|see|other|than|then|now|only|come|its|over|also|back|after|use|two|how|our|well|way|even|new|want|because|any|these|give|day|most)\b/g, '');

	// add a '#' to the beginning of each word
	let locationWordsHashtag = locationWordsLowerNoSpecialNoJunkNoCommon.replace(/\b(\w)/g, '#$1');

	// replace all commas in the string with a space
	let locationWordsHashtagNoCommas = locationWordsHashtag.replace(/,/g, ' ');

	// remove duplicate hashtags
	let noDuplicates = locationWordsHashtagNoCommas.split(" ");
	uniq = [...new Set(noDuplicates)];

	// place the hashtags in the hashtagsContainer
	document.getElementById("hashtagsHereForLocation").innerText = uniq.join(" ");

}
function generateHashtagsForOrganization () {

	// make 'hashtagsContainer' visible
	document.getElementById("hashtagsContainer").style.display = 'block';

	// set the words to all lowercase
	let organizationWordsLower = localStorage.getItem('organizationWords').toLowerCase();

	// remove all non-alphanumeric characters
	let organizationWordsLowerNoSpecial = organizationWordsLower.replace(/[^a-z0-9]/gi, ' ');

	// add a '#' to the beginning of each word
	let organizationWordsHashtag = organizationWordsLowerNoSpecial.replace(/\b(\w)/g, '#$1');

	// remove all 'words' that are 1 or 2 characters long
	let organizationWordsLowerNoSpecialNoJunk = organizationWordsLowerNoSpecial.replace(/\b\w{1,2}\b/g, '');

	// remove fluffy words
	let organizationWordsLowerNoSpecialNoJunkNoCommon = organizationWordsLowerNoSpecialNoJunk.replace(/\b(the|and|that|have|for|not|with|you|this|but|his|from|they|say|her|she|will|one|all|would|there|their|what|out|about|who|get|which|when|make|can|like|time|just|him|know|take|into|year|your|good|some|could|them|see|other|than|then|now|only|come|its|over|also|back|after|use|two|how|our|well|way|even|new|want|because|any|these|give|day|most)\b/g, '');

	// replace all commas in the string with a space
	let organizationWordsHashtagNoCommas = organizationWordsLowerNoSpecialNoJunkNoCommon.replace(/,/g, ' ');

	// remove duplicate hashtags
	let noDuplicates = organizationWordsHashtagNoCommas.split(" ");
	uniq = [...new Set(noDuplicates)];

	// place the hashtags in the hashtagsContainer
	document.getElementById("hashtagsHereForOrganization").innerText = uniq.join(" ");

}
function generateHashtagsForHost () {

	// make 'hashtagsContainer' visible
	document.getElementById("hashtagsContainer").style.display = 'block';

	// set the words to all lowercase
	let hostWordsLower = localStorage.getItem('hostWords').toLowerCase();

	// remove all non-alphanumeric characters
	let hostWordsLowerNoSpecial = hostWordsLower.replace(/[^a-z0-9]/gi, ' ');

	// remove all 'words' that are 1 or 2 characters long
	let hostWordsLowerNoSpecialNoJunk = hostWordsLowerNoSpecial.replace(/\b\w{1,2}\b/g, '');

	// remove fluffy words
	let hostWordsLowerNoSpecialNoJunkNoCommon = hostWordsLowerNoSpecialNoJunk.replace(/\b(the|and|that|have|for|not|with|you|this|but|his|from|they|say|her|she|will|one|all|would|there|their|what|out|about|who|get|which|when|make|can|like|time|just|him|know|take|into|year|your|good|some|could|them|see|other|than|then|now|only|come|its|over|also|back|after|use|two|how|our|well|way|even|new|want|because|any|these|give|day|most)\b/g, '');

	// add a '#' to the beginning of each word
	let hostWordsHashtag = hostWordsLowerNoSpecialNoJunkNoCommon.replace(/\b(\w)/g, '#$1');

	// replace all commas in the string with a space
	let hostWordsHashtagNoCommas = hostWordsHashtag.replace(/,/g, ' ');

	// remove duplicate hashtags
	let noDuplicates = hostWordsHashtagNoCommas.split(" ");
	uniq = [...new Set(noDuplicates)];

	// place the hashtags in the hashtagsContainer
	document.getElementById("hashtagsHereForHost").innerText = uniq.join(" ");

}
function generateHashtagsForDescription () {

	// make 'hashtagsContainer' visible
	document.getElementById("hashtagsContainer").style.display = 'block';

	// set the words to all lowercase
	let descriptionWordsLower = localStorage.getItem('descriptionWords').toLowerCase();

	// remove all non-alphanumeric characters
	let descriptionWordsLowerNoSpecial = descriptionWordsLower.replace(/[^a-z0-9]/gi, ' ');

	// remove all 'words' that are 1 or 2 characters long
	let descriptionWordsLowerNoSpecialNoJunk = descriptionWordsLowerNoSpecial.replace(/\b\w{1,2}\b/g, '');

	// remove fluffy words
	let descriptionWordsLowerNoSpecialNoJunkNoCommon = descriptionWordsLowerNoSpecialNoJunk.replace(/\b(the|and|that|have|for|not|with|you|this|but|his|from|they|say|her|she|will|one|all|would|there|their|what|out|about|who|get|which|when|make|can|like|time|just|him|know|take|into|year|your|good|some|could|them|see|other|than|then|now|only|come|its|over|also|back|after|use|two|how|our|well|way|even|new|want|because|any|these|give|day|most)\b/g, '');

	// add a '#' to the beginning of each word
	let descriptionWordsHashtag = descriptionWordsLowerNoSpecialNoJunkNoCommon.replace(/\b(\w)/g, '#$1');

	// replace all commas in the string with a space
	let descriptionWordsHashtagNoCommas = descriptionWordsHashtag.replace(/,/g, ' ');

	// remove duplicate hashtags
	let noDuplicates = descriptionWordsHashtagNoCommas.split(" ");
	uniq = [...new Set(noDuplicates)];

	// place the hashtags in the hashtagsContainer
	document.getElementById("hashtagsHereForDescription").innerText = uniq.join(" ");

}





// Output variable selected for final
// Title
function clearTitleConsideration () {
	document.getElementById("consideredTitleOutput").innerHTML = ""
	document.getElementById("selectedTitleOutput").style.display = "inline";
}

function considerTitleOutput1 () {
	document.getElementById("consideredTitleOutput").innerHTML = document.getElementById("copyToClipboardHasTitle1").innerText + "&nbsp;";
	document.getElementById("consideredTitleOutput").style.color = "#8c8c8c";
	document.getElementById("selectedTitleOutput").style.display = "none";
}
function selectTitleOutput1 () {
	document.getElementById("consideredTitleOutput").innerHTML = null
	document.getElementById("selectedTitleOutput").style.display = "inline";
	document.getElementById("selectedTitleOutput").innerHTML = document.getElementById("copyToClipboardHasTitle1").innerText + "&nbsp;";
	document.getElementById("selectedTitleOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedTitleOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedTitleOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneTitle").style.display = "inline";
	document.getElementById("tabExclamationTitle").style.display = "none";
}

function considerTitleOutput2 () {
	document.getElementById("consideredTitleOutput").innerHTML = document.getElementById("copyToClipboardHasTitle2").innerText + "&nbsp;";
	document.getElementById("consideredTitleOutput").style.color = "#8c8c8c"
	document.getElementById("selectedTitleOutput").style.display = "none";
}
function selectTitleOutput2 () {
	document.getElementById("consideredTitleOutput").innerHTML = null
	document.getElementById("selectedTitleOutput").style.display = "inline";
	document.getElementById("selectedTitleOutput").innerHTML = document.getElementById("copyToClipboardHasTitle2").innerText + "&nbsp;";
	document.getElementById("selectedTitleOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedTitleOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedTitleOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneTitle").style.display = "inline";
	document.getElementById("tabExclamationTitle").style.display = "none";
}

function considerTitleOutput3 () {
	document.getElementById("consideredTitleOutput").innerHTML = document.getElementById("copyToClipboardHasTitle3").innerText + "&nbsp;";
	document.getElementById("consideredTitleOutput").style.color = "#8c8c8c"
	document.getElementById("selectedTitleOutput").style.display = "none";
}
function selectTitleOutput3 () {
	document.getElementById("consideredTitleOutput").innerHTML = null
	document.getElementById("selectedTitleOutput").style.display = "inline";
	document.getElementById("selectedTitleOutput").innerHTML = document.getElementById("copyToClipboardHasTitle3").innerText + "&nbsp;";
	document.getElementById("selectedTitleOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedTitleOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedTitleOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneTitle").style.display = "inline";
	document.getElementById("tabExclamationTitle").style.display = "none";
}

function considerTitleOutput4 () {
	document.getElementById("consideredTitleOutput").innerHTML = document.getElementById("copyToClipboardHasTitle4").innerText + "&nbsp;";
	document.getElementById("consideredTitleOutput").style.color = "#8c8c8c"
	document.getElementById("selectedTitleOutput").style.display = "none";
}
function selectTitleOutput4 () {
	document.getElementById("consideredTitleOutput").innerHTML = null
	document.getElementById("selectedTitleOutput").style.display = "inline";
	document.getElementById("selectedTitleOutput").innerHTML = document.getElementById("copyToClipboardHasTitle4").innerText + "&nbsp;";
	document.getElementById("selectedTitleOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedTitleOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedTitleOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneTitle").style.display = "inline";
	document.getElementById("tabExclamationTitle").style.display = "none";
}

function considerTitleOutput5 () {
	document.getElementById("consideredTitleOutput").innerHTML = document.getElementById("copyToClipboardHasTitle5").innerText + "&nbsp;";
	document.getElementById("consideredTitleOutput").style.color = "#8c8c8c"
	document.getElementById("selectedTitleOutput").style.display = "none";
}
function selectTitleOutput5 () {
	document.getElementById("consideredTitleOutput").innerHTML = null
	document.getElementById("selectedTitleOutput").style.display = "inline";
	document.getElementById("selectedTitleOutput").innerHTML = document.getElementById("copyToClipboardHasTitle5").innerText + "&nbsp;";
	document.getElementById("selectedTitleOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedTitleOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedTitleOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneTitle").style.display = "inline";
	document.getElementById("tabExclamationTitle").style.display = "none";
}

// Date
function clearDateConsideration () {
	document.getElementById("consideredDateOutput").innerHTML = ""
	document.getElementById("selectedDateOutput").style.display = "inline";
}

function considerDateOutput1 () {
	document.getElementById("consideredDateOutput").innerHTML = document.getElementById("copyToClipboardHasDate1").innerText + "&nbsp;";
	document.getElementById("consideredDateOutput").style.color = "#8c8c8c";
	document.getElementById("selectedDateOutput").style.display = "none";
}
function selectDateOutput1 () {
	document.getElementById("consideredDateOutput").innerHTML = null
	document.getElementById("selectedDateOutput").style.display = "inline";
	document.getElementById("selectedDateOutput").innerHTML = document.getElementById("copyToClipboardHasDate1").innerText + "&nbsp;";
	document.getElementById("selectedDateOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedDateOutput").style.color = "#000000";
		setTimeout(function() {
			document.getElementById("selectedDateOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneDate").style.display = "inline";
	document.getElementById("tabExclamationDate").style.display = "none";
}

function considerDateOutput2 () {
	document.getElementById("consideredDateOutput").innerHTML = document.getElementById("copyToClipboardHasDate2").innerText + "&nbsp;";
	document.getElementById("consideredDateOutput").style.color = "#8c8c8c"
	document.getElementById("selectedDateOutput").style.display = "none";
}
function selectDateOutput2 () {
	document.getElementById("consideredDateOutput").innerHTML = null
	document.getElementById("selectedDateOutput").style.display = "inline";
	document.getElementById("selectedDateOutput").innerHTML = document.getElementById("copyToClipboardHasDate2").innerText + "&nbsp;";
	document.getElementById("selectedDateOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedDateOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedDateOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneDate").style.display = "inline";
	document.getElementById("tabExclamationDate").style.display = "none";
}

function considerDateOutput3 () {
	document.getElementById("consideredDateOutput").innerHTML = document.getElementById("copyToClipboardHasDate3").innerText + "&nbsp;";
	document.getElementById("consideredDateOutput").style.color = "#8c8c8c"
	document.getElementById("selectedDateOutput").style.display = "none";
}
function selectDateOutput3 () {
	document.getElementById("consideredDateOutput").innerHTML = null
	document.getElementById("selectedDateOutput").style.display = "inline";
	document.getElementById("selectedDateOutput").innerHTML = document.getElementById("copyToClipboardHasDate3").innerText + "&nbsp;";
	document.getElementById("selectedDateOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedDateOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedDateOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneDate").style.display = "inline";
	document.getElementById("tabExclamationDate").style.display = "none";
}

function considerDateOutput4 () {
	document.getElementById("consideredDateOutput").innerHTML = document.getElementById("copyToClipboardHasDate4").innerText + "&nbsp;";
	document.getElementById("consideredDateOutput").style.color = "#8c8c8c"
	document.getElementById("selectedDateOutput").style.display = "none";
}
function selectDateOutput4 () {
	document.getElementById("consideredDateOutput").innerHTML = null
	document.getElementById("selectedDateOutput").style.display = "inline";
	document.getElementById("selectedDateOutput").innerHTML = document.getElementById("copyToClipboardHasDate4").innerText + "&nbsp;";
	document.getElementById("selectedDateOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedDateOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedDateOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneDate").style.display = "inline";
	document.getElementById("tabExclamationDate").style.display = "none";
}

function considerDateOutput5 () {
	document.getElementById("consideredDateOutput").innerHTML = document.getElementById("copyToClipboardHasDate5").innerText + "&nbsp;";
	document.getElementById("consideredDateOutput").style.color = "#8c8c8c"
	document.getElementById("selectedDateOutput").style.display = "none";
}
function selectDateOutput5 () {
	document.getElementById("consideredDateOutput").innerHTML = null
	document.getElementById("selectedDateOutput").style.display = "inline";
	document.getElementById("selectedDateOutput").innerHTML = document.getElementById("copyToClipboardHasDate5").innerText + "&nbsp;";
	document.getElementById("selectedDateOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedDateOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedDateOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneDate").style.display = "inline";
	document.getElementById("tabExclamationDate").style.display = "none";
}

// Time
function clearTimeConsideration () {
	document.getElementById("consideredTimeOutput").innerHTML = ""
	document.getElementById("selectedTimeOutput").style.display = "inline";
}

function considerTimeOutput1 () {
	document.getElementById("consideredTimeOutput").innerHTML = document.getElementById("copyToClipboardHasTime1").innerText + "&nbsp;";
	document.getElementById("consideredTimeOutput").style.color = "#8c8c8c";
	document.getElementById("selectedTimeOutput").style.display = "none";
}
function selectTimeOutput1 () {
	document.getElementById("consideredTimeOutput").innerHTML = null
	document.getElementById("selectedTimeOutput").style.display = "inline";
	document.getElementById("selectedTimeOutput").innerHTML = document.getElementById("copyToClipboardHasTime1").innerText + "&nbsp;";
	document.getElementById("selectedTimeOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedTimeOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedTimeOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneTime").style.display = "inline";
	document.getElementById("tabExclamationTime").style.display = "none";
}

function considerTimeOutput2 () {
	document.getElementById("consideredTimeOutput").innerHTML = document.getElementById("copyToClipboardHasTime2").innerText + "&nbsp;";
	document.getElementById("consideredTimeOutput").style.color = "#8c8c8c"
	document.getElementById("selectedTimeOutput").style.display = "none";
}
function selectTimeOutput2 () {
	document.getElementById("consideredTimeOutput").innerHTML = null
	document.getElementById("selectedTimeOutput").style.display = "inline";
	document.getElementById("selectedTimeOutput").innerHTML = document.getElementById("copyToClipboardHasTime2").innerText + "&nbsp;";
	document.getElementById("selectedTimeOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedTimeOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedTimeOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneTime").style.display = "inline";
	document.getElementById("tabExclamationTime").style.display = "none";
}

function considerTimeOutput3 () {
	document.getElementById("consideredTimeOutput").innerHTML = document.getElementById("copyToClipboardHasTime3").innerText + "&nbsp;";
	document.getElementById("consideredTimeOutput").style.color = "#8c8c8c"
	document.getElementById("selectedTimeOutput").style.display = "none";
}
function selectTimeOutput3 () {
	document.getElementById("consideredTimeOutput").innerHTML = null
	document.getElementById("selectedTimeOutput").style.display = "inline";
	document.getElementById("selectedTimeOutput").innerHTML = document.getElementById("copyToClipboardHasTime3").innerText + "&nbsp;";
	document.getElementById("selectedTimeOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedTimeOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedTimeOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneTime").style.display = "inline";
	document.getElementById("tabExclamationTime").style.display = "none";
}

function considerTimeOutput4 () {
	document.getElementById("consideredTimeOutput").innerHTML = document.getElementById("copyToClipboardHasTime4").innerText + "&nbsp;";
	document.getElementById("consideredTimeOutput").style.color = "#8c8c8c"
	document.getElementById("selectedTimeOutput").style.display = "none";
}
function selectTimeOutput4 () {
	document.getElementById("consideredTimeOutput").innerHTML = null
	document.getElementById("selectedTimeOutput").style.display = "inline";
	document.getElementById("selectedTimeOutput").innerHTML = document.getElementById("copyToClipboardHasTime4").innerText + "&nbsp;";
	document.getElementById("selectedTimeOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedTimeOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedTimeOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneTime").style.display = "inline";
	document.getElementById("tabExclamationTime").style.display = "none";
}

function considerTimeOutput5 () {
	document.getElementById("consideredTimeOutput").innerHTML = document.getElementById("copyToClipboardHasTime5").innerText + "&nbsp;";
	document.getElementById("consideredTimeOutput").style.color = "#8c8c8c"
	document.getElementById("selectedTimeOutput").style.display = "none";
}
function selectTimeOutput5 () {
	document.getElementById("consideredTimeOutput").innerHTML = null
	document.getElementById("selectedTimeOutput").style.display = "inline";
	document.getElementById("selectedTimeOutput").innerHTML = document.getElementById("copyToClipboardHasTime5").innerText + "&nbsp;";
	document.getElementById("selectedTimeOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedTimeOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedTimeOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneTime").style.display = "inline";
	document.getElementById("tabExclamationTime").style.display = "none";
}

// Location
function clearLocationConsideration () {
	document.getElementById("consideredLocationOutput").innerHTML = ""
	document.getElementById("selectedLocationOutput").style.display = "inline";
}

function considerLocationOutput1 () {
	document.getElementById("consideredLocationOutput").innerHTML = document.getElementById("copyToClipboardHasLocation1").innerText + "&nbsp;";
	document.getElementById("consideredLocationOutput").style.color = "#8c8c8c";
	document.getElementById("selectedLocationOutput").style.display = "none";
}
function selectLocationOutput1 () {
	document.getElementById("consideredLocationOutput").innerHTML = null
	document.getElementById("selectedLocationOutput").style.display = "inline";
	document.getElementById("selectedLocationOutput").innerHTML = document.getElementById("copyToClipboardHasLocation1").innerText + "&nbsp;";
	document.getElementById("selectedLocationOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedLocationOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedLocationOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneLocation").style.display = "inline";
	document.getElementById("tabExclamationLocation").style.display = "none";
}

function considerLocationOutput2 () {
	document.getElementById("consideredLocationOutput").innerHTML = document.getElementById("copyToClipboardHasLocation2").innerText + "&nbsp;";
	document.getElementById("consideredLocationOutput").style.color = "#8c8c8c"
	document.getElementById("selectedLocationOutput").style.display = "none";
}
function selectLocationOutput2 () {
	document.getElementById("consideredLocationOutput").innerHTML = null
	document.getElementById("selectedLocationOutput").style.display = "inline";
	document.getElementById("selectedLocationOutput").innerHTML = document.getElementById("copyToClipboardHasLocation2").innerText + "&nbsp;";
	document.getElementById("selectedLocationOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedLocationOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedLocationOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneLocation").style.display = "inline";
	document.getElementById("tabExclamationLocation").style.display = "none";
}

function considerLocationOutput3 () {
	document.getElementById("consideredLocationOutput").innerHTML = document.getElementById("copyToClipboardHasLocation3").innerText + "&nbsp;";
	document.getElementById("consideredLocationOutput").style.color = "#8c8c8c"
	document.getElementById("selectedLocationOutput").style.display = "none";
}
function selectLocationOutput3 () {
	document.getElementById("consideredLocationOutput").innerHTML = null
	document.getElementById("selectedLocationOutput").style.display = "inline";
	document.getElementById("selectedLocationOutput").innerHTML = document.getElementById("copyToClipboardHasLocation3").innerText + "&nbsp;";
	document.getElementById("selectedLocationOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedLocationOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedLocationOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneLocation").style.display = "inline";
	document.getElementById("tabExclamationLocation").style.display = "none";
}

function considerLocationOutput4 () {
	document.getElementById("consideredLocationOutput").innerHTML = document.getElementById("copyToClipboardHasLocation4").innerText + "&nbsp;";
	document.getElementById("consideredLocationOutput").style.color = "#8c8c8c"
	document.getElementById("selectedLocationOutput").style.display = "none";
}
function selectLocationOutput4 () {
	document.getElementById("consideredLocationOutput").innerHTML = null
	document.getElementById("selectedLocationOutput").style.display = "inline";
	document.getElementById("selectedLocationOutput").innerHTML = document.getElementById("copyToClipboardHasLocation4").innerText + "&nbsp;";
	document.getElementById("selectedLocationOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedLocationOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedLocationOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneLocation").style.display = "inline";
	document.getElementById("tabExclamationLocation").style.display = "none";
}

function considerLocationOutput5 () {
	document.getElementById("consideredLocationOutput").innerHTML = document.getElementById("copyToClipboardHasLocation5").innerText + "&nbsp;";
	document.getElementById("consideredLocationOutput").style.color = "#8c8c8c"
	document.getElementById("selectedLocationOutput").style.display = "none";
}
function selectLocationOutput5 () {
	document.getElementById("consideredLocationOutput").innerHTML = null
	document.getElementById("selectedLocationOutput").style.display = "inline";
	document.getElementById("selectedLocationOutput").innerHTML = document.getElementById("copyToClipboardHasLocation5").innerText + "&nbsp;";
	document.getElementById("selectedLocationOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedLocationOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedLocationOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneLocation").style.display = "inline";
	document.getElementById("tabExclamationLocation").style.display = "none";
}

// Organization
function clearOrganizationConsideration () {
	document.getElementById("consideredOrganizationOutput").innerHTML = ""
	document.getElementById("selectedOrganizationOutput").style.display = "inline";
}

function considerOrganizationOutput1 () {
	document.getElementById("consideredOrganizationOutput").innerHTML = document.getElementById("copyToClipboardHasOrganization1").innerText + "&nbsp;";
	document.getElementById("consideredOrganizationOutput").style.color = "#8c8c8c";
	document.getElementById("selectedOrganizationOutput").style.display = "none";
}
function selectOrganizationOutput1 () {
	document.getElementById("consideredOrganizationOutput").innerHTML = null
	document.getElementById("selectedOrganizationOutput").style.display = "inline";
	document.getElementById("selectedOrganizationOutput").innerHTML = document.getElementById("copyToClipboardHasOrganization1").innerText + "&nbsp;";
	document.getElementById("selectedOrganizationOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedOrganizationOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedOrganizationOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneOrganization").style.display = "inline";
	document.getElementById("tabExclamationOrganization").style.display = "none";
}

function considerOrganizationOutput2 () {
	document.getElementById("consideredOrganizationOutput").innerHTML = document.getElementById("copyToClipboardHasOrganization2").innerText + "&nbsp;";
	document.getElementById("consideredOrganizationOutput").style.color = "#8c8c8c"
	document.getElementById("selectedOrganizationOutput").style.display = "none";
}
function selectOrganizationOutput2 () {
	document.getElementById("consideredOrganizationOutput").innerHTML = null
	document.getElementById("selectedOrganizationOutput").style.display = "inline";
	document.getElementById("selectedOrganizationOutput").innerHTML = document.getElementById("copyToClipboardHasOrganization2").innerText + "&nbsp;";
	document.getElementById("selectedOrganizationOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedOrganizationOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedOrganizationOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneOrganization").style.display = "inline";
	document.getElementById("tabExclamationOrganization").style.display = "none";
}

function considerOrganizationOutput3 () {
	document.getElementById("consideredOrganizationOutput").innerHTML = document.getElementById("copyToClipboardHasOrganization3").innerText + "&nbsp;";
	document.getElementById("consideredOrganizationOutput").style.color = "#8c8c8c"
	document.getElementById("selectedOrganizationOutput").style.display = "none";
}
function selectOrganizationOutput3 () {
	document.getElementById("consideredOrganizationOutput").innerHTML = null
	document.getElementById("selectedOrganizationOutput").style.display = "inline";
	document.getElementById("selectedOrganizationOutput").innerHTML = document.getElementById("copyToClipboardHasOrganization3").innerText + "&nbsp;";
	document.getElementById("selectedOrganizationOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedOrganizationOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedOrganizationOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneOrganization").style.display = "inline";
	document.getElementById("tabExclamationOrganization").style.display = "none";
}

function considerOrganizationOutput4 () {
	document.getElementById("consideredOrganizationOutput").innerHTML = document.getElementById("copyToClipboardHasOrganization4").innerText + "&nbsp;";
	document.getElementById("consideredOrganizationOutput").style.color = "#8c8c8c"
	document.getElementById("selectedOrganizationOutput").style.display = "none";
}
function selectOrganizationOutput4 () {
	document.getElementById("consideredOrganizationOutput").innerHTML = null
	document.getElementById("selectedOrganizationOutput").style.display = "inline";
	document.getElementById("selectedOrganizationOutput").innerHTML = document.getElementById("copyToClipboardHasOrganization4").innerText + "&nbsp;";
	document.getElementById("selectedOrganizationOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedOrganizationOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedOrganizationOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneOrganization").style.display = "inline";
	document.getElementById("tabExclamationOrganization").style.display = "none";
}

function considerOrganizationOutput5 () {
	document.getElementById("consideredOrganizationOutput").innerHTML = document.getElementById("copyToClipboardHasOrganization5").innerText + "&nbsp;";
	document.getElementById("consideredOrganizationOutput").style.color = "#8c8c8c"
	document.getElementById("selectedOrganizationOutput").style.display = "none";
}
function selectOrganizationOutput5 () {
	document.getElementById("consideredOrganizationOutput").innerHTML = null
	document.getElementById("selectedOrganizationOutput").style.display = "inline";
	document.getElementById("selectedOrganizationOutput").innerHTML = document.getElementById("copyToClipboardHasOrganization5").innerText + "&nbsp;";
	document.getElementById("selectedOrganizationOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedOrganizationOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedOrganizationOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneOrganization").style.display = "inline";
	document.getElementById("tabExclamationOrganization").style.display = "none";
}

// Host
function clearHostConsideration () {
	document.getElementById("consideredHostOutput").innerHTML = ""
	document.getElementById("selectedHostOutput").style.display = "inline";
}

function considerHostOutput1 () {
	document.getElementById("consideredHostOutput").innerHTML = document.getElementById("copyToClipboardHasHost1").innerText + "&nbsp;";
	document.getElementById("consideredHostOutput").style.color = "#8c8c8c";
	document.getElementById("selectedHostOutput").style.display = "none";
}
function selectHostOutput1 () {
	document.getElementById("consideredHostOutput").innerHTML = null
	document.getElementById("selectedHostOutput").style.display = "inline";
	document.getElementById("selectedHostOutput").innerHTML = document.getElementById("copyToClipboardHasHost1").innerText + "&nbsp;";
	document.getElementById("selectedHostOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedHostOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedHostOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneHost").style.display = "inline";
	document.getElementById("tabExclamationHost").style.display = "none";
}

function considerHostOutput2 () {
	document.getElementById("consideredHostOutput").innerHTML = document.getElementById("copyToClipboardHasHost2").innerText + "&nbsp;";
	document.getElementById("consideredHostOutput").style.color = "#8c8c8c"
	document.getElementById("selectedHostOutput").style.display = "none";
}
function selectHostOutput2 () {
	document.getElementById("consideredHostOutput").innerHTML = null
	document.getElementById("selectedHostOutput").style.display = "inline";
	document.getElementById("selectedHostOutput").innerHTML = document.getElementById("copyToClipboardHasHost2").innerText + "&nbsp;";
	document.getElementById("selectedHostOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedHostOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedHostOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneHost").style.display = "inline";
	document.getElementById("tabExclamationHost").style.display = "none";
}

function considerHostOutput3 () {
	document.getElementById("consideredHostOutput").innerHTML = document.getElementById("copyToClipboardHasHost3").innerText + "&nbsp;";
	document.getElementById("consideredHostOutput").style.color = "#8c8c8c"
	document.getElementById("selectedHostOutput").style.display = "none";
}
function selectHostOutput3 () {
	document.getElementById("consideredHostOutput").innerHTML = null
	document.getElementById("selectedHostOutput").style.display = "inline";
	document.getElementById("selectedHostOutput").innerHTML = document.getElementById("copyToClipboardHasHost3").innerText + "&nbsp;";
	document.getElementById("selectedHostOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedHostOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedHostOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneHost").style.display = "inline";
	document.getElementById("tabExclamationHost").style.display = "none";
}

function considerHostOutput4 () {
	document.getElementById("consideredHostOutput").innerHTML = document.getElementById("copyToClipboardHasHost4").innerText + "&nbsp;";
	document.getElementById("consideredHostOutput").style.color = "#8c8c8c"
	document.getElementById("selectedHostOutput").style.display = "none";
}
function selectHostOutput4 () {
	document.getElementById("consideredHostOutput").innerHTML = null
	document.getElementById("selectedHostOutput").style.display = "inline";
	document.getElementById("selectedHostOutput").innerHTML = document.getElementById("copyToClipboardHasHost4").innerText + "&nbsp;";
	document.getElementById("selectedHostOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedHostOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedHostOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneHost").style.display = "inline";
	document.getElementById("tabExclamationHost").style.display = "none";
}

function considerHostOutput5 () {
	document.getElementById("consideredHostOutput").innerHTML = document.getElementById("copyToClipboardHasHost5").innerText + "&nbsp;";
	document.getElementById("consideredHostOutput").style.color = "#8c8c8c"
	document.getElementById("selectedHostOutput").style.display = "none";
}
function selectHostOutput5 () {
	document.getElementById("consideredHostOutput").innerHTML = null
	document.getElementById("selectedHostOutput").style.display = "inline";
	document.getElementById("selectedHostOutput").innerHTML = document.getElementById("copyToClipboardHasHost5").innerText + "&nbsp;";
	document.getElementById("selectedHostOutput").style.backgroundColor = "#d0d0d0";
	document.getElementById("selectedHostOutput").style.color = "#000000";
	setTimeout(function() {
		document.getElementById("selectedHostOutput").style.backgroundColor = "transparent";
	}, 1000);

	// toggle exclamation/done in tab
	document.getElementById("tabDoneHost").style.display = "inline";
	document.getElementById("tabExclamationHost").style.display = "none";
}

// Description
function placeDescriptionAsSelected () {
	document.getElementById("selectedDescriptionOutput").innerHTML = document.getElementById("copyToClipboardHasDescription1").innerText + "&nbsp;";
	document.getElementById("selectedDescriptionOutput").style.backgroundColor = "#d0d0d0"; setTimeout(function() {
	document.getElementById("selectedDescriptionOutput").style.backgroundColor = "transparent";
}, 1000);
}


// Hashtags
function placeHashtagsAsSelected () {
	document.getElementById("selectedHashtagsOutput").innerHTML = '<br><br>' + document.getElementById("hashtagsHere").innerText;
	document.getElementById("selectedHashtagsOutput").style.backgroundColor = "#d0d0d0"; setTimeout(function() {
	document.getElementById("selectedHashtagsOutput").style.backgroundColor = "transparent";
}, 1000);
}

// Screenshot
// Input: <div id="photo"><button onclick="screenshot();">Take Screenshot</button></div>
// Output: <div id="output"></div>
function downloadFinalTextBlob() {

	// Get the content
	let blobHtml =

		`<!DOCTYPE html>
	<html lang="en">
		<head>

		<meta charset="UTF-8">
		<title>BrandWield Saved Content</title>
	<meta name="author" content="BRANDWIELD Inc.">

		<!-- CSS -->
		<style>
			* {

		}
			body {
			padding: 20px 20px 20px 20px;
		}
			.dateAndTime {
			color: #000000;
			text-decoration: underline;
		}
			.legalBusinessName {
			font-weight: bolder;
		}
		</style>

	</head>
	<body>
	<header>
		<h1>BrandWield Saved Content</h1>
	</header>
	<main>
		<section id="savedMedia">
		</section>

		<section id="savedText">
			<p id="savedTextHere" style="width: 300px">
				${document.getElementById("finalText").innerText}
			</p>
		</section>
	</main>
	</body>
</html>`

	// Create a new Blob (html)
	const blob = new Blob([blobHtml], { type: "text/html" });


	// Download the newly created Blob
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "BrandWiled Content";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);

}
function downloadHorizontalImageFinal() {

	// Set input & output
	let screenshotTakeable = document.getElementById('finalImageHorizontal');
	let screenshotPlaceable = document.getElementById('output');

	// Call the CDN function
	html2canvas(screenshotTakeable).then ( function (canvas) {
		screenshotPlaceable.appendChild(canvas);
		canvas.classList.add('screenshotHorizontal');
		Array.from(document.querySelectorAll('.screenshotHorizontal')).pop();
	});

	// Hide to output, so it doesn't show on the page --> needs to be after the CDN call so it can be appended and captured first
	document.getElementById("output").style.display = "none";

	// Download image files
	setTimeout(function() {
		var canvas = Array.from(document.querySelectorAll('.screenshotHorizontal')).pop();
		var imageData = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream", 1.0);
		var a = document.createElement('a');
		a.href = imageData;
		a.download = 'Horizontal Image';
		a.click();
		// set imageData to localStorage
		localStorage.setItem('latestScreenshotHorizontal', imageData);
	}, 1000);
}
function downloadVerticalImageFinal() {
	// Set input & output
	let screenshotTakeable = document.getElementById('finalImageVertical');
	let screenshotPlaceable = document.getElementById('output');

	// Call the CDN function
	html2canvas(screenshotTakeable).then ( function (canvas) {
		screenshotPlaceable.appendChild(canvas);
		canvas.classList.add('screenshotVertical');
	});

	// Hide to output, so it doesn't show on the page --> needs to be after the CDN call so it can be appended and captured first
	document.getElementById("output").style.display = "none";

	// Download image files
	setTimeout(function() {
		var canvas = Array.from(document.querySelectorAll('.screenshotVertical')).pop();
		var imageData = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream", 1.0);
		var a = document.createElement('a');
		a.href = imageData;
		a.download = 'Vertical Image';
		a.click();
		// set imageData to localStorage
		localStorage.setItem('latestScreenshotVertical', imageData);
	}, 2000);
}
function downloadSquareImageFinal() {


	// Set input & output
	let screenshotTakeable = document.getElementById('finalImageSquare');
	let screenshotPlaceable = document.getElementById('output');

	// Call the CDN function
	html2canvas(screenshotTakeable).then ( function (canvas) {
		screenshotPlaceable.appendChild(canvas);
		canvas.classList.add('screenshotSquare');
	});

	// Hide to output, so it doesn't show on the page --> needs to be after the CDN call so it can be appended and captured first
	document.getElementById("output").style.display = "none";

	// Download image files
	setTimeout(function() {
		// select ALL canvas elements, and for each one, get the dataURL and download it
		var canvas = Array.from(document.querySelectorAll('.screenshotSquare')).pop();
		var imageData = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream", 1.0);
		var a = document.createElement('a');
		a.href = imageData;
		a.download = 'Square Image';
		a.click();
		// set imageData to localStorage
		localStorage.setItem('latestScreenshotSquare', imageData);
	}, 3000);
}




function downloadStoryImageFinal() {
	// Set input & output
	let screenshotTakeable = document.getElementById('finalImageStory');
	let screenshotPlaceable = document.getElementById('output');

	// Call the CDN function
	html2canvas(screenshotTakeable).then ( function (canvas) {
		screenshotPlaceable.appendChild(canvas);
		canvas.classList.add('screenshotStory');
	});

	// Hide to output, so it doesn't show on the page --> needs to be after the CDN call so it can be appended and captured first
	document.getElementById("output").style.display = "none";

	// Download image files
	setTimeout(function() {
		// select ALL canvas elements, and for each one, get the dataURL and download it
		var canvas = Array.from(document.querySelectorAll('.screenshotStory')).pop();
		var imageData = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream", 1.0);
		var a = document.createElement('a');
		a.href = imageData;
		a.download = 'Story Image';
		a.click();
		// set imageData to localStorage
		localStorage.setItem('latestScreenshotStory', imageData);
	}, 4000);
}

function downloadContent() {
	downloadHorizontalImageFinal();
	downloadSquareImageFinal();
	downloadVerticalImageFinal();
	downloadStoryImageFinal();
	downloadFinalTextBlob();
}

// Text Sentiment Analysis API (unlimited free calls)
function eventTitleSentimentAnalysis() {

	// Get the text
	let text = document.getElementById("inputEventTitle").value;

	// Set the API key
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': '0759e0a5f5msh13ea66780939408p189da2jsne987576d688f',
			'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
		},
		body: '{"language":"english","text":"' + text + '"}'
	};

	fetch('https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1', options)
	.then(response => response.json())
	.then(data => {

		if (text.length > 1) {
			document.getElementById("titleSentimentAnalysis").innerText = data.sentiment;
			document.getElementById("titleSentimentAnalysis").style.display = "inline";

			if (data.sentiment == "positive") {
				document.getElementById("titleSentimentAnalysis").style.backgroundColor = "darkgreen";
				document.getElementById("titleSentimentAnalysis").style.color = "white";
			} else if (data.sentiment == "negative") {
				document.getElementById("titleSentimentAnalysis").style.backgroundColor = "darkred"
				document.getElementById("titleSentimentAnalysis").style.color = "white";
			} else if (data.sentiment == "neutral") {
				document.getElementById("titleSentimentAnalysis").style.backgroundColor = "darkblue"
				document.getElementById("titleSentimentAnalysis").style.color = "white";
			}
		}
		else {
			document.getElementById("titleSentimentAnalysis").style.display = "none";
		}
	})
	.catch(err => console.error(err));
}
function eventDescriptionSentimentAnalysis() {

	// Get the text
	let text = document.getElementById("inputEventDescription").value;

	// Set the API key
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': '0759e0a5f5msh13ea66780939408p189da2jsne987576d688f',
			'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
		},
		body: '{"language":"english","text":"' + text + '"}'
	};

	fetch('https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1', options)
	.then(response => response.json())
	.then(data => {

		if (text.length > 1) {
			document.getElementById("descriptionSentimentAnalysis").innerText = data.sentiment;
			document.getElementById("descriptionSentimentAnalysis").style.display = "inline";

			if (data.sentiment == "positive") {
				document.getElementById("descriptionSentimentAnalysis").style.backgroundColor = "darkgreen";
				document.getElementById("descriptionSentimentAnalysis").style.color = "white";
			} else if (data.sentiment == "negative") {
				document.getElementById("descriptionSentimentAnalysis").style.backgroundColor = "darkred"
				document.getElementById("descriptionSentimentAnalysis").style.color = "white";
			} else if (data.sentiment == "neutral") {
				document.getElementById("descriptionSentimentAnalysis").style.backgroundColor = "darkblue"
				document.getElementById("descriptionSentimentAnalysis").style.color = "white";
			}
		}
		else {
			document.getElementById("descriptionSentimentAnalysis").style.display = "none";
		}
	})
	.catch(err => console.error(err));
}

// Text Entity Analysis API (unlimited free calls)
function finalTextEntityAnalysis() {
	let text = document.getElementById("inputEventDescription");
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': '0759e0a5f5msh13ea66780939408p189da2jsne987576d688f',
			'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
		},
		body: '{"language":"english","text":"' + text + '"}'
	};
	fetch('https://text-analysis12.p.rapidapi.com/ner/api/v1.1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

// Sentence Generator API - SET UP FOR 'EVENT'
function realiseSentence() {

	let object = 'Fairfield Networking Dinner'; // REQ - they are acted upon
	let objnum = 'singular'; // 'singular' or 'plural'
	let objdet = 'the'; // the object determiner (ex: a, an, the) use '-' for auto-generation
	let objmod = 'networking'; //  an adjective of the object (ex: big, small, red)

	let subject = 'you'; // REQ - the doer of the verb
	let subjnum = 'singular'; // 'singular' or 'plural'
	let subjdet = '-'; // the subject determiner (ex: a, an, the) use '-' for auto-generation

	let verb = 'attend'; //  REQ - It's what ya do!
	let tense = 'future'; // 'past', 'present' or 'future'

	let sentencetype = 'whosubj'; // declaration by default

	// let progressive = '';
	// let modal = '';
	// let passive = '';
	// let perfect = '';
	// let negated = '';

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '0759e0a5f5msh13ea66780939408p189da2jsne987576d688f',
			'X-RapidAPI-Host': 'linguatools-sentence-generating.p.rapidapi.com'
		}
	};

	// API DOCS --> https://linguatools.org/language-apis/sentence-generating-api/
	fetch('https://linguatools-sentence-generating.p.rapidapi.com/realise?' +

		'object=' + object + // REQ - any noun or pronoun. If the object is a pronoun set objdet=- and use the base form of the pronoun (e.g. she instead of her). Possible base forms are: I, you, he, she, it, we, they. This will be automatically replaced by me, you, him, her, it, us, them. Set objnum=plural to get the plural forms (e. g. object=he and objdet=- and objnum=plural yields them).
		'&subject=' + subject + // REQ - any noun or pronoun
		'&verb=' + verb + // REQ - any verb, including phrase-verbs like 'start out'

		// Object-related
		'&objdet=' + objdet + // Specifies the object’s determiner (a, the, –). Default is „a“. Use objdet=- to generate an object without determiner.
		'&objnum=' + objnum + // 'singular' or 'plural' - Default is singular. A value of plural is overridden by objdet=a.
		'&objmod=' + objmod + // An adjective modifying the object

		// Subject-related
		'&subjnum=' + subjnum + // 'singular' or 'plural' - 'plural' is overridden of subjdet=a.
		'&subjdet=' + subjdet + // Specifies the subject’s number (a, the, –). Default is „the“. Use subjdet=- to generate a subject without determiner.

		// Verb-related
		'&tense=' + tense + // 'past' 'present' or 'future' - Default is 'present'

		'&sentencetype=' + sentencetype // Default is a declarative sentence
		// 'yesno' generates a yes/no-question
		// 'whatobj' generates a WH-question for the object
		// 'whosubj' generates a WH-question for the subject

	    // UNUSED PARAMETERS for now
		// '&modal=' + modal + // Specifies a modal verb modifying the verb (can, may, must, ought, shall, should, would). Only allowed for present tense. If tense=past or tense=future is set then the parameter modal will be ignored.
		// '&passive=' + passive + // &passive=passive generates a sentence in passive voice. The object is set as subject and the subject becomes the by-object.
		// '&progressive=' + progressive + // &progressive=progressive sets the progressive (continuous) tense
		// '&perfect=' + perfect + // &perfect=perfect sets the perfect tense
		// '&negated=' + negated // &negated=negated generates a negated sentence

		,options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}




