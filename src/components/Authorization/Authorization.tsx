import styles from "./Authorization.module.scss";
import { ChangeEvent, FormEvent, useState, FC } from "react";
// @ts-ignore
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// @ts-ignore
import ru from "react-phone-input-2/lang/ru.json";
import { Link, useNavigate } from "react-router-dom";
import { ButtonMain } from "../UI/Buttons/Main/ButtonMain";
import { AuthButton } from "../UI/AuthButton/AuthButton";
import eye from "../../vendor/icons/eye.svg";
import eyeOff from "../../vendor/icons/eye_off.svg";
import roboIcon from "../../vendor/icons/robo_icon_desktop.svg";
import { SocialIcon } from "../UI/SocialIcon/Social-icon";
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
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
  const [visibleMailPopup, setVisibleMailPopup] = useState(false);
  const [visiblePasswordPopup, setVisiblePasswordPopup] = useState(false);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    username: "",
    phone: "",
  });
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    if (!e.target.value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Поле обязательно для заполнения",
      }));
    } else if (!validateEmail(e.target.value)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Неверный формат" }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const handlePhoneChange = (value: string) => {
    const newPhone = value;
    setPhone(newPhone);

    if (!newPhone) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Поле обязательно для заполнения",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Поле обязательно для заполнения",
      }));
    } else if (!validatePassword(e.target.value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Пароль должен содержать не менее 6 символов",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newUsername = e.target.value;
    setUsername(newUsername);

    if (!newUsername) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Поле обязательно для заполнения",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/')
  };

  const handleMailPopup = () => {
    setVisibleMailPopup(!visibleMailPopup);
  };

  const handlePasswordPopup = () => {
    setVisiblePasswordPopup(!visiblePasswordPopup);
  };

  const handleEyeClick = () => {
    setPasswordIsVisible(!passwordIsVisible);
  };
  return (
    <div className={styles.authorization}>
      {isRegistrationPage && !isLoginPage && !isResetPasswordPage && (
        <>
          <h2 className={styles.authorization__title}>
            Создай аккаунт с помощью
          </h2>
          <div className={styles.socials}>
            <ul className={styles.socials__list}>
              <SocialIcon type="gmail" />
              <SocialIcon type="yandex" />
              <SocialIcon type="mailru" />
            </ul>
            <ul className={styles.socials__list}>
              <SocialIcon type="vk" />
              <SocialIcon type="ok" />
              <SocialIcon type="facebook" />
              <SocialIcon type="telegram" />
            </ul>
          </div>
          <div className={styles.authorization__choice}>
            <p className={styles.authorization__text}>или</p>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <fieldset className={styles.formfield}>
              <div className={styles.input__container}>
                <input
                  className={`${styles.formfield__input} ${
                    errors.username ? styles.formfield__input_error : ""
                  }`}
                  type="text"
                  value={username}
                  placeholder="Имя"
                  onChange={handleUsernameChange}
                  required
                />
                <span className={styles.input__star}>*</span>
                {errors.username && (
                  <p className={styles.input__error}>{errors.username}</p>
                )}
              </div>
              <div className={styles.input__container}>
                <input
                  className={`${styles.formfield__input} ${
                    errors.email ? styles.formfield__input_error : ""
                  }`}
                  type="email"
                  value={email}
                  placeholder="E-mail"
                  onChange={handleEmailChange}
                  required
                />
                <span className={styles.input__star}>*</span>
                {errors.email && (
                  <p className={styles.input__error}>{errors.email}</p>
                )}
              </div>
              <div className={styles.input__container}>
                <input
                  className={`${styles.formfield__input} ${
                    errors.password ? styles.formfield__input_error : ""
                  }`}
                  type={passwordIsVisible ? "text" : "password"}
                  value={password}
                  placeholder="Пароль"
                  onChange={handlePasswordChange}
                  required
                />
                <img
                  src={passwordIsVisible ? eye : eyeOff}
                  alt="глаз"
                  className={styles.input__eye}
                  onClick={handleEyeClick}
                />
                <span className={styles.input__star}>*</span>
                {errors.password && (
                  <p className={styles.input__error}>{errors.password}</p>
                )}
              </div>
              <div className={styles.input__container}>
                <PhoneInput
                  country="ru"
                  localization={ru}
                  inputStyle={{
                    backgroundColor: "#243cbb",
                    border: "none",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
                    height: "60px",
                    color: "white",
                    fontFamily: "Open Sans",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    width: "320px",
                    borderRadius: 0,
                  }}
                  containerClass={styles.formfield__phone_wrapper}
                  buttonStyle={{
                    backgroundColor: "#060C23",
                    border: "none",
                    height: "61px",
                  }}
                  value={phone}
                  onChange={handlePhoneChange}
                />
                <span className={styles.input__star}>*</span>
              </div>
            </fieldset>
            <AuthButton
              visible={visibleMailPopup}
              notificationType={"letter"}
              setVisible={handleMailPopup}
              disabled={Object.values(errors).some((error) => error !== "")}
            />
            <div className={styles.caption}>
              <p className={styles.caption__text}>Уже прошли регистрацию?</p>
              <Link to={"/signin"} className={styles.caption__link}>
                Войти
              </Link>
            </div>
            <div className={styles.authorization__robot}></div>
          </form>
        </>
      )}
      {isLoginPage && !isRegistrationPage && !isResetPasswordPage && (
        <>
          <form onSubmit={handleSubmit} className={styles.form_login}>
            <fieldset
              className={`${styles.formfield} ${styles.formfield_login}`}
            >
              <div className={styles.input__container}>
                <input
                  className={`${styles.formfield__input} ${
                    styles.formfield__input_login
                  }  ${errors.email ? styles.formfield__input_error : ""}`}
                  type="email"
                  value={email}
                  placeholder="E-mail"
                  onChange={handleEmailChange}
                  required
                />
                <span className={styles.input__star}>*</span>
                {errors.email && (
                  <p className={styles.input__error}>{errors.email}</p>
                )}
              </div>
              <div className={styles.input__container}>
                <input
                  className={`${styles.formfield__input} ${
                    styles.formfield__input_login
                  } ${errors.password ? styles.formfield__input_error : ""}`}
                  type="password"
                  value={password}
                  placeholder="Пароль"
                  onChange={handlePasswordChange}
                  required
                />
                <span className={styles.input__star}>*</span>
                {errors.password && (
                  <p className={styles.input__error}>{errors.email}</p>
                )}
              </div>
            </fieldset>
            <div className={`${styles.caption} ${styles.caption_login}`}>
              <Link to={"/reset-password"} className={styles.caption__link}>
                Забыли пароль?
              </Link>
              <Link to={"/signup"} className={styles.caption__link}>
                Регистрация
              </Link>
            </div>
            <ButtonMain
              size="l"
              theme="green"
              label="войти"
              disabled={Object.values(errors).some((error) => error !== "")}
              type='submit'
            />
          </form>
          <div className={styles.authorization__choice_login}>
            <p className={styles.authorization__text}>Быстрый вход</p>
          </div>
          <div className={styles.socials_login}>
            <ul className={styles.socials__list}>
              <SocialIcon type="gmail" />
              <SocialIcon type="yandex" />
              <SocialIcon type="mailru" />
            </ul>
            <ul className={styles.socials__list}>
              <SocialIcon type="vk" />
              <SocialIcon type="ok" />
              <SocialIcon type="facebook" />
              <SocialIcon type="telegram" />
            </ul>
          </div>
        </>
      )}
      {isResetPasswordPage && !isLoginPage && !isRegistrationPage && (
        <>
          <form onSubmit={handleSubmit} className={styles.form_login}>
            <h2 className={styles.authorization__title}>Введи свой E-mail</h2>
            <fieldset className={styles.formfield}>
              <input
                className={`${styles.formfield__input} ${styles.formfield__input_login}`}
                type="email"
                value={email}
                placeholder="E-mail"
                onChange={handleEmailChange}
                required
              />
            </fieldset>
            <AuthButton
              visible={visiblePasswordPopup}
              notificationType={"password"}
              setVisible={handlePasswordPopup}
              disabled={!email}
            />
          </form>
          <img src={roboIcon} alt="робот" />
        </>
      )}
    </div>
  );
};
