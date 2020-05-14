// Firebase Config
import firebaseConfig from './config'

// Dependencies
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth()
        this.facebookProvider = new app.auth.FacebookAuthProvider()
        this.db = app.firestore()
    }

    login = async provider => {
        await this.auth.signInWithPopup(this[`${provider}Provider`])
    }

    logout = async () => await this.auth.signOut()
}

const firebase = new Firebase()
export default firebase
