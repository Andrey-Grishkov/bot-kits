import "./Authorization.scss";
import googleLogo from "../../vendor/icons/google_icon.svg";
import { ChangeEvent, FormEvent, useState, FC } from "react";
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";
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
  const countryOptions = [
    {
      value: "US",
      label: (
        <div>
          <ReactCountryFlag countryCode="US" svg aria-label="United States" />
          United States
        </div>
      ),
    },
    { value: "GB", label: "United Kingdom" },
    // Добавьте другие варианты кодов стран
  ];
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      minHeight: "50px",
    }),
    option: (provided: any) => ({
      ...provided,
      minHeight: "50px",
    }),
  };
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
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
              <div className="formfield__phone_wrapper">
                <Select
                  options={countryOptions}
                  className="formfield__select"
                  styles={customStyles}
                ></Select>
                <input
                  className="formfield__input"
                  type="tel"
                  value={phone}
                  placeholder="Телефон"
                  onChange={handlePhoneChange}
                  required
                />
              </div>
            </fieldset>
            <button type="submit" className="form__button">
              Submit
            </button>
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
            <fieldset className="formfield">
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
            </fieldset>
            <div className="caption">
              <Link to={"/password-reset"} className="caption__link">
                Забыли пароль?
              </Link>
              <Link to={"/signup"} className="caption__link">
                Регистрация
              </Link>
            </div>
            <button type="submit" className="form__button">
              Войти
            </button>
          </form>
          <div className="authorization__choice_login">
            <p className="authorization__text">или</p>
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
    </div>
  );
};
