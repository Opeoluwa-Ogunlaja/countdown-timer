import { ReactNode, createContext, useContext, useState } from 'react'
import { useUpdateEffect } from './useUpdateEffect'
import { useTimeout } from './useTimeout'

type timerProps = {
    children: ReactNode,
    to?: Date
}

const CountContext = createContext<number>(0)

export const useCount = () =>  useContext(CountContext)

const now: number = new Date().getTime()

function TimerProvider(props: timerProps){
    const Ddate: number = props.to?.getTime() || new Date("06 Aug, 2023").getTime();

    const [ count, setCount ] = useState<number>(Ddate - now)

    const reduceState = () => setCount(countValue => countValue > 0 ? countValue - 1000 : 0)

    const [, reset ] = useTimeout(reduceState, 1000, true)

    useUpdateEffect(() => {
        reset()
    }, [ count ]);

    return <CountContext.Provider value={count}>
        { props.children } 
    </ CountContext.Provider>
}

export default TimerProvider