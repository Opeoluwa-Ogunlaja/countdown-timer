import { useEffect, useRef, useCallback } from "react"

export const useTimeout = (callback: () => void, delay: number, autoplay = true) => {
    const callbackRef = useRef<() => void>(callback);
    const timeOutRef = useRef<number | undefined>();

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    const set = useCallback(() => {
        timeOutRef.current = setTimeout(callbackRef.current, delay)
    }, [delay])

    const clear = useCallback(() => {
        clearTimeout(timeOutRef.current)
    }, [])
    
    useEffect(() => {
        if(autoplay){ set() }

        return clear
    })

    const reset = useCallback(() => {
        clear()
        set()
    }, [set, clear])

    return [clear, reset, set]
}

