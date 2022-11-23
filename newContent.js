// Update variables as use types
function eventTitleUpdate () {
	let outputEventTitle = document.getElementById("inputEventTitle");
	if (outputEventTitle.value != null && outputEventTitle.value.length > 0) {
		// find all elements with the class name 'title' and update their innerHTML to the value of the input
		console.log("logged");
		let titleElements = document.getElementsByClassName("title");
		for (let i = 0; i < titleElements.length; i++) {
			titleElements[i].innerHTML = outputEventTitle.value;
			titleElements[i].style.display = 'inline';
		}
		document.getElementById("hasTitle").style.display = "inline";
		// for all elements with the class name 'title', everytime the value changes, change the background color to #CF88FF for 1 second
		for (let i = 0; i < titleElements.length; i++) {
			titleElements[i].style.backgroundColor = "#CF88FF";
			titleElements[i].classList.add("chip");
			titleElements[i].title = "Title of the event";
		}
		// if the titleElements[i] are inside the #finalImageHorizontal, #finalImageVertical, or #finalImageSquare, do not leave the changed the border color
		for (let i = 0; i < titleElements.length; i++) {
			if (titleElements[i].closest("#finalImageHorizontal") || titleElements[i].closest("#finalImageVertical") || titleElements[i].closest("#finalImageSquare")) {
				titleElements[i].style.backgroundColor = "transparent";
				titleElements[i].classList.remove("chip");
				titleElements[i].innerHTML = outputEventTitle.value + "<br>";
			}
		}
		// separate the title into an array of words (seperated by spaces)
		let text = document.getElementById("inputEventTitle").value;
		let titleWords = text.split(" ");
		localStorage.setItem('titleWords', titleWords);
		generateHashtagsForTitle();
	} else {
		let titleElements = document.getElementsByClassName("title");
		for (let i = 0; i < titleElements.length; i++) {
			titleElements[i].style.display = 'none';
		}
	}
}
function eventDateUpdate () {
	let outputEventDate = document.getElementById("inputEventDate");
	if (outputEventDate.value != null && outputEventDate.value.length > 0) {
		// find all elements with the class name 'date' and update their innerHTML to the value of the input
		let dateElements = document.getElementsByClassName("date");
		for (let i = 0; i < dateElements.length; i++) {
			dateElements[i].innerHTML = outputEventDate.value;
		}
		// for all elements with the class name 'date', everytime the value changes, change the background color to lightpink for 1 second
		for (let i = 0; i < dateElements.length; i++) {
			dateElements[i].style.backgroundColor = "lightpink";
			dateElements[i].title = "Date of the event";
		}
		// For all elements with the class of 'showOnDate', set the display to inline
		let showOnDateElements = document.getElementsByClassName("showOnDate");
		for (let i = 0; i < showOnDateElements.length; i++) {
			showOnDateElements[i].style.display = "inline";
		}
		// if the dateElements[i] are inside the #finalImageHorizontal, #finalImageVertical, or #finalImageSquare, do not leave the changed the border color
		for (let i = 0; i < dateElements.length; i++) {
			if (dateElements[i].closest("#finalImageHorizontal") || dateElements[i].closest("#finalImageVertical") || dateElements[i].closest("#finalImageSquare")) {
				dateElements[i].style.backgroundColor = "transparent";
				dateElements[i].classList.remove("chip");
				dateElements[i].innerHTML = outputEventDate.value + "<br>";
			}
		}
	} else {
		let dateElements = document.getElementsByClassName("date");
		for (let i = 0; i < dateElements.length; i++) {
			dateElements[i].style.display = 'none';
		}
	}
}
function eventTimeUpdate () {
	let outputEventTime = document.getElementById("inputEventTime");
	if (outputEventTime.value != null && outputEventTime.value.length > 0) {
		// find all elements with the class name 'time' and update their innerHTML to the value of the input
		let timeElements = document.getElementsByClassName("time");
		for (let i = 0; i < timeElements.length; i++) {
			timeElements[i].innerHTML = outputEventTime.value;
		}
		// for all elements with the class name 'time', everytime the value changes, change the background color to #FFE88C for 1 second
		for (let i = 0; i < timeElements.length; i++) {
			timeElements[i].style.backgroundColor = "#FFE88C";
			timeElements[i].title = "Time of the event";

		}
		// For all elements with the class of 'showOnTime', set the display to inline
		let showOnTimeElements = document.getElementsByClassName("showOnTime");
		for (let i = 0; i < showOnTimeElements.length; i++) {
			showOnTimeElements[i].style.display = "inline";
		}
		// if the timeElements[i] are inside the #finalImageHorizontal, #finalImageVertical, or #finalImageSquare, do not leave the changed the border color
		for (let i = 0; i < timeElements.length; i++) {
			if (timeElements[i].closest("#finalImageHorizontal") || timeElements[i].closest("#finalImageVertical") || timeElements[i].closest("#finalImageSquare")) {
				timeElements[i].style.backgroundColor = "transparent";
				timeElements[i].classList.remove("chip");
				timeElements[i].innerHTML = outputEventTime.value + "<br>";
			}
		}
	} else {
		let timeElements = document.getElementsByClassName("time");
		for (let i = 0; i < timeElements.length; i++) {
			timeElements[i].style.display = 'none';
		}
	}
}
function eventLocationUpdate () {
	let outputEventLocation = document.getElementById("inputEventLocation");
	if (outputEventLocation.value != null && outputEventLocation.value.length > 0) {
		// find all elements with the class name 'location' and update their innerHTML to the value of the input
		let locationElements = document.getElementsByClassName("location");
		for (let i = 0; i < locationElements.length; i++) {
			locationElements[i].innerHTML = outputEventLocation.value;
		}
		// for all elements with the class name 'location', everything the value changes, change the background color to #DFDFDF for 1 second
		for (let i = 0; i < locationElements.length; i++) {
			locationElements[i].style.backgroundColor = "#DFDFDF";
			locationElements[i].title = "Location of the event";
		}
		// if the locationElements[i] are inside the #finalImageHorizontal, #finalImageVertical, or #finalImageSquare, do not leave the changed the border color
		for (let i = 0; i < locationElements.length; i++) {
			if (locationElements[i].closest("#finalImageHorizontal") || locationElements[i].closest("#finalImageVertical") || locationElements[i].closest("#finalImageSquare")) {
				locationElements[i].style.backgroundColor = "transparent";
				locationElements[i].classList.remove("chip");
				locationElements[i].innerHTML = outputEventLocation.value + "<br>";
			}
		}
		document.getElementById("hasLocation").style.display = "inline";
		// separate the location into an array of words (seperated by spaces)
		let text = document.getElementById("inputEventLocation").value;
		let locationWords = text.split(" ");
		localStorage.setItem('locationWords', locationWords);
		generateHashtagsForLocation();
	} else {
		console.log("no location");
		let locationElements = document.getElementsByClassName("location");
		for(let i = 0; i < locationElements.length; i ++) {
			locationElements[i].style.display = 'none';
		}
	}
}
function eventOrganizationUpdate () {
	let outputEventOrganization = document.getElementById("inputEventOrganization");
	if (outputEventOrganization.value != null && outputEventOrganization.value.length > 0) {
		// find all elements with the class name 'organization' and update their innerHTML to the value of the input
		let organizationElements = document.getElementsByClassName("organization");
		for (let i = 0; i < organizationElements.length; i++) {
			organizationElements[i].innerHTML = outputEventOrganization.value;
		}
		// for all elements with the class name 'organization', everything the value changes, change the background color to lightgreen for 1 second
		for (let i = 0; i < organizationElements.length; i++) {
			organizationElements[i].style.backgroundColor = "lightgreen";
			organizationElements[i].title = "Event organization";
		}
		// if the organizationElements[i] are inside the #finalImageHorizontal, #finalImageVertical, or #finalImageSquare, do not leave the changed the border color
		for (let i = 0; i < organizationElements.length; i++) {
			if (organizationElements[i].closest("#finalImageHorizontal") || organizationElements[i].closest("#finalImageVertical") || organizationElements[i].closest("#finalImageSquare")) {
				organizationElements[i].style.backgroundColor = "transparent";
				organizationElements[i].classList.remove("chip");
				organizationElements[i].innerHTML = outputEventOrganization.value + "<br>";
			}
		}
		document.getElementById("hasOrganization").style.display = "inline";
		// separate the organization into an array of words (seperated by spaces)
		let text = document.getElementById("inputEventOrganization").value;
		let organizationWords = text.split(" ");
		localStorage.setItem('organizationWords', organizationWords);
		generateHashtagsForOrganization();
	} else {
		let organizationElements = document.getElementsByClassName("organization");
		for (let i = 0; i < organizationElements.length; i++) {
			organizationElements[i].style.display = 'none';
		}
	}
}
function eventHostUpdate () {
	let outputEventHost = document.getElementById("inputEventHost");
	if (outputEventHost.value != null && outputEventHost.value.length > 0) {
		// find all elements with the class name 'host' and update their innerHTML to the value of the input
		let hostElements = document.getElementsByClassName("host");
		for (let i = 0; i < hostElements.length; i++) {
			hostElements[i].innerHTML = outputEventHost.value;
		}
		// for all elements with the class name 'host', everything the value changes, change the background color to lightblue for 1 second
		for (let i = 0; i < hostElements.length; i++) {
			hostElements[i].style.backgroundColor = "lightblue";
			hostElements[i].title = "Event host";
		}
		document.getElementById("hasHost").style.display = "inline";
		// if the hostElements[i] are inside the #finalImageHorizontal, #finalImageVertical, or #finalImageSquare, do not leave the changed the border color
		for (let i = 0; i < hostElements.length; i++) {
			if (hostElements[i].closest("#finalImageHorizontal") || hostElements[i].closest("#finalImageVertical") || hostElements[i].closest("#finalImageSquare")) {
				hostElements[i].style.backgroundColor = "transparent";
				hostElements[i].classList.remove("chip");
				hostElements[i].innerHTML = outputEventHost.value + "<br>";
			}
		}
		// separate the host into an array of words (seperated by spaces)
		let text = document.getElementById("inputEventHost").value;
		let hostWords = text.split(" ");
		localStorage.setItem('hostWords', hostWords);
		generateHashtagsForHost();
	} else {
		let hostElements = document.getElementsByClassName("host");
		for (let i = 0; i < hostElements.length; i++) {
			hostElements[i].style.display = 'none';
		}
	}
}
function eventDescriptionUpdate () {
	let outputEventDescription = document.getElementById("inputEventDescription");
	if (outputEventDescription.value != null && outputEventDescription.value.length > 0) {
		// find all elements with the class name 'description' and update their innerHTML to the value of the input
		let descriptionElements = document.getElementsByClassName("description");
		for (let i = 0; i < descriptionElements.length; i++) {
			descriptionElements[i].innerHTML = outputEventDescription.value;
		}
		// for all elements with the class name 'host', everything the value changes, change the background color to #D5DCFF for 1 second
		for (let i = 0; i < descriptionElements.length; i++) {
			descriptionElements[i].style.backgroundColor = "#D5DCFF";
			descriptionElements[i].title = "Event description";
		}
		// if the dateElements[i] are inside the #finalImageHorizontal, #finalImageVertical, or #finalImageSquare, do not leave the changed the border color
		for (let i = 0; i < descriptionElements.length; i++) {
			if (descriptionElements[i].closest("#finalImageHorizontal") || descriptionElements[i].closest("#finalImageVertical") || descriptionElements[i].closest("#finalImageSquare")) {
				descriptionElements[i].style.backgroundColor = "transparent";
				descriptionElements[i].classList.remove("chip");
			}
		}
		document.getElementById("hasDescription").style.display = "inline";
		// separate the description into an array of words (seperated by spaces)
		let text = document.getElementById("inputEventDescription").value;
		let descriptionWords = text.split(" ");
		localStorage.setItem('descriptionWords', descriptionWords);
		generateHashtagsForDescription();
	} else {
		let descriptionElements = document.getElementsByClassName("description");
		for (let i = 0; i < descriptionElements.length; i++) {
			descriptionElements[i].style.display = 'none';
		}
	}
}
function eventLinkUpdate () {
	let outputEventLink = document.getElementById("inputEventLink");
	if (outputEventLink.value != null || outputEventLink.value.length > 0) {
		// find all elements with the class name 'link' and update their innerHTML to the value of the input
		let linkElements = document.getElementsByClassName("link");
		for(let i = 0; i < linkElements.length; i ++) {
			linkElements[i].href = outputEventLink.value;
		}
		for(let i = 0; i < linkElements.length; i ++) {
			linkElements[i].color = '#ffffff'
		}
		// QR Code API
		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'X-RapidAPI-Key': '0759e0a5f5msh13ea66780939408p189da2jsne987576d688f',
				'X-RapidAPI-Host': 'qr-code-generator-with-logo-and-color-fancyqr.p.rapidapi.com'
			},
			body: '{"data":"FancyQR https //appconsoft.com","size":200,"margin":0,"color":"#F4511E","colorAlpha":100,"backgroundColor":"#FFFFFF","backgroundColorAlpha":100,"eyeOneInnerColor":"#F57C00","eyeOneOuterColor":"#B71C1C","eyeTwoInnerColor":"#F57C00","eyeTwoOuterColor":"#B71C1C","eyeThreeInnerColor":"#F57C00","eyeThreeOuterColor":"#B71C1C","eyeStyle":"circle","blockStyle":"round","errorCorrectionLevel":"Q","encoding":"UTF-8"}'
		};
		// set the value of the 'data' property to the value of the inputEventLink
		options.body = options.body.replace("FancyQR https //appconsoft.com", "FancyQR " + document.getElementById('inputEventLink').value);

		// fetch the QR code image from the API
		fetch('https://qr-code-generator-with-logo-and-color-fancyqr.p.rapidapi.com/?action=simple', options)
		.then(response => response.json())
		.then(data => {
			console.log(data.qrcode);
			localStorage.setItem('qrCode', data.qrcode);
		})
		.catch(err => console.error(err));

		// place the QR code in the preivew, and the 3 images
		let qrCode = localStorage.getItem('qrCode');
		if (qrCode.length > 0) {
			document.getElementById("qrPreview").src = qrCode;
			document.getElementById("qrPreview").style.display = "inline";

			document.getElementById("horizontalImageQRHere").src = qrCode;
			document.getElementById("verticalImageQRHere").src = qrCode;
			document.getElementById("squareImageQRHere").src = qrCode;

			document.getElementById("horizontalImageQRHere").style.display = "inline";
			document.getElementById("verticalImageQRHere").style.display = "inline";
			document.getElementById("squareImageQRHere").style.display = "inline";
		}
	} else {
		let linkElements = document.getElementsByClassName("link");
		for(let i = 0; i < linkElements.length; i ++) {
			linkElements[i].style.display = 'none';
		}
		document.getElementById("qrPreview").style.display = "none";
		document.getElementById("horizontalImageLogoHere").style.display = "none";
		document.getElementById("verticalImageLogoHere").style.display = "none";
		document.getElementById("squareImageLogoHere").style.display = "none";
	}
}
function eventPrimarycolorUpdate () {
	let outputEventPrimarycolor = document.getElementById("inputEventPrimaryColor");
	if (outputEventPrimarycolor.value != null) {
		localStorage.setItem('primaryColor', outputEventPrimarycolor.value);
		// find all elements with the class name 'primarycolor' and update their backgroundColor to the value of the input
		let primarycolorElements = document.getElementsByClassName("primarycolor");
		for (let i = 0; i < primarycolorElements.backgroundColor; i++) {
			primarycolorElements[i].backgroundColor = outputEventPrimarycolor.value;
		}
		// for all elements with the class name 'primarycolor', everything the value changes, change the background color to the 'primarycolor' for 1 second
		for (let i = 0; i < primarycolorElements.length; i++) {
			primarycolorElements[i].style.backgroundColor = outputEventPrimarycolor.value;
			primarycolorElements[i].style.border = "2px solid " + outputEventPrimarycolor.value;
			setTimeout(function() {
				primarycolorElements[i].style.backgroundColor = outputEventPrimarycolor.value;
				primarycolorElements[i].style.border = "none";
			}, 1000);
		}
		let imageColors = document.getElementsByClassName("imageColors");
		for (let i = 0; i < imageColors.length; i++) {
			// change the background color of the imageColors to the 'primarycolor', but as a gradient mixed with white
			imageColors[i].style.background = "linear-gradient(45deg, " + outputEventPrimarycolor.value + " 0%, " + outputEventPrimarycolor.value + " 50%, #ffffff 35%, #ffffff 100%)";
		}
		// For all elements with the class of 'showOnPrimarycolor', set the display to inline
		let showOnPrimarycolorElements = document.getElementsByClassName("showOnPrimarycolor");
		for (let i = 0; i < showOnPrimarycolorElements.length; i++) {
			showOnPrimarycolorElements[i].style.display = "inline";
		}
		// if the primarycolorElements[i] are inside the #finalImageHorizontal, #finalImageVertical, or #finalImageSquare, do not leave the changed the border color
		for (let i = 0; i < primarycolorElements.length; i++) {
			if (primarycolorElements[i].closest("#finalImageHorizontal") || primarycolorElements[i].closest("#finalImageVertical") || primarycolorElements[i].closest("#finalImageSquare")) {
				setTimeout(function() {
					primarycolorElements[i].style.border = "none";
				}, 1000);
			}
		}
	}
}
function eventLogoUpdate () {
	let outputEventLogo = document.getElementById("inputEventLogo");
	if (outputEventLogo.value != null && outputEventLogo.value.length > 0) {

		// Set the logo to local storage
		localStorage.setItem('squareLogo', outputEventLogo.value);

		let logoElements = document.getElementsByClassName("showOnLogo");
		for (let i = 0; i < logoElements.src; i++) {
			logoElements[i].src = outputEventLogo.value;
		}

		// For all elements with the class of 'showOnLogo', set the display to inline
		let showOnLogoElements = document.getElementsByClassName("showOnLogo");
		for (let i = 0; i < showOnLogoElements.length; i++) {
			showOnLogoElements[i].style.display = "inline";
			logoElements[i].title = "Your logo";
		}

		const file = document.querySelector('#inputEventLogo').files[0];
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function () {
			localStorage.setItem("image", reader.result);
			document.getElementById("horizontalImageLogoHere").setAttribute("src", localStorage.getItem("image"))
			document.getElementById("verticalImageLogoHere").setAttribute("src", localStorage.getItem("image"))
			document.getElementById("squareImageLogoHere").setAttribute("src", localStorage.getItem("image"))
		}
		if(localStorage.getItem("image"))
			document.getElementById("horizontalImageLogoHere").setAttribute("src", localStorage.getItem("image"))
		document.getElementById("verticalImageLogoHere").setAttribute("src", localStorage.getItem("image"))
		document.getElementById("squareImageLogoHere").setAttribute("src", localStorage.getItem("image"))
	} else {
		let logoElements = document.getElementsByClassName("logo");
		for (let i = 0; i < logoElements.length; i++) {
			logoElements[i].style.display = 'none';
		}
	}
}

