import './UI.scss';
import { AddBotButton } from "./AddBotButton/AddBotButton";
import { Button } from "./Button/Button";
import { StopButton } from "./StopButton/StopButton";
import { InstructionButton } from "./InstructionButton/InstructionButton";
import { MessageButton } from "./MessageButton/MessageButton";
import { BotAnswerButton } from "./BotAnswerButton/BotAnswerButton";
import { AddSocialButton } from "./AddSocialButton/AddSocialButton";
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

    return (
        <section className="ui">
            <Button />
            <StopButton />
            <InstructionButton />
            <MessageButton />
            <BotAnswerButton />
            <AddSocialButton />
            <AddBotButton />
            <AuthButton visible={visibleMailPopup} notificationType={'letter'} setVisible={handleMailPopup} />
            <AuthButton visible={visiblePasswordPopup} notificationType={'password'} setVisible={handlePasswordPopup} />
        </section>
    );
}