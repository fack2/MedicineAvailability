import React, { Component } from 'react'
import Header from '../Header'
import Search from '../Search'
import axios from 'axios'
import PharmacyHome from '../PharmacyHome';

class HomePage extends Component {
  state = {
    pharmaciesResult: "",
    medicineName: ""
  }

	changeInput = event => {
		const { target } = event
		const { value, name } = target
		this.setState({ [name]: value })
	}

	searchHandler = () => {
		const { pharmaciesResult, medname: medname } = this.state
		const { history } = this.props

		// This should handle in backend
		axios.get(`/api/medicine/${medname}`).then(({ data }) => {
			console.log(data)
			this.setState({
				pharmaciesResult: data
			})
			history.push({ pathname: '/results', data: pharmaciesResult })
			console.log(pharmaciesResult)
		})
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
				/>
			</>
		)
	}
}
export default HomePage
