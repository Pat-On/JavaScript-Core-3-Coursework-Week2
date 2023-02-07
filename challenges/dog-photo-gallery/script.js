const addButton = document.getElementById("btn1");
const clearButton = document.getElementById("btn2");
const ul = document.getElementById("ul-list");
const image = document.createElement("img");
const li = document.createElement("li");
// fetch
const fetchData = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      ul.appendChild(li);
      image.src = data.message;
      li.appendChild(image);
    })
    .catch((error) => {
      console.log(error);
    });
};
addButton.addEventListener("click", () => {
  fetchData();
});
clearButton.addEventListener("click", function () {
  ul.removeChild(li);
});