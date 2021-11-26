import React from "react";
import { render } from "react-dom";
import restaurants from "../sample-restaurants";


class Landing extends React.Component {
  state = {
    display: false,
    title: '',
    url: ''
  };

  displayList = () => {
    const { display } = this.state;
    this.setState({ display: !display })
  };

  getTitle = (restaurants) => {
    const { title, url } = restaurants;
    this.setState({ title, url, display: false });
  };

  goToRestauran = () => {
    console.log("Go to rastaurant!")
  }

  render() {
    return (
      <div className="restauran_select">
        <div className="restauran_select_top">
          <div
            onClick={this.displayList}
            className="restauran_select_top-header font-effect-outline">
            {this.state.url ? this.state.title : "Выбери ресторан"}
          </div>
          <div className="arrow_picker">
            <div className="arrow_picker-top"></div>
            <div className="arrow_picker-down"></div>
          </div>
        </div>
        {this.state.display ? (
          <div className="restauran_select_botton">
            <ul>
              {restaurants.map(restaurants => {
                return <li onClick={() => this.getTitle(restaurants)} key={restaurants.id}>{restaurants.title}</li>
              })}
            </ul>
          </div>
        ) : null}
        {this.state.title&&!this.state.display?<button onClick={this.goToRestauran}>Перейти в ресторан</button>: null}
      </div>
    )
  }
}

export default Landing;