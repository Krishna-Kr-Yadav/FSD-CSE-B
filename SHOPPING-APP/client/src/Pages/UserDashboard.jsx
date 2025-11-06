import React from 'react'
import Navbar1 from '../components/Navbar1'
import { Outlet } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <Navbar1/>
      <Outlet/>
    </div>
  )
}

export default UserDashboard
