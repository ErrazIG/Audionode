import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import style from "./MusicPlayer.module.css";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={style.player}>
      <img className={style.coverImage} src="" alt="" />
      <div className={style.infoParent}>
        <button className={style.togglePlay} onClick={togglePlayPause}>
          {isPlaying ? (
            <FaPause className={`${style.playIcon}  ${style.toggleIcon}`} />
          ) : (
            <FaPlay className={`${style.pauseIcon} ${style.toggleIcon}`} />
          )}
        </button>
        <div className={style.musicInfo}>
          <p className={style.title}>Supermode - Tell Me Why (1991 Remix)</p>
          <div className={style.timecode}>
            <p className={style.startTimeCode}>00:00</p>
            <div className={style.line}></div>
            <p className={style.EndTimeCode}>04:02</p>
          </div>
        </div>
      </div>
      <FaVolumeHigh className={style.volumeIcon} />
    </div>
  );
};

export default MusicPlayer;
