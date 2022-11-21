// Update as user types
function eventTitleUpdate () {
	let outputEventTitle = document.getElementById("inputEventTitle");
	if (outputEventTitle.value != null) {
		// find all elements with the class name 'title' and update their innerHTML to the value of the input
		let titleElements = document.getElementsByClassName("title");
		for (let i = 0; i < titleElements.length; i++) {
			titleElements[i].innerHTML = outputEventTitle.value;
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
			}
		}
		// separate the title into an array of words (seperated by spaces)
		let text = document.getElementById("inputEventTitle").value;
		let titleWords = text.split(" ");
		localStorage.setItem('titleWords', titleWords);
		generateHashtagsForTitle();
	}
	hasTitle();
	hasTitleDate();
	hasTitleDateTime();
	hasTitleDateTimeLocation();
	hasTitleDateTimeLocationOrganization();
	hasTitleDateTimeLocationOrganizationHost();
	hasTitleDateTimeLocationOrganizationHostDescription();
	hasTitleDateTimeLocationOrganizationHostDescriptionLink();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolor();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolorLogo();
}
function eventDateUpdate () {
	let outputEventDate = document.getElementById("inputEventDate");
	if (outputEventDate.value != null ) {
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
				setTimeout(function() {
					dateElements[i].style.border = "none";
				}, 1000);
			}
		}
	}
	hasTitle();
	hasTitleDate();
	hasTitleDateTime();
	hasTitleDateTimeLocation();
	hasTitleDateTimeLocationOrganization();
	hasTitleDateTimeLocationOrganizationHost();
	hasTitleDateTimeLocationOrganizationHostDescription();
	hasTitleDateTimeLocationOrganizationHostDescriptionLink();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolor();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolorLogo();
}
function eventTimeUpdate () {
	let outputEventTime = document.getElementById("inputEventTime");
	if (outputEventTime.value != null) {
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
				setTimeout(function() {
					timeElements[i].style.border = "none";
				}, 1000);
			}
		}
	}
	hasTitle();
	hasTitleDate();
	hasTitleDateTime();
	hasTitleDateTimeLocation();
	hasTitleDateTimeLocationOrganization();
	hasTitleDateTimeLocationOrganizationHost();
	hasTitleDateTimeLocationOrganizationHostDescription();
	hasTitleDateTimeLocationOrganizationHostDescriptionLink();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolor();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolorLogo();
}
function eventLocationUpdate () {
	let outputEventLocation = document.getElementById("inputEventLocation");
	if (outputEventLocation.value != null) {
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
				setTimeout(function() {
					locationElements[i].style.border = "none";
				}, 1000);
			}
		}
		document.getElementById("hasTitleDateTimeLocation").style.display = "inline";
		// separate the location into an array of words (seperated by spaces)
		let text = document.getElementById("inputEventLocation").value;
		let locationWords = text.split(" ");
		localStorage.setItem('locationWords', locationWords);
		generateHashtags();
	}
	hasTitle();
	hasTitleDate();
	hasTitleDateTime();
	hasTitleDateTimeLocation();
	hasTitleDateTimeLocationOrganization();
	hasTitleDateTimeLocationOrganizationHost();
	hasTitleDateTimeLocationOrganizationHostDescription();
	hasTitleDateTimeLocationOrganizationHostDescriptionLink();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolor();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolorLogo();
}
function eventOrganizationUpdate () {
	let outputEventOrganization = document.getElementById("inputEventOrganization");
	if (outputEventOrganization.value != null) {
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
				setTimeout(function() {
					organizationElements[i].style.border = "none";
				}, 1000);
			}
		}
		document.getElementById("hasTitleDateTimeLocationOrganization").style.display = "inline";
		// separate the organization into an array of words (seperated by spaces)
		let text = document.getElementById("inputEventOrganization").value;
		let organizationWords = text.split(" ");
		localStorage.setItem('organizationWords', organizationWords);
		generateHashtags();
	}
	hasTitle();
	hasTitleDate();
	hasTitleDateTime();
	hasTitleDateTimeLocation();
	hasTitleDateTimeLocationOrganization();
	hasTitleDateTimeLocationOrganizationHost();
	hasTitleDateTimeLocationOrganizationHostDescription();
	hasTitleDateTimeLocationOrganizationHostDescriptionLink();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolor();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolorLogo();
}
function eventHostUpdate () {
	let outputEventHost = document.getElementById("inputEventHost");
	if (outputEventHost.value != null) {
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
		document.getElementById("hasTitleDateTimeLocationOrganizationHost").style.display = "inline";
		// if the hostElements[i] are inside the #finalImageHorizontal, #finalImageVertical, or #finalImageSquare, do not leave the changed the border color
		for (let i = 0; i < hostElements.length; i++) {
			if (hostElements[i].closest("#finalImageHorizontal") || hostElements[i].closest("#finalImageVertical") || hostElements[i].closest("#finalImageSquare")) {
			}
		}
		// separate the host into an array of words (seperated by spaces)
		let text = document.getElementById("inputEventHost").value;
		let hostWords = text.split(" ");
		localStorage.setItem('hostWords', hostWords);
		generateHashtags();
	}
	hasTitle();
	hasTitleDate();
	hasTitleDateTime();
	hasTitleDateTimeLocation();
	hasTitleDateTimeLocationOrganization();
	hasTitleDateTimeLocationOrganizationHost();
	hasTitleDateTimeLocationOrganizationHostDescription();
	hasTitleDateTimeLocationOrganizationHostDescriptionLink();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolor();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolorLogo();
}
function eventDescriptionUpdate () {
	let outputEventDescription = document.getElementById("inputEventDescription");
	if (outputEventDescription.value != null) {
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
			}
		}
		document.getElementById("hasTitleDateTimeLocationOrganizationHostDescription").style.display = "inline";
		// separate the description into an array of words (seperated by spaces)
		let text = document.getElementById("inputEventDescription").value;
		let descriptionWords = text.split(" ");
		localStorage.setItem('descriptionWords', descriptionWords);
		generateHashtags();
	}
	hasTitle();
	hasTitleDate();
	hasTitleDateTime();
	hasTitleDateTimeLocation();
	hasTitleDateTimeLocationOrganization();
	hasTitleDateTimeLocationOrganizationHost();
	hasTitleDateTimeLocationOrganizationHostDescription();
	hasTitleDateTimeLocationOrganizationHostDescriptionLink();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolor();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolorLogo();
}
function eventLinkUpdate () {
	let outputEventLink = document.getElementById("inputEventLink");
	let titleElements = document.getElementById("inputEventTitle");
	if (outputEventLink.value != null) {
		// find all elements with the class name 'link' and update their innerHTML to the value of the input
		let linkElements = document.getElementsByClassName("link");
		for (let i = 0; i < linkElements.length; i++) {
			linkElements[i].href = outputEventLink.value;
		}
		for (let i = 0; i < titleElements.length; i++) {
			titleElements[i].color = '#ffffff'
		}
	}
	hasTitle();
	hasTitleDate();
	hasTitleDateTime();
	hasTitleDateTimeLocation();
	hasTitleDateTimeLocationOrganization();
	hasTitleDateTimeLocationOrganizationHost();
	hasTitleDateTimeLocationOrganizationHostDescription();
	hasTitleDateTimeLocationOrganizationHostDescriptionLink();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolor();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolorLogo();
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
	hasTitle();
	hasTitleDate();
	hasTitleDateTime();
	hasTitleDateTimeLocation();
	hasTitleDateTimeLocationOrganization();
	hasTitleDateTimeLocationOrganizationHost();
	hasTitleDateTimeLocationOrganizationHostDescription();
	hasTitleDateTimeLocationOrganizationHostDescriptionLink();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolor();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolorLogo();
}
function eventLogoUpdate () {
	let outputEventLogo = document.getElementById("inputEventLogo");
	if (outputEventLogo.value != null) {

		localStorage.setItem('squareLogo', outputEventLogo.value);
		// find all elements with the class name 'primarycolor' and update their backgroundColor to the value of the input
		let logoElements = document.getElementsByClassName("horizontalImageLogoHere");
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
	}
	hasTitle();
	hasTitleDate();
	hasTitleDateTime();
	hasTitleDateTimeLocation();
	hasTitleDateTimeLocationOrganization();
	hasTitleDateTimeLocationOrganizationHost();
	hasTitleDateTimeLocationOrganizationHostDescription();
	hasTitleDateTimeLocationOrganizationHostDescriptionLink();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolor();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolorLogo();
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
	document.getElementById("hashtagsHere").innerText = titleWordsHashtagNoCommas;

	// for each word in the string, add the class '.chip' to it
	let titleWordsHashtagNoCommasItem = titleWordsHashtagNoCommas.split(" ");
	console.log(titleWordsHashtagNoCommasItem);

}

