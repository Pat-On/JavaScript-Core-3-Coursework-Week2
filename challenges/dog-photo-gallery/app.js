//I'm using querySelector, because there is only one class with this name so
// I do not have to struggle with "node array"

//selectors
const mainPicture = document.querySelector(".picture");
const listContainerUl = document.querySelector(".container");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");

// data
const config = {
  link: "https://dog.ceo/api/breeds/image/random",
};

//helper function

//a
const AJAX = function (link) {
  return fetch(link)
    .then(function (response) {
      let parsed = response.json();
      return parsed;
    })
    .catch((err) => {
      console.log(err);
      renderError(`Something wen wrong ${err.message}`);
    })
    .finally(() => {
      console.log(" : - >");
    });
};

// RENDERS
const renderMainPicture = function () {
  button1.removeEventListener("click", renderMainPicture);
  AJAX(config.link)
    .then((data) => {
      console.log(data);
      mainPicture.src = data.message;
    })
    .catch((err) => console.error(`${err.message}`));
};

const renderElementsOfList = function () {
  AJAX(config.link)
    .then((data) => {
      console.log(data);
      listContainerUl.insertAdjacentHTML(
        "afterbegin",
        `<li><img src=${data.message}> </li>`
      );
    })
    .catch((err) => console.error(`${err.message}`));
};

//INIT
const init = function () {
  button1.addEventListener("click", renderMainPicture);
  button2.addEventListener("click", renderElementsOfList);
};

init();
