import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 74rem;
  margin: 10rem auto 4rem;
  padding: 2.5rem;
  border-radius: 8px;
  background: ${(props) => props.theme['brown']};
  display: flex;
  flex-direction: column;

  @media (max-width: 572px) {
    margin: 12rem auto 4rem;
  }
`;
