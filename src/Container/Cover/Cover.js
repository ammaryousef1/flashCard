import React, { useState } from 'react'
import './Cover.css'
import { Link } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { wordAdded } from '../../redux/meanSlice'

const Cover = (props) => {
  const dispatch = useDispatch()
  const words = wordAdded
  const [ word , setword ] = useState("")
  const [ mean , setmean ] = useState("")

  const onSaveMeanClicked = () => {
    if ( word && mean ) {
      dispatch(
        wordAdded({
          id: nanoid(),
          word, 
          mean
        })
      )
      setmean('')
      setword('')
    }
  }
    return (
   <section>
      <h1 className="header"> Hello There, Welcome to our Flash Card App</h1>
        <form>
          <div className='the'>
          <label>The Word</label>
          <input
              id="npt-meaning"
              type="text"
              onChange={(e) => {setword(e.target.value)}}
              value={word}
          />
          </div>
          <div className='the'>
          <label>The meaning</label>
          <input
              id="npt-meaning"
              type="text"
              onChange={(e) => {setmean(e.target.value)}}
              value={mean}
          />
          </div>
 
       
              <button 
              type='button'
              onClick={onSaveMeanClicked}
              className='button'
              >submit</button>


              <Link  className='button' to="/play">play</Link>

              

      </form> 

   </section>
    )
  
  
}

export default Cover