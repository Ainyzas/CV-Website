import CV from '../../../assets/cv.pdf';
import ME from '../../../assets/me.png';
import React from 'react';
import { StyledHeaderDiv, StyledContactDiv, StyledImgDiv, StyledHeader } from './Header.styled';
import HeaderSocials from './HeaderSocials';

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderDiv className="container">
        <h5>Hello I'm</h5>
        <h1>Ainas Puidokas</h1>
        <h5 className="text-light">Full-Stack Developer</h5>

        <StyledContactDiv>
          <a href={CV} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </StyledContactDiv>

        <StyledImgDiv>
          <img src={ME} alt="it's me" />
        </StyledImgDiv>

        <HeaderSocials />
      </StyledHeaderDiv>
    </StyledHeader>
  );
}
