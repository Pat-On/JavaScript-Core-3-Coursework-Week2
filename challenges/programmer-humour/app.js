//
const boxImg = document.querySelector(".picture");

fetch("https://xkcd.now.sh/?comic=latest")
  .then(function (response) {
    let parsed = response.json();
    console.log(parsed);
    return parsed;
  })
  .then(function (response) {
    console.log(response);
    boxImg.src = response.img;
  })
  .catch((err) => {
    console.log(err);
    renderError(`Something wen wrong ${err.message}`);
  })
  .finally(() => {
    console.log(" : - >");
  });
