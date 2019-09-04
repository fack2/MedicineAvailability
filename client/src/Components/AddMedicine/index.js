import React, { Component } from 'react'
import NavBar from './../NavBar'
import './style.css'

class AddMedicine extends Component {
	state = {
		medName: '',
		medPrice: '',
		medCompany: '',
		prescription: false
	}

	updateInput = event => {
		const { value, name } = event.target
		this.setState({ [name]: value })
	}

	toggleCheckbox = () => {
		this.setState({ prescription: !this.state.prescription })
	}

	render() {
		return (
			<div>
				<NavBar />
				<h3>Medicine Information</h3>
				<p>Fill The Form To Add A New Medicine</p>
				<form>
					<label className="medicineName">Medicine Name</label>
					<input
						className="medName"
						onChange={this.updateInput}
						value={this.state.medName}
						type="text"
						name="medName"
					></input>
					<label className="price">Price</label>
					<input
						className="medPrice"
						onChange={this.updateInput}
						value={this.state.medPrice}
						type="text"
						name="medPrice"
					></input>
					<label className="company">Company</label>
					<input
						className="medCompany"
						onChange={this.updateInput}
						value={this.state.medCompany}
						type="text"
						name="medCompany"
					></input>
					<input
						type="checkbox"
						name="prescription"
						onChange={this.toggleCheckbox}
						value={this.state.prescription}
					/>
					<label className="checkboxLabel">Needs Prescription</label>
					<button type="submit">Add</button>
				</form>
			</div>
		)
	}
}

export default AddMedicine
