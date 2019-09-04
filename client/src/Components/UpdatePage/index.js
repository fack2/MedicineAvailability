import React, { Component } from 'react'
import UpdateForm from '../UpdateForm'
import NavBar from '../NavBar'
import UserSearchResults from '../UserSearchResults'

class UpdatePage extends Component {
  render () {
    return (
      <>
        <NavBar />
        <UserSearchResults />
        <UpdateForm />
      </>
    )
  }
}
export default UpdatePage
