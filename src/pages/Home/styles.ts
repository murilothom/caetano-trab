import styled from 'styled-components';

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: contain;
    max-width: 100%;
    display: block;
    border-radius: 8px 8px 8px 8px;
  }
`;

export const HomeDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;

  & > div {
    margin-top: 1rem;

    & > span {
      display: block;
      margin-top: 1rem;
      font-size: 1rem;
      font-family: 'Inter', Arial, Helvetica, sans-serif;
      font-weight: 700;
      letter-spacing: 0.25px;
    }
  }

  & > div > h1 {
    text-align: start;
    margin-bottom: 0.25rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    margin-top: 0.5rem;

    @media (max-width: 680px) {
      font-size: 1.5rem;
    }
  }
`;
