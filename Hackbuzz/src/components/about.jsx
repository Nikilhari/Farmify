import styles from './about.module.css'

const about = () => {
  return (
    <>
      <div className={styles.aboutMain} id='about'>
        <div className={styles.aboutContainer}>
          <h1 className={styles.pageHead}>About Farmify</h1>
          <span className={styles.aboutPara}>
              Farmify is a dedicated online platform revolutionizing the agricultural industry, connecting farmers, suppliers, and buyers seamlessly. <br/>
              With a user-friendly interface, we empower farmers to showcase their produce, while buyers access a diverse range of high-quality agricultural products. <br/>
              Our mission is to foster transparency and efficiency in the farming ecosystem, enabling fair trade practices and sustainable agriculture. 
              Through innovative technology and community engagement, Farmify strives to empower farmers, bolster rural economies, and ensure food security for generations to come.
            </span>
        </div>
        <hr/>

        <h1 className={styles.pageHead} id='contact'>Contact Us</h1>
          <div className={styles.contactContainer}>
            <div className={styles.contactDetail}>
              <h2 className={styles.pageSubHead}>Head Office</h2>
              <span className={styles.para}>Farmify India Private Limited<br/>
                    Opposite to busstand,<br/>
                    Perundurai - 638060<br/>
                    Erode, Tamilnadu.
              </span>
            </div>

            <div className={styles.contact}>
              <span className={styles.details}>
                    Ph: +919874561239<br/>
                    For any Support or Complaints: <a href='#' className={styles.link}>Chat with Us</a><br/>
                    Support Time : 24*7<br/><br/>
                    For enquires: farmify@gmail.com
              </span>
            </div>
        </div>
      </div>
    </>
  )
}

export default about
