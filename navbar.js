// DRAGGABLE Brand Variables
// icon interaction
function onmouseoverBrandWieldIcon () {
	document.getElementById('logoIcon').style.scale = '1.2';
	document.getElementById('brandDropdown').style.display = 'block';
}
function onclickBrandWieldIcon() {
	// if open & clicked, close
	if (document.getElementById('brandDropdown').style.display === 'block')
	{ document.getElementById('brandDropdown').style.display = 'none'; }
}

// onmouseover section title
function onmouseoverDraggableContactInfoSection () {

	// close other sections
	onmouseleaveDraggableFoundingInfoSection();
	onmouseleaveDraggableBusinessInfoSection();

	// open this section
	document.getElementById('draggableContactInfoSection').style.display = 'block'

	// style header of this section
	document.getElementById('draggableContactInfoSectionHeader').style.color = 'var(--primaryColor)';
	document.getElementById('draggableContactInfoSectionHeader').style.fontWeight = 'bold';

	// rest color of other headers
	document.getElementById('draggableFounderInfoSectionHeader').style.color = 'black';
	document.getElementById('draggableBusinessInfoSectionHeader').style.color = 'black';
}
function onmouseoverDraggableFoundingInfoSection () {

	// close other sections
	onmouseleaveDraggableContactInfoSection();
	onmouseleaveDraggableBusinessInfoSection();

	// open this section
	document.getElementById('draggableFoundingInfoSection').style.display = 'block'

	// style header of this section
	document.getElementById('draggableFoundingInfoSectionHeader').style.color = 'var(--primaryColor)';
	document.getElementById('draggableFoundingInfoSectionHeader').style.fontWeight = 'bold';

	// rest color of other headers
	document.getElementById('draggableContactInfoSectionHeader').style.color = 'black';
	document.getElementById('draggableBusinessInfoSectionHeader').style.color = 'black';
}
function onmouseoverDraggableBusinessInfoSection () {

	// close other sections
	onmouseleaveDraggableContactInfoSection();
	onmouseleaveDraggableFoundingInfoSection();

	// open this section
	document.getElementById('draggableBusinessInfoSection').style.display = 'block'

	// style header of this section
	document.getElementById('draggableBusinessInfoSectionHeader').style.color = 'var(--primaryColor)';
	document.getElementById('draggableBusinessInfoSectionHeader').style.fontWeight = 'bold';

	// rest color of other headers
	document.getElementById('draggableContactInfoSectionHeader').style.color = 'black';
	document.getElementById('draggableFoundingInfoSectionHeader').style.color = 'black';
}

// onmouseleave section box
function onmouseleaveDraggableContactInfoSection () {
	document.getElementById('draggableContactInfoSection').style.display = 'none'
	document.getElementById('draggableContactInfoSectionHeader').style.color = 'black';
	// (temporary) - remove white background on phone edit when brand dropdown closes
	document.getElementById('draggablePrimaryContactPhone').style.backgroundColor = '#e7e7e7';
}
function onmouseleaveDraggableFoundingInfoSection () {
	document.getElementById('draggableFoundingInfoSection').style.display = 'none'
	document.getElementById('draggableFoundingInfoSectionHeader').style.color = 'black';
}
function onmouseleaveDraggableBusinessInfoSection () {
	document.getElementById('draggableBusinessInfoSection').style.display = 'none'
	document.getElementById('draggableBusinessInfoSectionHeader').style.color = 'black';
}