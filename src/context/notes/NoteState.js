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
    return (
        <NoteContext.Provider value = {{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;