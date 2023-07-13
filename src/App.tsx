import TimerProvider from "./Timer"
import { Icon_facebook, Icon_instagram, Icon_pinterest } from "./assets/images"
import TileList from "./components/TileList"

export type Tile = {
  label: string,
  check?: (count: number) => boolean,
  value: (count: number) => number
}

const tiles: Tile[] = [
  {
    label: 'Days',
    check(count) { 
      return Math.floor(count / (1000)) % (60 * 60 * 24) === 0;
    },
    value(count){
      return Math.floor(count / (60 * 60 * 1000 * 24))
    }
  },
  {
    label: 'Hours',
    check(count) {
        return Math.floor(count / (1000)) % (60 * 60) === 0;
    },
    value(count){
      return Math.floor(count / (60 * 60 * 1000)) % 24
    }
  },
  {
    label: 'Minutes',
    check(count) {
      
      return Math.floor(count / (1000)) % 60 === 0;
    },
    value(count){
      return Math.floor(count / (60 * 1000)) % 60
    }
  },
  {
    label: 'Seconds',
    check(count) {
        return isFinite(count)
    },
    value(count){
      return Math.floor(count / 1000) % 60
    }
  }
]

function App() {
  return (
    <main>
      <h1>We're launching soon</h1>
      <TimerProvider>
        <TileList tiles={tiles} key={'tile list'}/>
      </TimerProvider>
      <footer>
        <ul className="social-icons">
          <li>
            <h2 className="visually-hidden">Facebook</h2>
            <Icon_facebook className='social-icon'/>
          </li>
          <li>
          <h2 className="visually-hidden">Pinterest</h2>
            <Icon_pinterest className='social-icon'/>
          </li>
          <li>
          <h2 className="visually-hidden">Instagram</h2>
            <Icon_instagram className='social-icon'/>
          </li>
        </ul>
      </footer>
    </main>
  )
}

export default App
