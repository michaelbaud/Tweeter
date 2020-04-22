import React from 'react'

// Components
import IconContainer from './IconContainer'

// Dependencies
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import {
    FiHeart,
    FiX,
    FiMessageCircle,
    FiUpload,
    FiRefreshCw
} from 'react-icons/fi'

import img from '../img/mika12.jpg'


const Message = () => {
    return (
        <div className="message-container">
            <div>
                <img
                    src={img}
                    alt="Profil"
                    className="profil-picture"
                />
            </div>
            <div className="message">
                <header>
                    <h3>Michael Baudoin </h3>
                    <span>. {formatDistanceToNow(1587310753179, { locale: fr })}</span>
                </header>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum neque vel porro dicta sunt error maxime tempore atque aperiam deleniti. Quis ipsa sed tempora in culpa illo, non porro voluptatibus!
                </p>
                <footer>
                    <IconContainer color="blue">
                        <FiMessageCircle />
                    </IconContainer>
                    <IconContainer color="green">
                        <FiRefreshCw />
                    </IconContainer>
                    <IconContainer color="red" count="5">
                        <FiHeart />
                    </IconContainer>
                    <IconContainer color="blue">
                        <FiUpload />
                    </IconContainer>
                    <IconContainer color="red">
                        <FiX />
                    </IconContainer>
                </footer>
            </div>
        </div>
    )
}

export default Message
