import { FC } from "react";
import { AddBotStep } from "../UI/AddBotStep/AddBotStep";
import styles from './BotInstructionForm.module.scss';

interface IBotInstruction {
  name?: string;
}

export const BotInstructionForm: FC<IBotInstruction> = ({ name }) => {
  return (
    <form className={styles.form}>
      {name === "Facebook" && (
        <>
          <AddBotStep step="1" type="facebook" /> 
          <div>
          <AddBotStep step="2" type="facebook" />
          <button type="submit" className={styles.button}>Создать бота</button> 
          </div>
        </>
      )} 
      {name ==='Viber' && 
      <>
          <AddBotStep step="1" type="viber" /> 
          <AddBotStep step="2" type="viber" />
          <div>
          <AddBotStep step="3" type="viber" />
          <button type="submit" className={styles.button}>Создать бота</button> 
          </div>
      </> }
      {name === 'Telegram' && <>
          <AddBotStep step="1" type="telegram" /> 
          <div>
          <AddBotStep step="2" type="telegram" />
          <button type="submit" className={styles.button}>Создать бота</button> 
          </div>
      </>}
      
    </form>
  );
};
