import React from "react";

class AddBurgerForm extends React.Component {

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createBurger = event => {
    event.preventDefault();
    const burger = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };

    this.props.addBurger(burger);
    event.currentTarget.reset();
  }

  render() {
    return (
      <form className="burger-edit" onSubmit={this.createBurger}>
        <input ref={this.nameRef} name="name" type="text" placeholder="Name" autoComplete="off" />
        <input ref={this.priceRef} name="price" type="text" placeholder="Price" autoComplete="off" />
        <select ref={this.statusRef} name="status" className="status">
          <option value="available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>
        <textarea name="dest" ref={this.descRef} placeholder="Dest" />
        <input name="image" ref={this.imageRef} type="text" placeholder="Imade" autoComplete="off" />
        <button>+Add to Meny</button>
      </form>
    )
  }
}

export default AddBurgerForm;