import React from 'react';
import {
  StyledBsLinkedin,
  StyledCopyrightDiv,
  StyledFaFacebook,
  StyledFaGithub,
  StyledFooter,
  StyledFooterDiv,
  StyledIconLink,
  StyledLink,
  StyledLinkList,
  StyledLogo,
} from './Footer.styled';

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLogo href="#home">AINAS PUIDOKAS</StyledLogo>

      <StyledLinkList>
        <StyledLink>
          <a href="#home">Home</a>
        </StyledLink>
        <StyledLink>
          <a href="#about">About</a>
        </StyledLink>
        <StyledLink>
          <a href="#skills">Skills</a>
        </StyledLink>
        <StyledLink>
          <a href="#portfolio">Portfolio</a>
        </StyledLink>
        <StyledLink>
          <a href="#contact">Contact</a>
        </StyledLink>
      </StyledLinkList>

      <StyledFooterDiv>
        <StyledIconLink href="https://www.linkedin.com/in/puidokasainas-5b3482267/" target="_blank" rel="noreferrer">
          <StyledBsLinkedin />
        </StyledIconLink>

        <StyledIconLink href="https://github.com/Ainyzas" target="_blank" rel="noreferrer">
          <StyledFaGithub />
        </StyledIconLink>

        <StyledIconLink href="https://www.facebook.com/ainas.puidokas.5/" target="_blank" rel="noreferrer">
          <StyledFaFacebook />
        </StyledIconLink>
      </StyledFooterDiv>

      <StyledCopyrightDiv>
        <small>&copy; Ainas Puidokas. All rights reserved</small>
      </StyledCopyrightDiv>
    </StyledFooter>
  );
}
