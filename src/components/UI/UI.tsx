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
import { ModalAddBot } from '../Modals/ModalAddBot/ModalAddBot';
import { AccountSettingButton } from './AccountSettingButton/AccountSettingButton';
import { DropdownWithArrow } from './DropdownWithArrow/DropdownWithArrow';
import { Helper } from './Helper/Helper';
import { MailingInput } from './MailingInput/MailingInput';
import { Message } from './Message/Message';
import { AddBotStep } from './AddBotStep/AddBotStep';
import { MailingSelect } from './MailingSelect/MailingSelect';
import { AuthButton } from './AuthButton/AuthButton';
import { Input } from './Input/Input';
import { LoadPageButton } from './LoadPageButton/LoadPageButton';
import { PageButton } from './PageButton/PageButton';
import { AddPageField } from './AddPageField/AddPageField';

export function UI() {
    const [showModal, setShowModal] = useState(false);
    const [showNotModal, setNotShowModal] = useState(false);
    const [visibleMailPopup, setVisibleMailPopup] = useState(false);
    const [visiblePasswordPopup, setVisiblePasswordPopup] = useState(false);
    const [showCommonContentModal, setShowCommonContentModal] = useState(false);
    const [showAddBotModal, setShowAddBotModal] = useState(false);


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
      <ButtonAddTemplate type='default' label='Бот автоответчик' icon='answering machine.svg' onClick={() => setShowAddBotModal(true)}/>
      <ButtonCopy type='default'/>
      <ButtonMain theme='purple' label='Добавить бота' size='l' onClick={() => setShowCommonContentModal(true)}/>

      {showCommonContentModal &&
        <Modal onClose={() => setShowCommonContentModal(false)}>
          <ModalCommonContent title='Переименуйте файл'></ModalCommonContent>
        </Modal>
      }

      <ButtonMain theme='purple' label='' size='s'/>

      {showAddBotModal &&
        <Modal onClose={() => setShowAddBotModal(false)}>
          <ModalAddBot title='Бот автоответчик'></ModalAddBot>
        </Modal>
      }

      <ButtonMain theme='grey' label='Остановить' size='l'/>
      <ButtonPlus type='default'/>
      <ButtonTutorial label='Пошаговая инструкция'/>
      <Button />
      <StopButton />
      <InstructionButton />
      <MessageButton />
      <BotAnswerButton />
      <Input placeholder='Введите ключ доступа' />
      <Input
        placeholder='Введите ключ доступа'
        error='Вы ввели неправильное значение'
      />
      <Input placeholder='Введите ключ доступа' disabled />
      <LoadPageButton title='Загрузить страницу' />
      <LoadPageButton title='Загрузить страницу' size='md' />
      <LoadPageButton title='Загрузить страницу' size='sm' />
      <PageButton title='Загрузить' />
      <PageButton title='Страница 1' />
      <PageButton title='Страница 1' selected={true} />
      <PageButton title='Страница 1' size='md' />
      <AddPageField
        pages={[
          {
            title: 'Страница 1',
          },
          {
            title: 'Страница 2',
          },
          {
            title: 'Страница 4',
          },
          {
            title: 'Страница 4',
          },
          {
            title: 'Страница 5',
          },
          {
            title: 'Страница 6',
          },
        ]}
      />
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
      <MailingInput />
      <MailingInput error/>
      <MailingInput disabled/>
      <MailingSelect />
      <Message text="Ссылка скопирована"/>
      <Helper text='В работе' type='vertical' />
      <Helper text='Невидимое сообщение' type='horizontal' />
      <AddBotStep step='1' type='facebook'/>
      <AccountSettingButton />
      <DropdownWithArrow />
    </section>
  );
}