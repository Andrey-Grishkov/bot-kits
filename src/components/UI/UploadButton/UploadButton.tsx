import React from 'react';
import { FC } from 'react';
import cn from 'classnames';
import styles from './UploadButton.module.scss';
import UploadIcon from './upload-icon';
import UploadingIcon from '../../../images/icons/download file.svg';
import SuccessIcon from '../../../images/icons/check.svg'

interface IUploadButton {
  size: 'M' | 'S' | 'mobile';
  onChange: (item?: File | null) => void;
  name: 'photo'| 'video' | 'audio';
}

interface UploadFile {
  file: File;
  progress: number;
  status: 'uploading' | 'success' | 'error';
  }

export const UploadButton: FC<IUploadButton> = ({ size, name, onChange}) => {
  const sizeClass = styles[`label_size_${size}`];
  const [currentFile, setCurrentFile] = React.useState<File | null>(null);
  const [uploadingFile, setUploadingFile] = React.useState<UploadFile | null>(null);
  const [showPopup, setShowPopup] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");

  const startUpload = (file: File) => {
    const uploadFile: UploadFile = {
      file,
      progress: 0,
      status: 'uploading',
    };
    setUploadingFile(uploadFile);

  const interval = setInterval(() => {
    if (uploadFile.progress < 100) {
      uploadFile.progress += 34;
      setUploadingFile({ ...uploadFile });
    } else {
      clearInterval(interval);
      uploadFile.status = 'success';
      setUploadingFile({ ...uploadFile });
      setShowPopup(false);
      setSuccess(true);
    }
  }, 1000);
}
  
  const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files as FileList;
    if (!selectedFiles) {
      return
    }
    if (selectedFiles) {
    const file = selectedFiles?.[0];
    const filename = selectedFiles?.[0].name;
    const extension = filename.split('.').pop();
    const allowedExtensions = ['jpg', 'png', 'gif'];
    const fileSizeKiloBytes = file?.size / 1024;
    if (name === 'photo' && extension && !allowedExtensions.includes(extension)) {
      setError("Допускаются файлы: .jpg, .png и .gif");
      return
    } else if (fileSizeKiloBytes > 20480){
      setError("Размер файла не должен превышать 20 Мб");
      return
    } else {
      setCurrentFile(file);
      setShowPopup(true);
      startUpload(file);
    }}
    return
  } 

  const cancelUpload = () => {
    setUploadingFile(null);
    setShowPopup(false);
    setCurrentFile(null);
  };


  React.useEffect(() => {
    onChange(currentFile);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFile]);
  
  return (
    <>
      {uploadingFile === null && 
      (<>
      {name === "photo" &&
      (<input type='file' id='file' name={name} accept= "image/jpg, image/png, image/gif" onChange={selectFile} className={styles.input} />)}
      {name === "video" &&
      (<input type='file' id='file' name={name} accept= "video/*" onChange={selectFile} className={styles.input} />)}
      {name === "audio" &&
      (<input type='file' id='file' name={name} accept= "audio/*" onChange={selectFile} className={styles.input} />)}
      <label htmlFor='file' className={ cn(styles.label, error ? styles.label_error : '', sizeClass) }>
        <span className={styles.span}>
          <UploadIcon />
            Загрузить файл
        </span>
      </label>
      {error ? (<p className={styles.message}>{error}</p>) : ""}
      </>
      )}
      {showPopup && uploadingFile && (
        <div className={ cn(styles.label, uploadingFile ? styles.label_uploading : '', sizeClass) }>
          <div className={styles.upload_box__content}>
            <img src={UploadingIcon} alt="Загрузка файла" className={styles.upload_box__img}/>
            <span className={styles.upload_box__text}>Загрузка выбранного файла...</span>
            <button type="button" className={styles.upload_box__cancel} onClick={cancelUpload}>Отмена</button>
          </div>
          <progress value={uploadingFile.progress} max={100}></progress>
        </div> )}
      { uploadingFile && success &&(
        <div className={styles.success_box}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M27.3121 14.668H11.3546C11.0023 14.668 10.7163 14.966 10.7163 15.3346C10.7163 15.7033 11.0023 16.0013 11.3546 16.0013H27.3121C27.6644 16.0013 27.9504 15.7033 27.9504 15.3346C27.9504 14.966 27.6644 14.668 27.3121 14.668Z" fill="#243CBB"/>
            <path d="M11.3546 10.6654H17.7376C18.0899 10.6654 18.3759 10.3674 18.3759 9.9987C18.3759 9.63003 18.0899 9.33203 17.7376 9.33203H11.3546C11.0023 9.33203 10.7163 9.63003 10.7163 9.9987C10.7163 10.3674 11.0023 10.6654 11.3546 10.6654Z" fill="#243CBB"/>
            <path d="M27.3121 20H11.3546C11.0023 20 10.7163 20.298 10.7163 20.6667C10.7163 21.0353 11.0023 21.3333 11.3546 21.3333H27.3121C27.6644 21.3333 27.9504 21.0353 27.9504 20.6667C27.9504 20.298 27.6644 20 27.3121 20Z" fill="#243CBB"/>
            <path d="M27.3121 25.332H11.3546C11.0023 25.332 10.7163 25.63 10.7163 25.9987C10.7163 26.3674 11.0023 26.6654 11.3546 26.6654H27.3121C27.6644 26.6654 27.9504 26.3674 27.9504 25.9987C27.9504 25.63 27.6644 25.332 27.3121 25.332Z" fill="#243CBB"/>
            <path d="M27.3121 30.668H11.3546C11.0023 30.668 10.7163 30.966 10.7163 31.3346C10.7163 31.7033 11.0023 32.0013 11.3546 32.0013H27.3121C27.6644 32.0013 27.9504 31.7033 27.9504 31.3346C27.9504 30.966 27.6644 30.668 27.3121 30.668Z" fill="#243CBB"/>
            <path d="M25.6139 0.616857C25.2366 0.222829 24.7148 0 24.1693 0H6.3335C5.22893 0 4.3335 0.895431 4.3335 2V38C4.3335 39.1046 5.22893 40 6.3335 40H32.3335C33.4381 40 34.3335 39.1046 34.3335 38V10.5271C34.3335 10.0117 34.1345 9.5162 33.7781 9.14393L25.6139 0.616857ZM25.3973 2.276L32.1543 9.33333H26.3973C25.845 9.33333 25.3973 8.88562 25.3973 8.33333V2.276ZM6.61009 38.6667C6.05781 38.6667 5.61009 38.219 5.61009 37.6667V2.33333C5.61009 1.78105 6.05781 1.33333 6.61009 1.33333H24.1207V8.66667C24.1207 9.77124 25.0162 10.6667 26.1207 10.6667H33.0569V37.6667C33.0569 38.219 32.6092 38.6667 32.0569 38.6667H6.61009Z" fill="#243CBB"/>
          </svg>
          <p className={styles.success_box__text}>Загрузка файла завершена</p>
          <img src={SuccessIcon} alt="Успешная загрузка" className={styles.upload_box__img}/>
        </div>)
      }
    </>
  );
};