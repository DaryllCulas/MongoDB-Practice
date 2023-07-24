use("myDb");

 
db.Product.insertMany([
  {
    _id: 1,
    name: "Product A",
    price: 25,
    quantity: 10
  },
  {
    _id: 2,
    name: "Product B",
    price: 50,
    quantity: 5
  },
  {
    _id: 3,
    name: "Product C",
    price: 75,
    quantity: 15
  },
  {
    _id: 4,
    name: "Product D",
    price: 60,
    quantity: 20
  },
  {
    _id: 5,
    name: "Product E",
    price: 35,
    quantity:8
  },
  {
    _id: 6,
    name: "Product F",
    price: 45,
    quantity: 12
  },
  {
    _id: 7,
    name: "Product G",
    price: 80,
    quantity: 7
  },
  {
    _id: 8, 
    name: "Product H",
    price: 20,
    quantity: 3
  },
  {
    _id: 9,
    name: "Product I",
    price: 55,
    quantity: 10
  },
  {
    _id: 10, 
    name: "Product J",
    price: 40,
    quantity: 20
  }
]);

db.Product.insertMany([
  {
    _id: 11,
    name: "Product K",
    price: 65,
    quantity: 9
  },
  {
    _id: 12,
    name: "Product L",
    price: 30,
    quantity: 11
  },
  {
    _id: 13,
    name:"Product M",
    price: 70,
    quantity: 11
  },
  {
    _id: 14,
    name: "Product N", 
    price: 45,
    quantity: 18
  }, 
  {
    _id: 15,
    name: "Product O",
    price: 90,
    quantity: 4
  },
  {
    _id: 16,
    name: "Product P",
    price: 55,
    quantity: 13
  },
  {
    _id: 17, 
    name: "Product Q",
    price: 85, 
    quantity: 16
  },
  {
    _id: 18,
    name: "Product R",
    price: 30,
    quantity: 30,
  },
  {
    _id: 19,
    name: "Product S",
    price: 40,
    quantity: 10,
  },
  {
    _id: 20,
    name: "Product T",
    price:  50,
    quantity: 7  
  }
]);


db.Product.find();
