import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleSerbian, changePage, changeStyle } from './actions'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import ProjectsPage from './components/ProjectsPage'
import ResumePage from './components/ResumePage'
import HomePage from './components/HomePage'
import './App.css';

class App extends Component {

  handlePageClick = (event) => {
    this.props.changePage(event.target.id)
  }

  handleCurrentPage = () => {
    switch(this.props.currentPage){
      case 'home':
        return <HomePage />
      case 'About Me':
        return <AboutPage />
      case 'Contact':
        return <ContactPage />
      case 'Projects':
        return <ProjectsPage />
      case 'Resume':
        return <ResumePage />
      default:
        return null
    }
  }

  componentDidMount(){
    let count = 0
    const body = document.querySelector('body')
    body.addEventListener('keypress', (event) => {
      if(event.key === this.props.cheat[count]){
        count++
        if(count === this.props.cheat.length){
          this.props.toggleSerbian()
          count = 0
        }
      }else{
        count = 0
      }
    })
  }



  render() {
    return (
      <div className={this.props.currentStyle}>
        <div className='NavHeader'>
          <ul className={`nav justify-content-center ${this.props.currentStyle}-nav-bar`}>
            <a className="navbar-brand links" id='home' onClick={this.handlePageClick}>{this.props.isSerbian ? 'НД' : 'ND'}</a>
            <li className="nav-item">
              <a className="nav-link phone-links"id='About Me' onClick={this.handlePageClick}>{this.props.isSerbian ? 'О мени' : 'About Me'}</a>
            </li>
            {
            //<li className="nav-item">
              //<a className="nav-link"id='Projects' onClick={this.handlePageClick}>{this.props.isSerbian ? 'Пројекти' : 'Projects'}</a>
            //</li>
            }
            <li className="nav-item">
              <a className="nav-link phone-links"id='Resume' onClick={this.handlePageClick}>{this.props.isSerbian ? 'Резиме' : 'Resume'}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled phone-links"id='Contact' onClick={this.handlePageClick}>{this.props.isSerbian ? 'Контакт' : 'Contact'}</a>
            </li>
          </ul>
        </div>
        <div className='App'>
          <div className='col'>
            <div className="intro">
              {this.handleCurrentPage()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    cheat: state.cheat,
    isSerbian: state.isSerbian,
    currentPage: state.currentPage,
    currentStyle: state.currentStyle
  }
}

export default connect(mapStateToProps, { toggleSerbian, changePage, changeStyle })(App);
