import React from 'react'
import { account } from '../../lib/appwrite'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate =useNavigate()

    account.deleteSessions().then(()=>alert('logout successfully')).then(()=>navigate('/'))
  return (
    <div>Logout</div>
  )
}

export default Logout