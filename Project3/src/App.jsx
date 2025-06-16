import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>
          My Project
        </p>
      </div>
      <div>
        <p>
          React Project
        </p>
      </div>
      <Text />
    </>
  )
}

function Text(){
  return(
    <div>
        <p>
         rotate your proj
        </p>
      </div>
  );
}


export default App
