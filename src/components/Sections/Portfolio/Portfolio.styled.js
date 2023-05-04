import styled from 'styled-components';

export const StyledPortfolioDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
`;

export const StyledArticle = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  h3 {
    margin: 1.2rem 0 2rem;
  }

  :hover {
    border-color: var(--color-primary-variant);
    background: transparent;
  }
`;

export const StyledArticleImageDiv = styled.div`
  border-radius: 1rem;
  overflow: hidden;
`;

export const StyledLinksDiv = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const StyledPortfolioSection = styled.section`
  @media screen and (max-width: 1024px) {
    ${StyledPortfolioDiv} {
      grid-template-columns: 1fr 1fr;
      gap: 1.2rem;
    }
  }

  @media screen and (max-width: 600px) {
    ${StyledPortfolioDiv} {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
`;
