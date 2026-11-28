import { useEffect, useState } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import axios from 'axios'

import App from './App.jsx'
import AppContextProvider from './context/AppContext.jsx'

const backendUrl = import.meta.env.VITE_BACKEND_URL

// Fetches non-secret runtime config (currently just the Google OAuth client
// ID) from the backend instead of baking it into the static client build.
const Root = () => {
    const [googleClientId, setGoogleClientId] = useState('')

    useEffect(() => {
        axios.get(`${backendUrl}/api/config`)
            .then(({ data }) => setGoogleClientId(data.googleClientId))
            .catch(() => {}) // Google sign-in just won't be available; the rest of the app still works
    }, [])

    return (
        <GoogleOAuthProvider clientId={googleClientId}>
            <AppContextProvider>
                <App />
            </AppContextProvider>
        </GoogleOAuthProvider>
    )
}

export default Root
