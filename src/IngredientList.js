import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientList(props) {

  //create and ingredient component for reach item in array

		let ingredientComponents = props.ingredients.map(item => (
			<li onClick={(e) => props.addToBurger(e)}>
				<Ingredient ingredient={item.name} color={item.color} />
			</li>
		))

		return (
			<ul>
				{ingredientComponents}
			</ul>
		)
	}
  // render() {
  //   //map over array of ingredients
  //   let ingredientComponents = this.props.ingredients.map(item => {
  //       <li onClick={{e} => this.props.addToBurger(e)}>
  //               <Ingredient ingredient={item.name} color={item.color} />
  //           </li>
  //   })

  //   return (  
  //     //render a list of those components
  //     <div>
  //       <ul>
  //         {ingredientComponents}

  //       </ul>
  //       </div>

  //   )

  // }
