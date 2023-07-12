import { useRef } from "react";

export default function usePrevious(state: any){
    const currentStateRef = useRef();
    const previousStateRef = useRef()

    if (currentStateRef.current !== state){
        previousStateRef.current = currentStateRef.current
        currentStateRef.current = state
    }

    return previousStateRef.current
}