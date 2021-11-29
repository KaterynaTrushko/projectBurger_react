import React from "react";

class EditBurgerForm extends React.Component {
  render() {
    return (
      <div className="burger-edit">
        <input name="name" type="text" placeholder="Name"  value={this.props.burger.name} />
        <input name="price" type="text" placeholder="Price" autoComplete="off" value={this.props.burger.price} />
        <select  name="status" className="status" value={this.props.burger.status}>
          <option value="available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>
        <textarea name="desc" placeholder="Dest" value={this.props.burger.desc} />
        <input name="image"  placeholder="Imade" autoComplete="off" value={this.props.burger.image} />
      </div>
    )
  }
 }

  export default EditBurgerForm;