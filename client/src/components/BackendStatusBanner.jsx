import useBackendStatus from '../hooks/useBackendStatus'

const BackendStatusBanner = () => {
    const { isReachable } = useBackendStatus()

    if (isReachable) return null

    return (
        <div className="text-sm text-center py-2 px-4 bg-amber-50 dark:bg-amber-900/30 border-b border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200">
            We're having trouble reaching Sorcer's servers. Some features may be temporarily unavailable.
        </div>
    )
}

export default BackendStatusBanner
