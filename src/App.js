import { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'


const ingredients = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]

export default class App extends Component {
  constructor(props) {
    super()
    this.state = { 
      addedIngredients: [] 
    }
  } 

  addToBurger = (e) => {
    //get value of clicked ingred  and color
    const newIngredient = {name: e.target.innerText, color: e.target.style.backgroundColor}
    // create a new array w/ curremt addedIngred status and append new Ingred

    const updatedAddedIngredients =this.state.addedIngredients.concat(newIngredient)

    //setState w/ new clickedIngred arra
    this.setState({
      addedIngredients: updatedAddedIngredients
    })
  } 

  clearBurger = (e) => {
    this.setState({
      addedIngredients:[]
    })
  }


  render() {

    return(

      <div style={{display: "flex", alignItems:"flex-end"}}>
        <IngredientList ingredients={ingredients} addToBurger={this.addToBurger} />
        <BurgerPane addedIngredients={this.state.addedIngredients} clearBurger={this.clearBurger} />
      </div>

    )
  }
}