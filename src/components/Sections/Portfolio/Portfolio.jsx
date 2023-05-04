import React from 'react';
import { StyledPortfolioDiv, StyledPortfolioSection } from './Portfolio.styled';
import PortfolioProject from './PortfolioProject';
import AutoserviceApp from '../../../assets/autoservice-app.png';
import WeatherApp from '../../../assets/weather-app.png';
import QuizApp from '../../../assets/quiz-app.png';

const projects = [
  {
    id: 1,
    name: 'Autoservice Site (Key Contributor)',
    image: AutoserviceApp,
    gitLink: 'https://github.com/ryckutis/React-Autoservice',
    siteLink: 'https://react-autoservice.vercel.app/',
  },
  {
    id: 2,
    name: 'Weather Site',
    image: WeatherApp,
    gitLink: 'https://github.com/Ainyzas/Weather-App',
    siteLink: 'https://weatherforecast225.netlify.app/',
  },
  {
    id: 3,
    name: 'Quiz Site',
    image: QuizApp,
    gitLink: 'https://github.com/Ainyzas/quiz-app',
    siteLink: 'https://full-stack-quizes.netlify.app/',
  },
];

export default function Portfolio() {
  return (
    <StyledPortfolioSection id="portfolio">
      <h5>My Most Recent Work</h5>
      <h2>Portfolio</h2>

      <StyledPortfolioDiv className="container">
        {projects.map(({ id, name, image, gitLink, siteLink }) => (
          <PortfolioProject key={id} name={name} image={image} gitLink={gitLink} siteLink={siteLink} />
        ))}
      </StyledPortfolioDiv>
    </StyledPortfolioSection>
  );
}
