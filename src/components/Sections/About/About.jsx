import React from 'react';
import { StyledAboutDiv, StyledAboutSection, StyledImage, StyledImageDiv } from './About.styled';
import AboutCards from './AboutCards';

export default function About() {
  return (
    <StyledAboutSection id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <StyledAboutDiv className="container">
        <StyledImageDiv>
          <StyledImage>
            <img src="" alt="About me" />
          </StyledImage>
        </StyledImageDiv>

        <AboutCards />
      </StyledAboutDiv>
    </StyledAboutSection>
  );
}
