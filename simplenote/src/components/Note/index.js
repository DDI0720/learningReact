import React from 'react';
import './index.css';

class Note extends React.Component {
    render() {
        return (
            <div className="note">
                <input className="title" />
                <textarea className="note-contents" />
            </div>
        )
    }
}

export default Note