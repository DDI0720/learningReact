import React from 'react';
import './index.css';

class Header extends React.Component {
    render () {
        const {activeNote, onAddNote, onDeleteNote} = this.props;

        return (
            <div className="header">
                <div className="title">
                    <span>
                        Note-App
                    </span>
                </div>
                <div className="buttons">
                    <button onClick={onAddNote}>ADD</button>
                    <button onClick={()=>{onDeleteNote(activeNote.id)}}>DEL</button>
                </div>
            </div>
        );
    }
}

export default Header