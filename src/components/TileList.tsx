import { FC, ReactNode } from "react"
import { Tile as TileProp } from "../App"
import Tile from "./Tile"


type TileListPropType = {
    tiles: TileProp[],
    children?: ReactNode
}

const TileList: FC<TileListPropType> = ({ tiles }) => {
    return <div className="tile-grid">
        { tiles.map((tile) => <Tile key={tile.label} { ...tile }/>) }
    </div>
}

export default TileList