import styled from 'styled-components';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaFacebook } from 'react-icons/fa';

export const StyledLogo = styled.a`
  letter-spacing: 0.5rem;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  display: inline-block;

  :hover {
    letter-spacing: 1rem;
  }
`;

export const StyledLinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto 3rem;
`;

export const StyledLink = styled.li`
  a {
    font-size: 1.2rem;
  }

  a:hover {
    letter-spacing: 0.15rem;
  }
`;

export const StyledFooterDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
`;

const StyledIcons = `
color: var(--color-white);
font-size: 20px;
`;

export const StyledBsLinkedin = styled(BsLinkedin)`
  ${StyledIcons}
`;

export const StyledFaGithub = styled(FaGithub)`
  ${StyledIcons}
`;

export const StyledFaFacebook = styled(FaFacebook)`
  ${StyledIcons}
`;

export const StyledIconLink = styled.a`
  background: var(--color-bg);
  padding: 0.6rem;
  border-radius: 0.7rem;
  display: flex;
  border: 1px solid transparent;

  :hover {
    background: transparent;
    border-color: var(--color-bg);
    ${StyledBsLinkedin}, ${StyledFaGithub}, ${StyledFaFacebook} {
      color: var(--color-bg);
    }
  }
`;

export const StyledCopyrightDiv = styled.div`
  margin-bottom: 4rem;
  color: var(--color-bg);
`;

export const StyledFooter = styled.footer`
  background: var(--color-primary);
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 7rem;

  a {
    color: var(--color-bg);
  }

  /* For Phone */

  @media screen and (max-width: 600px) {
    ${StyledLogo} {
      font-size: 1.5rem;
      :hover {
        letter-spacing: 0.75rem;
      }
    }

    ${StyledLinkList} {
      flex-direction: column;
      gap: 1.5rem;
    }

    ${StyledFooterDiv} {
      margin-bottom: 2.6rem;
    }
  }
`;
