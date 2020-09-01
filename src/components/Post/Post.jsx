import React from 'react'
import "./style.css";
import Avatar from "@material-ui/core/Avatar"

function Post({username, caption, imageUrl }) {
    return (
        <div className="post">
            <div className="post__header">
            <Avatar 
            className="post__avatar"
            alt="kaptainklob77"
            src="https://www.popsci.com/resizer/oBw2zifFCqH3deU6vy2bPRSG99Q=/760x456/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/WMD5M52LJFBEBIHNEEABHVB6LA.jpg"
            />
            <h3 className="post__username">{username}</h3>
            </div>
            {/* Header -> avatar & username */}

            {/* image */}
            <img className= "post__image" src={imageUrl}/>

            {/* username & caption */}
            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default Post
