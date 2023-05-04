import styled from 'styled-components';
import { AiOutlineMail } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';
import { FaViber } from 'react-icons/fa';

export const StyledContactDiv = styled.div`
  width: 68%;
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;
`;

export const StyledContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const StyledContactArticle = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border: 1px solid transparent;
  transition: var(--transition);

  :hover {
    background: transparent;
    border-color: var(--color-primary-variant);
  }

  a {
    margin-top: 0.7rem;
    display: inline-block;
    font-size: 0.8rem;
  }
`;

const StyledIcon = `
font-size: 1.5rem;
margin-bottom: 0.5rem;
`;

export const StyledAiOutlineMail = styled(AiOutlineMail)`
  ${StyledIcon}
`;

export const StyledRiMessengerLine = styled(RiMessengerLine)`
  ${StyledIcon}
`;

export const StyledFaViber = styled(FaViber)`
  ${StyledIcon}
`;

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  input,
  textarea {
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid var(--color-primary-variant);
    resize: none;
    color: var(--color-white);
  }
`;

export const StyledContactSection = styled.section`
  @media screen and (max-width: 1024px) {
    ${StyledContactDiv} {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  @media screen and (max-width: 600px) {
    ${StyledContactDiv} {
      width: var(--container-width-sm);
    }
  }
`;
