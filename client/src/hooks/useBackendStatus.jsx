import { useState, useEffect, useCallback } from 'react'

const useBackendStatus = () => {
    const [isReachable, setIsReachable] = useState(true)

    const checkBackend = useCallback(async () => {
        try {
            await fetch(`${import.meta.env.VITE_BACKEND_URL}/`, {
                method: 'HEAD',
                cache: 'no-store',
                signal: AbortSignal.timeout(5000)
            })
            setIsReachable(true)
        } catch {
            setIsReachable(false)
        }
    }, [])

    useEffect(() => {
        checkBackend()
        const interval = setInterval(checkBackend, 30000)
        return () => clearInterval(interval)
    }, [checkBackend])

    return { isReachable, checkBackend }
}

export default useBackendStatus
