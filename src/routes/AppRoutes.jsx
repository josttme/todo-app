import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NewTodo from '../pages/NewTodo'
import EditTodo from '../pages/EditTodo'

export default function AppRoutes () {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<NewTodo />} />
        <Route path='/edit/:id' element={<EditTodo />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </HashRouter>
  )
}
