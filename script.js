document.addEventListener("DOMContentLoaded", function () {
	const polaroids = document.querySelectorAll(".polaroid");
	polaroids.forEach((polaroid) => {
		const randomRotation = -2 + Math.random() * 4;
		const randomTop = Math.random() * 2 + "vh";

		polaroid.style.setProperty("--rotation", randomRotation + "deg");
		polaroid.style.top = randomTop;
	});

	const fonts = [
		"Pacifico",
		"Dancing Script",
		"Indie Flower",
		"Patrick Hand",
		"Caveat",
		"Shadows Into Light"
	];
	const colors = ["#ffeecc", "#ffddaa", "#ddffee", "#ffccdd", "#ccffee"];

	const paragraphs = document.querySelectorAll(".scrapbook p");
	paragraphs.forEach((p) => {
		const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		const randomRotation = -1 + Math.random() * 2; 
		const randomFontSize = 14 + Math.random() * 4; 
		const randomWidth = 60 + Math.random() * 40 + "%";
		const randomLeft = Math.random() * 10 + "%";

		p.style.setProperty("--font", randomFont);
		p.style.setProperty("--bgcolor", randomColor);
		p.style.setProperty("--rotation", randomRotation);
		p.style.setProperty("--fontsize", randomFontSize + "px");
		p.style.width = randomWidth;
		p.style.left = randomLeft;
		p.classList.add("random");
	});
});