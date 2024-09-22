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
                <a href="#about">
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
                <a href="#cart">
                    <div className={styles.contents} id='cart'>
                        <h2>Cart</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height={"25px"} width={"25px"}><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
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