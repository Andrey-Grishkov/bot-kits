import "./Registration.scss";
import logo from "../../vendor/icons/logo.svg";
import { Authorization } from "../Authorization/Authorization";

function Registration() {
  return (
    <section className="registration">
      <img src={logo} alt="Логотип" className="registration__logo" />
      <h1 className="registration__title">Регистрация</h1>
      <Authorization isRegistrationPage={true} />
    </section>
  );
}

export default Registration;
