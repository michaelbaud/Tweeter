import React from 'react'

import img from '../img/mika12.jpg'

const MessageForm = ({ handleSubmit, handleKeyDown, handleChange, values, errors }) => {

    return (
        <form onSubmit={handleSubmit} className="message-form-container">
            <div className="message-form">
                <div>
                    <img
                        src={img}
                        alt="Profil"
                        className="profil-picture"
                    />
                </div>
                <textarea
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                    name="message"
                    value={values.message}
                    placeholder="Quoi de neuf ?">
                </textarea>
            </div>

            {errors.message && <p className="error-text">{errors.message}</p>}

            <footer>
                <p>{280 - values.message.length}</p>
                <button type="submit" disabled={values.message.length > 280 || values.message.length === 0}>
                    Tweeter
                </button>
            </footer>
        </form>
    )

}

export default MessageForm
