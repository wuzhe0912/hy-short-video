import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { videoItemType } from '@/interfaces/VideoLinkTypes';
import playIcon from '@/assets/play.svg';

interface VideoPlayerProps {
  videoData: videoItemType;
}

function VideoPlayer({ videoData }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayIcon, setShowPlayIcon] = useState(true);

  useEffect(() => {
    loadVideo(videoData.play_url);
  }, [videoData]);

  const loadVideo = (url: string) => {
    if (Hls.isSupported() && videoRef.current) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        // Auto-play logic
        // videoRef.current?.play();
      });
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setShowPlayIcon(isPlaying);
    }
  };

  const handlePlayIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleVideoClick();
  };

  return (
    <div className='relative h-full'>
      <video
        ref={videoRef}
        onClick={handleVideoClick}
        controls
        className='w-full h-full object-cover'
        poster={videoData.cover}>
        <source src={videoData.play_url} type='application/x-mpegURL' />
      </video>
      {showPlayIcon && (
        <button
          onClick={handlePlayIconClick}
          className='absolute inset-0 flex items-center justify-center w-full h-full z-40'>
          <img src={playIcon} alt='Play video' className='w-24 h-24' />
        </button>
      )}
    </div>
  );
}

export default VideoPlayer;
