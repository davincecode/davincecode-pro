import React, { useState, useEffect } from 'react';
import "./post.scss";
import axios from 'axios';


function Posts() {

  const [posts, setPosts] = useState([]);

  const mediumURL = import.meta.env.VITE_REACT_APP_MEDIUM_URL;

  useEffect(() => {
    try {
      axios.get(mediumURL)
        .then(res => {
          setPosts(res.data.items);
          console.log(res.data.items); 
        })
    }
    catch (error) {
      console.log(error);
    }
  }, [ mediumURL ]);


  return (
    <div className="posts-container">
    <div className='post-wrapper'>
        { posts.map(post => (
          <div className='post-card' key={ post.title }>
            <div className='post-card-body'>
              <div dangerouslySetInnerHTML={ { __html: post.content } } />    
            </div>
          </div>
        ))}
      </div>
      <span className='more'><a href='https://medium.com/@vncntybnz/build-real-time-apps-learning-websockets-2d90ebc750cf' >more blogs soon via Medium Api</a></span>
    </div>
  )
}

export default Posts