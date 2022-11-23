import styled from 'styled-components';

export const TeamContainer = styled.div``;

interface IGrid {
  isRight: boolean;
}

export const TeamDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-100']};
    max-width: 100ch;
  }
`;

export const TeamPeople = styled.ul`
  list-style: none;
  max-width: 650px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  & > li {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 682px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    &::after {
      content: '';
      width: 100%;
      background-color: ${(props) => props.theme['gray-100']};
      height: 2px;
      grid-column: span 2;
      margin-top: 1rem;

      @media (max-width: 682px) {
        top: 380px;
      }
    }
  }
`;

export const ImagePeople = styled.div<IGrid>`
  display: flex;
  justify-content: center;
  align-items: center;

  grid-column: ${(props) => (props.isRight ? 2 : 1)};
  grid-row: 1;

  @media (max-width: 682px) {
    grid-column: initial;
    grid-row: 1;
  }

  img {
    max-width: 100%;
    display: block;
    object-fit: contain;
  }
`;

export const InfoPeople = styled.div<IGrid>`
  @media (max-width: 682px) {
    grid-row: 2;
  }

  grid-column: ${(props) => (props.isRight ? 1 : 2)};

  @media (max-width: 682px) {
    grid-column: initial;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    @media (max-width: 682px) {
      gap: 0.525rem;
    }

    h3 {
      font-size: 1.25rem;
      font-family: 'Inter', Arial, Helvetica, sans-serif;
      text-transform: uppercase;
      color: ${(props) => props.theme.white};

      @media (max-width: 682px) {
        text-align: center;
      }
    }

    span {
      font-size: 0.875rem;
      font-family: 'Roboto', Arial, Helvetica, sans-serif;
      color: ${(props) => props.theme['gray-100']};
      margin-bottom: 0.75rem;
    }
  }

  & > p {
    font-size: 0.875rem;
    line-height: 1.33;
    color: ${(props) => props.theme['gray-100']};
  }
`;
