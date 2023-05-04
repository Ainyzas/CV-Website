import styled from 'styled-components';
import { BsPatchCheckFill } from 'react-icons/bs';

export const StyledSkillsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const StyledSkillsCard = styled.div`
  background: var(--color-bg-variant);
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--color-primary);
  }

  :hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }
`;

export const StyledSkillsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
`;

export const StyledBsPatchCheckFill = styled(BsPatchCheckFill)`
  margin-top: 6px;
  color: var(--color-primary);
`;

export const StyledArticle = styled.article`
  display: flex;
  gap: 1rem;
`;

export const StyledSkillsSection = styled.section`
  @media screen and (max-width: 1024px) {
    ${StyledSkillsDiv} {
      grid-template-columns: 1fr;
    }

    ${StyledSkillsCard} {
      width: 80%;
      padding: 2rem;
      margin: 0 auto;
    }

    ${StyledSkillsContent} {
      padding: 1rem;
    }
  }

  @media screen and (max-width: 600px) {
    ${StyledSkillsDiv} {
      gap: 1rem;
    }

    ${StyledSkillsCard} {
      width: 100%;
      padding: 2rem 1rem;
    }
  }
`;
