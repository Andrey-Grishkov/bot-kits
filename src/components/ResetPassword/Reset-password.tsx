import styles from "./Reset-password.module.scss";
import { Authorization } from "../Authorization/Authorization";
import logo from '../../vendor/icons/logo.svg'


export function ResetPassword() {
  return (
    <section className={styles.password_reset}>
      <img src={logo} alt="Логотип" className={styles.password_reset__logo} />
      <h1 className={styles.password_reset__title}>Восстановление пароля</h1>
      <Authorization isResetPasswordPage={true} />
    </section>
  );
};
