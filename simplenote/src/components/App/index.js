import React from 'react';
import './index.css';
import Header from '../Header';
import List from '../List';
import Note from '../Note';

class App extends React.Component {
  state = {
    notes: [
      {
        id: '안녕 난 첫번째 노트',
        title: '그래 난 타이틀1',
        contents: '내용1'
      },
      {
        id: '히히히히히',
        title: '제목22',
        contents: '내용22'
      },
      {
        id: '간장연어장',
        title: '탄산수',
        contents: '마요네즈'
      },
  ],
    activeId: '간장연어장',
  }

  handleListItemClick = (id) => {
    this.setState({activeId : id});
  }

  handleEditNote = (type, e) => {
    const notes = [...this.state.notes];
    const note = notes.find((item)=>item.id === this.state.activeId)

    note[type] = e.target.value;
    this.setState({
      notes,
    });
  }

  render() {
    const { notes, activeId } = this.state;
    const activeNote = notes.filter((item)=>item.id === activeId)[0];

    return (
      <div className="app">
        <Header />
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