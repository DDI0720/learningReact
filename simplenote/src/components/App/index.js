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

  render() {
    const { notes, activeId } = this.state;
    return (
      <div className="app">
        <Header />
        <div className="container">
          <List notes={notes} activeId={activeId}/>
          <Note />
        </div>
      </div>
    );
  }
}

export default App;