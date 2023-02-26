import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../../features/goals/goalSlice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GoalForm() {
  const [text, setText] = useState('')
  const [textAreaCount = 0, setTextAreaCount = 250] = useState(0)

  const recalculate = (e) => {
    setTextAreaCount(e.target.value.length)

    if (e.target.value.length >= 250) {
      toast("Should not exceed 250 characters")
    } else {
      setTextAreaCount(e.target.value.length)
    }
      
  }


  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ text }))
    setText('')
  }

  return (
    <>
      <form onSubmit={onSubmit} className="form-control">
        <div className='goals-input'>
          <label htmlFor='text'></label>
          <textarea
            type='text'
            name='text'
            id='text'
            rows={ 4 }
            value={text}
            onChange={ (e) => setText(e.target.value) }
            placeholder='Enter your goal'
            maxLength={ 250 }
            onKeyUp={ recalculate }
          />
          <span className='counter-right'>
            <small> { `Textarea Char Count: ${textAreaCount}` } </small>
          </span>
        
          <button className='btn btn-block' type='submit'>
            Add Goal
          </button>
        
        </div>
      </form>
      <ToastContainer />
    </>
  )
}

export default GoalForm
