import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import ReactPlayer from "react-player";
import style from "./MusicPlayer.module.css";

const MusicPlayer = ({ videoData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const playerRef = useRef(null);

  const videoTitle = videoData && videoData.snippet.title;
  const thumbnailUrl = videoData && videoData.snippet.thumbnails.default.url;
  const videoUrl = `https://www.youtube.com/watch?v=${
    videoData && videoData.id.videoId
  }`;

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (videoData) {
      setIsPlaying(true);
    }
  }, [videoData]);

  useEffect(() => {
    if (playerRef.current && isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime(playerRef.current.getCurrentTime());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [playerRef, isPlaying]);

  const handleProgress = (progressData) => {
    setCurrentTime(progressData.playedSeconds);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (playerRef.current) {
      isPlaying ? playerRef.current.pause() : playerRef.current.play();
    }
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * duration;
    setCurrentTime(newTime);
    playerRef.current.seekTo(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
    if (playerRef.current) {
      playerRef.current.setVolume(newVolume);
    }
  };

  return (
    <>
      <div className={style.player}>
        <div className={style.coverImageContainer}>
          <img className={style.coverImage} src={thumbnailUrl} alt="" />
        </div>
        <div className={style.infoParent}>
          <button className={style.togglePlay} onClick={togglePlayPause}>
            {isPlaying ? (
              <FaPause className={`${style.playIcon} ${style.toggleIcon}`} />
            ) : (
              <FaPlay className={`${style.pauseIcon} ${style.toggleIcon}`} />
            )}
          </button>
          <div className={style.musicInfo}>
            {videoTitle && (
              <>
                <div className={style.titleContainer}>
                  <p className={style.title}>
                    <span className={style.title1}>
                      &nbsp;{videoTitle}
                      {` `}{" "}
                    </span>

                    <span className={style.title2}>
                      &nbsp;{videoTitle}&nbsp;
                    </span>
                  </p>
                </div>
                {/* <p className={style.title}>{videoTitle}</p> */}
              </>
            )}
            <div className={style.timecode}>
              <p className={style.startTimeCode}>{formatTime(currentTime)}</p>
              <div className={style.progressBar}>
                <input
                  className={style.line}
                  type="range"
                  min="0"
                  max="100"
                  value={videoData ? (currentTime / duration) * 100 || 0 : 0}
                  onChange={handleSeek}
                />
                <div className="progressLine"></div>
              </div>
              <p className={style.EndTimeCode}>{formatTime(duration)}</p>
            </div>
          </div>
        </div>
        <div className={style.volume}>
          <FaVolumeHigh className={style.volumeIcon} />
          <input
            className={style.volumeBar}
            type="range"
            min="0"
            max="100"
            value={volume * 100}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        className={style.videoPlayer}
        playing={isPlaying}
        volume={volume}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
    </>
  );
};

MusicPlayer.propTypes = {
  videoData: PropTypes.shape({
    id: PropTypes.object,
    snippet: PropTypes.object,
  }),
};

export default MusicPlayer;
