const image = document.createElement("img");
const container = document.getElementById("container");container.appendChild(image);
fetch("https://xkcd.now.sh/?comic=latest")  .then((response) => response.json()) 
.then((data) => (image.src = data.img)) 
.catch((err) => console.log(err));