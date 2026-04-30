var index = 0;

// Store your image paths
const images = [
    "./Images/Home/360_F_383213542_bSUwyhvY1kvtf5X6g6GN4DEtfCsGVQ9x.jpg",
    "./Images/Home/360_F_480909163_CuOgqUVJPWrqZbT8KtAYlYHbTmmdnXtX.jpg",
    "./Images/Home/istockphoto-1151795495-612x612.jpg"
];

// Cycles background
function changeBanner() {
    const background = document.getElementById("Background");

    background.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
}

window.onload = function () {
    changeBanner();
    setInterval(changeBanner, 8000);
};