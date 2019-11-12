import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Placeholder from '../placeholder.png'

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount(){
        /*
        axios get request is async, it returns a promise
        the get request takes some time, so we can't just use result immediately
        Since it returns promise we can use .then method that only runs when
        request is completed. So inside then method we call a callback
        that invokes when get request is complete. The callback takes 
        response object from the request as a parameter.
        */
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(res => {
              console.log(res)
              this.setState({
                  posts: res.data.slice(0,10)
              })
          })
        
    }
    render(){
        const {posts} = this.state
        const postList = posts.length ? (
            posts.map(post=>{
                //snippet of JSX for each individual post
                return (
                    <div className="post card" key={post.id}>
                        <img src={ Placeholder } alt="placeholder image" />
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                              <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}
export default Home;