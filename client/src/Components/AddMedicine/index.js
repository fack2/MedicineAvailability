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
        <p className="discrip">Fill The Form To Add A New Medicine</p>
        <form onSubmit={this.AddMedicineInfo}>
          <div className="addForm">
            <label className="label">Medicine Name
          <input
                className="info"
                onChange={this.updateInput}
                value={medName}
                type="text"
                name="medName"
              /> </label>
            {!medCompany && submitClicked && (
              <p className="msg">Please enter a name</p>
            )}
            <label className="label">Price
          <input
                className="info"
                onChange={this.updateInput}
                value={medPrice}
                type="text"
                name="medPrice"
              /> </label>
            {!medName && submitClicked && (
              <p className="msg">Please enter Price </p>
            )}
            <label className="label">Company
          <input
                className="info"
                onChange={this.updateInput}
                value={medCompany}
                type="text"
                name="medCompany"
              />     </label>
            {!medPrice && submitClicked && (
              <p className="msg">Please enter a Company</p>
            )}
            <label className="checkboxLabel">
              <input
                className="checkboxInfo"
                type="checkbox"
                name="prescription"
                onChange={this.toggleCheckbox}
                value={prescription}
              />
              Needs Prescription
          </label>
            <input type="submit" value="Add" className="submitInfo" />
            {msg && <p className="addMsg">{msg}</p>}



          </div>
        </form>
      </div>
    )
  }
}

export default AddMedicine
