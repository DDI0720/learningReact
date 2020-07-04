import React from 'react';
import './index.css';
import Header from '../Header';
import List from '../List';
import Note from '../Note';
import stateObj from '../state.js';
//import { generateId } from '../../utils/util';
import firestore from '../../firebaseConfig';

class App extends React.Component {
  state = stateObj;
  
  componentDidMount() {
    const notes = this.state.notes;
    
    firestore.collection('note').get()
    .then(docs=>{
      docs.forEach(doc=>{
        const data = doc.data();
        notes.push({title: data.title, contents: data.contents});
      })
      this.setState({ notes })
    })
  }

  handleListItemClick = (activeId) => {
    this.setState({activeId});
  }

  handleEditNote = (type, e) => {
    const notes = [...this.state.notes];
    const note = notes.find((item)=>item.id === this.state.activeId)

    note[type] = e.target.value;
    this.setState({
      notes
    });
  }

  handleAddNote = () => {
    const newNote = {
      title: '제목없음',
      contents: '내용을 입력하세요'
    }

    firestore.collection('note').add(newNote).then((id)=>{
      this.setState({
        notes: [
          ...this.state.notes,
          newNote
        ],
        activeId: id
      })
    })

    // const id = generateId();
    // this.setState({
    //   notes: [
    //     ...this.state.notes,
    //     {
    //       id,
    //       title: '제목없음',
    //       contents: '내용을 입력하세요'
    //     }
    //   ],
    //   activeId: id
    // })
  }

  handleDeleteNote = (id) => {
    firestore.collection("note").doc(id).delete();
    //.then(()=>{
    //   const notes = this.state.notes.filter((note)=> note.id !== id);
    //   this.setState({
    //     notes,
    //     activeId: notes.length === 0 ? null : notes[0].id
    //   });
    // })
    // const notes = this.state.notes.filter((item)=>item.id !== this.state.activeId);
    // this.setState({
    //   notes,
    //   activeId: notes.length === 0 ? null : notes[0].id
    // });
  }

  render() {
    const { notes, activeId } = this.state;
    const activeNote = notes.filter((item)=>item.id === activeId)[0];

    return (
      <div className="app">
        <Header
          activeNote={activeNote}
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