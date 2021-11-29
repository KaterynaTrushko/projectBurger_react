import React from "react";
import Shipment from "./Shipment";

class Order extends React.Component {

  renderOrder = (key) => {
    const burger = this.props.burgers[key];
    const count = this.props.order[key];


    if (!burger) return null;

    const isAvailable = burger && burger.status === "available";
    if(!isAvailable) {
      return <li className="unavailable" key={burger}>
        Sorry {burger? burger.name : "burger"} temporarily unavailable
      </li>
    }


    return (
    <li kay={burger}>
      <span>
        <span>{count}</span>
        {count > 1 ?" items ":" item "}{burger.name}{" "} 
        <span> &#36;{count * burger.price}</span>
        <button 
          className = "cancellItem"
          onClick={() => this.props.deleteOrderForm(key)}
          >&times;</button>
      </span>
      </li>
    )
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const burger = this.props.burgers[key];
      const count = this.props.order[key];

      const isAvailable = burger && burger.status === "available";
      if (isAvailable) {
        return prevTotal + burger.price * count;
      } else {
        return prevTotal;
      } 

      console.log(total);

    }, 0);

    return (

      <div className="order-wrap">
        <h2>Your order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
        </ul>

        {total > 0 ? (
          <Shipment total={total} />
        ) : (
          <div className='nothingSelected'>
            Select dishes and add to order
          </div>
        )}

      </div>
    )
  }
}

export default Order;