import React from 'react';
import './index.css';
import ListItem from '../ListItem';

class List extends React.Component {
    render() {
        const { notes, activeId, onListItemClick} = this.props;
        return (
            <div className="list">
                {notes.map((item)=>{
                    const {id, title, contents} = item;
                    return (
                        //요소만 전달하고 구체적인 그림은 ListItem 에서 작업
                        <ListItem
                            key = {id}
                            id = {id}
                            active = {id === activeId}
                            title = {title}
                            contents = {contents}
                            onClick={()=>{onListItemClick(id)}}
                            />
                    )
                })}
            </div>
        )
    }
}

export default List;