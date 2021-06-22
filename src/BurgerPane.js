import { extend } from "lodash"
import { Component } from "react"
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

export default class BurgerPane extends Component {

  render() {

    return( 
      <div>
      <BurgerStack addedIngredients={this.props.addedIngredients}
      <ClearBurger clearBurger={this.props.clearBurger} />
     </div>


    )
  }
}