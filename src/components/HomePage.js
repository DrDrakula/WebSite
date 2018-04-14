import React from 'react'
import AsciiImage from './AsciiImage'
import BlogsPage from './BlogsPage'
import { connect } from 'react-redux'
import { changeStyle } from '../actions'

const HomePage = (props) => {

  const handleStyleClick = (event) => {
    props.changeStyle(event.target.id)
  }

  const displaySelfPortrait = () => {
    switch(props.currentStyle){
      case 'monospace':
        return <AsciiImage />
      default:
        return (<div style={{"display":"block", "font-weight":"bold","white-space":"pre","font-family": "monospace",'text-align':'center',"color": "black", "background": "white"}}><img alt='Self Portrait' src={require('../images/nemanja.jpg')} width='220px'/></div>)
    }
  }

  return (
    <div className="container">
      <h2>
        {props.isSerbian ? 'Добродошли' : 'Welcome'}
      </h2>
      <br/>
      <div className='row'>
        <div className='col'>
          <h2 className={`resume-div-${props.currentStyle}`}>Styles</h2>
          <div className='row'>
            <div className='col'>
              <div><span id='monospace' onClick={handleStyleClick}>{props.currentStyle === 'monospace' ? '• ' : null}Monospace</span></div>
              <div><span id='colorfull' onClick={handleStyleClick}>{props.currentStyle === 'colorfull' ? '• ' : null}Colorfull</span></div>
            </div>
            <div className='col'>
              {displaySelfPortrait()}
              <br/>
            </div>
          </div>
        </div>

        <div className='col'>
          <BlogsPage />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isSerbian: state.isSerbian,
    currentStyle: state.currentStyle
  }
}

export default connect(mapStateToProps, { changeStyle })(HomePage)
