import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './PharmacyHome.css'


class PharmacyHome extends Component {
    state = {
        medName: '',
        pharmacyID: '',
        medResult: ''
    }

    inputHandler = event => {
        const { value } = event.target;
        this.setState({ medName: value })
    }

    submitHandler = () => {
        const { medResult, medName: medName } = this.state
        const { history } = this.props

        axios.get(`/api/pharmacy/${pharmacyID}/medicine/${medName}`).then(({ data }) => {
            this.setState({
                medResult: data
            })
            history.push({ pathname: `/pharmacy/medInfo/${medName}`, data: medResult })
        })
    }

    render() {
        return (
            <div>
                <div className="headerHome " />
                <div className="logoImg" />
                <p className="searchToUpdate">Search to Update</p>
                <input placeholder='search/edit medicine' className="pharmacySearch" type='text' onChange={this.inputHandler} value={this.state.medName}></input>
                <button className='searchBtn' type="submit" onClick={this.submitHandler}>Search</button>

                <p className="or">--------------------------- OR --------------------------</p>

                <button className="addBtn" type="submit">Add Medicine</button>

            </div >
        )
    }
}

export default PharmacyHome
