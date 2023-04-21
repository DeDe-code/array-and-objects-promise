dogs = [
  {
    name: "hello",
    age: 2,
  },

  {
    name: "pro",
    age: 3,
  },
];

// const getOnlyAges = (dogs) => {
//   const dogsAges = dogs.map((elements) => elements.age);
//   console.log(dogsAges);
// };

// getOnlyAges(dogs);

const members = [
  {
    name: "papa",
    gender: "man",
    score: 10,
  },

  {
    name: "papa",
    gender: "woman",
    score: 9,
  },
  {
    name: "papa",
    gender: "woman",
    score: 5,
  },
];

// const getFemalesOnly = (members) => {
//   const women = members.filter((elements) => elements.gender === "woman");
//   console.log(women);
// };

// getFemalesOnly(members);

const getAvgScore = (members) => {
  let average = 0;
  for (let i = 0; i < members.length; i++) {
    average += members[i].score / members.length;
  }
  console.log(average);
};

getAvgScore(members);
