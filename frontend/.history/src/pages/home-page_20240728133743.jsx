import { imgHero } from '../assets/img/book-hero.jpg'

export function HomePage() {
  return (
    <section className="home-page">
      <img src={require(imgHero)} alt="" />
      {/* {hero} */}
      {/* <img src="../assets/img/book-hero.jpg" /> */}
    </section>
  )
}
