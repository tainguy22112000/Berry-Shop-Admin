import React, { forwardRef } from 'react';
import { motion, useCycle } from 'framer-motion';

const { div: MotionDiv } = motion;

type Props = {
  children?: any;
  type?: any;
  direction?: any;
  offset?: any;
  scale?: any;
} & typeof defaultProps;

const defaultProps = {
  type: 'scale',
  offset: 10,
  direction: 'right',
  scale: {
    hover: 1,
    tap: 0.9,
  },
};

type Ref = any;

const AnimateButton = forwardRef<Ref, Props>(
({ children, type, direction, offset, scale }, ref: any) => {
    let offset1;
    let offset2;
    switch (direction) {
      case 'up':
      case 'left':
        offset1 = offset;
        offset2 = 0;
        break;
      case 'right':
      case 'down':
      default:
        offset1 = 0;
        offset2 = offset;
        break;
    }

    const [x, cycleX] = useCycle(offset1, offset2);
    const [y, cycleY] = useCycle(offset1, offset2);

    switch (type) {
      case 'rotate':
        return (
          <MotionDiv
            ref={ref}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 2,
              repeatDelay: 0,
            }}
          >
            {children}
          </MotionDiv>
        );
      case 'slide':
        if (direction === 'up' || direction === 'down') {
          return (
            <MotionDiv
              ref={ref}
              animate={{ y: y !== undefined ? y : '' }}
              onHoverEnd={() => cycleY()}
              onHoverStart={() => cycleY()}
            >
              {children}
            </MotionDiv>
          );
        }
        return (
          <MotionDiv
            ref={ref}
            animate={{ x: x !== undefined ? x : '' }}
            onHoverEnd={() => cycleX()}
            onHoverStart={() => cycleX()}
          >
            {children}
          </MotionDiv>
        );

      case 'scale':
      default:
        if (typeof scale === 'number') {
          scale = {
            hover: scale,
            tap: scale,
          };
        }
        return (
          <MotionDiv
            ref={ref}
            whileHover={{ scale: scale?.hover }}
            whileTap={{ scale: scale?.tap }}
          >
            {children}
          </MotionDiv>
        );
    }
  },
);

export default AnimateButton;
