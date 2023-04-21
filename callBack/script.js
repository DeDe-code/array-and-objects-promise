/*ez egy higher order függvény, ami az adott feltételnek megfelelő azonos elemeket keresi.
a harmadik paraméter egy callback 
*/
const collectSimilars = (base, arr, getIsSimilar) => {
  const result = [];

  for (const item of arr) {
    if (getIsSimilar(base, item)) {
      result.push(item);
    }
  }

  return result;
};

const dogsAreEqual = (a, b) => {
  const aAge = a.age;
  const bAge = b.age;

  const diff = Math.abs(aAge - bAge);
  if (diff > 1) {
    return false;
  }

  return a.kind === b.kind;
};

const numbersAreEqual = (a, b) => {
  return a === b;
};

/* ebben kerülnek meghívásra a higher orderen belül a callback függvények: 39. és 42. sor*/
const main = () => {
  const dog1 = { name: "Morzsi", age: 2, kind: "Vizsla" };
  const dog2 = { name: "Lobonc", age: 3, kind: "Vizsla" };
  const dog3 = { name: "Kek", age: 5, kind: "Vizsla" };
  const dog4 = { name: "Lol", age: 2, kind: "Puli" };

  const similars = collectSimilars(dog1, [dog2, dog3, dog4], dogsAreEqual);
  console.log(similars);

  const test = collectSimilars(1, [1, 2, 3, 4], numbersAreEqual);
  console.log(test);
};

main();
