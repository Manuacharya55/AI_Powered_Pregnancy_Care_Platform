import React from 'react'
import { useAuth } from '../context/AuthContext'

const Profile = () => {
    const {user} = useAuth();
  return (
    <div>{JSON.stringify(user)}</div>
  )
}

export default Profile