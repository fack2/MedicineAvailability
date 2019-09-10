import React, { Component } from "react"
import NavBar from "./../NavBar"
import "./style.css"
import axios from "axios"

class AddMedicine extends Component {
  state = {
    medName: "",
    medPrice: "",
    medCompany: "",
    prescription: false,
    msg: "",
    submitClicked: false,
    login: false
  }

  componentDidMount = () => {
    const { history } = this.props

    axios.get("/check-auth").then(({ data }) => {
      const { success } = data

      if (success) {
        this.setState({
          login: true
        })
        // history.push("/pharmacy")
      } else {
        history.push("/login")
      }
    })
  }

  updateInput = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  toggleCheckbox = () => {
    this.setState({ prescription: !this.state.prescription })
  }

  AddMedicineInfo = event => {
    event.preventDefault()
    const { history } = this.props
    const { medName, medCompany, medPrice, prescription } = this.state
    this.setState({ submitClicked: true })
    if (medName === "" || medCompany === "" || medPrice === "") {
      return
    }

    axios
      .post("/api/pharmacy/medicine", {
        medName,
        medCompany,
        prescription,
        medPrice
      })
      .then(res => {
        const { add, message } = res.data
        if (add && message == "done") {
          this.setState({ msg: message })
        } else {
          this.setState({ msg: message })
        }
      })
  }

  render() {
    const { submitClicked } = this.state
    return (
      <div>
        <NavBar />
        <h3>Medicine Information</h3>
        <p>Fill The Form To Add A New Medicine</p>
        <form onSubmit={this.AddMedicineInfo}>
          <label className="medicineName">Medicine Name</label>
          <input
            className="medName"
            onChange={this.updateInput}
            value={this.state.medName}
            type="text"
            name="medName"
          ></input>
          <label className="price">Price</label>
          <input
            className="medPrice"
            onChange={this.updateInput}
            value={this.state.medPrice}
            type="text"
            name="medPrice"
          ></input>
          <label className="company">Company</label>
          <input
            className="medCompany"
            onChange={this.updateInput}
            value={this.state.medCompany}
            type="text"
            name="medCompany"
          ></input>
          <input
            className="presc"
            type="checkbox"
            name="prescription"
            onChange={this.toggleCheckbox}
            value={this.state.prescription}
          />
          <label className="checkboxLabel">Needs Prescription</label>
          <input type="submit" value="Add" className="addInput" />
          {this.state.msg && <p className="addMsg">{this.state.msg}</p>}
          {!this.state.medCompany && this.state.submitClicked && (
            <p className="addCompany">Please enter a company</p>
          )}
          {!this.state.medName && this.state.submitClicked && (
            <p className="addName">Please enter a name </p>
          )}
          {!this.state.medPrice && this.state.submitClicked && (
            <p className="addPrice">Please enter a price</p>
          )}
        </form>
      </div>
    )
  }
}

export default AddMedicine
