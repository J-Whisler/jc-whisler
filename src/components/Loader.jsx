import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const Loader = () => {
  const leftLineAnimation = {
    hidden: {
      x: "20rem",
    },
    show: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 30,
        mass: 2,
        delay: 0.5,
      },
    },
  };
  const rightLineAnimation = {
    hidden: {
      x: "-20rem",
    },
    show: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 30,
        mass: 2,
        delay: 0.5,
      },
    },
  };

  const jAnimation = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 2.2,
      },
    },
  };

  const wAnimation = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 2.5,
      },
    },
  };

  return (
    <LoaderContainer>
      <motion.span
        className="left-line line"
        variants={leftLineAnimation}
        initial="hidden"
        animate="show"
      ></motion.span>
      <motion.span
        className="j initial"
        variants={jAnimation}
        initial="hidden"
        animate="show"
      >
        J
      </motion.span>
      <motion.span
        className="w initial"
        variants={wAnimation}
        initial="hidden"
        animate="show"
      >
        W
      </motion.span>
      <motion.span
        className="right-line line"
        variants={rightLineAnimation}
        initial="hidden"
        animate="show"
      ></motion.span>
    </LoaderContainer>
  );
};

// Keyframes
const leftLineOut = keyframes`
     from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 0;
    transform: translateX(-100vw);

  }
`;

const rightLineOut = keyframes`
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(100vw);
    }
`;

const jUp = keyframes`
    from {
        opacity: 1;
        font-size: 7rem;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        font-size: 4rem;
        transform: translateY(-60vh);
    }
`;

const wUp = keyframes`
    from {
        opacity: 1;
        font-size: 7rem;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        font-size: 4rem;
        transform: translateY(-60vh);
    }
`;

// Styles

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.bgDark};
  font-family: ${({ theme }) => theme.fonts.logo};

  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  .line {
    width: 30%;
    border: 4px solid ${({ theme }) => theme.colors.bgDark};
    border-radius: 1rem;
    margin: 0 2rem;
  }
  .left-line {
    animation: ${leftLineOut} 3s 3.5s linear forwards;
  }

  .right-line {
    animation: ${rightLineOut} 3s 3.5s linear forwards;
  }

  .initial {
    font-size: 7rem;
    margin: 0 0.5rem;
  }
  .j {
    animation: ${jUp} 1.5s 4.2s linear forwards;
  }
  .w {
    animation: ${wUp} 1.5s 4.3s linear forwards;
  }
`;

export default Loader;
