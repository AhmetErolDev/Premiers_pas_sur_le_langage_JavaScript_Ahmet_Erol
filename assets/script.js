const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index = 0;
function switchImageByIndex(index) {
	document.getElementsByClassName("banner-img")[0].setAttribute("src", "./assets/images/slideshow/" + slides[index].image);
}

// Click de la flèche gauche
let arrowLeft = document.getElementById("arrowLeft");
arrowLeft.addEventListener("click", function () {
	if (index === 0) {
		index = slides.length - 1
	} else {
		index = index - 1
	}
	switchImageByIndex(index)
	removeAllDotActive();
	document.getElementsByClassName("dot")[index].classList.add("dot_selected");
});

// Click de la flèche droite
let arrowRight = document.getElementById("arrowRight");
arrowRight.addEventListener("click", function () {
	if (index === slides.length - 1) {
		index = 0
	} else {
		index = index + 1
	}
	switchImageByIndex(index)
	removeAllDotActive();
	document.getElementsByClassName("dot")[index].classList.add("dot_selected");
});

function removeAllDotActive() {
	for (let i = 0; i < slides.length; i++) {
		document.getElementsByClassName("dot")[i].classList.remove("dot_selected")
	}
}


for (let i = 0; i < slides.length; i++) {
	document.getElementsByClassName("dot")[i].addEventListener("click", function () {
		switchImageByIndex(i)
		removeAllDotActive()
		this.classList.add("dot_selected")
	})
}
