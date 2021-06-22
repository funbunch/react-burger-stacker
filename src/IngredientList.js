import {Component} from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {

  //create and ingredient component for reach item in array
  render() {
    //map over array of ingredients
    let ingredientComponents = this.props.ingredients.map(item  => {
      return <li onClick={{e} => this.props.addToBurger(e)}>
                <Ingredient ingredient={item.name} color={item.color} />
            </li>
    }

    return (  
      //reder a list of those components
      <div>
        <ul>
          {ingredientComponents}

        </ul>
        </div>

    )

  }

}