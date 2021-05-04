import Categories from '../components/Categories'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.containerLayout}>
        <Categories />
      </div>
    </>
  )
}
