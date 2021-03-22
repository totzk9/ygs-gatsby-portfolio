import React from "react";
import styled from "styled-components";
import YGSLogo from '../../../../static/ygs.png'

const Logo = () => (
  <LogoImg src={YGSLogo} alt="Home" />
);

export default Logo;

const LogoImg = styled.img`
  height: 90px;
  width: 90px;
  margin-bottom: 4rem;
  position: absolute;
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  stroke: #fff;

  &:hover {
    filter: brightness(105%);
  }
`;
