import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './Dashboard'
const Admin = () => {
  return (
    <div>
      <Routes>
        <Route path='dashboard' element={<Dashboard/>} index />
      </Routes>
    </div>
  )
}

export default Admin