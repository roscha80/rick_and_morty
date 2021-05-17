import './Header.css'
import header from './assets/images/rick-and-morty.png'

export default function Header() {
  return (
    <section className="Header">
      <h1 className="Header__Heading">
        Robs trivia about
        <br /> Rick and Morty Characters
      </h1>
      <img src={header} alt="rick and morty logo" className="Header__Image" />
    </section>
  )
}
