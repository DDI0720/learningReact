const dataBase = firebase.database();

const AddNote = () => {
    dataBase.ref('notes/').set({
        title: '제목없음',
        contents: '내용없음'
    }, function(error){
        if(error) {
            console.error(error);
        } else {
            console.log('success!');
        }
    })
}

export default AddNote;