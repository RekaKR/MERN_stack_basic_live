import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'
import "./App.css"

function App() {
  const [data, setData] = useState(null)
  const [dog, setDog] = useState('')
  const [dogSec, setDogSec] = useState('')
  const [res, setRes] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/dog')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setData(null))
  }, [])

  const submit = () => {
    fetch('http://localhost:3001/dog', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dog: dog,
        dogSec: dogSec
      })
    }).then(res => res.json())
      .then(data => setRes(true))
      .catch(err => setRes(false))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {!data ? <p>Loading...</p> : data.map(res =>
            <div key={uuidv4()} className="bla">
              <h1>{res.dog}</h1>
            </div>)}
        </div>

        <input type="text" onChange={e => setDog(e.target.value)} />
        <input type="text" onChange={e => setDogSec(e.target.value)} />

        <button onClick={() => submit()}>Nyomkodj meg!</button>
      </header>
    </div>
  );
}

export default App