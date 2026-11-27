import { useState, useEffect, useCallback } from 'react'

const useNetworkStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine)

    const checkConnection = useCallback(() => {
        setIsOnline(navigator.onLine)
    }, [])

    useEffect(() => {
        const handleOnline = () => setIsOnline(true)
        const handleOffline = () => setIsOnline(false)

        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)

        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [])

    return { isOnline, checkConnection }
}

export default useNetworkStatus
