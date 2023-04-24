import React from 'react';
import { StyledSocialDiv } from './Header.styled';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaFacebook } from 'react-icons/fa';

export default function HeaderSocials() {
  return (
    <StyledSocialDiv>
      <a
        href="https://www.linkedin.com/in/puidokasainas-5b3482267/"
        target="_blank"
        rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Ainyzas" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/ainas.puidokas.5/" target="_blank" rel="noreferrer">
        <FaFacebook />
      </a>
    </StyledSocialDiv>
  );
}
