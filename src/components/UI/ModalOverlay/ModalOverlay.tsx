import { FC } from 'react';
import './ModalOverlay.scss';

type TModalOverlay = {
  onClick: () => void;
}

export const ModalOverlay: FC<TModalOverlay> = ({ onClick }) => {
  return (
  <div className="overlay" onClick={onClick} />
  )
}