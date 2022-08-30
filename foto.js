let images = [
	'img/IMG_2576 2.jpeg',
	'img/IMG_2578 2.jpeg',
	'img/IMG_2583 2.jpeg',
	'img/IMG_2585 2.jpeg',
	'img/IMG_2587 2.jpeg',
	'img/IMG_2920 2.jpeg',
	'img/IMG_2596 2.jpeg',
	'img/IMG_2599 2.jpeg',
	'img/IMG_2611 2.jpeg',
	'img/IMG_2619 2.jpeg',
	'img/IMG_2622 2.jpeg',
	'img/IMG_2672 2.jpeg',
	'img/IMG_2685 2.jpeg',
	'img/IMG_2691 2.jpeg',
	'img/IMG_2694 2.jpeg',
	'img/IMG_2703 2.jpeg',
	'img/IMG_2704 2.jpeg',
	'img/IMG_2719 2.jpeg',
	'img/IMG_2720 2.jpeg',
	'img/IMG_2731 2.jpeg',
	'img/IMG_2733 2.jpeg',
	'img/IMG_2737 2.jpeg',
]; // Bilder werden im Array "images" gespeichert
load();
function load() {
	let imagesAsText = localStorage.getItem('images');
	if (imagesAsText) {
		images = JSON.parse(imagesAsText); // wandelt den String wieder in ein Array um
	}
}
function render() {
	//Zeigt den kompletten Inhalt des Arrays "images" an.
	document.getElementById('content').innerHTML = '';
	for (let i = 0; i < images.length; i++) {
		content.innerHTML += `
        <div class="img-box">
        <img src="${images[i]}" onclick="openImg(${i})">
        </div>`;
	}
	document.getElementById('openedPictureContainer').classList.add('d-none');
}

function openImg(img) {
	document.getElementById('openedPictureContainer').innerHTML = '';
	document.getElementById('openedPictureContainer').innerHTML +=
		openImgInnerhtml(img);
	document.getElementById('header').classList.add('d-none');
	document.getElementById('content').classList.add('d-none');
	document.getElementById('openedPictureContainer').classList.remove('d-none');
}

// Erzeugt den HTML-Code um das Bild, und die Richtungspfeile darzustellen. Welches Bild gemeint ist, steht in der Variable "img".
function openImgInnerhtml(img) {
	return /*html*/ `
    <div class="closeIcon"><img src="img/close.png" onclick="closeImg()"></div>
    <div class="linie"></div>
    <div class="pictureArrow">
    <img class="icon" src="img/left-arrow.png"  onclick="previousImg(${img})">
    <img class="openedPicture" src="${images[img]}">
    <img class="icon" src="img/right-arrow.png" onclick="nextImg(${img})">
    </div>`;
}

function nextImg(img) {
	if (img < images.length - 1) {
		openImg(img + 1);
	} else {
		openImg(0);
	}
}

function previousImg(img) {
	if (img > 0) {
		openImg(img - 1);
	} else {
		openImg(images.length - 1);
	}
}

function closeImg() {
	document.getElementById('header').classList.remove('d-none');
	document.getElementById('content').classList.remove('d-none');
	render();
}
