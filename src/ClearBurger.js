import { Component } from "react"

export default class ClearBurger extends Component {

  render() {

    return( 
      <button onClick={(e) => this.props.clearBurger(e)}>Clear Burger Stack</button>
    )
  }
}