import styles from "./Registration.module.scss";
import logo from "../../vendor/icons/logo.svg";
import { Authorization } from "../Authorization/Authorization";

function Registration() {
  return (
    <section className={styles.registration}>
      <img src={logo} alt="Логотип" className={styles.registration__logo}/>
      <h1 className={styles.registration__title}>Регистрация</h1>
      <Authorization isRegistrationPage={true} />
    </section>
  );
}

export default Registration;
