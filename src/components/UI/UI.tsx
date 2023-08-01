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

export function UI() {
    return (
        <section className="ui">
            <Button/>
            <StopButton/>
            <InstructionButton/>
            <MessageButton/>
            <BotAnswerButton/>
            <AddSocialButton/>
            <AddBotButton/>
            <ButtonAddBlock type='default' label='Блок сообщений'/>
            <ButtonAddTemplate type='default' label='Бот автоответчик' icon='answering machine.svg'/>
            <ButtonCopy type='default'/>
            <ButtonMain theme='purple' label='Добавить бота' size='l'/>
            <ButtonMain theme='purple' label='' size='s'/>
            <ButtonMain theme='grey' label='Остановить' size='l'/>
            <ButtonPlus type='default'/>
            <ButtonTutorial label='Пошаговая инструкция'/>
        </section>
    );
}