// clear the fields
function eventTitleClear () {
	if (confirm("Are you sure you want to clear the title?")) {
		document.getElementById("inputEventTitle").value = null;
		eventTitleUpdate();
	}
}
function eventDateClear () {
	if (confirm("Are you sure you want to clear the date?")) {
		document.getElementById("inputEventDate").value = null;
		eventDateUpdate();
	}
}
function eventTimeClear () {
	if (confirm("Are you sure you want to clear the time?")) {
		document.getElementById("inputEventTime").value = null;
		eventTimeUpdate();
	}
}
function eventLocationClear () {
	if (confirm("Are you sure you want to clear the location?")) {
		document.getElementById("inputEventLocation").value = null;
		eventLocationUpdate();
	}
}
function eventOrganizationClear () {
	if (confirm("Are you sure you want to clear the organizer?")) {
		document.getElementById("inputEventOrganizer").value = null;
		eventOrganizerUpdate();
	}
}
function eventHostClear () {
	if (confirm("Are you sure you want to clear the host?")) {
		document.getElementById("inputEventHost").value = null;
		eventHostUpdate();
	}
}
function eventDescriptionClear () {
	if (confirm("Are you sure you want to clear the description?")) {
		document.getElementById("inputEventDescription").value = null;
		eventDescriptionUpdate();
	}
}
function eventLinkClear () {
	if (confirm("Are you sure you want to clear the link?")) {
		document.getElementById("inputEventLink").value = null;
		eventLinkUpdate();
	}

}
function eventPrimarycolorClear () {
	if (confirm("Are you sure you want to clear the primary color?")) {
		document.getElementById("inputEventPrimaryColor").value = '#ffffff';
		eventPrimarycolorUpdate();
	}
}
function eventLogoClear () {
	if (confirm("Are you sure you want to clear the logo?")) {
		document.getElementById("inputEventLogo").value = null;
		document.getElementById("horizontalImageLogoHere").src = null;
		document.getElementById("verticalImageLogoHere").src = null;
		document.getElementById("squareImageLogoHere").src = null;
		document.getElementById("horizontalImageLogoHere").style.display = "none";
		document.getElementById("verticalImageLogoHere").style.display = "none";
		document.getElementById("squareImageLogoHere").style.display = "none";
		eventLogoUpdate();
	}
}

