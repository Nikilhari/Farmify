import styles from './Hero.module.css'

const hero = () => {
  return (
    <div className={styles.heroContainer}>
        <img className={styles.heroImg} src="src/assets/mainPic.jpg" alt="heroPic" />
        <span className={styles.heroSub}>Get Farm Fresh<br/> Vegetables!</span>
    </div>
  )
}

export default hero