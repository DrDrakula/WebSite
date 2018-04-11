import React from 'react'
import { connect } from 'react-redux'

const ResumePage = (props) => {
  return (
    <div className='container'>
      <br/>
      <div className='resume-page'>
        <h3 className='resume-div'>TECHNICAL PROJECTS</h3>
        <div>
          <h4>WeWatch - <a href='https://github.com/DrDrakula/WeWatch' rel="noopener noreferrer" target='_blank'>GitHub</a> | <a href='https://www.youtube.com/watch?v=BarrjKgcmb0' rel="noopener noreferrer" target='_blank'>Demo</a></h4>
          A chatroom app made to allow users to watch online videos at the same time
          <ul>
            <li>Created front end with React, Redux, Materialize and custom CSS</li>
            <li>Designed the database schema and configured ActiveRecord associations</li>
            <li>Used WebSockets to allow users to chat and manipulate the current video</li>
            <li>Handled Cross-Origin Resource Sharing with Rack CORS</li>
            <li>Enabled cryptographic signing with the JWT gem</li>
          </ul>
        </div>
        <br/>
        <div>
          <h4>Sandwich Shop - <a>GitHub Frontend</a> | <a>GitHub Backend</a> | <a>Demo</a></h4>
          Video Game with the goal of earning money by making and selling sandwiches
          <ul>
            <li>Designed an interactive front end with JavaScript</li>
            <li>Built custom CSS to structure and designed the front end</li>
            <li>Designed the database schema and configured ActiveRecord associations</li>
            <li>Created the back end and data persisting abilities with Ruby on Rails</li>
          </ul>
        </div>
        <br/>
        <div>
          <h4>Super Cool Game – GitHub Frontend | GitHub Backend | Demo</h4>
          2D Video Game where you avoid ghosts, collect coins and navigate through a maze
          <ul>
            <li>Used React for designing the front end, as well as custom CSS and Materialize</li>
            <li>Configured ActiveRecord associations, and designed the database schema</li>
            <li>Handled Cross-Origin Resource Sharing with Rack CORS</li>
            <li>Enabled cryptographic signing with the JWT gem</li>
          </ul>
        </div>
      </div>
      <br/>
      <div>
        <h3 className='resume-div'>EMPLOYMENT HISTORY</h3>
        <div>
          <h4>ASI System Integration, New York, NY</h4>
          Computer Technician, September 2016 – December 2017
          <ul>
            <li>Quickly managed job assignments, traveled between sites and assured customer satisfaction</li>
            <li>Rapidly and accurately repaired PCs, MacBooks, iMacs and laptops</li>
            <li>Often completed assigned ticket list ahead of time and assisted other technicians with their assignments</li>
          </ul>
        </div>
        <div>
          <h4>Tempo, Belgrade, Serbia</h4>
          Quality Control and Security Supervisor, December 2014 – May 2015
          <ul>
            <li>Ensured integrity and safety of high-end merchandise upon delivery</li>
            <li>Verified safe pickup and transport of packages</li>
            <li>Trained new employees on processes and procedures</li>
          </ul>
        </div>
        <div>
          <h4>Third Serbia, Belgrade, Serbia</h4>
          Campaign Assistant, October 2014 – December 2014
          <ul>
            <li>Led logistics for campaign meetings and events</li>
            <li>Fielded questions from the public</li>
            <li>Recruited employees for a variety of roles</li>
          </ul>
        </div>
        <br/>
      </div>
      <div>
        <h3 className='resume-div'>EDUCATION</h3>
        <div>
          <h4>Flatiron School - 2018</h4>
          <ul>
            <li>Full Stack Web Development, Ruby on Rails and JavaScript web development program</li>
          </ul>
        </div>
        <div>
          <h4>Information Technology School - Belgrade, Serbia - 2015 – 2016</h4>
          <ul>
            <li>Computer Science major with coursework including hardware, HTML and mathematics and algorithms towards diploma</li>
          </ul>
        </div>
      </div>
      <br/>
      <div style={{'marginBottom':'20%'}}>
        <h3 className='resume-div'>TECHNICAL SKILLS</h3>
        Ruby, Rails, SQL, JavaScript, React, Redux, Python, Java, CSS, HTML
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isSerbian: state.isSerbian
  }
}

export default connect(mapStateToProps)(ResumePage)
