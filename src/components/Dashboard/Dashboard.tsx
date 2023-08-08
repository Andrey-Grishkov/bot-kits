/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FC } from 'react';
import './Dashboard.scss';
import { ButtonAddTemplate } from '../UI/Buttons/AddTemplate/ButtonAddTemplate';
import { BotCard } from '../UI/BotCard/BotCard';
import { AddBotButton } from '../UI/AddBotButton/AddBotButton';
import VideoBox from '../UI/VideoBox/VideoBox';
import caretBig from '../../images/icons/down big.svg';
import caret from '../../images/icons/down.svg';
import {templates} from '../../utils/data';
import {bots} from '../../utils/data';
import {videos} from '../../utils/data';
import { SvgPlus } from '../UI/AddBotButton/SvgPlus';

const Dashboard: FC = () => {
	const [expanded, setExpanded] = React.useState(false);
	const [up, setUp] = React.useState(false);

	const handleExpand = () => {
		setExpanded((prevExpanded) => !prevExpanded);
	};

	const handleClick = () => {
		setUp((prevUp) => !prevUp);
	};

  return (
	<div className='dashboard__wrapper'>
	  <div className='dashboard__container'>
		<h2 className='dashboard__title'>Шаблоны</h2>
				<button onClick={handleExpand} className='dashboard__button'>
					Все шаблоны
					<img
						className={ expanded ? "imgCaret__active" : "imgCaret" }
						src={caretBig}
						alt="Стрелка вниз"
					/>
				</button>
				<div className='dashboard__templates' 
						style={{ height: expanded ? '282px' : '125px', overflow: 'hidden', transition: 'height 0.3s' }}>
					{templates.map((template) => {
		  return <ButtonAddTemplate keyName={template.keyName} key={template.id} label={template.name} type='default'/>;
		})}
				</div>
	  </div>
	  <section className='dashboard__container'>
		<h2 className='dashboard__title'>Мои боты</h2>
				<div className='dashboard__bots'>
					{bots.map((bot) => {
		  return <BotCard  key={bot.id} id={bot.id} name={bot.name} type={bot.type}/>;
		})}
				<AddBotButton value={'Добавить бота'}>
					<SvgPlus />
				</AddBotButton>
				</div>
	  </section>
	  <section className='dashboard__tutorial'>
	   	<h3 className='dashboard__subtitle'>С чего начать?</h3>
				<div className='dashboard__videos'>
				  {videos.map((video) => {
			return <VideoBox key={video.id} videoUrl={video.video} image={video.image} title={video.title}/>;
		  })}
				</div>
				<div className='dashboard__menu'>
				<button onClick={handleClick} className='dashboard__menu-button'>
					<img
						className={ up ? "imgCaret__active" : "imgCaret" }
						src={caret}
						alt="Стрелка вниз"
					/>
				</button>
		  		<h3 className='dashboard__subtitle'>База знаний</h3>
					<p className='dashboard__text'>Узнай, как создать чат бота. Примеры и описание опций сервиса!</p>
					<div className='dashboard__buttons-area'>
  					<button className='dashboard__tutorial-button'>
							<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.6875 6.54688L6.03125 4.35156L0.6875 1.875V0L8.44531 3.875V4.99219L0.6875 8.41406V6.54688Z" fill="#A6B3C9"/>
							</svg>		
							<span className='dashboard__tutorial-button__label'>Начало работы в сервисе</span>
						</button>
						<button className='dashboard__tutorial-button'>
							<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.6875 6.54688L6.03125 4.35156L0.6875 1.875V0L8.44531 3.875V4.99219L0.6875 8.41406V6.54688Z" fill="#A6B3C9"/>
							</svg>		
							<span className='dashboard__tutorial-button__label'>Блок схемы</span>
						</button>
						<button className='dashboard__tutorial-button'>
							<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.6875 6.54688L6.03125 4.35156L0.6875 1.875V0L8.44531 3.875V4.99219L0.6875 8.41406V6.54688Z" fill="#A6B3C9"/>
							</svg>		
							<span className='dashboard__tutorial-button__label'>Рассылка</span>
						</button>
						<button className='dashboard__tutorial-button'>
							<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.6875 6.54688L6.03125 4.35156L0.6875 1.875V0L8.44531 3.875V4.99219L0.6875 8.41406V6.54688Z" fill="#A6B3C9"/>
							</svg>		
							<span className='dashboard__tutorial-button__label'>Конфигурации</span>
						</button>
						<button className='dashboard__tutorial-button'>
							<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.6875 6.54688L6.03125 4.35156L0.6875 1.875V0L8.44531 3.875V4.99219L0.6875 8.41406V6.54688Z" fill="#A6B3C9"/>
							</svg>		
							<span className='dashboard__tutorial-button__label'>Статистика</span>
						</button>
						<button className='dashboard__tutorial-button'>
							<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.6875 6.54688L6.03125 4.35156L0.6875 1.875V0L8.44531 3.875V4.99219L0.6875 8.41406V6.54688Z" fill="#A6B3C9"/>
							</svg>		
							<span className='dashboard__tutorial-button__label'>Диалоги</span>
						</button>
					</div>
				</div>
			</section>
	</div>
  );
};

export default Dashboard;