import { FC } from 'react';
import upload from '../../../images/icons/upload.svg'

const UploadIcon: FC = () => {
  return (
    <img src={ upload } alt='Загрузка' />
  );
}

export default UploadIcon;