import { useContext } from 'react';
import { VideoPlaybackContext } from '@/components/VideoPlayer/VideoPlaybackProvider';

export function useVideoPlayback() {
  return useContext(VideoPlaybackContext);
}
