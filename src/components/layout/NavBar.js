import { Link } from "react-router-dom"

import Container from "./Container";

import styles from './NavBar.module.css'
import logo from '../../img/project_management_logo.png'

function NavBar() {
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img src={logo} alt="Costs"></img>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                    <Link to='/'>Início</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to='/projects'>Projetos</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to='/company'>Sobre</Link>
                    </li>
                </ul>
            </Container>
        </nav>        
    )
}

export default NavBar