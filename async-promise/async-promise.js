const URL = "https://api.thecatapi.com/v1/images/search";
const root = document.querySelector("#root");

const getTheJsonBodyFromResponse = (response) => {
  const data = response.json();
  return data;
};

const getTheFirstElementOfAResponseArray = (cats) => {
  const cat = cats[0];
  return cat;
};

const renderTheCat = (cat) => {
  const img = document.createElement("img");
  img.src = cat.url;
  root.replaceChildren(img);
};

const displayCat = async () => {
  const response = await fetch(URL);
  const cats = await response.json();
  const cat = cats[0];
  renderTheCat(cat);
  /*fetch(URL) // Promise
    .then(getTheJsonBodyFromResponse)
    .then(getTheFirstElementOfAResponseArray)
    .then(renderTheCat)*/
};

displayCat();
