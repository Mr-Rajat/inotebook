import React, { useState } from "react";
// import { json } from "react-router-dom";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesIntitial = []
  const [notes, setNotes] = useState(notesIntitial)

  // Get all Notes
  const getNotes = async () => {
    // API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwYjFlMDExYmZkNzI1OTI5MjEwNzI1In0sImlhdCI6MTY3ODUxNjY1NH0.LDQZ_c3GrDlEZ_5ZUTenlb67ZJZESK_sSlB78HL-m5A"

      },
      // body: JSON.stringify({title, description, tag}),
      // body data type must match "Content-Type" header
    });
    const json = await response.json();
    // console.log(json)
    setNotes(json)
  }

  //   Add a Note function

  const addNote = async (title, description, tag) => {

    // API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwYjFlMDExYmZkNzI1OTI5MjEwNzI1In0sImlhdCI6MTY3ODUxNjY1NH0.LDQZ_c3GrDlEZ_5ZUTenlb67ZJZESK_sSlB78HL-m5A"

      },
      body: JSON.stringify({ title, description, tag }),
      // body data type must match "Content-Type" header
    });
    const noteData = await response.json();
    // const json = await response.json
    setNotes(notes.concat(noteData))
    // console.log(json);

    // console.log("Adding a new Note")
    // const note =
    // const note = {
    //   "_id": "640c4b7c9f3457f10c645dbe",
    //   "user": "640b1e011bfd725929210725",
    //   "title": title,
    //   "description": description,
    //   "tag": tag,
    //   "date": "2023-03-11T09:35:56.496Z",
    //   "__v": 0
    // };
  }

  //   Delete a Note function

  const deleteNote = async (id) => {
    // Todo : API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwYjFlMDExYmZkNzI1OTI5MjEwNzI1In0sImlhdCI6MTY3ODUxNjY1NH0.LDQZ_c3GrDlEZ_5ZUTenlb67ZJZESK_sSlB78HL-m5A"

      },
    });
    const json = await response.json();
    // console.log(json);

    console.log("Deleting the node with id" + id);
    const newNotes =  notes.filter((note) => { return note._id !== id })
    setNotes(newNotes);
  }


  //   Edit a Note function
  const editNote = async (id, title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwYjFlMDExYmZkNzI1OTI5MjEwNzI1In0sImlhdCI6MTY3ODUxNjY1NH0.LDQZ_c3GrDlEZ_5ZUTenlb67ZJZESK_sSlB78HL-m5A"

      },
      body: JSON.stringify({ title, description, tag }),
      // body data type must match "Content-Type" header
    });
    
    const json = await response.json();
    // console.log(json)

    // in react we cannot directly change the state;

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }

    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;