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
    login: false,
    username: ""
  }

  componentDidMount = () => {
    const { history } = this.props

    axios.get("/check-auth").then(({ data }) => {
      const { success, username } = data

      if (success) {
        this.setState({
          login: true,
          username
        })
      } else {
        history.push("/login")
      }
    })
  }

  updateInput = event => {
    const { value, name } = event.target
    this.setState({ [name]: value, submitClicked: false })
  }

  toggleCheckbox = () => {
    this.setState({ prescription: !this.state.prescription })
  }

  AddMedicineInfo = event => {
    event.preventDefault()
    this.setState({ msg: "" })

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
        const { message } = res.data
        this.setState({ msg: message })
      })
  }

  render() {
    const {
      medCompany,
      medName,
      medPrice,
      prescription,
      msg,
      submitClicked,
      login,
      username
    } = this.state

    return (
      <div>
        <NavBar login={login} username={username} {...this.props} />
        <h3>Medicine Information</h3>
        <p>Fill The Form To Add A New Medicine</p>
        <form onSubmit={this.AddMedicineInfo}>
          <label className="medicineName">Medicine Name</label>
          <input
            className="medName"
            onChange={this.updateInput}
            value={medName}
            type="text"
            name="medName"
          />
          <label className="price">Price</label>
          <input
            className="medPrice"
            onChange={this.updateInput}
            value={medPrice}
            type="text"
            name="medPrice"
          />
          <label className="company">Company</label>
          <input
            className="medCompany"
            onChange={this.updateInput}
            value={medCompany}
            type="text"
            name="medCompany"
          />
          <input
            className="presc"
            type="checkbox"
            name="prescription"
            onChange={this.toggleCheckbox}
            value={prescription}
          />
          <label className="checkboxLabel">Needs Prescription</label>
          <input type="submit" value="Add" className="addInput" />
          {msg && <p className="addMsg">{msg}</p>}
          {!medCompany && submitClicked && (
            <p className="addCompany">Please enter a company</p>
          )}
          {!medName && submitClicked && (
            <p className="addName">Please enter a name </p>
          )}
          {!medPrice && submitClicked && (
            <p className="addPrice">Please enter a price</p>
          )}
        </form>
      </div>
    )
  }
}

export default AddMedicine
