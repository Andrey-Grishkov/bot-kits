import React, {useState} from 'react';

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
import { Modal } from '../Modals/Modal/Modal';
import { ModalCommonContent } from '../Modals/ModalCommonContent/ModalCommonContent';
import { AuthButton } from './AuthButton/AuthButton';
import { NotificationModal } from '../Modals/NotificationModal/NotificationModal';
export function UI() {
    const [showModal, setShowModal] = useState(false);
    const [showNotModal, setNotShowModal] = useState(false);
    const [visibleMailPopup, setVisibleMailPopup] = useState(false);
    const [visiblePasswordPopup, setVisiblePasswordPopup] = useState(false);

    const handleMailPopup = () => {
        setVisibleMailPopup(!visibleMailPopup);
    };

    const handlePasswordPopup = () => {
        setVisiblePasswordPopup(!visiblePasswordPopup);
    };
    
  return (
    <section className="ui">
      <AuthButton visible={visibleMailPopup} notificationType={'letter'} setVisible={handleMailPopup} />
      <AuthButton visible={visiblePasswordPopup} notificationType={'password'} setVisible={handlePasswordPopup} />
      <ButtonAddBlock type='default' label='Блок сообщений'/>
      <ButtonAddTemplate type='default' label='Бот автоответчик' icon='answering machine.svg'/>
      <ButtonCopy type='default'/>
      <ButtonMain theme='purple' label='Добавить бота' size='l' onClick={() => setShowModal(true)}/>

      {showModal &&
        <Modal onClose={() => setShowModal(false)}>
          <ModalCommonContent title='Переименуйте файл'></ModalCommonContent>
        </Modal>
      }
      {showNotModal &&
        <NotificationModal onClose={ () => setNotShowModal(false)}></NotificationModal>
      }
      <ButtonMain theme='purple' label='' size='s' onClick={() => {
        setNotShowModal(true)
      }}/>
      <ButtonMain theme='grey' label='Остановить' size='l'/>
      <ButtonPlus type='default'/>
      <ButtonTutorial label='Пошаговая инструкция'/>
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
      <UploadButton size="M" />
      <BotCard id="id" name="Салон красоты" type="telegram"/>
      <CountriesSelect />
      <NumberSelect />
      <AddTo />
      <DropdownRepeat />
      <DropdownSettings />
      <DateSelect />
      <DaySelect />
      <TimeSelect />
    </section>
  );
}