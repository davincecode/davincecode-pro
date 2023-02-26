import { useDispatch } from 'react-redux'
import { deleteGoal } from '../../features/goals/goalSlice'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='goal-text'>
      <small>Date Created: {new Date(goal.createdAt).toLocaleString('en-US')}</small>
      <p className='goal-text__notes'>{goal.text}</p>
      <button className='btn' onClick={() => dispatch(deleteGoal(goal._id))}>
        Delete Goal
      </button>
    </div>
  )
}

export default GoalItem