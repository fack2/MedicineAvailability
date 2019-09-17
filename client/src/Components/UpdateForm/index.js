import React, { Component } from "react";
import "./form.css";
import axios from "axios";

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
    details: this.props.details
  };

  componentDidMount() {
    const { details } = this.props;
    this.setState({
      price: details.price,
      company: details.company,
      description: details.description,
      name: details.name,
      prescription: details.prescription,
      quantity: details.soldout,
      medicineid: details.medicineid
    });
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  toggle = event => {
    const { name } = event.target;
    this.setState({ [name]: !this.state[name] });
  };
  checkIfUpdate = () => {
    const { details } = this.state;

    const { company, price, quantity, prescription } = this.state;

    if (
      details.price == price &&
      details.company === company &&
      details.soldout === quantity &&
      details.prescription === prescription
    ) {
      return false;
    }
    return true;
  };

  updateFormInfo = event => {
    event.preventDefault();

    const {
      name,
      company,
      price,
      description,
      quantity,
      prescription,
      medicineid
    } = this.state;

    if (!this.checkIfUpdate()) {
      this.setState({ updated: true, msg: "alaredy up to date" });
      return;
    }
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
          const details = {
            soldout: quantity,
            price,
            company,
            prescription
          };

          this.setState({
            updated: true,
            msg: "Your data has been updated",
            details
          });
        } else {
          this.setState({ updated: true, msg: "request failed" });
        }
      });
  };

  render() {
    const { name, quantity, price, company, prescription } = this.state;
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
          <label className="priceCSS" htmlFor="price">
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
          <label className="companyName" htmlFor="company">
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

          <div className="checks">
            <label className="preseptionText" htmlFor="prescription">
              <input
                type="checkbox"
                name="prescription"
                className="preseption"
                onChange={this.toggle}
                checked={prescription}
              />
              Needs prescription
            </label>
            <label className="quantityText" htmlFor="quantity">
              <input
                type="checkbox"
                name="quantity"
                onChange={this.toggle}
                className="quantity"
                checked={quantity}
              />
              Quantity out of stock
            </label>
          </div>

          <input className="Update" type="submit" value=" Update" />
          {this.state.updated && <p className="updateMsg">{this.state.msg}</p>}
        </form>
      </div>
    );
  }
}

export default UpdateForm;
