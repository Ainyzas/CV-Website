import styled from 'styled-components';
import { GiNotebook, GiGraduateCap } from 'react-icons/gi';
import { AiOutlineProject } from 'react-icons/ai';

export const StyledAboutDiv = styled.div`
    display: grid;
    grid-template-columns: 35% 50%;
    gap: 15%;
`;

export const StyledImageDiv = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    background: linear-gradient(45deg, transparent, var(--color-primary), transparent);
    display: grid;
    place-items: center;
`;

export const StyledImage = styled.div`
    border-radius: 2rem;
    overflow: hidden;
    height: 101%;
    transform: translateX(0);
    transition: all 1000ms ease;

    :hover {
        transform: translate(2rem, -2rem);
    }

    img {
        height: 101%;
    }
`;

export const StyledTextDiv = styled.div`
    p {
        margin: 2rem 0 2.6rem;
        color: var(--color-light);
    }
`;

export const StyledTextCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
`;

export const StyledCard = styled.article`
    background: var(--color-bg-variant);
    border: 1px solid transparent;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    transition: var(--transition);

    :hover {
        background: transparent;
        border-color: var(--color-primary-variant);
        cursor: default;
    }

    h5 {
        font-size: 0.95rem;
    }

    small {
        font-size: 0.7rem;
        color: var(--color-light);
    }
`;

const StyledIcons = `
color: var(--color-primary);
font-size: 1.4rem;
margin-bottom: 1rem;
`;

export const StyledGiNotebook = styled(GiNotebook)`
    ${StyledIcons}
`;
export const StyledAiOutlineProject = styled(AiOutlineProject)`
    ${StyledIcons}
`;

export const StyledGiGraduateCap = styled(GiGraduateCap)`
    ${StyledIcons}
`;

export const StyledAboutSection = styled.section`
    @media screen and (max-width: 1024px) {
        ${StyledAboutDiv} {
            grid-template-columns: 1fr;
            gap: 0;
        }

        ${StyledImageDiv} {
            width: 50%;
            margin: 2rem auto 4rem;
        }

        ${StyledTextDiv} {
            p {
                margin: 1rem 0 1.5rem;
            }
        }
    }

    @media screen and (max-width: 600px) {
        ${StyledImageDiv} {
            width: 65%;
            margin: 0 auto 3rem;
        }

        ${StyledTextCards} {
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }

        ${StyledTextDiv} {
            text-align: center;

            p {
                margin: 1.5rem 0;
            }
        }
    }
`;
