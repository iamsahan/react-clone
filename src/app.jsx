import { useState } from 'preact/hooks'
import Header from './components/Header'
import Main from './components/Main'
import './app.css'

export function App() {
  return (
      <div className='container'>
        <Header />
        <Main />
      </div>
  )
}
