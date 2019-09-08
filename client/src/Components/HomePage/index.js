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
		let url = ''
		if (!location && !pharmacy) {
			url = `/api/medicine/${medname}`
		} else if (!location) {
			url = `/api/medicine/${medname}/${pharmacy}`
		} else if (!pharmacy) {
			url = `/api/medicine/${medname}/${location}`
		} else {
			url = `/api/medicine/${medname}/${location}/${pharmacy}`
		}
		// This should handle in backend
		axios.get(url).then(({ data }) => {
			this.setState({
				pharmaciesResult: data
			})
			history.push({ pathname: '/results', data })
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
