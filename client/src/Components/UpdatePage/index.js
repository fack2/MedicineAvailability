import React, { Component } from "react"
import UpdateForm from "../UpdateForm"
import NavBar from "../NavBar"
import UserSearchResults from "../UserSearchResults"
import axios from "axios"

class UpdatePage extends Component {
  state = {
    details: "",
    login: false
  }
  componentDidMount = () => {
    const { history } = this.props

    axios.get("/check-auth").then(({ data }) => {
      const { success } = data

      if (success) {
        {
          {
            this.update()
          }
          {
            this.setState({
              login: true
            })
          }
        }
      } else {
        history.push("/login")
      }
    })
  }

  update = () => {
    const { medname } = this.props.match.params
    axios.get(`/api/pharmacy/medicine/${medname}`).then(({ data }) => {
      this.setState({
        details: data
      })
    })
  }

  render() {
    const { details } = this.state
    return (
      <>
        {!details ? (
          <h1>loading</h1>
        ) : (
          <>
            <NavBar />
            <UserSearchResults
              img={details.img}
              description={details.description}
              medicinename={details.name}
            />
            <UpdateForm details={details} />
          </>
        )}
      </>
    )
  }
}
export default UpdatePage
