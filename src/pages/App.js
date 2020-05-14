import React from 'react'

//components
import Header from '../components/Header'
import CreateMessage from '../components/CreateMessage'
import MessageList from '../components/MessageList'

// Firebase
import firebase, { FirebaseContext } from '../firebase'
import useAuth from '../hooks/useAuth'

// CSS
import '../css/App.css'

const App = () => {

  const user = useAuth()

  return (
    <FirebaseContext.Provider value={{ user, firebase }}>
      <div className='app'>
        <Header />
        <CreateMessage />
        <MessageList />
      </div>
    </FirebaseContext.Provider>
  )

}

export default App
