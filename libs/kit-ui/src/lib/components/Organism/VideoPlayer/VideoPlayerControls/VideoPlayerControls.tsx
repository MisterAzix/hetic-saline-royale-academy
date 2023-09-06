import styled from '@emotion/styled';
import { Grid, IconButton, Slider } from '@mui/material';
import Text from '../../../Atoms/Text';
import {
  FastRewind,
  PlayArrowRounded,
  FastForwardRounded,
  VolumeUp,
  Fullscreen,
  PauseRounded,
  VolumeOff,
} from '@mui/icons-material';
import { from, getTheme } from '../../../../styles/mixins';
import { css } from '@emotion/react';
import { SyntheticEvent } from 'react';
import { COLORS } from '../../../../styles/theme';

export type VideoPlayerControlProps = {
  handlePlayPause: () => void;
  handleRewind: () => void;
  handleFastForward: () => void;
  handleFullscreen: () => void;
  handleVolumeChange: (_: Event, newValue: number | number[]) => void;
  handleVolumeSeek: (
    _: Event | SyntheticEvent<Element, Event>,
    newValue: number | number[]
  ) => void;
  onMute: () => void;
  onSeek: (_: Event, newValue: number | number[]) => void;
  onSeekMouseUp: (
    _: Event | SyntheticEvent<Element, Event>,
    newValue: number | number[]
  ) => void;
  isPlaying: boolean;
  isMute: boolean;
  fullVideoTime: string;
  volume: number;
  playedTime: string;
  playValue: number;
};

export default function VideoPlayerControls({
  handlePlayPause,
  handleRewind,
  handleFastForward,
  handleVolumeChange,
  handleVolumeSeek,
  handleFullscreen,
  onMute,
  onSeek,
  onSeekMouseUp,
  isPlaying,
  isMute,
  fullVideoTime,
  volume,
  playedTime,
  playValue,
}: VideoPlayerControlProps) {
  const ariaLabel = 'rewind';
  return (
    <Container>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="start"
        style={{ padding: 16 }}
      >
        <PlayerText item>
          <Text preset={'text-lg-regular'}>Player</Text>
        </PlayerText>
      </Grid>

      <MiddleControl
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <ControlIcon aria-label={ariaLabel} onPointerUp={handleRewind}>
          <FastRewind fontSize="large" style={{ color: 'white' }} />
        </ControlIcon>

        <ControlIcon aria-label={ariaLabel} onPointerDown={handlePlayPause}>
          {isPlaying ? (
            <PauseRounded fontSize={'large'} style={{ color: 'white' }} />
          ) : (
            <PlayArrowRounded fontSize={'large'} style={{ color: 'white' }} />
          )}
        </ControlIcon>

        <ControlIcon aria-label={ariaLabel} onPointerDown={handleFastForward}>
          <FastForwardRounded fontSize="large" style={{ color: 'white' }} />
        </ControlIcon>
      </MiddleControl>

      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        style={{ padding: 16 }}
      >
        <Title item>
          <Text preset={'text-xs-regular'}>Tears Of Steel</Text>
        </Title>

        <Grid item xs={12}>
          <VideoSlider
            min={0}
            max={100}
            style={{ color: getTheme(COLORS, 'primary-600') }}
            value={playValue * 100}
            onChange={onSeek}
            onChangeCommitted={onSeekMouseUp}
          />
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text preset={'text-xs-regular'}>{playedTime}</Text>
            <Grid display="flex" alignItems="center" justifyContent="center">
              <Text
                css={`
                  p {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                `}
                preset={'text-xs-regular'}
              >
                {fullVideoTime}
              </Text>
              <FullscreenWrapperMobile item onPointerDown={handleFullscreen}>
                <FullscreenBtn>
                  <Fullscreen fontSize="small" />
                </FullscreenBtn>
              </FullscreenWrapperMobile>
            </Grid>
          </Grid>
        </Grid>

        <WrapperDesktop item>
          <Grid container alignItems="center" direction="row">
            <ControlIcon aria-label={ariaLabel} onPointerDown={handlePlayPause}>
              {isPlaying ? (
                <PauseRounded fontSize={'large'} style={{ color: 'white' }} />
              ) : (
                <PlayArrowRounded
                  fontSize={'large'}
                  style={{ color: 'white' }}
                />
              )}
            </ControlIcon>

            <ControlIcon aria-label={ariaLabel} onPointerDown={onMute}>
              {isMute || volume === 0 ? (
                <VolumeOff fontSize="medium" style={{ color: 'white' }} />
              ) : (
                <VolumeUp fontSize="medium" style={{ color: 'white' }} />
              )}
            </ControlIcon>

            <Text
              preset={'text-xs-regular'}
              css={`
                padding: 5px;
              `}
            >
              {volume * 100}
            </Text>
            <VolumeSlider
              style={{ color: getTheme(COLORS, 'primary-600') }}
              min={0}
              max={100}
              value={volume * 100}
              onChange={handleVolumeChange}
              onChangeCommitted={handleVolumeSeek}
            />
          </Grid>
        </WrapperDesktop>

        <FullscreenAndPlaybackSpeedWrapperDesktop item>
          <FullscreenBtn onPointerDown={handleFullscreen}>
            <Fullscreen fontSize="large" />
          </FullscreenBtn>
        </FullscreenAndPlaybackSpeedWrapperDesktop>
      </Grid>
    </Container>
  );
}

