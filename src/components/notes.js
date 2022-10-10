import React from "react";
import { useContext, useEffect, useRef ,useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./noteItem";
import AddNotes from "./addNotes";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNotes } = context;
  const navigate= useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
      
    }else{
   navigate('/login')
    }
    // eslint-disable-next-line
  }, []);

  const updateNote = async(currentNote) => {
    ref.current.click();
  setnote ({id:currentNote._id, title: currentNote.title,description: currentNote.description,tag: currentNote.tag})
   
  };

  const [note, setnote] = useState({ id:"",title: "", description: "", tag: "" });
  const ref = useRef(null)
  const refClose = useRef(null)

  const handleclick = async(e) => { 
    e.preventDefault();
    console.log(note)
 await   editNotes(note.id,note.title,note.description,note.tag)
    refClose.current.click();
    getNotes();
    // addNote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
    <AddNotes showAllert={props.showAllert}/>
    <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">

            <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={note.title} 
              onChange={onChange}
            />
          </div>
          <form>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
            value={note.description} 
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
            value={note.tag} 
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
            />
          </div>
          </form> 
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button type="button" onClick={handleclick} className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

     {
      <div className="my-3 text-center">
        <h3 className="my5">Your Notes</h3>
  {notes.length===0 && <h5 className="mb-3"> No notes to display</h5>}
  <div className="row row-cols-md-2 g-4">
          {notes.map((notes) => {
          
            return (
               <>    
       <NoteItem key={notes._id} showAllert={props.showAllert} updateNote={updateNote} notes={notes} />
              </>
            );
          })}
        </div>
         
        
      </div>
}
    </>
  );
};

export default Notes;
