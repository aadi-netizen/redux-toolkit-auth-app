import React from 'react'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../features/auth/loginSlice'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const { authorizedUser } = useSelector((state) => state.user)
  // console.log('Authorized User: ', authorizedUser)
  const [user, setUser] = useState({ email: '', token: '' })
  console.log('User:', user)

  // handle logout
  const handleLogout = () => {
    localStorage.removeItem('user')
    dispatch(logout())
    navigate('/login')
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log('User:', user)
    console.log(user?.token)

    user?.token ? setUser({ ...user }) : navigate('/login')
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>Welcome {user.email}</h3>
      <button
        className="btn btn-primary mt-3 ms-2 rounded-3"
        onClick={() => handleLogout()}
      >
        Logout
      </button>
    </div>
  )
}

export default Dashboard
