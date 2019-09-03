import React, { Component } from 'react'
import NavBar from './../NavBar'
import './style.css'

class AddMedicine extends Component {
	state = {
		medName: '',
		medPrice: '',
		medCompany: ''
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
						name="name"
						value={this.state.medName}
						type="text"
					></input>
					<label className="price">Price</label>
					<input
						className="medPrice"
						name="price"
						value={this.state.medPrice}
						type="text"
					></input>
					<label className="company">Company</label>
					<input
						className="medCompany"
						name="company"
						value={this.state.medCompany}
						type="text"
					></input>
					<input type="checkbox" /> <label className="checkboxLabel">Needs Prescription</label>
					<button type="submit">Add</button>
				</form>
			</div>
		)
	}
}

export default AddMedicine
