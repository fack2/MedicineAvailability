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
    return (
      <div className="updateForm">
        <form className="restaurantForm">
          <label class="name" for="name">
            Medicine Name
          </label>
          <input
            className="nameStyle"
            type="text"
            name="name"
            value={this.state.name}
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
            value={this.state.price}
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
            value={this.state.company}
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
            value={this.state.description}
            placeholder=""
            onChange={this.handleChange}
          />
          <input
            type="checkbox"
            name="prescription"
            className="preseption"
            onChange={this.toggle}
            checked={this.state.prescription}
          />
          <label className="preseptionText"> Needs prescription</label>

          <input
            type="checkbox"
            name="quantity"
            onChange={this.toggle}
            className="quantity"
            checked={this.state.quantity}
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
