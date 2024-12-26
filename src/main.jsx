import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Todo from './Todo.jsx'
import PasswordGenarator from './MyComponent/PasswordGenarator.jsx'
import Child from './MyComponent/Child.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo />
    <PasswordGenarator/>
    <Child/>
  </StrictMode>,
)
