import React from 'react';
import { StyledArticle, StyledBsPatchCheckFill } from './Skills.styled';

export default function SkillsArticle({ skill, level }) {
  return (
    <StyledArticle>
      <StyledBsPatchCheckFill />
      <div>
        <h4>{skill}</h4>
        <small className="text-light">{level}</small>
      </div>
    </StyledArticle>
  );
}
