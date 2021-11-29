import React from "react";

class EditBurgerForm extends React.Component {
  
  handleChange = event => {
    

    const updatedBurger = {
      ...this.props.burger, 
      [event.currentTarget.name]: event.currentTarget.value,
    
    };

    this.props.updateBurger(this.props.index, updatedBurger);
    console.log(this.props.index, updatedBurger);

  };

  render() {
    return (
      <div className="burger-edit">
        <input onChange={this.handleChange} name="name" type="text"  defaultValue={this.props.burger.name} />
        <input onChange={this.handleChange} name="price" type="text"  defaultValue={this.props.burger.price} />
        <select  onChange={this.handleChange} name="status" className="status" defaultValue={this.props.burger.status}>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
        <textarea onChange={this.handleChange} name="desc" defaultValue={this.props.burger.desc} />
        <input onChange={this.handleChange} name="image"  type="text"  defaultValue={this.props.burger.image} />
      </div>
    )
  }
 }

  export default EditBurgerForm;