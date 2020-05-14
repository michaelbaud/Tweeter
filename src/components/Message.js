import React, { useState, useContext, useEffect } from 'react'

// Context
import { FirebaseContext } from '../firebase'

// Dependencies
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import { FiHeart, FiX } from 'react-icons/fi'

// Components
import IconContainer from './IconContainer'

const Message = ({ message }) => {

    const { user, firebase } = useContext(FirebaseContext)
    const [isLike, setIsLike] = useState(false)

    const handleLike = () => {
        setIsLike(prevIsLike => !prevIsLike)
        const likeRef = firebase.db.collection('messages').doc(message.id)

        if (!isLike) {
            const like = { likeBy: { id: user.uid, name: user.displayName } }
            const updatedLikes = [...message.likes, like]
            likeRef.update({ likes: updatedLikes })
        } else {
            const updatedLikes = message.likes.filter(like => like.likeBy.id !== user.uid)
            likeRef.update({ likes: updatedLikes })
        }
    }

    const handleDeleteMessage = () => {
        const messageRef = firebase.db.collection('messages').doc(message.id)
        messageRef.delete()
    }

    const isOwner = user && user.uid === message.postedBy.id

    useEffect(() => {
        if (user) {
            const isLike = message.likes.some(like => like.likeBy.id === user.uid)
            setIsLike(isLike)
        }
    }, [user, message.likes])

    return (
        <div className="message-container">
            <div>
                <img
                    src={message.photo}
                    alt="Profil"
                    className="profil-picture"
                />
            </div>
            <div className="message">
                <header>
                    <h3>{message.postedBy.name} </h3>
                    <span>. {formatDistanceToNow(message.createAt, { locale: fr })}</span>
                </header>
                <p>
                    {message.message}
                </p>
                {user && (<footer>
                    <IconContainer onClick={handleLike} color="blue" count={message.likes.length} isLike={isLike}>
                        <FiHeart />
                    </IconContainer>
                    {isOwner && (
                        <IconContainer onClick={handleDeleteMessage} color="red">
                            <FiX />
                        </IconContainer>
                    )}
                </footer>)}
            </div>
        </div>
    )
}

export default Message
