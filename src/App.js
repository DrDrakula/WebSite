import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleSerbian, changePage } from './actions'
import AboutPage from './components/AboutPage'
import './App.css';

class App extends Component {

  handlePageClick = (event) => {
    this.props.changePage(event.target.id)
  }

  handleCurrentPage = () => {
    if(this.props.currentPage === 'home'){
      return (
        <p className="App-intro">
          {
            this.props.isSerbian ?
              'Да започнете, промените <code>src/App.js</code> и сачувајте да освежите страницу.'
              :
              'To get started, edit <code>src/App.js</code> and save to reload.'
          }
        </p>
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
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">{this.props.isSerbian ? 'НД' : 'ND'}</h1>
            <ul>
              <li><span id='About Me' onClick={this.handlePageClick}>{this.props.isSerbian ? 'О мени' : 'About Me'}</span></li>
              <li><span id='Projects' onClick={this.handlePageClick}>{this.props.isSerbian ? 'Пројекти' : 'Projects'}</span></li>
              <li><span id='Resume' onClick={this.handlePageClick}>{this.props.isSerbian ? 'Резиме' : 'Resume'}</span></li>
              <li><span id='Contact' onClick={this.handlePageClick}>{this.props.isSerbian ? 'Контакт' : 'Contact'}</span></li>
            </ul>
        </div>
        <div className='col'>
          <p className="App-intro">
            {this.handleCurrentPage()}
          </p>
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
