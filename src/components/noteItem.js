import React, { useContext } from "react";
import { Link } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { notes, updateNote } = props;

  return (

  
   
     <div className="">
  <div className="card ">
        <div className="card-body">
          <h5 className="card-title"> {notes.title}</h5>
          <p className="card-text">{notes.description}</p>
          <Link
            to="/"
            className="btn btn-primary mx-2"
            onClick={() => {
              updateNote(notes);
            }}
          >
            Edit
          </Link>
          <Link
            to="/"
            className="btn btn-primary mx-2"
            onClick={() => {
              deleteNote(notes._id);
              props.showAllert(
                `Note has been deleted  successfully`,
                "success"
              );
            }}
          >
            Delete
          </Link>
        </div>
      </div>
    </div>

  );
};

export default NoteItem;
