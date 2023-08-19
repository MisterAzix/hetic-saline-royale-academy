import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { UseDragParams } from '../../../../hooks/useDrag/@types';
import { useRef } from 'react';
import { useSpring } from '../../../../hooks/useSpring';
import { useDrag } from '../../../../hooks';

const meta: Meta = {
  title: 'hooks/useDrag',
  component: undefined,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj;

const Story = (props: UseDragParams) => {
  const ref = useRef<HTMLDivElement>(null);
  const borderWidth = 20;
  const right = 350 - borderWidth;
  const bottom = 350 - borderWidth;

  const [setSpring] = useSpring({
    x: 0,
    y: 0,
    config: {
      interpolation: 'elastic',
      friction: 50,
      rigidity: 0.18,
    },
    onUpdate: ({ x, y }) => {
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
      }
    },
  });

  useDrag({
    ref,
    bounds: { left: 0, top: 0, right, bottom },
    rubberband: 0.4,
    throwFactor: [50, 50],
    on: {
      drag: ({ offsetWithRubberband: [x, y] }) => {
        setSpring({ x, y });
      },
    },
    ...props,
  });

  return (
    <div
      style={{
        width: '400px',
        height: '400px',
        borderRadius: `${borderWidth}px`,
        border: '10px solid rgba(1,1,1,0.1)',
      }}
    >
      <div style={{ display: 'inline-block' }} ref={ref}>
        <div
          style={{
            display: 'block',
            width: '50px',
            height: '50px',
            borderRadius: '8px',
            backgroundColor: 'blue',
          }}
        />
      </div>
    </div>
  );
};
export const FreeAxis: Story = {
  render: () => <Story />,
  args: {},
};

export const LockedXAxis = {
  render: () => <Story axis={'x'} />,
};

export const LockedYAxis = {
  render: () => <Story axis={'y'} />,
};
