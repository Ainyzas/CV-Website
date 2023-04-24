import styled from 'styled-components';

export const StyledHeaderDiv = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
`;

export const StyledContactDiv = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const StyledImgDiv = styled.div`
  margin-top: 4rem;
  padding: 5rem 1.5rem 1.5rem 1.5rem;
  border-radius: 12rem 12rem 0 0;
  background: linear-gradient(var(--color-primary), transparent);
  width: 22rem;
  heigh: 30rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden:
`;

export const StyledSocialDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  left: 0;
  bottom: 3rem;

  ::after {
    content: '';
    width: 1px;
    height: 2rem;
    background: var(--color-primary);
  }
`;

export const StyledHeader = styled.header`
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    height: 68vh;
  }

  @media screen and (max-width: 600px) {
    height: 100vh;

    ${StyledSocialDiv} {
      display: none;
    }
  }
`;
