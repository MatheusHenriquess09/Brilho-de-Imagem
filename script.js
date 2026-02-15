const image = document.querySelector("img");
const slider = document.querySelector("input");
const counter = document.querySelector("span");

slider.addEventListener("mousemove", function() {
    console.log(slider.value);
    image.style.filter = `brightness(${slider.value}%)`;
    let number = Math.floor(slider.value/2);
    counter.innerText = number;
})