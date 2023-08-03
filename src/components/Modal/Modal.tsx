import React, { useEffect, FunctionComponent, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.scss'

import { ModalOverlay } from './ModalOverlay';

const modalsContainer = document.querySelector('#modals');

interface IModalProps {
  title?: string,
  onClose: () => void,
  children: ReactNode
}

export const Modal: FunctionComponent<IModalProps> = ({title, onClose, children}) => {

  function closeModal() {
    onClose();
  }


  function onEscapeClick(event: KeyboardEvent) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  function onCrossClick() {
    closeModal();
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
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.close} onClick={onCrossClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 5L5 19" stroke="#060C23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 5L19 19" stroke="#060C23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        {children}
      </div>


      <ModalOverlay onOverlayClick={closeModal}/>
    </>),

    modalsContainer!
  )
};

