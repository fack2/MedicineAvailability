import React, { Component } from 'react'
import CustomerPharmacyInfo from '../CustomerPharmacyInfo'
import UserSearchResults from '../UserSearchResults'
import NavBar from '../NavBar'

class Results extends Component {
  render () {
    // const { data } = this.props.history.location
    // const info = data.data
    const data1 = sessionStorage.getItem('results')
    const info = JSON.parse(data1)
    console.log('form', info.data)

    return (
      <>
        <NavBar />
        {info.data.map((item, i) => {
          console.log('item', item)

          return (
            <CustomerPharmacyInfo
              item={item}
              pharmacyname={item.pharmacyname}
              price={item.price}
              history={this.props.history}
              key={i}
            />
          )
        })}
        <UserSearchResults
          img={info.data[0].img}
          description={info.data[0].description}
          medicinename={info.data[0].medicinename}
        />
      </>
    )
  }
}
export default Results
