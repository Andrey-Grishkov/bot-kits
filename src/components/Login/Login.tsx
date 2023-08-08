import './Login.scss';
import logo from '../../vendor/icons/logo.svg'
import { Authorization } from '../Authorization/Authorization';

function Login() {
    return (
        <section className='login'>
            <img src={logo} alt="Логотип" className="login__logo" />
            <h1 className="login__title">Вход</h1>
            <Authorization isLoginPage={true}/>
        </section>
    );
}

export default Login;
