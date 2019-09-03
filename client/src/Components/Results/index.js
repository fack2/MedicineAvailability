import React, { Component } from 'react'
import CustomerPharmacyInfo from '../CustomerPharmacyInfo'
import UserSearchResults from '../UserSearchResults'
import NavBar from '../NavBar'

class Results extends Component {
  render () {
    const { data } = this.props.history.location
    const info = data.data

    return (
      <>
        <NavBar />
        {info.map(item => {
          return (
            <CustomerPharmacyInfo
              pharmacyname={item.pharmacyname}
              price={item.price}
            />
          )
        })}
        <UserSearchResults
          img={info[0].img}
          description={info[0].description}
          medicinename={info[0].medicinename}
        />
      </>
    )
  }
}
export default Results
