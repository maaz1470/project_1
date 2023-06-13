import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main'
export default function App(){
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  )
}