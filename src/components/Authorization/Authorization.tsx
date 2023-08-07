import "./Authorization.scss";
import googleLogo from "../../vendor/icons/google_icon.svg";
import { ChangeEvent, FormEvent, useState, FC } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ru from 'react-phone-input-2/lang/ru.json'
import { Link } from "react-router-dom";
import roboIcon from "../../vendor/icons/robo_icon_desktop.svg";
import { ButtonMain } from "../UI/Buttons/Main/ButtonMain";
import { AuthButton } from "../UI/AuthButton/AuthButton";
interface IAuthProps {
  isLoginPage?: boolean;
  isRegistrationPage?: boolean;
  isResetPasswordPage?: boolean;
}
export const Authorization: FC<IAuthProps> = ({
  isLoginPage,
  isRegistrationPage,
  isResetPasswordPage,
}) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [visibleMailPopup, setVisibleMailPopup] = useState(false);
  const [visiblePasswordPopup, setVisiblePasswordPopup] = useState(false);
  
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleMailPopup = () => {
      setVisibleMailPopup(!visibleMailPopup);
  };

  const handlePasswordPopup = () => {
      setVisiblePasswordPopup(!visiblePasswordPopup);
  };

  return (
    <div className="authorization">
      {isRegistrationPage && !isLoginPage && !isResetPasswordPage && (
        <>
          <h2 className="authorization__title">Создай аккаунт с помощью</h2>
          <div className="socials">
            <ul className="socials__list">
              <li className="socials__item">
                <img
                  src={googleLogo}
                  alt="иконка гугла"
                  className="socials__icon"
                />
              </li>
              <li className="socials__item">
                <img
                  src={googleLogo}
                  alt="иконка гугла"
                  className="socials__icon"
                />
              </li>
              <li className="socials__item">
                <img
                  src={googleLogo}
                  alt="иконка гугла"
                  className="socials__icon"
                />
              </li>
            </ul>
            <ul className="socials__list">
              <li className="socials__item">
                <img
                  src={googleLogo}
                  alt="иконка гугла"
                  className="socials__icon"
                />
              </li>
              <li className="socials__item">
                <img
                  src={googleLogo}
                  alt="иконка гугла"
                  className="socials__icon"
                />
              </li>
              <li className="socials__item">
                <img
                  src={googleLogo}
                  alt="иконка гугла"
                  className="socials__icon"
                />
              </li>
              <li className="socials__item">
                <img
                  src={googleLogo}
                  alt="иконка гугла"
                  className="socials__icon"
                />
              </li>
            </ul>
          </div>
          <div className="authorization__choice">
            <p className="authorization__text">или</p>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <fieldset className="formfield">
              <input
                className="formfield__input"
                type="text"
                value={username}
                placeholder="Имя"
                onChange={handleUsernameChange}
                required
              />
              <input
                className="formfield__input"
                type="email"
                value={email}
                placeholder="E-mail"
                onChange={handleEmailChange}
                required
              />
              <input
                className="formfield__input"
                type="password"
                value={password}
                placeholder="Пароль"
                onChange={handlePasswordChange}
                required
              />
              <PhoneInput
                country="ru"
                localization={ru}
                inputClass="formfield__input_phone"
                containerClass="formfield__phone_wrapper"
                value={phone}
                onChange={handlePhoneChange}
              />
            </fieldset>
            <AuthButton visible={visibleMailPopup} notificationType={'letter'} setVisible={handleMailPopup} />
            <div className="caption">
              <p className="caption__text">Уже прошли регистрацию?</p>
              <Link to={"/signin"} className="caption__link">
                Войти
              </Link>
            </div>
          </form>
        </>
      )}
      {isLoginPage && !isRegistrationPage && !isResetPasswordPage && (
        <>
          <form onSubmit={handleSubmit} className="form_login">
            <fieldset className="formfield formfield_login">
              <input
                className="formfield__input formfield__input_login"
                type="email"
                value={email}
                placeholder="E-mail"
                onChange={handleEmailChange}
                required
              />
              <input
                className="formfield__input formfield__input_login"
                type="password"
                value={password}
                placeholder="Пароль"
                onChange={handlePasswordChange}
                required
              />
            </fieldset>
            <div className="caption caption_login">
              <Link to={"/reset-password"} className="caption__link">
                Забыли пароль?
              </Link>
              <Link to={"/signup"} className="caption__link">
                Регистрация
              </Link>
            </div>
            <ButtonMain size="l" theme="green" label="войти" />
          </form>
          <div className="authorization__choice_login">
            <p className="authorization__text">Быстрый вход</p>
          </div>
          <div className="socials_login">
            <ul className="socials__list">
              <li className="socials__item">
                <img
                  src={googleLogo}
                  alt="иконка гугла"
                  className="socials__icon"
                />
              </li>
              <li className="socials__item">
                <img
                  src={googleLogo}
                  alt="иконка гугла"
                  className="socials__icon"
                />
              </li>
              <li className="socials__item">
                <img
                  src={googleLogo}
                  alt="иконка гугла"
                  className="socials__icon"
                />
              </li>
            </ul>
            <ul className="socials__list">
              <li className="socials__item">
                <img
                  src={googleLogo}
                  alt="иконка гугла"
                  className="socials__icon"
                />
              </li>
              <li className="socials__item">
                <img
                  src={googleLogo}
                  alt="иконка гугла"
                  className="socials__icon"
                />
              </li>
              <li className="socials__item">
                <img
                  src={googleLogo}
                  alt="иконка гугла"
                  className="socials__icon"
                />
              </li>
              <li className="socials__item">
                <img
                  src={googleLogo}
                  alt="иконка гугла"
                  className="socials__icon"
                />
              </li>
            </ul>
          </div>
        </>
      )}
      {isResetPasswordPage && !isLoginPage && !isRegistrationPage && (
        <>
          <form onSubmit={handleSubmit} className="form_login">
            <h2 className="authorization__title">Введи свой E-mail</h2>
            <fieldset className="formfield">
              <input
                className="formfield__input formfield__input_login"
                type="email"
                value={email}
                placeholder="E-mail"
                onChange={handleEmailChange}
                required
              />
            </fieldset>
            <AuthButton visible={visiblePasswordPopup} notificationType={'password'} setVisible={handlePasswordPopup} />
          </form>
          <img src={roboIcon} alt="робот" />
        </>
      )}
    </div>
  );
};
