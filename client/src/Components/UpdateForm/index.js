import React from 'react'
import './style.css'

const UpdateForm = () => (
  <div className="updateForm">
    <form className="restaurantForm">
      <label class="name" for="name">
        Medicine Name
      </label>
      <input className="nameStyle" type="text" name="name" placeholder="" />
      <label class="price" for="price">
        Price
      </label>
      <input className="priceStyle" type="text" name="price" placeholder="" />
      <label className="company" for="company">
        Company
      </label>
      <input
        className="companyStyle"
        type="text"
        name="company"
        placeholder=""
      />
      <label className="description" for="description">
        Description
      </label>
      <input
        className="descriptionStyle"
        type="text"
        name="description"
        placeholder=""
      />
      <input
        type="checkbox"
        name="prescription"
        value="true"
        className="preseption"
      />
      <label className="preseptionText"> Needs prescription</label>

      <input
        type="checkbox"
        name="quantity"
        value="true"
        className="quantity"
      />
      <label className="quantityText">Quantity out of stock</label>
      <button className="Update" type="submit">
        {' '}
        Update
      </button>
    </form>
  </div>
)

export default UpdateForm
