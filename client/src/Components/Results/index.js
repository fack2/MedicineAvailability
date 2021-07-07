import React, { Component } from 'react'
import CustomerPharmacyInfo from '../CustomerPharmacyInfo'
import UserSearchResults from '../UserSearchResults'
import NavBar from '../NavBar'

class Results extends Component {
  render () {
    const data = sessionStorage.getItem('results')
    const info = JSON.parse(data)

    return (
			<>
				<NavBar login={false} username="Home" {...this.props} />
				<div className="divD">
				  {info.map((item, i) => {
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
				</div>
				<UserSearchResults
				  img={info[0].img}
				  description={info[0].description}
				  medicinename={info[0].medicinename}
				/>
				{info[0].prescription === true ? (
				  <p className="preD">Prescription: Yes</p>
				) : (
				  <p className="preD">Prescription: No </p>
				)}
			</>
    )
  }
}

export default Results
