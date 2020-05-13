import React from "react";


class TuttiFrutti extends React.Component {
  state = {
    cards : [{
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
  image : "/images/banana.jpg",
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
  }

rightCards = () => {
  const pickedCards = []
    this.state.cards.map(card => {
      if(card.letter === "C")
      console.log(card.name)
    })
}
render() {
  
this.rightCards()
    return (
      <div>
    {this.state.cards.map((card , i) => {
        return (
          <div key = {i}>
            <img src = {card.image}/>
          </div>
        );
      })}
      </div>
    )}
}
export default TuttiFrutti;
