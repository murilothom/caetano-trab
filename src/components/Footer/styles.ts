import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme['brown']};
  padding: 2rem 2.5rem;
  font-size: 0.875rem;
  margin-top: -2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  flex-direction: column;

  div {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 1.5rem;
    flex-wrap: wrap;

    h4 {
      font-size: 1rem;
      font-weight: 400;
    }

    a {
      color: white;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }
`;
