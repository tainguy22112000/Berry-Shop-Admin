import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const { div: MotionDiv } = motion;

// ==============================|| ANIMATION FOR CONTENT ||============================== //

const NavMotion = ({ children }: any) => {
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

NavMotion.propTypes = {
  children: PropTypes.node,
};

export default NavMotion;
