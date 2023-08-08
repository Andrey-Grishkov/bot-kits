import React from 'react';
import { FC } from 'react';
import './AddBotStep.scss';

interface IAddBotStep {
  step: '1' | '2' | '3';
  type: 'facebook' | 'vk' | 'viber' | 'telegram' | null;
}

export const AddBotStep: FC<IAddBotStep> = ({step, type}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [defaultType, setDefaultType] = React.useState(false);
  const [viberType, setViberType] = React.useState(false);
  const [telegramType, setTelegramType] = React.useState(false);
  const [stepOne, setStepOne] = React.useState(false);
  const [stepTwo, setStepTwo] = React.useState(false);
  const [stepThree, setStepThree] = React.useState(false);


  React.useEffect(() => {
    if (step === '1') {
			setStepOne(true);
		}

    if (step === '2') {
			setStepTwo(true);
		} 

    if (step === '3') {
      setStepThree(true);
    }
  }, [step]);

  React.useEffect(() => {
    if (type === 'viber') {
      setViberType(true);
		} 
    if (type === 'telegram') {
			setTelegramType(true);
		} 
    if (type !== 'telegram' && type !== 'viber') {
      setDefaultType(true);
    }
  }, [type]);

  return (
    <div>
      { telegramType && 
        ( <div className='steps__wrapper'>
            { stepOne ?
              ( <>
                <div className='steps__title__container'>
                  <span>{`${step}`} Шаг	&#10095; </span>
                  <span>Ключ доступа</span>
                </div>
                {/* Ниже поле <Input placeholder='Введите ключ доступа' /> */}
                <div className='input'></div>
                </>
              ) : 
              ( <>
                <div className='steps__title__container'>
                  <span>{`${step}`} Шаг	&#10095; </span>
                  <span>Ключ доступа</span>
                </div>
                {/* Поле <Input placeholder='Введите ключ доступа' /> */}
                <div className='input'></div>
                </>
              )}
          </div>)}

     { viberType && 
        ( <div className='steps__wrapper_sm'>
          { stepOne &&
            ( <>
              <div className='steps__title__container'>
                <span>{`${step}`} Шаг	&#10095; </span>
                <span>Ключ доступа</span>
              </div>
              {/* Поле <Input placeholder='Введите ключ доступа' /> */}
              <div className='input_sm'></div>
              </>
            )}
          { stepTwo &&
            ( <>
              <div className='steps__title__container'>
                <span>{`${step}`} Шаг	&#10095; </span>
                <span>URI бота</span>
              </div>
              {/* Поле <Input placeholder='Введите URI' /> */}
              <div className='input_sm'></div>
              </>

            )}
          { stepThree &&
            ( <>
              <div className='steps__title__container'>
                <span>{`${step}`} Шаг	&#10095; </span>
                <span>Название бота</span>
              </div>
              {/* Поле <Input placeholder='Введите ключ доступа' /> */}
              <div className='input_sm'></div>
              </>
            )}
        </div>)}

      { defaultType && 
        ( <div className='steps__wrapper'>
          { stepOne ?
            ( <>
              <div className='steps__title__container'>
                <span>{`${step}`} Шаг	&#10095; </span>
                <span>Загрузить страницу</span>
              </div>
              {/* Поле <Загрузить страницу /> */}
              <div className='input'></div>
              </>
            ) : 
            ( <>
              <div className='steps__title_container'>
                <span>{`${step}`} Шаг	&#10095; </span>
                <span>Название бота</span>
              </div>
              {/* <Input placeholder='Введите ключ доступа' /> */}
              <div className='input'></div>
              </>
            )}
          </div>)}
    </div>
  );
};