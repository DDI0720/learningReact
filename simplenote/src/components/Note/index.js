import React from 'react';
import './index.css';

class Note extends React.Component {
    render() {
        const { notes, onEditNote } = this.props;
        const { title, contents } = !notes ? '-' : notes;
        return (
            <div className="note">
                <input
                    className="title"
                    value = {title}
                    onChange = {(e)=>onEditNote('title', e)}
                />
                <textarea
                    className="note-contents"
                    value = {contents}
                    onChange = {(e)=>onEditNote('contents', e)}
                />
            </div>
        )
    }
}

export default Note