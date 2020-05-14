import React, { useContext } from 'react'

// Context
import { FirebaseContext } from '../firebase'

// Dependencies
import { FaFacebook } from 'react-icons/fa'

const Header = () => {

    const { user, firebase } = useContext(FirebaseContext)

    return (
        <div className="header">
            <h1 className="header-title">Tweeter</h1>
            {user ? (
                <button
                    onClick={() => firebase.logout()}
                    type="button"
                    className="login-btn"
                >
                    Se déconnecter
                </button>
            ) : (
                    <button
                        onClick={() => firebase.login("facebook")}
                        type="button"
                        className="login-btn"
                    >
                        <FaFacebook /> Se connecter
                    </button>
                )}
        </div>
    );
}

export default Header;
