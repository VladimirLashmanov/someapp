import React from 'react';

export const Comment = ({comment}) => {
    return (
        <div>
            <span>{comment.body}</span>
            <hr/>
        </div>
    );
};

export default Comment;