// Generate hashtags as user enters input
function generateHashtagsForTitle () {

	// make 'hashtagsContainer' visible
	document.getElementById("hashtagsContainer").style.display = 'block';

	// set the words to all lowercase
	let titleWordsLower = localStorage.getItem('titleWords').toLowerCase();

	// add a '#' to the beginning of each word
	let titleWordsHashtag = titleWordsLower.replace(/\b(\w)/g, '#$1');

	// replace all commas in the string with a space
	let titleWordsHashtagNoCommas = titleWordsHashtag.replace(/,/g, ' ');

	// set the string into the hashtag output
	document.getElementById("hashtagsHereForTitle").innerText = titleWordsHashtagNoCommas;

	// for each word in the string, add the class '.chip' to it
	let titleWordsHashtagNoCommasItem = titleWordsHashtagNoCommas.split(" ");

	// set the hashtags in the social shares section preview
//	document.getElementById("hashtagsHereFacebook").innerText = titleWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereTwitter").innerText = titleWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereLinkedIn").innerText = titleWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereEmail").innerText = titleWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereReddit").innerText = titleWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereTumblr").innerText = titleWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereTelegram").innerText = titleWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereWhatsApp").innerText = titleWordsHashtagNoCommas;



}
function generateHashtagsForLocation () {

	// make 'hashtagsContainer' visible
	document.getElementById("hashtagsContainer").style.display = 'block';

	// set the words to all lowercase
	let locationWordsLower = localStorage.getItem('locationWords').toLowerCase();

	// add a '#' to the beginning of each word
	let locationWordsHashtag = locationWordsLower.replace(/\b(\w)/g, '#$1');

	// replace all commas in the string with a space
	let locationWordsHashtagNoCommas = locationWordsHashtag.replace(/,/g, ' ');

	// set the string into the hashtag output
	document.getElementById("hashtagsHereForLocation").innerText = locationWordsHashtagNoCommas;

	// for each word in the string, add the class '.chip' to it
	let locationWordsHashtagNoCommasItem = locationWordsHashtagNoCommas.split(" ");
	console.log(locationWordsHashtagNoCommasItem);

	// set the hashtags in the social shares section preview
//	document.getElementById("hashtagsHereFacebook").innerText = locationWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereTwitter").innerText = locationWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereLinkedIn").innerText = locationWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereEmail").innerText = locationWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereReddit").innerText = locationWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereTumblr").innerText = locationWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereTelegram").innerText = locationWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereWhatsApp").innerText = locationWordsHashtagNoCommas;

}
function generateHashtagsForOrganization () {

	// make 'hashtagsContainer' visible
	document.getElementById("hashtagsContainer").style.display = 'block';

	// set the words to all lowercase
	let organizationWordsLower = localStorage.getItem('organizationWords').toLowerCase();

	// add a '#' to the beginning of each word
	let organizationWordsHashtag = organizationWordsLower.replace(/\b(\w)/g, '#$1');

	// replace all commas in the string with a space
	let organizationWordsHashtagNoCommas = organizationWordsHashtag.replace(/,/g, ' ');

	// set the string into the hashtag output
	document.getElementById("hashtagsHereForOrganization").innerText = organizationWordsHashtagNoCommas;

	// for each word in the string, add the class '.chip' to it
	let organizationWordsHashtagNoCommasItem = organizationWordsHashtagNoCommas.split(" ");
	console.log(organizationWordsHashtagNoCommasItem);

	// set the hashtags in the social shares section preview
//	document.getElementById("hashtagsHereFacebook").innerText = organizationWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereTwitter").innerText = organizationWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereLinkedIn").innerText = organizationWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereEmail").innerText = organizationWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereReddit").innerText = organizationWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereTumblr").innerText = organizationWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereTelegram").innerText = organizationWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereWhatsApp").innerText = organizationWordsHashtagNoCommas;

}
function generateHashtagsForHost () {

	// make 'hashtagsContainer' visible
	document.getElementById("hashtagsContainer").style.display = 'block';

	// set the words to all lowercase
	let hostWordsLower = localStorage.getItem('hostWords').toLowerCase();

	// add a '#' to the beginning of each word
	let hostWordsHashtag = hostWordsLower.replace(/\b(\w)/g, '#$1');

	// replace all commas in the string with a space
	let hostWordsHashtagNoCommas = hostWordsHashtag.replace(/,/g, ' ');

	// set the string into the hashtag output
	document.getElementById("hashtagsHereForHost").innerText = hostWordsHashtagNoCommas;

	// for each word in the string, add the class '.chip' to it
	let hostWordsHashtagNoCommasItem = hostWordsHashtagNoCommas.split(" ");
	console.log(hostWordsHashtagNoCommasItem);

	// set the hashtags in the social shares section preview
//	document.getElementById("hashtagsHereFacebook").innerText = hostWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereTwitter").innerText = hostWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereLinkedIn").innerText = hostWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereEmail").innerText = hostWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereReddit").innerText = hostWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereTumblr").innerText = hostWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereTelegram").innerText = hostWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereWhatsApp").innerText = hostWordsHashtagNoCommas;

}
function generateHashtagsForDescription () {

	// make 'hashtagsContainer' visible
	document.getElementById("hashtagsContainer").style.display = 'block';

	// set the words to all lowercase
	let descriptionWordsLower = localStorage.getItem('descriptionWords').toLowerCase();

	// add a '#' to the beginning of each word
	let descriptionWordsHashtag = descriptionWordsLower.replace(/\b(\w)/g, '#$1');

	// replace all commas in the string with a space
	let descriptionWordsHashtagNoCommas = descriptionWordsHashtag.replace(/,/g, ' ');

	// set the string into the hashtag output
	document.getElementById("hashtagsHereForDescription").innerText = descriptionWordsHashtagNoCommas;

	// for each word in the string, add the class '.chip' to it
	let descriptionWordsHashtagNoCommasItem = descriptionWordsHashtagNoCommas.split(" ");
	console.log(descriptionWordsHashtagNoCommasItem);

	// set the hashtags in the social shares section preview
//	document.getElementById("hashtagsHereFacebook").innerText = titleWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereTwitter").innerText = titleWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereLinkedIn").innerText = titleWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereEmail").innerText = titleWordsHashtagNoCommas;
//  document.getElementById("hashtagsHereReddit").innerText = titleWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereTumblr").innerText = titleWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereTelegram").innerText = titleWordsHashtagNoCommas;
//	document.getElementById("hashtagsHereWhatsApp").innerText = titleWordsHashtagNoCommas;

}





