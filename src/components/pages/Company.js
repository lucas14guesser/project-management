import styles from './Company.module.css'
import company from '../../img/company.svg'

function Company() {
    return(
        <section className={styles.company_container}>
            <div>
                <h1>Sobre o <span>Project M</span></h1>
                <p>Project Management é um site que foi desenvolvido
                   para organizar na criação de projetos e serviços
                   para a sua empresa.
                   <br/>
                   <br/>
                   Crie Projetos com o seu orçamento disponível e 
                   adicione serviços e seus custos para que você
                   consiga manter uma organização financeira na sua
                   empresa.
                </p>
                <img src={company} alt='Sobre'></img>                
            </div>
        </section>


    )
}

export default Company