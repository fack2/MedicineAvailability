import React, { Component } from "react"
import "./style.css"
import axios from "axios"

class UpdateForm extends Component {
  state = {
    name: "",
    price: "",
    company: "",
    description: "",
    quantity: false
    // data: this.props.history.location.data
  }

  componentDidMount() {
    console.log(this.props)

    // const { medName } = this.props.params
    // axios.get(`/api/pharmacy/medicine/${medName}`).then(({ data }) => {
    //   this.setState({
    //     data
    //   })

    //   console.log(data)
    // })
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
    console.log("name", value)
  }
  toggle = () => {
    this.setState({ quantity: !this.state.quantity })
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
          <label className="description" for="description">
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
            value="true"
            className="preseption"
          />
          <label className="preseptionText"> Needs prescription</label>

          <input
            type="checkbox"
            name="quantity"
            onChange={this.toggle}
            className="quantity"
            value={this.state.quantity}
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
