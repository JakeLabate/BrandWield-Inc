// DRAGGABLE Brand Variables

// onmouseover title
function onmouseoverDraggableContactInfoSection () {

	// close other sections
	onmouseleaveDraggableFoundingInfoSection();
	onmouseleaveDraggableBusinessInfoSection();

	// open this section
	document.getElementById('draggableContactInfoSection').style.display = 'block'

	// style header of this section
	document.getElementById('draggableContactInfoSectionHeader').style.color = '#7800a8';

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
	document.getElementById('draggableFoundingInfoSectionHeader').style.color = '#7800a8';

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
	document.getElementById('draggableBusinessInfoSectionHeader').style.color = '#7800a8';

	// rest color of other headers
	document.getElementById('draggableContactInfoSectionHeader').style.color = 'black';
	document.getElementById('draggableFoundingInfoSectionHeader').style.color = 'black';
}

// onmouseleave box
function onmouseleaveDraggableContactInfoSection () {
	document.getElementById('draggableContactInfoSection').style.display = 'none'
	document.getElementById('draggableContactInfoSectionHeader').style.color = 'black';
}
function onmouseleaveDraggableFoundingInfoSection () {
	document.getElementById('draggableFoundingInfoSection').style.display = 'none'
	document.getElementById('draggableFoundingInfoSectionHeader').style.color = 'black';
}
function onmouseleaveDraggableBusinessInfoSection () {
	document.getElementById('draggableBusinessInfoSection').style.display = 'none'
	document.getElementById('draggableBusinessInfoSectionHeader').style.color = 'black';
}