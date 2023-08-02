import React from 'react';
import { FC } from 'react';
import cn from 'classnames';
import styles from './UploadButton.module.scss';
import UploadIcon from './upload-icon';

interface IUploadButton {
    size: 'M' | 'S' | 'mobile';
}

export const UploadButton: FC<IUploadButton> = ({ size }) => {
    const sizeClass = styles[`label_size_${size}`];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [currentImage, setCurrentImage] = React.useState<File>();
    const [error, setError] = React.useState<string>("");
    const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files as FileList;
        const filename = selectedFiles?.[0].name;
        const extension = filename.split('.').pop();
        const allowedExtensions = ['jpg', 'png', 'gif'];
        const fileSizeKiloBytes = selectedFiles?.[0].size / 1024
        if (!selectedFiles) {
            return
          }
      
        if (extension && !allowedExtensions.includes(extension)) {
            setError("Допускаются файлы: .jpg, .png и .gif");
            return
        } else if(fileSizeKiloBytes > 20480){
            setError("Размер файла не должен превышать 20 Мб");
            return
        } else {
        setCurrentImage(selectedFiles?.[0]);}
      };
  
  return (
    <>
        <input type='file' id='file' name='file' accept="image/jpg, image/png, image/gif" onChange={selectImage} className={styles.input} />
        <label htmlFor='file' className={ cn(styles.label, error ? styles.label_error : '', sizeClass) }>
            <span className={styles.span}>
                <UploadIcon />
                Загрузить файл
            </span>
        </label>
        {error ? (<p className={styles.message}>{error}</p>) : ""}
    </>
  );
};