import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return(
        (<footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href='https://www.facebook.com/pernalongasuavao'>
                        <FaFacebook />
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/pernalongasexta/'>
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Project Management</span> &copy; 2023
            </p>
        </footer>)
    )
}

export default Footer