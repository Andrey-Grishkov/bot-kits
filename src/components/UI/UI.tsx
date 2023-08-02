import './UI.scss';
import {AddBotButton} from "./AddBotButton/AddBotButton";
import {Button} from "./Button/Button";
import {StopButton} from "./StopButton/StopButton";
import {InstructionButton} from "./InstructionButton/InstructionButton";
import {MessageButton} from "./MessageButton/MessageButton";
import {BotAnswerButton} from "./BotAnswerButton/BotAnswerButton";
import {AddSocialButton} from "./AddSocialButton/AddSocialButton";
import {AuthButton} from './AuthButton/AuthButton';

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
            <AuthButton type={'login'} />
        </section>
    );
}
