import React, { Component } from 'react'
import Header from '../Header'
import Search from '../Search'
import axios from 'axios'

import PharmacyHome from '../PharmacyHome'

class HomePage extends Component {
	state = {
		pharmaciesResult: '',
		medname: '',
		location: '',
		pharmacy: ''
	}

	changeInput = ({ target: { value, name } }) => {
		this.setState({ [name]: value })
	}

	searchHandler = () => {
		const { medname, location, pharmacy } = this.state
		const { history } = this.props

		// This should handle in backend
		axios.get(`/api/medicine/${medname}`).then(({ data }) => {
			let result = ""
			if (location && pharmacy) {
				result = data.data.filter(ele => ele.location == location && ele.pharmacyname == pharmacy)
			} else if (location) {
				result = data.data.filter(ele => ele.location = location)
			} else if (pharmacy) {
				result = data.data.filter(ele => ele.pharmacy = pharmacy)
			} else {
				result = data.data
			}
			this.setState({ pharmaciesResult: result })
			history.push({ pathname: '/results', result })
		})
	}

	searchByLocation = ({ target: { value } }) => {
		this.setState({ location: value })
	}

	searchByPharmacy = ({ target: { value } }) => {
		this.setState({ pharmacy: value })
	}

	render() {
		return (
			<>
				<Header />
				<Search
					handleSearch={this.searchHandler}
					changInput={this.changeInput}
					medname={this.state.medname}
					pharmaciesResult={this.state.pharmaciesResult}
					searchByLocation={this.searchByLocation}
					location={this.state.location}
					searchByPharmacy={this.searchByPharmacy}
					pharmacy={this.state.pharmacy}
				/>
			</>
		)
	}
}
export default HomePage
