import React from "react";
import { render } from "react-dom";
import restaurants from "../sample-restaurants";
import { Link } from "react-router-dom";


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

  // goToRestauran = () => {
  //   const { url } = this.state;
  //   console.log(url);
  //   <Link to={`/restaurant/${url}`}></Link>
  //   // this.props.history.push(`/restaurant/${url}`);
  // };

  render() {
    return (
      <div className='restaurant_select'>
      <div className='restaurant_select_top'>
          <div
            onClick={this.displayList}
            className="restaurant_select_top-header font-effect-outline">
            {this.state.url ? this.state.title : "select a restaurant"}
          </div>
          <div className='arrow_picker'>
          <div className='arrow_picker-up'></div>
          <div className='arrow_picker-down'></div>
          </div>
        </div>
        {this.state.display ? (
          <div className="restaurant_select_bottom">
            <ul>
              {restaurants.map(restaurants => {
                return <li onClick={() => this.getTitle(restaurants)} key={restaurants.id}>{restaurants.title}</li>
              })}
            </ul>
          </div>
        ) : null}
        {this.state.title&&!this.state.display?<button ><Link to={`/restaurant/${this.state}`}>go to restaurant</Link ></button>: null}
      </div>
    )
  }
}

export default Landing;