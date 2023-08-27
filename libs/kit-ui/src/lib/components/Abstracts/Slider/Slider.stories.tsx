import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { StorybookTitle } from '../../../../../@types';
import Slider from './index';
import { hooks, SliderProps } from './Slider';
import { useRef } from 'react';

const meta: Meta<typeof Slider> & { title: StorybookTitle<'Slider'> } = {
  title: 'Organism/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Fullscreen: Story = {
  render: () => <FullScreenSlider shouldSnap maxSlideIndexChange={1} />,
};

export const Classic: Story = {
  render: () => (
    <Template
      shouldSnap={true}
      autoBlockSlideIndexChange
      initialSlideIndex={1}
    />
  ),
};

export const SmallSlider: Story = {
  render: () => <SmallSliderTemplate shouldSnap axis="x" isInfinite />,
};

export const Vertical: Story = {
  render: () => (
    <VerticalTemplate shouldSnap autoBlockSlideIndexChange axis={'y'} />
  ),
};

export const Infinite: Story = {
  render: () => <Template isInfinite />,
};

export const InfiniteBanner: Story = {
  render: () => (
    <Template
      isInfinite
      dragProps={{ isEnable: true }}
      autoPlay={{ speed: 2 }}
    />
  ),
};

export const VerticalInfinite: Story = {
  render: () => (
    <VerticalTemplate
      shouldSnap
      autoBlockSlideIndexChange
      axis={'y'}
      isInfinite
    />
  ),
};

const defaultStyle = {
  width: '200px',
  height: '200px',
  display: 'block',
};

function FullScreenSlider(props: SliderProps) {
  const slideStyle = { ...defaultStyle, width: '100vw', height: '100vh' };
  return (
    <Slider
      {...props}
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <div style={{ ...slideStyle, backgroundColor: 'blue' }} />
      <div style={{ ...slideStyle, backgroundColor: 'red' }} />
      <div style={{ ...slideStyle, backgroundColor: 'orange' }} />
    </Slider>
  );
}

function Template(props: SliderProps) {
  const customSliderRef = useRef<HTMLDivElement>(null);
  const [{ nextSlide, prevSlide, slideIndex }, setSliderState] =
    hooks.useSliderState();

  return (
    <>
      <div>{slideIndex}</div>
      <button onClick={prevSlide}>Prev</button>
      <button onClick={nextSlide}>Next</button>
      <div
        ref={customSliderRef}
        style={{
          width: '50vw',
          border: '10px solid rgba(1, 1, 1, 0.4)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            margin: 'auto',
            width: '50%',
            height: '200px',
            border: '10px solid rgba(1, 1, 1, 0.2)',
            boxSizing: 'content-box',
          }}
        >
          <Slider
            {...props}
            customSliderRef={customSliderRef}
            setSliderState={setSliderState}
          >
            <div style={{ ...defaultStyle, backgroundColor: 'blue' }} />
            <div style={{ ...defaultStyle, backgroundColor: 'red' }} />
            <div style={{ ...defaultStyle, backgroundColor: 'yellow' }} />
            <div style={{ ...defaultStyle, backgroundColor: 'orange' }} />
          </Slider>
        </div>
      </div>
    </>
  );
}

function SmallSliderTemplate(props: SliderProps) {
  return (
    <Slider
      style={{ width: '50vw', border: '1px solid rgba(1, 1, 1, 0.2)' }}
      {...props}
    >
      <div style={{ ...defaultStyle, backgroundColor: 'blue' }} />
      <div style={{ ...defaultStyle, backgroundColor: 'red' }} />
    </Slider>
  );
}

function VerticalTemplate(props: SliderProps) {
  const [{ nextSlide, prevSlide, slideIndex, setSlideIndex }, setSliderState] =
    hooks.useSliderState();

  return (
    <>
      <div>{slideIndex}</div>
      <button
        onClick={() => {
          setSlideIndex(0);
        }}
      >
        Reset
      </button>
      <button onClick={prevSlide}>Prev</button>
      <button onClick={nextSlide}>Next</button>
      <div
        style={{
          position: 'relative',
          margin: 'auto',
          width: '200px',
          height: '500px',
          boxSizing: 'border-box',
          border: '10px solid rgba(1, 1, 1, 0.2)',
        }}
      >
        <Slider
          {...props}
          setSliderState={setSliderState}
          style={{ height: '100%' }}
        >
          <a href="/" style={{ ...defaultStyle, backgroundColor: 'blue' }}>
            {''}
          </a>
          <a href="/" style={{ ...defaultStyle, backgroundColor: 'red' }}>
            {''}
          </a>
          <a href="/" style={{ ...defaultStyle, backgroundColor: 'yellow' }}>
            {''}
          </a>
          <a href="/" style={{ ...defaultStyle, backgroundColor: 'orange' }}>
            {''}
          </a>
        </Slider>
      </div>
    </>
  );
}
