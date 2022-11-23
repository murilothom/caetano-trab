import styled from 'styled-components';

export const AreasContainer = styled.div``;

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

export const AreasDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.75rem;
    text-transform: uppercase;
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    margin-top: 0.5rem;

    &::after {
      content: '';
      width: 325px;
      height: 2px;
      background-color: white;
      display: block;
      margin: 0 auto;
    }

    @media (max-width: 680px) {
      font-size: 1.5rem;
    }
  }
`;

export const AreasIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  div {
    background: #fafafa;
    color: ${(props) => props.theme['gray-600']};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 180px;
    height: 180px;
    border-radius: 8px;
  }
`;
