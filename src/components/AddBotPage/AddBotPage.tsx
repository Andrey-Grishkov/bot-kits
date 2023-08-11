import styles from "./AddBotPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { store } from "../../index";
import { AddSocialButton } from "../UI/AddSocialButton/AddSocialButton";
import { useState, useCallback } from "react";
import { chegeItemsSocialAction } from "../../redux/actions";
import { ButtonTutorial } from "../UI/Buttons/Tutorial/ButtonTutorial";
import { BotInstructionForm } from "../BotIstructionForm/BotIstructionForm";
import arrowSvg from '../../images/icons/24/arrow_down.svg';

function AddBotPage() {
  const { socialButtons } = useSelector(
    (state: ReturnType<typeof store.getState>) => state
  );
  const dispatch = useDispatch();
  const [bot, setbot] = useState(false);
  const [iconPayload, setIconPayload] = useState({
    name: "",
    href: "",
  });

  const click = useCallback((name: string, href: string) => {
    setbot(true);
    dispatch(chegeItemsSocialAction(name));
    setIconPayload({
      name,
      href,
    });
  }, []);

  return (
    <section className={styles.main}>
      <h1>Добавить бота</h1>
      <div className={styles.listConteiner}>
        <div className={styles.list}>
          {socialButtons.map((item, index) => (
            <AddSocialButton
              value={item.name}
              key={index}
              variant={item.variant}
              onclick={click}
              chosen={item.chosen}
              href={item.href}
            >
              <img src={item.href} alt={item.name} />
            </AddSocialButton>
          ))}
        </div>
      </div>
      <div className={styles.fieldContainer}>
        {!bot && (
          <div className={styles.fieldConstructor}>
            <h2>К какому мессенджеру подключим бота?</h2>
            <p>Выберите из предложенного списка</p>
          </div>
        )}
        {bot && (
          <>
            <div className={styles.botConstructor}>
              <div className={styles.botTitle}>
                <div
                  className={classNames(
                    styles.imgContainer,
                    styles["type" + iconPayload.name]
                  )}
                >
                  <img src={iconPayload.href} alt={iconPayload.name} />
                </div>
                <h2>{iconPayload.name}</h2>
                <div className={styles.subTitle}>
                  Бот будет создан на основе <b>BotName</b>
                </div>
              </div>
              <BotInstructionForm name={iconPayload.name} />
            </div>
            <div className={styles.adviceContainer}>
              <div className={styles.adviceTitle}>
                <h3>Как это работает?</h3>
                <img src={arrowSvg} alt="arrow"/>
              </div>
              <div className={styles.adviceButtonsWrapper}>
                <ButtonTutorial label="Пошаговая инструкция" type='default'/>
                <ButtonTutorial label="Видео" type="video"/>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default AddBotPage;
