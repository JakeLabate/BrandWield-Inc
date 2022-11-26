
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

// Variable input changes
function eventTitleUpdate () {

	// Set the active tab to the Title tab
	openCity(event, 'TitleTab');
	// Remove the added 'active' attribute that is added as a result of the above function... it causes the tab & field to be highlighted
	document.getElementById("inputEventTitle").classList.remove("active");

	// Get the value of the input
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

	// Set the active tab to the Date tab
	openCity(event, 'DateTab');
	// Remove the added 'active' attribute that is added as a result of the above function... it causes the tab & field to be highlighted
	document.getElementById("inputEventDate").classList.remove("active");

	let outputEventDate = document.getElementById("inputEventDate");
	if (outputEventDate.value != null && outputEventDate.value.length > 0) {
		// find all elements with the class name 'date' and update their innerHTML to the value of the input
		let dateElements = document.getElementsByClassName("date");
		for (let i = 0; i < dateElements.length; i++) {
			dateElements[i].innerHTML = outputEventDate.value;
		}
		// set the display to inline for the element with the id of 'hasDate'
		document.getElementById("hasDate").style.display = "inline";
		// for all elements with the class name 'date', everytime the value changes, change the background color to lightpink
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

	// Set the active tab to the Time tab
	openCity(event, 'TimeTab');
	// Remove the added 'active' attribute that is added as a result of the above function... it causes the tab & field to be highlighted
	document.getElementById("inputEventTime").classList.remove("active");

	let outputEventTime = document.getElementById("inputEventTime");
	if (outputEventTime.value != null && outputEventTime.value.length > 0) {
		// find all elements with the class name 'time' and update their innerHTML to the value of the input
		let timeElements = document.getElementsByClassName("time");
		for (let i = 0; i < timeElements.length; i++) {
			timeElements[i].innerHTML = outputEventTime.value;
		}
		// set the display to inline for the element with the id of 'hasTime'
		document.getElementById("hasTime").style.display = "inline";

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

	// Set the active tab to the Location tab
	openCity(event, 'LocationTab');
	// Remove the added 'active' attribute that is added as a result of the above function... it causes the tab & field to be highlighted
	document.getElementById("inputEventLocation").classList.remove("active");

	let outputEventLocation = document.getElementById("inputEventLocation");
	if (outputEventLocation.value != null && outputEventLocation.value.length > 0) {
		// find all elements with the class name 'location' and update their innerHTML to the value of the input
		let locationElements = document.getElementsByClassName("location");
		for (let i = 0; i < locationElements.length; i++) {
			locationElements[i].innerHTML = outputEventLocation.value;
		}
		// set the display to inline for the element with the id of 'hasLocation'
		document.getElementById("hasLocation").style.display = "inline";
		// for all elements with the class name 'location', everything the value changes, change the background color to #DFDFDF
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

	// Set the active tab to the Organization tab
	openCity(event, 'OrganizationTab');
	// Remove the added 'active' attribute that is added as a result of the above function... it causes the tab & field to be highlighted
	document.getElementById("inputEventOrganization").classList.remove("active");

	let outputEventOrganization = document.getElementById("inputEventOrganization");
	if (outputEventOrganization.value != null && outputEventOrganization.value.length > 0) {
		// find all elements with the class name 'organization' and update their innerHTML to the value of the input
		let organizationElements = document.getElementsByClassName("organization");
		for (let i = 0; i < organizationElements.length; i++) {
			organizationElements[i].innerHTML = outputEventOrganization.value;
		}
		// set the display to inline for the element with the id of 'hasDate'
		document.getElementById("hasOrganization").style.display = "inline";

		// for all elements with the class name 'organization', everything the value changes, change the background color to lightgreen
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

	// Set the active tab to the Host tab
	openCity(event, 'HostTab');
	// Remove the added 'active' attribute that is added as a result of the above function... it causes the tab & field to be highlighted
	document.getElementById("inputEventHost").classList.remove("active");

	let outputEventHost = document.getElementById("inputEventHost");
	if (outputEventHost.value != null && outputEventHost.value.length > 0) {
		// find all elements with the class name 'host' and update their innerHTML to the value of the input
		let hostElements = document.getElementsByClassName("host");
		for (let i = 0; i < hostElements.length; i++) {
			hostElements[i].innerHTML = outputEventHost.value;
		}
		// set the display to inline for the element with the id of 'hasHost'
		document.getElementById("hasHost").style.display = "inline";

		// for all elements with the class name 'host', everything the value changes, change the background color to lightblue
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

	// remove the placeholder text
	document.getElementById("consideredDescriptionOutput").style.display = "none";

	// Remove the added 'active' attribute that is added as input... it causes the field to be highlighted
	document.getElementById("inputEventDescription").classList.remove("active");

	let outputEventDescription = document.getElementById("inputEventDescription");
	if (outputEventDescription.value != null && outputEventDescription.value.length > 0) {
		// find all elements with the class name 'description' and update their innerHTML to the value of the input
		let descriptionElements = document.getElementsByClassName("description");
		for (let i = 0; i < descriptionElements.length; i++) {
			descriptionElements[i].innerHTML = outputEventDescription.value;
		}
		// set the display to inline for the element with the id of 'hasDescription'
		document.getElementById("hasDescription").style.display = "inline";

		// for all elements with the class name 'host', everything the value changes, change the background color to #D5DCFF
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
		placeDescriptionAsSelected();
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
		// set the display to inline for the element with the id of 'hasLink'
		document.getElementById("hasLink").style.display = "inline";

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

// User clears the field
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
		document.getElementById("inputEventOrganization").value = null;
		eventOrganizationUpdate();
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

	// remove all non-alphanumeric characters
	let titleWordsLowerNoSpecial = titleWordsLower.replace(/[^a-z0-9]/gi, ' ');

	// add a '#' to the beginning of each word
	let titleWordsHashtag = titleWordsLowerNoSpecial.replace(/\b(\w)/g, '#$1');

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

	// add a '#' to the beginning of each word
	let locationWordsHashtag = locationWordsLowerNoSpecial.replace(/\b(\w)/g, '#$1');

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

	// replace all commas in the string with a space
	let organizationWordsHashtagNoCommas = organizationWordsHashtag.replace(/,/g, ' ');

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

	// add a '#' to the beginning of each word
	let hostWordsHashtag = hostWordsLowerNoSpecial.replace(/\b(\w)/g, '#$1');

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

	// add a '#' to the beginning of each word
	let descriptionWordsHashtag = descriptionWordsLowerNoSpecial.replace(/\b(\w)/g, '#$1');

	// replace all commas in the string with a space
	let descriptionWordsHashtagNoCommas = descriptionWordsHashtag.replace(/,/g, ' ');

	// remove duplicate hashtags
	let noDuplicates = descriptionWordsHashtagNoCommas.split(" ");
	uniq = [...new Set(noDuplicates)];

	// place the hashtags in the hashtagsContainer
	document.getElementById("hashtagsHereForDescription").innerText = uniq.join(" ");

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
function copyToClipboardHasTitle3() {
	let copyText = document.getElementById("copyToClipboardHasTitle3").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasTitle4() {
	let copyText = document.getElementById("copyToClipboardHasTitle4").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasTitle5() {
	let copyText = document.getElementById("copyToClipboardHasTitle5").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
// hasDate
function copyToClipboardHasDate1() {
	let copyText = document.getElementById("copyToClipboardHasDate1").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasDate2() {
	let copyText = document.getElementById("copyToClipboardHasDate2").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasDate3() {
	let copyText = document.getElementById("copyToClipboardHasDate3").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasDate4() {
	let copyText = document.getElementById("copyToClipboardHasDate4").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasDate5() {
	let copyText = document.getElementById("copyToClipboardHasDate5").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
// hasTime
function copyToClipboardHasTime1() {
	let copyText = document.getElementById("copyToClipboardHasTime1").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasTime2() {
	let copyText = document.getElementById("copyToClipboardHasTime2").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasTime3() {
	let copyText = document.getElementById("copyToClipboardHasTime3").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasTime4() {
	let copyText = document.getElementById("copyToClipboardHasTime4").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasTime5() {
	let copyText = document.getElementById("copyToClipboardHasTime5").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
// hasLocation
function copyToClipboardHasLocation1() {
	let copyText = document.getElementById("copyToClipboardHasLocation1").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasLocation2() {
	let copyText = document.getElementById("copyToClipboardHasLocation2").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasLocation3() {
	let copyText = document.getElementById("copyToClipboardHasLocation3").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasLocation4() {
	let copyText = document.getElementById("copyToClipboardHasLocation4").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasLocation5() {
	let copyText = document.getElementById("copyToClipboardHasLocation5").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
// hasOrganization
function copyToClipboardHasOrganization1() {
	let copyText = document.getElementById("copyToClipboardHasOrganization1").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasOrganization2() {
	let copyText = document.getElementById("copyToClipboardHasOrganization2").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasOrganization3() {
	let copyText = document.getElementById("copyToClipboardHasOrganization3").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasOrganization4() {
	let copyText = document.getElementById("copyToClipboardHasOrganization4").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasOrganization5() {
	let copyText = document.getElementById("copyToClipboardHasOrganization5").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
// hasHost
function copyToClipboardHasHost1() {
	let copyText = document.getElementById("copyToClipboardHasHost1").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasHost2() {
	let copyText = document.getElementById("copyToClipboardHasHost2").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasHost3() {
	let copyText = document.getElementById("copyToClipboardHasHost3").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasHost4() {
	let copyText = document.getElementById("copyToClipboardHasHost4").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
function copyToClipboardHasHost5() {
	let copyText = document.getElementById("copyToClipboardHasHost5").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}
// hasDescription
function copyToClipboardHasDescription1() {
	let copyText = document.getElementById("copyToClipboardHasHost1").innerText;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied:\n" + copyText);
	});
}

// Hashtags
function copyToClipboardHashtags () {
	let copyText = document.getElementById("hashtagsHere").innerText;
 	navigator.clipboard.writeText(copyText).then(() => {
 		alert("Copied:\n" + copyText);
 	});
	placeHashtagsAsSelected();
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
function screenshotAllImages() {
	screenshotHorizontalFinal();
	screenshotVerticalFinal();
	screenshotSquareFinal();
}
function screenshotHorizontalFinal() {
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
		// set imageData to localStorage
		localStorage.setItem('latestScreenshotHorizontal', imageData);
		window.location = imageData;
	}, 40000);
}
function screenshotVerticalFinal() {
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
		// set imageData to localStorage
		localStorage.setItem('latestScreenshotVertical', imageData);
		window.location = imageData;
	}, 1000);
}
function screenshotSquareFinal() {
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
		// set imageData to localStorage
		localStorage.setItem('latestScreenshotSquare', imageData);
		window.location = imageData;
	}, 1000);
}


// SAVE CONTENT FILES
function saveContentFiles () {

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





