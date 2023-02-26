/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '@components/goalsform/GoalForm'
import GoalItem from '@components/goalsform/GoalItem'
import Spinner from '@components/goalsform/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <div className='container'>
      <section className='center-title mt-3'>
        <h1>Welcome to your Goals Dashboard, {user && user.name}!</h1>
      </section>
      <GoalForm />
      <section className='goal-container'>
        {goals.length > 0 ? (
          <div className='goal-container__item'>
              { goals.map((goal) => (
                  <GoalItem key={ goal._id } goal={ goal } />
            ))}
          </div>
          ) : (
            <div className='container mt-3'>
                <h3>You have not set any goals</h3>
            </div>
        )}
        </section>
      </div>
    </>
  )
}

export default Dashboard