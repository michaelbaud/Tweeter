import React, { useContext } from 'react'

// Context
import { FirebaseContext } from '../firebase'

// Hooks
import useForm from '../hooks/useForm'

// Helpers
import validateMessage from '../helpers/validateMessage'

// Components
import MessageForm from './MessageForm'



const INITIAL_STATE = {
    message: ""
}

const CreateMessage = () => {

    const { user, firebase } = useContext(FirebaseContext)

    const handleCreateMessage = () => {
        const { message } = values
        const newMessage = {
            message: message,
            postedBy: {
                id: user.uid,
                name: user.displayName
            },
            likes: [],
            createAt: Date.now(),
            photo: user.photoURL
        }
        firebase.db.collection('messages').add(newMessage)
    }

    const { handleSubmit, handleKeyDown, handleChange, values, errors } = useForm(
        INITIAL_STATE,
        validateMessage,
        handleCreateMessage
    )

    return (
        user && (<MessageForm
            handleSubmit={handleSubmit}
            handleKeyDown={handleKeyDown}
            handleChange={handleChange}
            values={values}
            errors={errors}
            user={user}
        />)
    )
}

export default CreateMessage
