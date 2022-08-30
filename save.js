function save() {
	let imagesAsText = JSON.stringify(images);
	localStorage.setItem('images', imagesAsText);
}
