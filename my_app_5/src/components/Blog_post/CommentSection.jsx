 import React, { useState, useReducer } from 'react';

const initialState = [];

const comment_reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, { id: Date.now(), text: action.payload }];
        default:
            return state;
    }
}

const CommentSection = ({ postID }) => {
    const [comments, dispatch] = useReducer(comment_reducer, initialState);
    const [text, setText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (text.trim()) {
            dispatch({ type: 'ADD_COMMENT', payload: text });
            setText('');
        }
    };

    return (
        <div>
            <h4>Comments</h4>
            {comments.length === 0
                ? <p>No Comments Yet.</p>
                : comments.map(comment => <li key={comment.id}>{comment.text}</li>)
            }
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    placeholder='Write a Comment'
                    onChange={e => setText(e.target.value)}
                />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default CommentSection;