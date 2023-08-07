import './UI.scss';
import { AddBotButton } from './AddBotButton/AddBotButton';
import { Button } from './Button/Button';
import { StopButton } from './StopButton/StopButton';
import { InstructionButton } from './InstructionButton/InstructionButton';
import { MessageButton } from './MessageButton/MessageButton';
import { BotAnswerButton } from './BotAnswerButton/BotAnswerButton';
import { AddSocialButton } from './AddSocialButton/AddSocialButton';
import { Input } from './Input/Input';
import { LoadPageButton } from './LoadPageButton/LoadPageButton';
import { PageButton } from './PageButton/PageButton';
import { AddPageField } from './AddPageField/AddPageField';

export function UI() {
  return (
    <section className='ui'>
      <Button />
      <StopButton />
      <InstructionButton />
      <MessageButton />
      <BotAnswerButton />
      <AddSocialButton />
      <AddBotButton />
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
    </section>
  );
}
