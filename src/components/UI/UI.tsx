import './UI.scss';
import {AddBotButton} from "./AddBotButton/AddBotButton";
import {Button} from "./Button/Button";
import {StopButton} from "./StopButton/StopButton";
import {InstructionButton} from "./InstructionButton/InstructionButton";
import {MessageButton} from "./MessageButton/MessageButton";
import {BotAnswerButton} from "./BotAnswerButton/BotAnswerButton";
import {AddSocialButton} from "./AddSocialButton/AddSocialButton";
import { ButtonAddBlock } from './Buttons/AddBlock/ButtonAddBlock';
import { ButtonAddTemplate } from './Buttons/AddTemplate/ButtonAddTemplate';
import { ButtonCopy } from './Buttons/Copy/ButtonCopy';
import { ButtonMain } from './Buttons/Main/ButtonMain';
import { ButtonPlus } from './Buttons/Plus/ButtonPlus';
import { ButtonTutorial } from './Buttons/Tutorial/ButtonTutorial';
import svgFacebook from "../../images/icons/facebook.svg";
import { SvgPlus } from "./AddBotButton/SvgPlus";
import { SvgVide } from "./ConstructorVideoButton/SvgVideo";
import { SvgLogicPluse } from "./ConstructorLogicButton/svgLogicPluse";
import { ConstructorTextButton } from "./ConstructorTextButton/ConstructorTextButton";
import { ConstructorVideoButton } from "./ConstructorVideoButton/ConstructorVideoButton";
import { ConstructorLogicButton } from "./ConstructorLogicButton/ConstructorLogicButton";
import { ConstructorBackground } from './ConstructorLogicBackGround/ConstructorLogicBackGround'
import { ConstructorPhoneButton } from './ConstructorPhoneButton/ConstructorPhoneButton'
import { UploadButton } from './UploadButton/UploadButton';
import { CountriesSelect } from './CountriesSelect/CountriesSelect';
import { NumberSelect } from './NumberSelect/NumberSelect';
import { BotCard } from './BotCard/BotCard';
import { DropdownRepeat } from './DropdownRepeat/DropdownRepeat';
import { DropdownSettings } from './DropdownSettings/DropdownSettings';
import { AddTo } from './AddTo/AddTo';
import { DateSelect } from './DateSelect/DateSelect';
import { DaySelect } from './DaySelect/DaySelect';
import { TimeSelect } from './TimeSelect/TimeSelect';
import { AccountSettingButton } from './AccountSettingButton/AccountSettingButton';
import { DropdownWithArrow } from './DropdownWithArrow/DropdownWithArrow';
import { Helper } from './Helper/Helper';
import { Message } from './Message/Message';
import { AddBotStep } from './AddBotStep/AddBotStep';
import { AuthButton } from './AuthButton/AuthButton';
import { useState } from 'react'; 

export function UI() {
    const [visibleMailPopup, setVisibleMailPopup] = useState(false);
    const [visiblePasswordPopup, setVisiblePasswordPopup] = useState(false);

    const handleMailPopup = () => {
        setVisibleMailPopup(!visibleMailPopup);
    };

    const handlePasswordPopup = () => {
        setVisiblePasswordPopup(!visiblePasswordPopup);
    };

    const onChange = () => null;
    
  return (
    <section className="ui">
      <AuthButton visible={visibleMailPopup} notificationType={'letter'} setVisible={handleMailPopup} />
      <AuthButton visible={visiblePasswordPopup} notificationType={'password'} setVisible={handlePasswordPopup} />
      <ButtonAddBlock type='default' label='Блок сообщений'/>
      <ButtonAddTemplate type='default' label='Бот автоответчик' icon='answering machine.svg'/>
      <ButtonCopy type='default'/>
      <ButtonMain theme='purple' label='Добавить бота' size='l'/>
      <ButtonMain theme='purple' label='' size='s'/>
      <ButtonMain theme='grey' label='Остановить' size='l'/>
      <ButtonPlus type='default'/>
      <ButtonTutorial label='Пошаговая инструкция' type='default'/>
      <Button />
      <StopButton />
      <InstructionButton />
      <MessageButton />
      <BotAnswerButton />
      <AddSocialButton value="Facebook">
        <img src={svgFacebook} />
      </AddSocialButton>
      <AddBotButton value="Добавить бота">
        <SvgPlus />
      </AddBotButton>
      <ConstructorTextButton value="Текстом" />
      <ConstructorVideoButton>
        <SvgVide />
      </ConstructorVideoButton>
      <ConstructorLogicButton value="Добавить условие">
        <SvgLogicPluse />
      </ConstructorLogicButton>
      <ConstructorBackground>
      <ConstructorLogicButton value="Добавить условие">
        <SvgLogicPluse />
      </ConstructorLogicButton>
      <ConstructorLogicButton value="Добавить условие">
        <SvgLogicPluse />
      </ConstructorLogicButton>
      </ConstructorBackground>
      <ConstructorPhoneButton/>
      <BotCard id="id" name="Салон красоты" type="telegram"/>
      <UploadButton size="M" name="photo" onChange={onChange} />
      <CountriesSelect />
      <NumberSelect />
      <AddTo />
      <DropdownRepeat />
      <DropdownSettings />
      <DateSelect />
      <DaySelect />
      <TimeSelect />
      <Message text="Ссылка скопирована"/>
      <Helper text='В работе' type='vertical' />
      <Helper text='Невидимое сообщение' type='horizontal' />
      <AddBotStep step='1' type='facebook'/>
      <AccountSettingButton />
      <DropdownWithArrow />
    </section>
  );
}
