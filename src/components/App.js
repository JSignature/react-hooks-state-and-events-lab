import React, { useState } from 'react'
import ShoppingList from './ShoppingList'
import itemData from '../data/items'

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // const appClass = false ? "App dark" : "App light"
  const [mode, setMode] = useState('App light')
  function changeMode() {
    if (mode === 'App light') {
      setMode('App dark')
    } else {
      setMode('App light')
    }
  }
  return (
    <div className={mode}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeMode}>
          {mode === 'App light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  )
}

export default App
