import React from 'react'
import { connect } from 'react-redux'

const ProjectsPage = (props) => {
  return (
    <div className='container'>
      <h2>{props.isSerbian ? 'Пројекти' : 'Projects'}</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isSerbian: state.isSerbian
  }
}

export default connect(mapStateToProps)(ProjectsPage)
