/*elérhetővé tesszük a file system -et*/
const fs = require("fs");

// ebben a callback function -ban kinyerjük az adatokat (jelen esetben a mentors tömbből) és megmondjuk, hogy mit szeretnénk csinálni azokkal
const getMentorBio = (name) => {
  // itt gyakorlatilag azonnal megtörténik a promis resolve argumentumának a meghívása
  return Promise.resolve(`${name} bio data...`);
};

// létrehozzuk az adatok megjelenítésére szolgáló komponenst
const displayBioData = (mentors) => {
  const html = `
    <h1>Mentors</h1>
    <div>
      ${mentors}
    </div>
  `;

  return html;
};

const mentors = ["Adam", "Livi", "Artur", "Denes"];

const bioPromises = [];
const bioDatas = [];

/* egy for of ciklussal bejárjuk a mentor tömböt és a tömbön belül, a tömbt elemein meghívjuk a getMentor callback function -t
mivel ebben egy promise szerepel ezért az adatokat egy then segítségével kicsomagoljuk, majd belehelyezzük azokat a bioDatas tömbbe.
ezt követően az egész bele kerül a bioPromises tömbbe*/
for (const mentor of mentors) {
  const task = getMentorBio(mentor).then((bio) => {
    bioDatas.push(bio);
  });

  bioPromises.push(task);
}

Promise.all(bioPromises).then(() => {
  const bioHtml = displayBioData(bioDatas);
  fs.writeFileSync("./bio.html", bioHtml);
  console.log("File generated!!!");
});

// const getMentorBio = (name) => {
//   return Promise.resolve(`${name} bio data...`);
// };

// const generateBioHtml = (bios) => {
//   const html = `
// <h1>Mentors</h1>
// <ul>
// ${bios.map((bio) => `<li>${bio}</li>`).join("\n")}
// </ul>
// `;

//   return html;
// };

// const mentors = ["Adam", "Livi", "Artur", "Denes"];

// const map = (arr, fn) => {
//   const result = [];
//   for (const item of arr) {
//     result.push(fn(item));
//   }
//   return result;
// };

// //const bioPromises = mentors.map((mentor) => getMentorBio(mentor));
// const bioPromises = map(mentors, (mentor) => getMentorBio(mentor));

// Promise.all(bioPromises).then((bioDatas) => {
//   const bioHtml = generateBioHtml(bioDatas);
//   document.querySelector("#root").innerHTML = bioHtml;
//   console.log("File generated!!!");
// });

/*let sentence = '';
for (let i = 0; i < mentors.length; i++) {
  const mentor = mentors[i];

  if (i !== mentors.length - 1) {
    sentence = sentence + mentor + ',';
  } else {
    sentence = sentence + mentor;
  }
}*/
