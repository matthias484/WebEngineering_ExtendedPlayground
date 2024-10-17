import React, { useState } from 'react';

const Comments: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const toggleComments = () => setIsVisible(!isVisible);

    const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name && comment) {
            setComments([...comments, { name, comment }]);
            setName('');
            setComment('');
        }
    };

    return (
        <div className="comments-section">
            <h2>Comments</h2>
            <button className="toggle-btn" onClick={toggleComments}>
                {isVisible ? 'Hide comments' : 'Show comments'}
            </button>
            <div>
                <form onSubmit={handleCommentSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                    />
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Your comment"
                    />
                    <button type="submit">Add Comment</button>
                </form>
            </div>
            {isVisible && (
                <ul className="comments-list">
                    {comments.length > 0 ? (
                        comments.map((c, index) => (
                            <li key={index}>
                                <strong>{c.name}</strong>: {c.comment}
                            </li>
                        ))
                    ) : (
                        <p>No comments yet.</p>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Comments;
