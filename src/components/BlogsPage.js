import React from 'react'
import { connect } from 'react-redux'

const parseString = require('xml2js').parseString;

class BlogsPage extends React.Component {
  state = {
    posts: [],
    loading: true
  }
  componentDidMount(){
    this.getPosts()
  }

  showPosts = (postsJSON) => {
    let postAry = []
    let i = 0
    postsJSON.forEach(postJSON => {
      let post = {
        id: i++,
        title: postJSON.title.join(),
        date: postJSON.pubDate.join(),
        body: postJSON['content:encoded'].join(),
        link: postJSON.link[0]
      }
      postAry.push(post)
    })
    this.setState({posts: [...postAry], loading: false})
  }

  getPosts = () => {
    fetch('https://cors-anywhere.herokuapp.com/https://medium.com/feed/@drdrakula96')
    .then(res => res.text()).then(xmlString => {
      parseString(xmlString, (err, result) => {
        let postsJSON = result.rss.channel[0].item
        this.showPosts(postsJSON)
      })
    })
  }
  render () {
    return (
      <div>
        <h2 className={`resume-div-${this.props.currentStyle}`}>{this.props.isSerbian ? 'Блогови' : 'Blogs'}</h2>
        <div className='blog-list'>
          {this.state.posts.map(blog => <h4 className='blog' key={blog.id}><a href={blog.link} rel="noopener noreferrer" target='_blank'>{blog.title}</a></h4>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSerbian: state.isSerbian,
    currentStyle: state.currentStyle
  }
}

export default connect(mapStateToProps)(BlogsPage);
