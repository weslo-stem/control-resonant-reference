var materialButtons = document.getElementsByClassName("material-color");
function materialClicked(e) {
	var parent = document.getElementById(e.target.id.replace("-material", "").split("-").slice(0, -1).join("-"));
	var title = document.getElementById(parent.id + "-selected");
	var tiedImage = document.getElementById(e.target.id.replace("-material", ""));
	var images = parent.querySelector('.cosmetic-images-container');
	var materials = parent.querySelector('.material-color-container');
	Array.from(images.children).forEach((img) => {
		if (img instanceof HTMLImageElement) {
			img.setAttribute("class", "cosmetic-unselected");
		}
	})
	tiedImage.setAttribute("class", "cosmetic-selected");

	Array.from(materials.children).forEach((mat) => {
		if (mat instanceof HTMLImageElement) {
			mat.setAttribute("class", "material-color");
		}
	})
	e.target.setAttribute("class", "material-color color-selected");

	title.innerHTML = e.target.getAttribute("themename");
}

if (materialButtons && materialButtons.length > 0) {
	Array.from(materialButtons).forEach((elem) => {
		elem.addEventListener("click", (e) => { materialClicked(e) });
	});
}