const FullscreenBtn = styled(IconButton)`
  color: #999;
  padding-right: 0;

  &:hover {
    color: white;
  }
`;

const MiddleControl = styled(Grid)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);

  ${from(
    'md',
    css`
      transform: translate(-50%, -50%);
    `
  )}
`;

const Title = styled(Grid)`
  display: none;
  ${from(
    'md',
    css`
      display: grid;
    `
  )}
`;

const PlayerText = styled(Grid)`
  display: none;
  ${from(
    'md',
    css`
      display: grid;
    `
  )}
`;

const WrapperDesktop = styled(Grid)`
  display: none;
  ${from(
    'md',
    css`
      display: grid;
    `
  )}
`;

const FullscreenAndPlaybackSpeedWrapperDesktop = styled(Grid)`
  display: none;
  ${from(
    'md',
    css`
      display: block;
    `
  )}
`;

const FullscreenWrapperMobile = styled(Grid)`
  display: block;
  ${from(
    'md',
    css`
      display: none;
    `
  )};
`;

const VolumeSlider = styled(Slider)`
  width: 100%;
  margin-top: -50px;
  margin-left: 130px;

  &.MuiSlider-root {
    padding: 5px;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
  background: rgba(0, 0, 0, 0.6);
`;

const ControlIcon = styled(IconButton)`
  color: white;
  transform: scale(0.9);
  transition: transform 0.2s ease-out;

  &:hover {
    color: #fff;
    transform: scale(1);
  }
`;

const videoSliderPadding = '16px';
const VideoSlider = styled(Slider)`
  height: 5px;
  padding: 5px;

  &.MuiSlider-root {
    width: calc(100% - ${videoSliderPadding});
  }

  & .MuiSlider-track {
    border: none;
  }


  & .MuiSlider-thumb {
    height: 16px;
    width: 16px;
    background-color: #fff;
    border: 2px solid currentColor;
    &:focus, &:hover, &.Mui-active, &.Mui-focusVisible {
      box-shadow: inherit;
    }
    &:before {
      display: none;
    },
  },

  & .MuiSlider-valueLabel {
    line-height: 1.2;
    font-size: 12px;
    background: unset;
    padding: 0;
    width: 32px;
    height: 32px;
    border-radius: 50% 50% 50% 0;
    background-color: #52af77;
    transform-origin: bottom left;
    transform: translate(50%, -100%) rotate(-45deg) scale(0);
    &:before { display: none },
    &.MuiSlider-valueLabelOpen {
      transform: translate(50%, -100%) rotate(-45deg) scale(1);
    }
    & > * {
      transform: rotate(45deg);
    },
  },
`;
