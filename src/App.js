import './App.css'
import Card from './Card'
import Header from './Header'
import React, { useEffect, useState } from 'react'

function App() {
  const [characters, setCharacters] = useState([])
  const [url, setURL] = useState('https://rickandmortyapi.com/api/character')

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setCharacters(res.results)
      })
      .catch(error => console.error(error))
  }, [url])

  return (
    <>
      <section className="App App__Background">
        <Header />
        {characters.map(character => {
          const { id, image, name, species, origin } = character
          return (
            <Card
              key={id}
              image={image}
              name={name}
              species={species}
              origin={origin}
            />
          )
        })}
        <div className="Pagination">
          <button className="Pagination__Button" onClick={() => setURL()}>
            &lt; Previous
          </button>
          <button className="Pagination__Button" onClick={() => setURL()}>
            Next &gt;
          </button>
        </div>
      </section>
    </>
  )
}

export default App
