import React from 'react';

export const Post = ({post}) => {
    return (
        <div>
            <span>{post.title}</span>
            <hr/>
        </div>
    );
};

export default Post;