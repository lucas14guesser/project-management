import styles from './Home.module.css'
import home from '../../img/home.svg'

import LinkButton from '../layout/LinkButton'

function Home() {
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Project M</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to='/newproject' text='Criar Projeto' />
            <img src={home} alt='Costs'></img>
        </section>
    )
}

export default Home