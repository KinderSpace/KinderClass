const mongoose = require("mongoose");
const Cards = require("../models/Card");

const cards = [{
  letter : "B",
  name : "Banana",
  image : "/images/banana.jpg",
  category : "Fruits"
},
{
  letter : "B",
  name : "Bee",
  image : "/images/bee.jpg",
  category : "Animal"

},
{
  letter : "B",
  name : "Bear",
  image : "/images/bear.jpg",
  category : "Animal"
},
{
  letter : "D",
  name : "Donut",
  image : "/images/donut.jpg",
  category : "Food"
},
{
  letter : "D",
  name : "Duck",
  image : "/images/duck.jpg",
  category : "Animal"

},
{
  letter : "D",
  name : "Dog",
  image : "/images/dog.jpg",
  category : "Animal"

},
{
  letter : "P",
  name : "Pizza",
  image : "/images/pizza.jpg",
  category : "Food"
},
{
  letter : "P",
  name : "Plane",
  image : "/images/plane.jpg",
  category : "Toys"

},
{
  letter : "P",
  name : "Pig",
  image : "/images/pig.jpg",
  category : "Animal"
},
{
  letter : "C",
  name : "Carrot",
  image : "/images/carrot.jpg",
  category : "Fruits"

},
{
  letter : "C",
  name : "Car",
  image : "/images/car.jpg",
  category : "Toys"

},
{
  letter : "C",
  name : "Cow",
  image : "/images/cow.jpg",
  category : "Animal"
},
]
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/kidsClass", {
    useNewUrlParser: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

Cards.insertMany(cards, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
