import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/Post/Post";
import { db } from "./firebase"

function App() {
  const [posts, setPosts] = useState([
    // {
    //   username: "kaptainklob77",
    //   caption: "insta clone!!",
    //   imageUrl: "https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg"
    // },

    // {
    //   username: "kaptainklob77",
    //   caption: "insta clone!!",
    //   imageUrl: "https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg"
    // },


  ]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })

  }, [])

  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Logo.wine.svg"
          alt=""
        />
      </div>
      <h1>Hello Everyone!</h1>

      {/* Header */}

      {/* Posts */}
      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
      {/* <Post
        imageUrl="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg"
        username="kaptainklob77"
        caption="insta clone!!"
      />
      <Post
        username="bennyg50"
        caption="I'm angry"
        imageUrl="https://d1fegwn2wjh0cs.cloudfront.net/08-26-2020/t_42b4b005d6734365add0268c641ad2bd_name_s3___ajc_arc_photo_integration_Freelancer_082520_FALCONS_CC11.jpg"
      />
      <Post
        username="jgarrison55"
        caption="I'm lost"
        imageUrl="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/qVY4TW15GGYpX68SDdhQWczGd1E=/1440x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/RX7S4QMMIPUC6FPGJPBKRH5RQI.jpg"
      /> */}
    </div>
  );
}

export default App;
