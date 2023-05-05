import React from 'react';
import { StyledSkillsCard, StyledSkillsContent, StyledSkillsDiv, StyledSkillsSection } from './Skills.styled';
import SkillsArticle from './SkillsArticle';

export default function Skills() {
  return (
    <StyledSkillsSection id="skills">
      <h5>Experience I Have</h5>
      <h2>My Current Skills</h2>
      <StyledSkillsDiv className="container">
        <StyledSkillsCard>
          <h3>FrontEnd Experience</h3>
          <StyledSkillsContent>
            <SkillsArticle skill="HTML" level="Experienced" />
            <SkillsArticle skill="CSS" level="Experienced" />
            <SkillsArticle skill="SCSS" level="Experienced" />
            <SkillsArticle skill="JavaScript" level="Experienced" />
            <SkillsArticle skill="TypeScript" level="Beginner" />
            <SkillsArticle skill="React" level="Experienced" />
            <SkillsArticle skill="React Redux" level="Beginner" />
            <SkillsArticle skill="React Query" level="Beginner" />
          </StyledSkillsContent>
        </StyledSkillsCard>

        <StyledSkillsCard>
          <h3>BackEnd Experience</h3>
          <StyledSkillsContent>
            <SkillsArticle skill="Node.js" level="Experienced" />
            <SkillsArticle skill="Node Express" level="Experienced" />
            <SkillsArticle skill="REST API" level="Experienced" />
            <SkillsArticle skill="MongoDB NOSQL" level="Experienced" />
            <SkillsArticle skill="PostgreSQL" level="Beginner" />
            <SkillsArticle skill="Java" level="Experienced" />
          </StyledSkillsContent>
        </StyledSkillsCard>
      </StyledSkillsDiv>
    </StyledSkillsSection>
  );
}
