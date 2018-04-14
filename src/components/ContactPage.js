import React from 'react'
import { connect } from 'react-redux'

const ContactPage = (props) => {
  return (
    <div className='container'>
      <h2>{props.isSerbian ? 'Контакт' : 'Contact'}</h2>
      <br/>
      <div id='contact-info'>
        <div>
          Email: <a href='mailto:drakulovicnemanja@gmail.com'>drakulovicnemanja@gmail.com</a>
        </div>
        <div>
          Phone: (917)478-9879
        </div>
      </div>

      <div>
        <a className='contact-icons' href='https://www.linkedin.com/in/nemanja-drakulovic/' rel='noopener noreferrer' target='_blank'><img alt='LinkedIn' src={require('../images/linkedinIcon.png')} width='50' /></a>
        <a className='contact-icons' href='https://www.github.com/DrDrakula/' rel='noopener noreferrer' target='_blank'><img alt='GitHub' src={require('../images/githubIcon.jpg')} width='50' /></a>
        <a className='contact-icons' href='https://www.medium.com/@drdrakula96/' rel='noopener noreferrer' target='_blank'><img alt='Medium' src={require('../images/mediumIcon.svg')} width='50' /></a>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isSerbian: state.isSerbian
  }
}

export default connect(mapStateToProps)(ContactPage)
