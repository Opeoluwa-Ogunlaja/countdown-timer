import { useRef, useEffect, useCallback } from "react";

export const useInterval = (callback: () => void, delay: number, autoplay = true) => {
    const callbackRef = useRef<() => void>(callback);
    const intervalRef = useRef<number | undefined>();

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    const set = useCallback(() => {
        intervalRef.current = setInterval(callbackRef.current, delay)
    }, [delay])

    const clear = useCallback(() => {
        clearInterval(intervalRef.current)
    }, [])

    useEffect(() => {
        if(autoplay){set()}
    })

    const reset = useCallback(() => {
        clear()
        set()
    }, [set, clear])

    return [set, clear, reset]
}