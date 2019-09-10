import React from 'react'
import Header from '../Header/'
import Search from '../Search/'

const HomePage = props => {
  return (
    <>
      <Header home={true} />
      <Search {...props} />
    </>
  )
}
export default HomePage
