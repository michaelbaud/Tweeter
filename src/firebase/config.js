const {
    REACT_APP_FIREBASE_apiKey,
    REACT_APP_FIREBASE_authDomain,
    REACT_APP_FIREBASE_databaseURL,
    REACT_APP_FIREBASE_projectId,
    REACT_APP_FIREBASE_storageBucket,
    REACT_APP_FIREBASE_messagingSenderId,
    REACT_APP_FIREBASE_appId,
    REACT_APP_FIREBASE_measurementId,
} = process.env

const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_apiKey,
    authDomain: REACT_APP_FIREBASE_authDomain,
    databaseURL: REACT_APP_FIREBASE_databaseURL,
    projectId: REACT_APP_FIREBASE_projectId,
    storageBucket: REACT_APP_FIREBASE_storageBucket,
    messagingSenderId: REACT_APP_FIREBASE_messagingSenderId,
    appId: REACT_APP_FIREBASE_appId,
    measurementId: REACT_APP_FIREBASE_measurementId
}

export default firebaseConfig