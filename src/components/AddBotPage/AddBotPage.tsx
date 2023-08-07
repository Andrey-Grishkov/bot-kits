import styles from "./AddBotPage.module.scss";
import { useSelector } from "react-redux";
import { store } from "../../index";
import { AddSocialButton } from "../UI/AddSocialButton/AddSocialButton";

function AddBotPage() {
  const { socialButtons } = useSelector(
    (state: ReturnType<typeof store.getState>) => state
  );

  return (
    <section className={styles.main}>
      <h1>Добавить бота</h1>
      <div className={styles.listConteiner}>
        <div className={styles.list}>
          {socialButtons.map((item, index) => (
            <AddSocialButton value={item.name} key={index}>
              <img src={item.href} alt="" />
            </AddSocialButton>
          ))}
        </div>
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.fieldConstructor}>
            <h2>К какому мессенджеру подключим бота?</h2>
            <p>Выберите из предложенного списка</p>
        </div>
      </div>
    </section>
  );
}

export default AddBotPage;
