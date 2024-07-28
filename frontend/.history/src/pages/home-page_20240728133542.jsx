import { hero } from '../assets/img/book-hero.jpg'

export function HomePage() {
  return (
    <section className="home-page">
      <img src={hero} alt="" />
      {/* {hero} */}
      {/* <img src="../assets/img/book-hero.jpg" /> */}
    </section>
  )
}
