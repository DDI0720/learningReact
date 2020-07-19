import React from 'react';
import './index.css';

class Header extends React.Component {
    render () {
        const {onAddNote, onDeleteNote} = this.props;

        return (
            <div className="header">
                <div className="title">
                    <span>
                        Note-App
                    </span>
                </div>
                <div className="buttons">
                    <button className="addBtn" onClick={onAddNote}>+</button>
                    <button className="delBtn" onClick={onDeleteNote}> - </button>
                </div>
            </div>
        );
    }
}

export default Header