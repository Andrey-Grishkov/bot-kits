import "./UI.scss";
import { AddBotButton } from "./AddBotButton/AddBotButton";
import { Button } from "./Button/Button";
import { StopButton } from "./StopButton/StopButton";
import { InstructionButton } from "./InstructionButton/InstructionButton";
import { MessageButton } from "./MessageButton/MessageButton";
import { BotAnswerButton } from "./BotAnswerButton/BotAnswerButton";
import { AddSocialButton } from "./AddSocialButton/AddSocialButton";
import svgFacebook from "../../images/icons/facebook.svg";
import { SvgPlus } from "./AddBotButton/SvgPlus";
import { SvgVide } from "./ConstructorVideoButton/SvgVideo";
import { SvgLogicPluse } from "./ConstructorLogicButton/svgLogicPluse";
import { ConstructorTextButton } from "./ConstructorTextButton/ConstructorTextButton";
import { ConstructorVideoButton } from "./ConstructorVideoButton/ConstructorVideoButton";
import { ConstructorLogicButton } from "./ConstructorLogicButton/ConstructorLogicButton";
import { ConstructorBackground } from './ConstructorLogicBackGround/ConstructorLogicBackGround'
import { ConstructorPhoneButton } from './ConstructorPhoneButton/ConstructorPhoneButton'

export function UI() {
  return (
    <section className="ui">
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
    </section>
  );
}
