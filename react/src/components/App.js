import React from "react";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import sampleBurgers from "../sample-burgers";
import Burger from "./Burger";

class App extends React.Component {

  state = {
    burgers: {},
    order: {}
  }

  addBurger = burger => {
    console.log("addBurger ", burger);
    const burgers = {...this.state.burgers};
    burgers[`burges${Date.now()}`] = burger;
    this.setState({burgers})

  };

  loadSampleBurgers = () => {
    console.log(sampleBurgers);
    this.setState({burgers: sampleBurgers})
  };

  render(){
    return(
      <div className="burger-paradise">
        <div className="menu">
          <Header title="Very hot Burger" amount={10} hot={true}/> 
            <ul className="burgers">
              {Object.keys(this.state.burgers).map(key => {
                return <Burger 
                key={key}
                index = {key}
                details = {this.state.burgers[key]}              
                />
              })}
            </ul>      
        </div>
        <Order/>
        <MenuAdmin loadSampleBurgers={this.loadSampleBurgers} addBurger = {this.addBurger}/>
      </div>
    );
  }

}

export default App;