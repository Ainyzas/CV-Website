import React from 'react';
import { StyledTextDiv, StyledTextCards, StyledCard, StyledGiNotebook, StyledAiOutlineProject, StyledGiGraduateCap } from './About.styled';

export default function AboutCards() {
    return (
        <StyledTextDiv>
            <StyledTextCards>
                <StyledCard>
                    <StyledGiNotebook />
                    <h5>Experience</h5>
                    <small>4 Years Learning (2 Years In Web-developement)</small>
                </StyledCard>

                <StyledCard>
                    <StyledAiOutlineProject />
                    <h5>Projects</h5>
                    <small>4 Larger Web Projects</small>
                </StyledCard>

                <StyledCard>
                    <StyledGiGraduateCap />
                    <h5>IB Graduate</h5>
                    <small>In-depth Knowledge Of Computer Science</small>
                </StyledCard>
            </StyledTextCards>

            <p>
                I am a Junior Full-Stack(ish) Web Developer with solid experience in programming languages such as JavaScript, Java and C++.
                I have studied specifically Web Developement for over two years now and have worked on various projects involving
                technologies such as React, Node.js and both MongoDB and PostgreSQL. I focus on always learning something new and trying to
                find new ways to improve my web projects.
            </p>
            <a href="#contact" className="btn btn-primary">
                Contact Me
            </a>
        </StyledTextDiv>
    );
}
