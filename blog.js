var array = [
  {
    name: "Hamid Hosen",
    price: 120,
    description: "This is Orange.",
  },
  {
    name: "Fahim",
    price: 100,
    description: "This is Mango.",
  },
  {
    name: "Riad",
    price: 130,
    description: "This is Apple.",
  },
];

let obj = array.find((o) => o.name === "Fahim");
console.log(obj);
