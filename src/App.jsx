import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './assets/componets/ButtonComponent'
import Immagine from './assets/componets/ImageComponent'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Button content="Salva" color="green" />
      <Button content="Elimina" color="red" />
      <Button content="Modifica" color="blue" />

      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Immagine src="https://placecats.com/bella/300/200" alt="placecat" />
      <Immagine src="https://placebear.com/300/200" alt="placebear" />
      <Immagine src="https://place.dog/300/200" alt="placedog" />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
