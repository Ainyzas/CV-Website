import React from 'react';
import {
  StyledTextDiv,
  StyledTextCards,
  StyledCard,
  StyledGiNotebook,
  StyledAiOutlineProject,
  StyledGiGraduateCap,
} from './About.styled';

export default function AboutCards() {
  return (
    <StyledTextDiv>
      <StyledTextCards>
        <StyledCard>
          <StyledGiNotebook />
          <h5>Experience</h5>
          <small>3 Years Learning (1 Year Web-developement)</small>
        </StyledCard>

        <StyledCard>
          <StyledAiOutlineProject />
          <h5>Projects</h5>
          <small>3 Larger Web Projects</small>
        </StyledCard>

        <StyledCard>
          <StyledGiGraduateCap />
          <h5>IB Graduate</h5>
          <small>In-depth Knowledge Of Computer Science</small>
        </StyledCard>
      </StyledTextCards>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores facilis dicta
        voluptatum, quisquam odio illo nam saepe pariatur, maiores error exercitationem? Consectetur
        dolores rerum quis recusandae repudiandae est accusantium a?
      </p>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </StyledTextDiv>
  );
}
