import React from 'react'

//components
import Header from '../components/Header'
import Message from '../components/Message'
import CreateMessage from '../components/CreateMessage'

// CSS
import '../css/App.css'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <CreateMessage />
      <Message />
    </div>
  )
}

export default App
