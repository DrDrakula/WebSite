import React from 'react'
import { connect } from 'react-redux'

const ContactPage = (props) => {

  const whatStyle = (style) => {
    switch(style){
      case 'monospace':
        return (
          <div className='contact-icons'>
            <a className='contact-icons' href='https://www.linkedin.com/in/nemanja-drakulovic/' rel='noopener noreferrer' target='_blank'><img alt='LinkedIn' src={require('../images/linkedinIcon.png')} width='50' /></a>
            <a className='contact-icons' href='https://www.github.com/DrDrakula/' rel='noopener noreferrer' target='_blank'><img alt='GitHub' src={require('../images/githubIcon.jpg')} width='50' /></a>
            <a className='contact-icons' href='https://www.medium.com/@drdrakula96/' rel='noopener noreferrer' target='_blank'><img alt='Medium' src={require('../images/mediumIcon.svg')} width='50' /></a>
          </div>
        )
      case 'colorfull':
        return (
          <div className='contact-icons'>
            <a className='contact-icons' href='https://www.linkedin.com/in/nemanja-drakulovic/' rel='noopener noreferrer' target='_blank'><img alt='LinkedIn' src={require('../images/linkedinIconColor.png')} width='50' /></a>
            <a className='contact-icons' href='https://www.github.com/DrDrakula/' rel='noopener noreferrer' target='_blank'><img alt='GitHub' src={require('../images/githubIcon.jpg')} width='50' /></a>
            <a className='contact-icons' href='https://www.medium.com/@drdrakula96/' rel='noopener noreferrer' target='_blank'><img alt='Medium' src={require('../images/mediumIconColor.svg')} width='50' /></a>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className='container'>
      <h2>{props.isSerbian ? 'Контакт' : 'Contact'}</h2>
      <br/>
      <div id='contact-info'>
        <div>
          {props.isSerbian ? 'Епошта' : 'Email'}: <a href='mailto:drakulovicnemanja@gmail.com'>drakulovicnemanja@gmail.com</a>
        </div>
        <div>
          {props.isSerbian ? 'Телефон' : 'Phone'}: (917)478-9879
        </div>
      </div>

      {whatStyle(props.currentStyle)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isSerbian: state.isSerbian,
    currentStyle: state.currentStyle
  }
}

export default connect(mapStateToProps)(ContactPage)
