import React, { useState, useContext,useRef } from "react";

// import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const AddNotes = (props) => {
  
  const ref = useRef(null)
  const context = useContext(noteContext);
  const { addNote, getNotes } = context;
  const handleclick = async(e) => {
    e.preventDefault();
    await  addNote(note.title, note.description, note.tag);
    props.showAllert(`Note has been added successfully`,"success")
    getNotes();
    ref.current.click();
    
  };
  const [note, setnote] = useState({ title: "", description: "", tag: "" });
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="my-3 ">
        <h3>Add a Note</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
            />
          </div>
          {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div> */}
          <button
            type="submit"
            className="btn btn-primary mx-2"
            onClick={handleclick}
          >
            Add Note
          </button>
          <button
            type="reset"
            className="btn btn-primary"
            ref={ref}
            // onClick={handleclick}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
