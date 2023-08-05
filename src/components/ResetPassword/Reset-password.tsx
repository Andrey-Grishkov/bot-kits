import "./Reset-password.scss";
import { Authorization } from "../Authorization/Authorization";
import logo from '../../vendor/icons/logo.svg'


export function ResetPassword() {
  return (
    <section className="password-reset">
      <img src={logo} alt="Логотип" className="login__logo" />
      <h1 className="login__title">Восстановление пароля</h1>
      <Authorization isResetPasswordPage={true} />
    </section>
  );
};