// Checks if all required fields are met
function hasTitle () {
	if (document.getElementById("inputEventTitle").value.length > 0
	) {
		document.getElementById("hasTitle").style.display = 'block';
	} else {
		document.getElementById("hasTitle").style.display = 'none';
	}
}
function hasTitleDate () {
	if (document.getElementById("inputEventTitle").value.length > 0 &&
		document.getElementById("inputEventDate").value.length > 0
	) {
		document.getElementById("hasTitleDate").style.display = 'block';
		document.getElementById("hasTitle").style.display = 'none';
	} else {
		document.getElementById("hasTitleDate").style.display = 'none';
	}
}
function hasTitleDateTime () {
	if (document.getElementById("inputEventTitle").value.length > 0 &&
		document.getElementById("inputEventDate").value.length > 0 &&
		document.getElementById("inputEventTime").value.length > 0
	) {
		document.getElementById("hasTitleDateTime").style.display = 'block';
		document.getElementById("hasTitleDate").style.display = 'none';
		document.getElementById("hasTitle").style.display = 'none';
	} else {
		document.getElementById("hasTitleDateTime").style.display = 'none';
	}
}
function hasTitleDateTimeLocation () {
	if (document.getElementById("inputEventTitle").value.length > 0 &&
		document.getElementById("inputEventDate").value.length > 0 &&
		document.getElementById("inputEventTime").value.length > 0 &&
		document.getElementById("inputEventLocation").value.length > 0
	) {
		document.getElementById("hasTitleDateTimeLocation").style.display = 'block';
		document.getElementById("hasTitleDateTime").style.display = 'none';
		document.getElementById("hasTitleDate").style.display = 'none';
		document.getElementById("hasTitle").style.display = 'none';
	} else {
		document.getElementById("hasTitleDateTimeLocation").style.display = 'none';
	}
}
function hasTitleDateTimeLocationOrganization () {
	if (
		document.getElementById("inputEventTitle").value.length > 0 &&
		document.getElementById("inputEventDate").value.length > 0 &&
		document.getElementById("inputEventTime").value.length > 0 &&
		document.getElementById("inputEventLocation").value.length > 0 &&
		document.getElementById("inputEventOrganization").value.length > 0
	) {
		document.getElementById("hasTitleDateTimeLocationOrganization").style.display = 'block';
		document.getElementById("hasTitleDateTimeLocation").style.display = 'none';
		document.getElementById("hasTitleDateTime").style.display = 'none';
		document.getElementById("hasTitleDate").style.display = 'none';
		document.getElementById("hasTitle").style.display = 'none';
	} else {
		document.getElementById("hasTitleDateTimeLocationOrganization").style.display = 'none';
	}
}
function hasTitleDateTimeLocationOrganizationHost () {
	if (
		document.getElementById("inputEventTitle").value.length > 0 &&
		document.getElementById("inputEventDate").value.length > 0 &&
		document.getElementById("inputEventTime").value.length > 0 &&
		document.getElementById("inputEventLocation").value.length > 0 &&
		document.getElementById("inputEventOrganization").value.length > 0 &&
		document.getElementById("inputEventHost").value.length > 0
	) {
		document.getElementById("hasTitleDateTimeLocationOrganizationHost").style.display = 'block';
		document.getElementById("hasTitleDateTimeLocationOrganization").style.display = 'none';
		document.getElementById("hasTitleDateTimeLocation").style.display = 'none';
		document.getElementById("hasTitleDateTime").style.display = 'none';
		document.getElementById("hasTitleDate").style.display = 'none';
		document.getElementById("hasTitle").style.display = 'none';
	} else {
		document.getElementById("hasTitleDateTimeLocationOrganizationHost").style.display = 'none';
	}
}
function hasTitleDateTimeLocationOrganizationHostDescription () {
	if (
		document.getElementById("inputEventTitle").value.length > 0 &&
		document.getElementById("inputEventDate").value.length > 0 &&
		document.getElementById("inputEventTime").value.length > 0 &&
		document.getElementById("inputEventLocation").value.length > 0 &&
		document.getElementById("inputEventOrganization").value.length > 0 &&
		document.getElementById("inputEventHost").value.length > 0 &&
		document.getElementById("inputEventDescription").value.length > 0
	) {
		document.getElementById("hasTitleDateTimeLocationOrganizationHostDescription").style.display = 'block';
		document.getElementById("hasTitleDateTimeLocationOrganizationHost").style.display = 'none';
		document.getElementById("hasTitleDateTimeLocationOrganization").style.display = 'none';
		document.getElementById("hasTitleDateTimeLocation").style.display = 'none';
		document.getElementById("hasTitleDateTime").style.display = 'none';
		document.getElementById("hasTitleDate").style.display = 'none';
		document.getElementById("hasTitle").style.display = 'none';

	} else {
		document.getElementById("hasTitleDateTimeLocationOrganizationHostDescription").style.display = 'none';
	}
}
function hasTitleDateTimeLocationOrganizationHostDescriptionLink () {
	if (
		document.getElementById("inputEventTitle").value.length > 0 &&
		document.getElementById("inputEventDate").value.length > 0 &&
		document.getElementById("inputEventTime").value.length > 0 &&
		document.getElementById("inputEventLocation").value.length > 0 &&
		document.getElementById("inputEventOrganization").value.length > 0 &&
		document.getElementById("inputEventHost").value.length > 0 &&
		document.getElementById("inputEventDescription").value.length > 0 &&
		document.getElementById("inputEventLink").value.length > 0
	) {
		document.getElementById("hasTitleDateTimeLocationOrganizationHostDescriptionLink").style.display = 'block';
		document.getElementById("hasTitleDateTimeLocationOrganizationHostDescription").style.display = 'none';
		document.getElementById("hasTitleDateTimeLocationOrganizationHost").style.display = 'none';
		document.getElementById("hasTitleDateTimeLocationOrganization").style.display = 'none';
		document.getElementById("hasTitleDateTimeLocation").style.display = 'none';
		document.getElementById("hasTitleDateTime").style.display = 'none';
		document.getElementById("hasTitleDate").style.display = 'none';
		document.getElementById("hasTitle").style.display = 'none';
	} else {
		document.getElementById("hasTitleDateTimeLocationOrganizationHostDescriptionLink").style.display = 'none';
	}
}
function hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolor () {
	if (
		document.getElementById("inputEventTitle").value.length > 0 &&
		document.getElementById("inputEventDate").value.length > 0 &&
		document.getElementById("inputEventTime").value.length > 0 &&
		document.getElementById("inputEventLocation").value.length > 0 &&
		document.getElementById("inputEventOrganization").value.length > 0 &&
		document.getElementById("inputEventHost").value.length > 0 &&
		document.getElementById("inputEventDescription").value.length > 0 &&
		document.getElementById("inputEventLink").value.length > 0 &&
		document.getElementById("inputEventPrimaryColor").value.length > 0 &&
		document.getElementById("inputEventPrimaryColor").value != "#ffffff"
	) {
		document.getElementById("hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolor").style.display = 'block';
		document.getElementById("hasTitleDateTimeLocationOrganizationHostDescriptionLink").style.display = 'none';
		document.getElementById("hasTitleDateTimeLocationOrganizationHostDescription").style.display = 'none';
		document.getElementById("hasTitleDateTimeLocationOrganizationHost").style.display = 'none';
		document.getElementById("hasTitleDateTimeLocationOrganization").style.display = 'none';
		document.getElementById("hasTitleDateTimeLocation").style.display = 'none';
		document.getElementById("hasTitleDateTime").style.display = 'none';
		document.getElementById("hasTitleDate").style.display = 'none';
		document.getElementById("hasTitle").style.display = 'none';
	} else {
		document.getElementById("hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolor").style.display = 'none';
	}
}
function hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolorLogo () {
	if (
		document.getElementById("inputEventTitle").value.length > 0 &&
		document.getElementById("inputEventDate").value.length > 0 &&
		document.getElementById("inputEventTime").value.length > 0 &&
		document.getElementById("inputEventLocation").value.length > 0 &&
		document.getElementById("inputEventOrganization").value.length > 0 &&
		document.getElementById("inputEventHost").value.length > 0 &&
		document.getElementById("inputEventDescription").value.length > 0 &&
		document.getElementById("inputEventLink").value.length > 0 &&
		document.getElementById("inputEventPrimaryColor").value.length > 0 &&
		document.getElementById("inputEventLogo").value != null
	) {
		document.getElementById("hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolorLogo").style.display = 'block';
		document.getElementById("hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolor").style.display = 'none';
		document.getElementById("hasTitleDateTimeLocationOrganizationHostDescriptionLink").style.display = 'none';
		document.getElementById("hasTitleDateTimeLocationOrganizationHostDescription").style.display = 'none';
		document.getElementById("hasTitleDateTimeLocationOrganizationHost").style.display = 'none';
		document.getElementById("hasTitleDateTimeLocationOrganization").style.display = 'none';
		document.getElementById("hasTitleDateTimeLocation").style.display = 'none';
		document.getElementById("hasTitleDateTime").style.display = 'none';
		document.getElementById("hasTitleDate").style.display = 'none';
		document.getElementById("hasTitle").style.display = 'none';
	} else {
		document.getElementById("hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolorLogo").style.display = 'none';
	}
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
	hasTitle();
	hasTitleDate();
	hasTitleDateTime();
	hasTitleDateTimeLocation();
	hasTitleDateTimeLocationOrganization();
	hasTitleDateTimeLocationOrganizationHost();
	hasTitleDateTimeLocationOrganizationHostDescription();
	hasTitleDateTimeLocationOrganizationHostDescriptionLink();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolor();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolorLogo();
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
	hasTitle();
	hasTitleDate();
	hasTitleDateTime();
	hasTitleDateTimeLocation();
	hasTitleDateTimeLocationOrganization();
	hasTitleDateTimeLocationOrganizationHost();
	hasTitleDateTimeLocationOrganizationHostDescription();
	hasTitleDateTimeLocationOrganizationHostDescriptionLink();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolor();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolorLogo();
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
	hasTitle();
	hasTitleDate();
	hasTitleDateTime();
	hasTitleDateTimeLocation();
	hasTitleDateTimeLocationOrganization();
	hasTitleDateTimeLocationOrganizationHost();
	hasTitleDateTimeLocationOrganizationHostDescription();
	hasTitleDateTimeLocationOrganizationHostDescriptionLink();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolor();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolorLogo();
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
	hasTitleDate();
	hasTitleDateTime();
	hasTitleDateTimeLocation();
	hasTitleDateTimeLocationOrganization();
	hasTitleDateTimeLocationOrganizationHost();
	hasTitleDateTimeLocationOrganizationHostDescription();
	hasTitleDateTimeLocationOrganizationHostDescriptionLink();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolor();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolorLogo();
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
	hasTitleDate();
	hasTitleDateTime();
	hasTitleDateTimeLocation();
	hasTitleDateTimeLocationOrganization();
	hasTitleDateTimeLocationOrganizationHost();
	hasTitleDateTimeLocationOrganizationHostDescription();
	hasTitleDateTimeLocationOrganizationHostDescriptionLink();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolor();
	hasTitleDateTimeLocationOrganizationHostDescriptionLinkPrimarycolorLogo();
}


