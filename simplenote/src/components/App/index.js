import React from 'react';
import './index.css';
import Header from '../Header';
import List from '../List';
import Note from '../Note';
import stateObj from '../state.js';
import {generateId} from '../../utils/util';
import AddNote from '../Query/query_write';

class App extends React.Component {
  state = stateObj;

  handleListItemClick = (id) => {
    this.setState({activeId : id});
    AddNote();
  }

  handleEditNote = (type, e) => {
    const notes = [...this.state.notes];
    const note = notes.find((item)=>item.id === this.state.activeId)

    note[type] = e.target.value;
    this.setState({
      notes,
    });
  }

  handleAddNote = () => {
    const id = generateId();
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id,
          title: '제목없음',
          contents: '내용을 입력하세요'
        }
      ],
      activeId: id
    })
  }

  handleDeleteNote = () => {
    const notes = this.state.notes.filter((item)=>item.id !== this.state.activeId);
    this.setState({
      notes,
      activeId: notes.length === 0 ? null : notes[0].id
    });
  }
  render() {
    const { notes, activeId } = this.state;
    const activeNote = notes.filter((item)=>item.id === activeId)[0];

    return (
      <div className="app">
        <Header
          onAddNote = {this.handleAddNote}
          onDeleteNote = {this.handleDeleteNote}
        />

        <div className="container">
          <List
            notes={notes}
            activeId={activeId}
            onListItemClick={this.handleListItemClick}
            />
            {notes.length !== 0 &&
              <Note
                notes={activeNote}
                onEditNote={this.handleEditNote}
                />}
        </div>
      </div>
    );
  }
}

export default App;