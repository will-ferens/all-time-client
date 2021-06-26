import React from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../../actions/theme.action";
import styled from "styled-components";

export const ThemeButtonLink = styled.a`
  height: 24px;
  width: 24px;
  padding: 0 4px;
  cursor: pointer;
  svg {
    border-bottom: 2px solid transparent;
    padding-bottom: 4px;
  }
  &.active svg {
    border-bottom: 2px solid ${(props) => props.theme.primaryColor};
  }
`;

const ThemeButton = ({ theme, currentTheme }) => {
  const dispatch = useDispatch();
  return (
    <ThemeButtonLink
      key={theme.id}
      theme={theme.id}
      className={theme.id === currentTheme.theme ? "active" : ""}
      onClick={() => dispatch(setTheme(theme.id))}
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          opacity="0.5"
          cx="8.31529"
          cy="8.28502"
          r="6.90611"
          stroke={theme.primaryColor}
          strokeWidth="2"
        ></circle>{" "}
      </svg>
    </ThemeButtonLink>
  );
};

export default ThemeButton;
