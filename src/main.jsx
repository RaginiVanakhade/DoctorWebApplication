import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Todo from './Todo.jsx'
// import PasswordGenarator from './MyComponent/PasswordGenarator.jsx'
// import StopWatch from './MyComponent/StopWatch.jsx'
// import ContextTodo from './MyComponent/ContextTodo.jsx'
// import Rechart from './MyComponent/Rechart.jsx'
import WaetherApp from './MyComponent/WaetherApp.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Todo /> */}
    {/* <PasswordGenarator/> */}
    {/* <StopWatch/> */}
    {/* <ContextTodo/> */}
    {/* <Rechart/> */}
    <BrowserRouter>
   <WaetherApp/>
    </BrowserRouter>
  </StrictMode>,
)
