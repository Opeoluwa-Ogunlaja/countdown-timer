import { Tile as TileProp } from "../App";
import { FC, useState } from "react";
import { useCount } from "../Timer";
import usePrevious from "../usePrevious";
import { useTimeout } from "../useTimeout";

const reFormat = (num: number | string): string => Number(num) < 10 ? '0' + num.toString() : num.toString()

const Tile: FC<TileProp> = ({ check = () => { return true }, value, label }) => {
    const count = useCount()

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const previousCount = usePrevious(reFormat(value(count)));
    const [bottomCount, setBottomCount] = useState<string>( previousCount ?? reFormat(value(count)) )
    
    const formattedValue = reFormat(value(count))
    
    useTimeout(() => {
        setBottomCount(formattedValue)
    }, 600, true)
    
    
    return <div className="tile">
        <div>
            <div className={`flipper${ check(count) ? ' turning' : '' }`}>
                <div className={`flipper-object flipper-vertical${ check(count) ? ' turning' : '' }`}>
                    <span className="panel dots front" data-previous={previousCount}>
                        { bottomCount }
                    </span>
                    <span className="panel  dots back" data-previous={previousCount}>
                        { formattedValue }
                    </span>
                </div>
            </div>
            <div className="panel-container dots top">
                <div className="panel" data-previous={previousCount}>
                    { formattedValue }
                </div>
            </div>
            <div className="panel-container dots bottom">
                <div className="panel" data-previous={reFormat(value(count))}>
                    { bottomCount }
                </div>
            </div>
        </div>
        <h3>{label}</h3>
    </div>
}


export default Tile