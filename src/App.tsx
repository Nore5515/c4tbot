import { useState } from 'react'
import catbotLogo from './assets/catbot.png'
import './App.css'
import ExampleModule from './ExampleModule'

function App() {
  const [count, setCount] = useState(0)

  const {getViewText, CreateButton, InnerPage} = ExampleModule();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={catbotLogo} className="logo" alt="Cat logo" />
        </a>
      </div>
      <h1>C4tbot Studios</h1>
      <div style={{display: 'flex', justifyContent: 'center', columnGap: 10}}>
        {CreateButton(InnerPage.HomePage)}
        {CreateButton(InnerPage.GamePage)}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <p>
          {getViewText()}
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
