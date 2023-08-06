import React, { useState } from 'react';
import './VideoBox.scss';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import play from '../../../images/icons/play-circle.svg'

interface VideoBoxProps {
  videoUrl: string;
  title: string;
  image: string;
}

const VideoBox: React.FC<VideoBoxProps> = ({ videoUrl, title, image }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  React.useEffect(() => {
    const closeEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseVideo();
      }
    }
    document.addEventListener('keydown', closeEsc);   

    return () => {
      document.removeEventListener('keydown', closeEsc);
    }
  }, []);

  return (
    <div className="video-box">
      <div className="video-box__container" onClick={handleVideoClick}>
        <img className="video__thumbnail" src={image} alt={title} />
          <img className="play-icon" src={play} alt="Кнопка воспроизведения"/>
      </div>
      <p className="video__title">{title}</p>

      {isVideoOpen && (
        <>
        <ModalOverlay onClick={handleCloseVideo} />
        <div className="video-popup">
          <div className="video-popup__content">
            <iframe
              title={title}
              src={videoUrl}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button className="close-button" onClick={handleCloseVideo} />
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default VideoBox;
