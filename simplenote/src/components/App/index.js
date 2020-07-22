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
    
    //파이어스토어에서 저장된 노트들 정보를 가져와 그려주는 부분
    firestore.collection('note').get()
    .then(docs=>{
      docs.forEach(doc=>{
        const data = doc.data();
        notes.push({id: doc.id, title: data.title, contents: data.contents});
      })
      this.setState({ notes })
    })
  }

  //클릭
  handleListItemClick = (activeId) => {
    this.setState({activeId});
  }

  //수정
  handleEditNote = (type, e) => {
    const notes = [...this.state.notes];
    const note = notes.find((item)=>item.id === this.state.activeId);
    
    //업데이트는 안하고 ui만 바뀜, 포커스 잃었을때 저장함
    note[type] = e.target.value;
    this.setState({
      notes
    });
  }

  //저장. 업데이트.
  handleSaveNote = (type, e) => {
    const ref = firestore.collection('note').doc(this.state.activeId);
    ref.update(type, e.target.value);
  }

  //뉴노트
  handleAddNote = () => {
    const ref = firestore.collection('note').doc();
    ref.set({
      id: ref.id,
      title: '제목없음',
      contents: '내용을 입력하세요'
    }).then((doc)=>{
      this.setState({
        notes: [
          ...this.state.notes,
          {
            id: ref.id,
            title: '제목을 입력하세요',
            contents: '내용을 입력하세요'
          }
        ],
        activeId: ref.id
      })
    })
  }

  //삭제
  handleDeleteNote = () => {
    const id = this.state.activeId;
    firestore.collection("note").doc(id).delete().then(()=>{
      const notes = this.state.notes.filter((note)=> note.id !== id);
      this.setState({
        notes,
        activeId: notes.length === 0 ? null : notes[notes.length-1].id
      });
    })
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
                onSaveNote={this.handleSaveNote}
                />}
        </div>
      </div>
    );
  }
}

export default App;