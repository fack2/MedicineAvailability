import React, { Component } from "react"
import "./style.css"
import axios from "axios"

class UpdateForm extends Component {
  state = {
    name: "",
    price: "",
    company: "",
    description: "",
    quantity: false,
    prescription: false
  }

  componentDidMount() {
    const { details } = this.props
    this.setState({
      price: details.price,
      company: details.company,
      description: details.description,
      name: details.name,
      prescription: details.prescription,
      quantity: details.soldout
    })
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  toggle = event => {
    const { name } = event.target
    this.setState({ [name]: !this.state[name] })
  }

  render() {
    const {
      name,
      quantity,
      price,
      company,
      description,
      prescription
    } = this.state
    return (
      <div className="updateForm">
        <form className="upForm">
          <label class="name" for="name">
            Medicine Name
          </label>
          <input
            className="nameStyle"
            type="text"
            name="name"
            value={name}
            placeholder=""
            onChange={this.handleChange}
          />
          <label class="price" for="price">
            Price
          </label>
          <input
            className="priceStyle"
            type="text"
            name="price"
            value={price}
            placeholder=""
            onChange={this.handleChange}
          />
          <label className="company" for="company">
            Company
          </label>
          <input
            className="companyStyle"
            type="text"
            name="company"
            value={company}
            placeholder=""
            onChange={this.handleChange}
          />
          <label className="descriptionForm" for="description">
            Description
          </label>
          <input
            className="descriptionStyle"
            type="text"
            name="description"
            value={description}
            placeholder=""
            onChange={this.handleChange}
          />
          <input
            type="checkbox"
            name="prescription"
            className="preseption"
            onChange={this.toggle}
            checked={prescription}
          />
          <label className="preseptionText"> Needs prescription</label>

          <input
            type="checkbox"
            name="quantity"
            onChange={this.toggle}
            className="quantity"
            checked={quantity}
          />
          <label className="quantityText">Quantity out of stock</label>
          <button className="Update" type="submit">
            {" "}
            Update
          </button>
        </form>
      </div>
    )
  }
}

export default UpdateForm
