import React from 'react';
import { StyledPortfolioDiv, StyledPortfolioSection } from './Portfolio.styled';
import PortfolioProject from './PortfolioProject';
import SihausApp from '../../../assets/sihaus-app.png';
import LaikridaApp from '../../../assets/laikrida-app.png';
import AutoserviceApp from '../../../assets/autoservice-app.png';
import WeatherApp from '../../../assets/weather-app.png';

const projects = [
    {
        id: 1,
        name: 'MB "SIHAUS" Home Interior',
        image: SihausApp,
        siteLink: 'https://www.sihaus-apdaila.lt/',
    },
    {
        id: 2,
        name: 'UAB "Laikrida" Cargo Transportation',
        image: LaikridaApp,
        siteLink: 'http://laikrida.lt/',
    },
    {
        id: 3,
        name: 'Autoservice Site (Key Contributor)',
        image: AutoserviceApp,
        gitLink: 'https://github.com/ryckutis/React-Autoservice',
        siteLink: 'https://react-autoservice.vercel.app/',
    },
    {
        id: 4,
        name: 'Weather Site',
        image: WeatherApp,
        gitLink: 'https://github.com/Ainyzas/Weather-App',
        siteLink: 'https://weatherforecast225.netlify.app/',
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
