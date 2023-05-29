import loading from '../../img/loading.svg'

import styles from './Loading.module.css'

function Loding() {
    return(
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt='Loading'></img>
        </div>
    )
}

export default Loding