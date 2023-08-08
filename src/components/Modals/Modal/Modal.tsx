import React, { useEffect, FunctionComponent, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.scss'

import { ModalOverlay } from '../ModalOverlay/ModalOverlay';

const modalsContainer = document.querySelector('#modals');

interface IModalProps {
  // title?: string,
  onClose: () => void,
  children: ReactNode,
  extraClass?: string,
}

/* Данный компонент содержит кнопку закрытия (крестик) + логику закрытия по нажатию на esc, оверлей или крестик.
  Эта логика передаётся в пропсе onClose
*/

/* Все поп-апы монтируются в body (логика прописана в файле index.html) через CreatePortal */

/* Внутрь <div className={styles.content}> передаётся непосредственно содержимое поп-апа. 
  В компоненте UI приведён пример использования компонента Modal. Поп-ап открывается по клику на кнопку MainButton*/

export const Modal: FunctionComponent<IModalProps> = ({onClose, children, extraClass}) => {

  function onEscapeClick(event: KeyboardEvent) {
    if (event.key === "Escape") {
      onClose();
    }
  }

  useEffect(
    () => {
      document.addEventListener('keydown', onEscapeClick);

      return () => {
        document.removeEventListener('keydown', onEscapeClick);
      }
    }, []
  )


  return ReactDOM.createPortal(
    (<>
      <div className={styles.modal}>
        <div className={styles.close} onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 5L5 19" stroke="#060C23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 5L19 19" stroke="#060C23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>


      <ModalOverlay onOverlayClick={onClose}/>
    </>),

    modalsContainer!
  )
};

