import React, { Component } from "react"
import UpdateForm from "../UpdateForm"
import NavBar from "../NavBar"
import UserSearchResults from "../UserSearchResults"
import axios from "axios"

class UpdatePage extends Component {
  state = {
    details: "",
    login: false,
    username: ""
  }
  componentDidMount = () => {
    const { history } = this.props

    axios.get("/check-auth").then(({ data }) => {
      const { success, username } = data

      if (success) {
        this.update()

        this.setState({
          login: true,
          username
        })
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
    const { details, login, username } = this.state
    return (
      <>
        {!details ? (
          <h1>loading</h1>
        ) : (
          <>
            <NavBar login={login} username={username} {...this.props} />
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
