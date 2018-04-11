import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleSerbian, changePage } from './actions'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import ProjectsPage from './components/ProjectsPage'
import ResumePage from './components/ResumePage'
// import AsciiImage from './components/AsciiImage'
import './App.css';

class App extends Component {

  handlePageClick = (event) => {
    console.log(event.target)
    this.props.changePage(event.target.id)
  }

  handleCurrentPage = () => {
    switch(this.props.currentPage){
      case 'home':
        return (
          <div className="container intro">
            <h2>
              {this.props.isSerbian ? 'Добродошли' : 'Welcome'}
            </h2>
            <br/>
            {
              this.props.isSerbian ?
              'Да започнете, промените <code>src/App.js</code> и сачувајте да освежите страницу.'
              :
              'To get started, edit <code>src/App.js</code> and save to reload.'
            }
          </div>
        )
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
      <div>
        <div className='NavHeader'>
          <ul className="nav justify-content-center" style={{'backgroundColor':'#222', 'color':'white'}}>
            <a className="navbar-brand links" id='home' onClick={this.handlePageClick}>{this.props.isSerbian ? 'НД' : 'ND'}</a>
            <li className="nav-item">
              <a className="nav-link"id='About Me' onClick={this.handlePageClick}>{this.props.isSerbian ? 'О мени' : 'About Me'}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"id='Projects' onClick={this.handlePageClick}>{this.props.isSerbian ? 'Пројекти' : 'Projects'}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"id='Resume' onClick={this.handlePageClick}>{this.props.isSerbian ? 'Резиме' : 'Resume'}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled"id='Contact' onClick={this.handlePageClick}>{this.props.isSerbian ? 'Контакт' : 'Contact'}</a>
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
    currentPage: state.currentPage
  }
}

export default connect(mapStateToProps, { toggleSerbian, changePage })(App);
