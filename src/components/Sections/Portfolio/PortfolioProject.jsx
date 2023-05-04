import React from 'react';
import { StyledArticle, StyledArticleImageDiv, StyledLinksDiv } from './Portfolio.styled';

export default function PortfolioProject({ name, image, gitLink, siteLink }) {
  return (
    <StyledArticle>
      <StyledArticleImageDiv>
        <img src={image} alt={name} />
      </StyledArticleImageDiv>
      <h3>{name}</h3>

      <StyledLinksDiv>
        <a href={gitLink} className="btn" target="_blank" rel="noreferrer">
          Github
        </a>
        <a href={siteLink} className="btn btn-primary" target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </StyledLinksDiv>
    </StyledArticle>
  );
}
