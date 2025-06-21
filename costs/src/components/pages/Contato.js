import styles from './Contato.module.css'

import logo from '../../img/costs_logo.png';

function Contato() {
    return (
        <div className={styles.contato_container}>
            <h1>Contato</h1>
            <br />
            <h3>Aplicação criada por <span> Pedro Nairoski </span></h3>

            <div className={styles.contato_item}>
                <img src={logo} alt='Costs' />
                <p> +55 (73) 99802-7190</p>
            </div>
        </div>
    );
}

export default Contato;
