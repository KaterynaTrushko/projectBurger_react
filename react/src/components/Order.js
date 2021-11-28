import React from "react";

class Order extends React.Component {

  renderOrder = (key) => {
    const burger = this.props.burgers[key];
    const count = this.props.order[key];

    const isAvailable = burger && burger.status === "available";
    if(!isAvailable) {
      return <li className="unavailable">
        Sorry {burger? burger.name : "burger"} temporarily unavailable
      </li>
    }


    return (
    <li >
      <span>
        <span>{count}</span>
        {count > 1 ?" items ":" item "}{burger.name}{" "} 
        <span> ${count * burger.price}</span>
        <button className = "cancellItem">&times;</button>
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
        <div className="total">
          <div className="total_wrap">
            <div className="total_wrap-final">
            Estimated total: ${total}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Order;