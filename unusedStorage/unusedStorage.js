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

// EVENT
// title
1
2
3
4
5
// date
1
2
3
4
5
// time
1
2
3
4
5
// location
1
2
3
4
5
// organization
1
2
3
4
5
// host
1
2
3
4
5
// description
1
2
3
4
5
// link
1
2
3
4
5
// primary color
1
2
3
4
5
// logo
1
2
3
4
5