console.log('contextmenu.js loaded');

const newContentVar = document.querySelectorAll('.newContentVar');

newContentVar.forEach((newContentVar) => {

	newContentVar.addEventListener("contextmenu", (event) => {
		let contextMenu = document.getElementById('newContentVarContextMenu');
		event.preventDefault();
		contextMenu.style.display = "block";
		contextMenu.style.left = (event.pageX - 10)+"px";
		contextMenu.style.top = (event.pageY - 10)+"px";
	},false);

	newContentVar.addEventListener("click", (event) => {
		let contextMenu = document.getElementById('newContentVarContextMenu');
		contextMenu.style.display = "none";
		contextMenu.style.left = "";
		contextMenu.style.top = "";
	},false);

});