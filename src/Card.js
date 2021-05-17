import './Card.css'
import bookmark_actice from './assets/images/bookmark-active.png'
import bookmark_inactive from './assets/images/bookmark-inactive.png'

import { useState } from 'react'

export default function Card({ image, name, species, origin }) {
  const [isActive, setIsActive] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  return (
    <section className="Card">
      <img
        className="Card__Bookmark"
        src={isBookmarked ? bookmark_actice : bookmark_inactive}
        alt=""
        onClick={() => setIsBookmarked(!isBookmarked)}
      />
      <img className="Card__Image" src={image} alt="" />
      <h2 className="Card__Name">{name}</h2>
      <button className="Card__Button" onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Hide this nonsense!' : 'Lets see more about'}
      </button>
      {isActive && (
        <p className="Card__Bio">
          This is {name}. He is a {species} located on {origin.name}
        </p>
      )}
    </section>
  )
}
