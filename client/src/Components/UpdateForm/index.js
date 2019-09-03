import React from 'react'
import './style.css'

const UpdateForm = () => (
  <div className="updateForm">
    <form className="restaurantForm">
      <label for="name">Medicine Name</label>
      <input className="nameStyle" type="text" name="name" placeholder="" />
      <label for="price">Price</label>
      <input className="priceStyle" type="text" name="price" placeholder="" />
      <label for="company">Company</label>
      <input
        className="companyStyle"
        type="text"
        name="company"
        placeholder=""
      />
      <label for="description">Description</label>
      <input
        className="descriptionStyle"
        type="text"
        name="description"
        placeholder=""
      />
      <input type="checkbox" name="prescription" value="true" /> Needs
      prescription
      <input type="checkbox" name="quantity" value="true" /> Quantity out of
      stock
    </form>
  </div>
)

export default UpdateForm
