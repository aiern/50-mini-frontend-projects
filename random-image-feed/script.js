const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
const rows = 5;

function greetingWindow() {
  alert("Hi, Mark!");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function preloadImage() {
  var image_links = [];

  for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement("img");
    img.src = `${unsplashURL}${getRandomSize()}`;
    console.log[i];
    // await sleep(5000);
    image_links.push(img.src);
    console.log(image_links);
    container.appendChild(img);
    console.log(img);
  }
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}

preloadImage();
