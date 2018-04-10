import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleSerbian, changePage } from './actions'
import AboutPage from './components/AboutPage'
import AsciiImage from './components/AsciiImage'
import './App.css';

class App extends Component {

  handlePageClick = (event) => {
    console.log(event.target)
    this.props.changePage(event.target.id)
  }

  handleCurrentPage = () => {
    if(this.props.currentPage === 'home'){
      return (
        <div className="intro">
          <div className='container'>
            Home
          </div>
          {
            this.props.isSerbian ?
              'Да започнете, промените <code>src/App.js</code> и сачувајте да освежите страницу.'
              :
              'To get started, edit <code>src/App.js</code> and save to reload.'
          }
          'To get started, edit <code>src/App.js</code> and save to reload.'
        </div>
      )
    }else if(this.props.currentPage === 'About Me'){
      return <AboutPage />
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
          <ul class="nav justify-content-center" style={{'background-color':'#222', 'color':'white'}}>
            <a class="navbar-brand links" id='home' onClick={this.handlePageClick}>{this.props.isSerbian ? 'НД' : 'ND'}</a>
            <li class="nav-item">
              <a class="nav-link"id='About Me' onClick={this.handlePageClick}>{this.props.isSerbian ? 'О мени' : 'About Me'}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"id='Projects' onClick={this.handlePageClick}>{this.props.isSerbian ? 'Пројекти' : 'Projects'}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"id='Resume' onClick={this.handlePageClick}>{this.props.isSerbian ? 'Резиме' : 'Resume'}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled"id='Contact' onClick={this.handlePageClick}>{this.props.isSerbian ? 'Контакт' : 'Contact'}</a>
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
