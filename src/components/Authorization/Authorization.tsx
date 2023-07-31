import "./Authorization.scss";
import googleLogo from "../../vendor/icons/google_icon.svg";
import { ChangeEvent, FormEvent, useState } from "react";
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";
export function Authorization() {
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
      minHeight: '50px', // Увеличиваем высоту контейнера
    }),
    option: (provided: any) => ({
      ...provided,
      minHeight: '50px', // Увеличиваем высоту элементов списка
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
            onChange={handleUsernameChange}
            required
          />
          <input
            className="formfield__input"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            className="formfield__input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <div className="formfield__phone_wrapper">
          <Select options={countryOptions} className='formfield__select' styles={customStyles}></Select>
            <input
              className="formfield__input"
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
