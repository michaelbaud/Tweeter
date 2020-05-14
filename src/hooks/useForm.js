import { useState, useEffect } from 'react'

const useForm = (initialState, validate, next) => {

    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmiting, setIsSubmiting] = useState(false)

    useEffect(() => {
        if (isSubmiting) {
            const isErrors = Object.keys(errors).length !== 0
            if (isErrors) {
                setIsSubmiting(false)
            } else {
                next()
                setIsSubmiting(false)
                setValues(initialState)
            }
        }
    }, [errors, next, isSubmiting, initialState])

    const handleKeyDown = e => {
        if (e.keyCode === 13 && e.ctrlKey) {
            handleSubmit(e)
        }
    }

    const handleChange = e => {
        e.persist()
        setValues(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newErrors = validate(values)
        setErrors(newErrors)
        setIsSubmiting(true)
    }

    return {
        handleSubmit,
        handleKeyDown,
        handleChange,
        values,
        errors
    }
}

export default useForm
