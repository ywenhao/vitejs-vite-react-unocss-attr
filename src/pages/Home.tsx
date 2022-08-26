import '../App.css'

import { appStore } from '@/store'

import logo from '../logo.svg'
function Home() {
  // const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React! {appStore.doubleCount}</p>
        <p>
          <button type="button" text-center onClick={() => appStore.add()}>
            count is: {appStore.count}
          </button>
        </p>
        <p className="text-red-500">
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default observer(Home)
