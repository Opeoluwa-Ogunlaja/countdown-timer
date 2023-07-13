import { Tile as TileProp } from "../App";
import { FC } from "react";
import { useCount } from "../Timer";
import usePrevious from "../usePrevious";

const reFormat = (num: number | string): string => Number(num) < 10 ? '0' + num.toString() : num.toString()

const Tile: FC<TileProp> = ({ check = () => { return true }, value, label }) => {
    const count = useCount()

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const previousCount = usePrevious(reFormat(value(count)))

    return <div className="tile">
        <div>
            <div className="flipper">
                <div className="flipper-object flipper-vertical">
                    <span className="panel dots front">
                        { reFormat(value(count)) }
                    </span>
                    <span className="panel  dots back">
                        { reFormat(value(count)) }
                    </span>
                </div>
            </div>
            <div className="panel-container dots top">
                <div className="panel">
                    { reFormat(value(count)) }
                </div>
            </div>
            <div className="panel-container dots bottom">
                <div className="panel">
                    { reFormat(value(count)) }
                </div>
            </div>
        </div>
        <h3>{label}</h3>
    </div>
}


export default Tile