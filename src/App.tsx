import { useState } from 'react'
import catbotLogo from './assets/catbot.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={catbotLogo} className="logo" alt="Cat logo" />
        </a>
      </div>
      <h1>C4tbot Studios</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Here at C4tbot Studios, we are a software first studio accepting those who have the ideas for a user application, but lack the software knowhow. We help to bridge the gap between ideas and reality.
        </p>
      </div>
      <div className='linkbox'>
        <a className='link' href="https://nore5515.itch.io" target="_blank">Itch.IO</a>
        <a className='link' href="https://www.threads.net/@noah_reed5515" data-app="share_buttons" data-app-config='{"service":"threads"}'>Threads</a>
      </div>
    </>
  )
}

export default App
