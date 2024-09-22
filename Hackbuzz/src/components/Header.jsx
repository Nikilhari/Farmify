import styles from './Header.module.css';
import logo from '/src/assets/logo.jpg';
import about from '/src/assets/about.svg';
import contact from '/src/assets/contact.svg';
import faq from '/src/assets/Faq.svg'
import {Link} from 'react-router-dom'

function userHeader() {
    return (
        <>
        <div className={styles.c}>
            <div className={styles.logo}>
                  <img src={logo} className={styles.logo} alt="Company Logo" height={"70px"} width={"70px"}/>
            </div>
            <div className={styles.enclose}>
                <a href="#contact">
                    <div className={styles.contents} id='help'>
                        <img src={contact} height={"25px"} width={"25px"} alt="LOGO" />
                        <h2>Contact</h2>
                    </div>
                </a>
                <a href="#contact">
                    <div className={styles.contents} id='about'>
                        <img src={about} height={"25px"} width={"25px"} alt="LOGO" />
                        <h2>About</h2>
                    </div>
                </a>
                <a href="#faq">
                    <div className={styles.contents}>
                        <img src={faq} height={"25px"} width={"25px"} alt="LOGO" />
                        <h2>Faq</h2>
                    </div>
                </a>
                <div className={styles.contents} id='account'>
                    <Link to={'/'}><h2>Logout</h2></Link>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={"25px"} width={"25px"}><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
                </div>
            </div>
        </div>
        </>
    );
}

export default userHeader;