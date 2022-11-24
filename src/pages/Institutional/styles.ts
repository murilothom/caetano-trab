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

export const AboutUs = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.75rem;
    text-transform: uppercase;
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    margin-top: 0.5rem;

    &::after {
      content: '';
      width: 200px;
      height: 2px;
      background-color: white;
      display: block;
      margin: 0 auto;
    }

    @media (max-width: 680px) {
      font-size: 1.5rem;
    }
  }

  & > div {
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 1rem;

    p {
      width: 50%;
      letter-spacing: 0.25px;
      text-align: justify;
    }
  }
`;
