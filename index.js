// Your code here
let dodger = document.getElementById("dodger");
let game = document.getElementById("game");

dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function (e) {
	if (e.key === "ArrowLeft") {
		moveDodgerLeft();
	}

	if (e.key === "ArrowRight") {
		moveDodgerRight();
	}

});

function moveDodgerLeft() {
	let leftNumbers = dodger.style.left.replace("px", "");
	let left = parseInt(leftNumbers, 10);

	if (left > 0) {
		dodger.style.left = `${left - 1}px`;
	}
	console.log(dodger.style.left);
}

function moveDodgerRight() {
	let leftNumbers = dodger.style.left.replace("px", "");
	let left = parseInt(leftNumbers, 10);

	// if (left <= (game.offsetWidth - dodger.offsetWidth)) {
	if (left < 360) {
		dodger.style.left = `${left + 1}px`;
	}
	console.log(dodger.style.left);
}