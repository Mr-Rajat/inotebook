import React, {useState} from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{
    const notesIntitial = [
        {
          "_id": "640c4b7c9f3457f10c645dbe",
          "user": "640b1e011bfd725929210725",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-03-11T09:35:56.496Z",
          "__v": 0
        },
        {
          "_id": "640c4c949f3457f10c645dc2",
          "user": "640b1e011bfd725929210725",
          "title": "New Note",
          "description": "Please access the playlist",
          "tag": "YouTube",
          "date": "2023-03-11T09:40:36.605Z",
          "__v": 0
        },
        {
          "_id": "640c4c949f3457f10c645dc21",
          "user": "640b1e011bfd725929210725",
          "title": "New Note",
          "description": "Please access the playlist",
          "tag": "YouTube",
          "date": "2023-03-11T09:40:36.605Z",
          "__v": 0
        },
        {
          "_id": "640c4c949f3457f10c645dc22",
          "user": "640b1e011bfd725929210725",
          "title": "New Note",
          "description": "Please access the playlist",
          "tag": "YouTube",
          "date": "2023-03-11T09:40:36.605Z",
          "__v": 0
        },
        {
          "_id": "640c4c949f3457f10c645dc23",
          "user": "640b1e011bfd725929210725",
          "title": "New Note",
          "description": "Please access the playlist",
          "tag": "YouTube",
          "date": "2023-03-11T09:40:36.605Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesIntitial)
      
    //   Add a Note function

    const addNote = (title, description, tag) =>{

        // Todo : API call
        console.log("Adding a new Note")
        const note = {
            "_id": "640c4b7c9f3457f10c645dbe",
            "user": "640b1e011bfd725929210725",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-03-11T09:35:56.496Z",
            "__v": 0
          };
        setNotes(notes.concat(note))
    }
    //   Delete a Note function

    const deleteNote = (id) =>{
        // Todo : API call
        console.log("Deleting the node with id" +id);
        const newNotes = notes.filter((note)=>{return note._id !== id})
        setNotes(newNotes);
    }
    //   Edit a Note function
    const editNote = (id, title, description, tag) =>{

    }

    return (
        <NoteContext.Provider value = {{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;