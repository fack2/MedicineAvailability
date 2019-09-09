import React, { Component } from "react"
import "./form.css"
import axios from "axios"

class UpdateForm extends Component {
  state = {
    name: "",
    price: "",
    company: "",
    description: "",
    quantity: false,
    prescription: false,
    medicineid: 0,
    msg: "",
    updated: false
  }

  componentDidMount() {
    const { details } = this.props
    this.setState({
      price: details.price,
      company: details.company,
      description: details.description,
      name: details.name,
      prescription: details.prescription,
      quantity: details.soldout,
      medicineid: details.medicineid
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
  updateFormInfo = event => {
    event.preventDefault()

    const {
      name,
      company,
      price,
      description,
      quantity,
      prescription,
      medicineid
    } = this.state

    axios
      .patch(`/api/pharmacy/medicine/${medicineid}`, {
        name,
        quantity,
        price,
        company,
        description,
        prescription
      })
      .then(({ data }) => {
        if (data.updated) {
          this.setState({ updated: true, msg: "Your data has been updated" })
        } else {
          this.setState({ updated: true, msg: "request failed" })
        }
      })
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
        <form onSubmit={this.updateFormInfo} className="upForm">
          <label className="name" htmlFor="name">
            Medicine Name
          </label>
          <input
            className="nameStyle"
            type="text"
            name="name"
            value={name}
            placeholder=""
            onChange={this.handleChange}
            disabled
          />
          <label className="price" htmlFor="price">
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
          <label className="company" htmlFor="company">
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
          <label className="descriptionForm" htmlFor="description">
            Description
          </label>
          <input
            className="descriptionStyle"
            type="text"
            name="description"
            value={description}
            placeholder=""
            onChange={this.handleChange}
            disabled
          />
          <input
            type="checkbox"
            name="prescription"
            className="preseption"
            onChange={this.toggle}
            checked={prescription}
          />
          <label className="preseptionText" htmlFor="prescription">
            {" "}
            Needs prescription
          </label>
          <input
            type="checkbox"
            name="quantity"
            onChange={this.toggle}
            className="quantity"
            checked={quantity}
          />
          <label className="quantityText" htmlFor="quantity">
            Quantity out of stock
          </label>
          <input className="Update" type="submit" value=" Update" />
          Update
          {this.state.updated && <p className="updateMsg">{this.state.msg}</p>}
        </form>
      </div>
    )
  }
}

export default UpdateForm
