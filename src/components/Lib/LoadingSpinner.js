import React from "react";
import styled, { keyframes } from "styled-components";

const loadTextAnimation = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const LoadingContainer = styled.div``;

const LoadText = styled.div`
  text-align: center;
  span {
    opacity: 0;
  }
  .one {
    animation-name: ${loadTextAnimation};
    animation-duration: 1.3s;
    animation-iteration-count: infinite;
    animation-delay: 0s;
  }
  .two {
    animation-name: ${loadTextAnimation};
    animation-duration: 1.3s;
    animation-iteration-count: infinite;
    animation-delay: 0.2s;
  }
  .three {
    animation-name: ${loadTextAnimation};
    animation-duration: 1.3s;
    animation-iteration-count: infinite;
    animation-delay: 0.3s;
  }
`;

const LoadingSpinner = () => {
  return (
    <LoadingContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: "auto",
          background: "none",
          display: "block",
        }}
        shapeRendering="auto"
        width="300px"
        height="300px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="0"
          fill="none"
          stroke="#c7d1ff"
          strokeWidth="1"
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="4.166666666666666s"
            values="0;33"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
            begin="0s"
          />
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="4.166666666666666s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
            begin="0s"
          />
        </circle>
        <circle
          cx="50"
          cy="50"
          r="0"
          fill="none"
          stroke="#000098"
          strokeWidth="1"
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="4.166666666666666s"
            values="0;33"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
            begin="-2.083333333333333s"
          />
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="4.166666666666666s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
            begin="-2.083333333333333s"
          />
        </circle>
      </svg>
      <LoadText>
        Loading<span className="one">.</span>
        <span className="two">.</span>
        <span className="three">.</span>
      </LoadText>
    </LoadingContainer>
  );
};

export default LoadingSpinner;
