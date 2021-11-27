import React from "react";

class Burger extends React.Component {
  render() {
    const { image, name, desc, status, price } = this.props.details;
    const isAvalilable = status === "available";
    return <li className="menu-burger">
      <div className="image-container">
        <img src={image} alte={name} />
      </div>
      <div className="burger-details">
        <h3 className="burger-name">{name}
          <span className="price">{price}$</span>
        </h3>
        <p>{desc}</p>
        <button className="buttenOrder" disabled={!isAvalilable}>{isAvalilable ? "Order" : "out of stock"}</button>
      </div>
    </li>

  }
}

export default Burger;