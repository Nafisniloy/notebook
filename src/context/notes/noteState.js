import React,{useState} from 'react';
// import { json } from 'react-router-dom';
import noteContext from './noteContext';

const notesinitial= [
]

const NoteState = (props) => {
  const  host="https://notebook-app-niloy.herokuapp.com"
  const [notes, setnotes] = useState(notesinitial)


  //get notes
  const getNotes= async()=>{
    //todo api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      },
    });
  const json= await response.json();

  setnotes(json)

  }



  //add a note
  const addNote= async(title,description,tag)=>{
    //todo api call
  
    // const note=    {
    //   "_id": "6331a8975ef06e453327279dc",
    //   "user": "6331135bc8832d8a5b3a1e8a",
    //   "title": title,
    //   "tag": tag,
    //   "date": "2022-09-26T13:26:47.231Z",
    //   "__v": 0,
    //   "description":description
    // }
    
    const response = await fetch(`${host}/api/notes/addnote/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      },
      body:  JSON.stringify({title, description,tag}) 
    });
    const note= response.json()
    setnotes(notes.concat (note))
  // console.log(json)
}
//delete a note
  //todo api call

  
  const deleteNote= async(id)=>{
    
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      },
    });
    const json= response.json();
    console.log(json)
    const newNotes= notes.filter((note)=>{ return note._id!==id})
    setnotes(newNotes)
  }
  //edit a note
  const editNotes= async(id,title,description,tag)=>{
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag}) 
    });
    // eslint-disable-next-line
     const json= await response.json();
    // for(let index=0;index<notes.length;index++){
    //   const element=notes[index];
    // if(element._id===id){
    //   notes[index].title=title;
    //   notes[index].description=description;
    //   notes[index].tag=tag;
    // } 
    // break;
    // }
    // setnotes(notes)
    
  }
  return (
    <noteContext.Provider value={{notes, addNote,deleteNote,editNotes,getNotes}}>
        {props.children}
    </noteContext.Provider>
  )
}

export default NoteState;