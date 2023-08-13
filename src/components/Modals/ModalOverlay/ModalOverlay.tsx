import styles from './ModalOverlay.module.scss';

import React, { FunctionComponent }  from 'react';

interface IModalOverlayProps {
  onOverlayClick: () => void
}

export const ModalOverlay: FunctionComponent<IModalOverlayProps> = ({onOverlayClick}) => {
  return (
    <div className={styles.overlay} onClick={onOverlayClick}></div>
  )
}
