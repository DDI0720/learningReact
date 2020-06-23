import React from 'react';
import './index.css';

class Note extends React.Component {
    render() {
        const { notes } = this.props;
        const { title, contents } = notes;
        return (
            <div className="note">
                <input
                    className="title"
                    value = {title}
                />
                <textarea
                    className="note-contents"
                    value = {contents}
                />
            </div>
        )
    }
}

export default Note