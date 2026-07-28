//your code here
const mainImage = document.querySelector(".photo-main > img");
const variants = document.querySelectorAll(".variant > ul > li");

variants.forEach((variant) => {
	variant.addEventListener("click", function () {
		const selectedImage = this.querySelector("img");

		if (selectedImage && mainImage) {
			mainImage.src = selectedImage.src;
			mainImage.alt = selectedImage.alt;
		}

		variants.forEach((item) => {
			item.classList.remove("selected");
		});

		this.classList.add("selected");
	});
});

const albumImages = document.querySelectorAll(
	".photo-album > ul > li > img"
);

albumImages.forEach((image) => {
	image.addEventListener("click", function () {
		if (mainImage) {
			mainImage.src = this.src;
			mainImage.alt = this.alt;
		}
	});
});

const cartButton = document.querySelector(".buy--btn");

if (cartButton) {
	cartButton.addEventListener("click", function () {
		this.textContent = "ADDED TO CART";

		setTimeout(() => {
			this.textContent = "ADD TO CART";
		}, 1500);
	});
}