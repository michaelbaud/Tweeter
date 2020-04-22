import React from 'react'

// Components
import MessageForm from './MessageForm'

// Hooks
import useForm from '../hooks/useForm'

// Helpers
import validateMessage from '../helpers/validateMessage'

const INITIAL_STATE = {
    message: ""
}

const CreateMessage = () => {

    const handleCreateMessage = () => {
        const { message } = values
        const newMessage = {
            message: message,
            postedBy: "464686846",
            name: "Michael Baudoin",
            likes: [],
            createAt: Date.now(),
            photo: ""
        }
        console.log(newMessage)
    }

    const { handleSubmit, handleKeyDown, handleChange, values, errors } = useForm(
        INITIAL_STATE,
        validateMessage,
        handleCreateMessage
    )

    return (
        <MessageForm
            handleSubmit={handleSubmit}
            handleKeyDown={handleKeyDown}
            handleChange={handleChange}
            values={values}
            errors={errors}
        />
    )
}

export default CreateMessage
