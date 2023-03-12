import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import { useEffect } from 'react'

export const About = () => {
  const a = useContext(noteContext)
  useEffect(() => {
    a.update()
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>
        This is About {a.state.name} and he is {a.state.age} years old.
    </div>
  )
}

export default About
