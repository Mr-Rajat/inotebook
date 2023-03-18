import React from 'react'
import Notes from './Notes';

export const Home = (props) => {

  const {showAlert} = props

  return (
    <div>
      
      {/* Your notes added form Note.js */}
      <Notes showAlert= {showAlert}/>
    </div>
  )
}
