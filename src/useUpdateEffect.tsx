import { useEffect, useRef } from "react"

export const useUpdateEffect = (callback: any, dependencies: Array<any>) => {
    const renderedBefore = useRef(false);

    useEffect(() => {
        if (!renderedBefore.current) {
            renderedBefore.current = true
            return
        }
        callback()
    }, [...dependencies, callback])
}