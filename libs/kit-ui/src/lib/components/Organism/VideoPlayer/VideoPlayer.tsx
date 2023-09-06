import {
  ComponentProps,
  ElementRef,
  PointerEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ClassNames, SerializedStyles } from '@emotion/react';
import ReactPlayer from 'react-player';
import { Ratio } from '../../Abstracts/Ratio';
import { OnProgressProps } from 'react-player/base';
import { noop } from '../../../../../utils';
import VideoPlayerControls, {
  VideoPlayerControlProps,
} from './VideoPlayerControls/VideoPlayerControls';
import screenfull from 'screenfull';

export type VideoPlayerProps = {
  style: SerializedStyles;
  url: string;
} & ComponentProps<'div'>;

type PlayerState = {
  isPlaying: boolean;
  isMute: boolean;
  volume: number;
  playerbackRate: number;
  playValue: number;
  isSeeking: boolean;
  shouldShowControl: boolean;
};

export default function VideoPlayer({ url, style }: VideoPlayerProps) {
  const [playerState, setPlayerState] = useState<PlayerState>({
    isPlaying: true,
    isMute: true,
    volume: 0.5,
    playerbackRate: 1.0,
    playValue: 0,
    isSeeking: false,
    shouldShowControl: true,
  });
  const mouseEnterTimeoutID = useRef<NodeJS.Timeout>();
  const mouseLeaveTimeoutID = useRef<NodeJS.Timeout>();

  useEffect(() => {
    clearTimeout(mouseEnterTimeoutID.current);
    mouseEnterTimeoutID.current = setTimeout(() => {
      setPlayerState((prev) => ({ ...prev, shouldShowControl: false }));
    }, 2000);

    return () => {
      clearTimeout(mouseEnterTimeoutID.current);
    };
  }, []);

  const { isPlaying, isMute, volume, playValue } = playerState;

  const playerRef = useRef<ReactPlayer>(null);

  const handleRewind = () => {
    playerRef.current
      ? playerRef.current.seekTo(
          playerRef.current.getCurrentTime() - 10,
          'seconds'
        )
      : noop();
  };

  const handleFastForward = () => {
    playerRef.current
      ? playerRef.current.seekTo(
          playerRef.current.getCurrentTime() + 30,
          'seconds'
        )
      : noop();
  };

  const handlePlayPause = () => {
    setPlayerState((prev) => ({ ...prev, isPlaying: !isPlaying }));
  };

  const handlePlayerProgress = (state: OnProgressProps) => {
    const { played } = state;
    if (!playerState.isSeeking) {
      setPlayerState({ ...playerState, ...state, playValue: played });
    }
  };

  const handlePlayerSeek = (
    _: Parameters<VideoPlayerControlProps['onSeek']>[0],
    newValue: Parameters<VideoPlayerControlProps['onSeek']>[1]
  ) => {
    const value = parseFloat(`${+newValue / 100}`);
    setPlayerState({ ...playerState, playValue: value });
    playerRef.current && playerRef.current.seekTo(value);
  };

  const handlePlayerMouseSeekUp = (
    _: Parameters<VideoPlayerControlProps['onSeekMouseUp']>[0],
    newValue: Parameters<VideoPlayerControlProps['onSeekMouseUp']>[1]
  ) => {
    const value = parseFloat(`${+newValue / 100}`);
    setPlayerState({ ...playerState, isSeeking: false });
    playerRef.current && playerRef.current.seekTo(value);
  };

  const handleMuting = () => {
    setPlayerState({ ...playerState, isMute: !playerState.isMute });
  };

  const handleVolumeChange = (
    _: Parameters<VideoPlayerControlProps['handleVolumeChange']>[0],
    newValue: Parameters<VideoPlayerControlProps['handleVolumeChange']>[1]
  ) => {
    const volume = +parseFloat(`${+newValue / 100}`).toFixed(1);
    setPlayerState({
      ...playerState,
      volume,
      isMute: newValue === 0,
    });
  };

  const handleVolumeSeek = (
    _: Parameters<VideoPlayerControlProps['handleVolumeSeek']>[0],
    newValue: Parameters<VideoPlayerControlProps['handleVolumeSeek']>[1]
  ) => {
    const volume = +parseFloat(`${+newValue / 100}`).toFixed(1);
    setPlayerState({
      ...playerState,
      volume,
      isMute: newValue === 0,
    });
  };

  const currentPlayerTime = playerRef.current
    ? playerRef.current.getCurrentTime()
    : '00:00';
  const movieDuration = playerRef.current
    ? playerRef.current.getDuration()
    : '00:00';
  const playedTime = format(currentPlayerTime);
  const fullVideoTime = format(movieDuration);
  const playerDivRef = useRef<ElementRef<'div'>>(null);

  const handleFullScreenMode = () => {
    playerDivRef.current && screenfull.toggle(playerDivRef.current);
  };

  const handleMouseLeave = () => {
    clearTimeout(mouseLeaveTimeoutID.current);
    mouseLeaveTimeoutID.current = setTimeout(() => {
      setPlayerState({ ...playerState, shouldShowControl: false });
    }, 500);
  };

  const handleMouseEnter = () => {
    setPlayerState({ ...playerState, shouldShowControl: true });
  };

  const handlePointerDown = (e: PointerEvent) => {
    if (e.pointerType === 'touch') {
      setPlayerState({
        ...playerState,
        shouldShowControl: !playerState.shouldShowControl,
      });
    }
  };

  return (
    <ClassNames>
      {({ css, cx }) => (
        <Ratio
          styleContainer={
            screenfull.isFullscreen
              ? {
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }
              : {}
          }
          onMouseLeave={handleMouseLeave}
          onPointerDown={handlePointerDown}
          onMouseEnter={handleMouseEnter}
          ratio={'16/9'}
          ref={playerDivRef}
          className={cx(
            css`"
              ${style}
            `
          )}
        >
          <>
            <ReactPlayer
              ref={playerRef}
              width={'100%'}
              height="100%"
              url={url}
              playing={isPlaying}
              muted={isMute}
              volume={volume}
              onProgress={handlePlayerProgress}
              fullscreen={true}
            />
            <div
              style={{
                opacity: playerState.shouldShowControl ? 1 : 0,
                transition: 'opacity 0.3s ease-out',
              }}
            >
              <VideoPlayerControls
                handlePlayPause={handlePlayPause}
                handleRewind={handleRewind}
                handleFastForward={handleFastForward}
                onMute={handleMuting}
                onSeek={handlePlayerSeek}
                onSeekMouseUp={handlePlayerMouseSeekUp}
                handleVolumeChange={handleVolumeChange}
                handleVolumeSeek={handleVolumeSeek}
                handleFullscreen={handleFullScreenMode}
                isPlaying={isPlaying}
                playValue={playValue}
                fullVideoTime={fullVideoTime}
                playedTime={playedTime}
                volume={volume}
                isMute={playerState.isMute}
              />
            </div>
          </>
        </Ratio>
      )}
    </ClassNames>
  );
}

function format(seconds: number | string) {
  if (
    typeof seconds === 'string' ||
    typeof seconds !== 'number' ||
    isNaN(seconds)
  ) {
    return '00:00';
  }

  const date = new Date(seconds * 1000);
  const formatter = new Intl.DateTimeFormat('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'UTC',
  });
  const parts = formatter.formatToParts(date);
  const hh = parts.find((part) => part.type === 'hour')?.value ?? '';
  const mm = parts.find((part) => part.type === 'minute')?.value ?? '';
  const ss = parts.find((part) => part.type === 'second')?.value ?? '';

  if (hh) {
    return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
  } else {
    return `${mm}:${ss}`;
  }
}
