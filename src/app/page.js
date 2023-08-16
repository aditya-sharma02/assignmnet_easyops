import Navbar from "./componenets/Navbar";
import styles from "./page.module.css"
export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.name}>Welcome</div>
        <div className={styles.head}>Customer Management System</div>
      </div>

    </>
  )
}
