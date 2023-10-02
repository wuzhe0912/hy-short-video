import { createContext, useState } from 'react';

export const VideoPlaybackContext = createContext<{
  playbackTimes: Record<string, number>;
  setPlaybackTime: (videoId: string, time: number) => void;
}>({
  playbackTimes: {},
  setPlaybackTime: (_videoId: string, _time: number) => {
    throw new Error(
      'setPlaybackTime is not implemented; you probably forgot to wrap your component tree with <VideoPlaybackProvider>',
    );
  },
});

export function VideoPlaybackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [playbackTimes, setPlaybackTimes] = useState<Record<string, number>>(
    {},
  );

  const setPlaybackTime = (videoId: string, time: number) => {
    setPlaybackTimes((prev) => ({ ...prev, [videoId]: time }));
  };

  return (
    <VideoPlaybackContext.Provider value={{ playbackTimes, setPlaybackTime }}>
      {children}
    </VideoPlaybackContext.Provider>
  );
}
