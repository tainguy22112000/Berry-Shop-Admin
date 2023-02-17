import { Box, Collapse, Fade, Grow, Slide, Zoom } from '@mui/material';
import React, { ReactNode } from 'react';
import { forwardRef } from 'react';

// ==============================|| TRANSITIONS ||============================== //

type Props = {
  children?: ReactNode | any;
  position?: string;
  type?: string;
  direction?: 'up' | 'left' | 'right' | 'down' | undefined;
  in?: any;
  sx?: Record<string, any>;
  onEnter?: (() => void) | undefined;
  onExited?: (() => void) | undefined;
};

const defaultProps = {
  // children: React.createElement('div'),
  type: 'grow',
  position: 'top-left',
  direction: 'up',
};

type Ref = HTMLElement | any;

const Transitions = forwardRef<Ref, Props>(
  ({ children, position, type, direction, ...others }, ref) => {
    let positionSX = {
      transformOrigin: '0 0 0',
    };

    switch (position) {
      case 'top-right':
        positionSX = {
          transformOrigin: 'top right',
        };
        break;
      case 'top':
        positionSX = {
          transformOrigin: 'top',
        };
        break;
      case 'bottom-left':
        positionSX = {
          transformOrigin: 'bottom left',
        };
        break;
      case 'bottom-right':
        positionSX = {
          transformOrigin: 'bottom right',
        };
        break;
      case 'bottom':
        positionSX = {
          transformOrigin: 'bottom',
        };
        break;
      case 'top-left':
      default:
        positionSX = {
          transformOrigin: '0 0 0',
        };
        break;
    }

    return (
      <Box ref={ref}>
        {type === 'grow' && (
          <Grow {...others}>
            <Box sx={positionSX}>{children}</Box>
          </Grow>
        )}
        {type === 'collapse' && (
          <Collapse {...others} sx={positionSX}>
            {children}
          </Collapse>
        )}
        {type === 'fade' && (
          <Fade
            {...others}
            timeout={{
              appear: 500,
              enter: 600,
              exit: 400,
            }}
          >
            <Box sx={positionSX}>{children}</Box>
          </Fade>
        )}
        {type === 'slide' && (
          <Slide
            {...others}
            timeout={{
              appear: 0,
              enter: 400,
              exit: 200,
            }}
            direction={direction}
          >
            <Box sx={positionSX}>{children}</Box>
          </Slide>
        )}
        {type === 'zoom' && (
          <Zoom {...others}>
            <Box sx={positionSX}>{children}</Box>
          </Zoom>
        )}
      </Box>
    );
  },
);

export default Transitions;