// Copy to clipboard
// hasTitle
function copyToClipboardHasTitle1() {
	let copyText = document.getElementById("copyToClipboardHasTitle1").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasTitle2() {
	let copyText = document.getElementById("copyToClipboardHasTitle2").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
// hasTitleDate
function copyToClipboardHasTitleDate1() {
	let copyText = document.getElementById("copyToClipboardHasTitleDate1").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasTitleDate2() {
	let copyText = document.getElementById("copyToClipboardHasTitleDate2").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}


 function copyToClipboardHashtags () {
	 let copyText = document.getElementById("hashtagsHere").innerText;
 	navigator.clipboard.writeText(copyText).then(() => {
 		alert("Copied:\n" + copyText);
 	});
 }



// Add links as input fields from brand data
// Location
function onmouseoverLinkLocation () {
	document.getElementById("linkLocation").style.scale = 1.1;
	document.getElementById("inputEventLocation").placeholder = document.getElementById("officeAddressStreet1").value + " " + document.getElementById("officeAddressStreet2").value + " " + document.getElementById("officeAddressCity").value + " " + document.getElementById("officeAddressState").value + " " + document.getElementById("officeAddressZip").value;
}
function onmouseleaveLinkLocation () {
	document.getElementById("linkLocation").style.scale = 1;
	document.getElementById("inputEventLocation").placeholder = document.getElementById("inputEventLocation").value;
}
function onclickLinkLocation () {
	document.getElementById("linkLocation").style.scale = 1;
	document.getElementById("inputEventLocation").value = document.getElementById("officeAddressStreet1").value + " " + document.getElementById("officeAddressStreet2").value + " " + document.getElementById("officeAddressCity").value + " " + document.getElementById("officeAddressState").value + " " + document.getElementById("officeAddressZip").value;
	eventLocationUpdate();
}
// Host
function onmouseoverLinkHost () {
	document.getElementById("linkHost").style.scale = 1.1;
	document.getElementById("inputEventHost").placeholder = document.getElementById("founderName").value;
}
function onmouseleaveLinkHost () {
	document.getElementById("linkHost").style.scale = 1;
	document.getElementById("inputEventHost").placeholder = document.getElementById("inputEventHost").value;
}
function onclickLinkHost () {
	document.getElementById("linkHost").style.scale = 1;
	document.getElementById("inputEventHost").value = document.getElementById("founderName").value;
	eventHostUpdate();
}
//Link
function onmouseoverLinkLink () {
	document.getElementById("linkLink").style.scale = 1.1;
	document.getElementById("inputEventLink").placeholder = document.getElementById("primaryContactWebsite").value;
}
function onmouseleaveLinkLink () {
	document.getElementById("linkLink").style.scale = 1;
	document.getElementById("inputEventLink").placeholder = document.getElementById("inputEventLink").value;
}
function onclickLinkLink () {
	document.getElementById("linkLink").style.scale = 1;
	document.getElementById("inputEventLink").value = document.getElementById("primaryContactWebsite").value;
	eventLinkUpdate();
}
// Primary Color
function onmouseoverLinkPrimarycolor () {
	document.getElementById("linkPrimarycolor").style.scale = 1.1;
	document.getElementById("inputEventPrimaryColor").placeholder = document.getElementById("primaryColor").value;
}
function onmouseleaveLinkPrimarycolor () {
	document.getElementById("linkPrimarycolor").style.scale = 1;
	document.getElementById("inputEventPrimaryColor").placeholder = document.getElementById("inputEventPrimaryColor").value;
}
function onclickLinkPrimarycolor () {
	document.getElementById("linkPrimarycolor").style.scale = 1;
	document.getElementById("inputEventPrimaryColor").value = document.getElementById("primaryColor").value;
	eventPrimarycolorUpdate();
}
// Logo
function onmouseoverLinkLogo () {
	document.getElementById("linkLogo").style.scale = 1.1;
	document.getElementById("inputEventLogo").placeholder = document.getElementById("squareLogo").value;
}
function onmouseleaveLinkLogo () {
	document.getElementById("linkLogo").style.scale = 1;
	document.getElementById("inputEventLogo").placeholder = document.getElementById("inputEventLogo").value;
}
function onclickLinkLogo () {
	console.log("onclickLinkLogo clicked");
	document.getElementById("linkLogo").style.scale = 1;
	document.getElementById("inputEventLogo").value = localStorage.getItem("squareLogo");
	console.log(document.getElementById("inputEventLogo").value);
	eventLogoUpdate();
}


