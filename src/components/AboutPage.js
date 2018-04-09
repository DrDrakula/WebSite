import React from 'react'
import { connect } from 'react-redux'

const AboutPage = (props) => {

  function handleText(){
    if(props.isSerbian){
      return (
        <div>
          <h3>Ћао свима!</h3>
          <p>Ја се ѕовем Немања Дракуловић и бавим се веб девелопментом.</p>
        </div>
      )
    }else{
      return (
        <div>
          <h3>Hi Everyone!</h3>
          <p>My name is Nemanja Drakulovic, and I'm a Full Stack Web Developer.</p>
        </div>
      )
    }
  }

  return (
    <div>
      {handleText()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    cheat: state.cheat,
    isSerbian: state.isSerbian,
    currentPage: state.currentPage
  }
}

export default connect(mapStateToProps)(AboutPage)
