import React from 'react'
import { connect } from 'react-redux'
const ContactPage = (props) => {
  return (
    <div className='container'>
      <h2>{props.isSerbian ? 'Контакт' : 'Contact'}</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isSerbian: state.isSerbian
  }
}

export default connect(mapStateToProps)(ContactPage)
