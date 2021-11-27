import React from "react";
import AddBurgerForm from "./AddBugerForm";

class MenuAdmin extends React.Component{
  render(){
    return(

      <div className="menu-admin">
        <h2>Menu control</h2>
        <AddBurgerForm addBurger={this.props.addBurger} />
      <button onClick={this.props.loadSampleBurgers}>Loud Burgers</button>
      </div>
    )
  }
}

export default MenuAdmin;