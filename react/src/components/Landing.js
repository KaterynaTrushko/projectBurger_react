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



  render() {
    console.log(this);
    return (
      <div className="restauran_select">
        <div className="restauran_select_top">
          <div
            onClick={this.displayList}
            className="restauran_select_top-header font-effect-outline">Выбери ресторан</div>
          <div className="arrow_picker">
            <div className="arrow_picker-top"></div>
            <div className="arrow_picker-down"></div>
          </div>
        </div>

        {this.state.display ? (
          <div className="restauran_select_botton">
            <ul>
              {restaurants.map(restaurants => {
                return <li key={restaurants.id}>{restaurants.title}</li>
              })}
            </ul>
          </div>
        ) : null}

        <button>Перейти в ресторан</button>
      </div>

    )
  }

}

export default Landing;