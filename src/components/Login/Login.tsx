import styles from './Login.module.scss';
import logo from '../../vendor/icons/logo.svg'
import { Authorization } from '../Authorization/Authorization';

function Login() {
    return (
        <section className={styles.login}>
            <img src={logo} alt="Логотип" className={styles.login__logo} />
            <h1 className={styles.login__title}>Вход</h1>
            <Authorization isLoginPage={true}/>
        </section>
    );
}

export default Login;
