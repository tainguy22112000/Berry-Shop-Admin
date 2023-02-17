import { motion } from 'framer-motion';
import React from 'react';

const { div: MotionDiv } = motion;

// ==============================|| ANIMATION FOR CONTENT ||============================== //

type Props = {
  children?: any;
}

const NavMotion = ({ children }: Props) => {
  const motionVariants = {
    initial: {
      opacity: 0,
      scale: 0.99,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 1.01,
    },
  };

  const motionTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4,
  };

  return (
    <MotionDiv initial="initial" animate="in" exit="out" variants={motionVariants} transition={motionTransition}>
      {children}
    </MotionDiv>
  );
};

export default NavMotion;
