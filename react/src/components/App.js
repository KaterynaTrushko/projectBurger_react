import React from "react";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";

class App extends React.Component {
  render(){
    return(
      <div className="burger_paradise">
        <div className="menu">
          <Header title="Very hot Burger" amount={10} hot={true}/>       
        </div>
        <Order/>
        <MenuAdmin/>
      </div>
    );
  }

}

export default App;