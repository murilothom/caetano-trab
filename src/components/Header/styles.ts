import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  background-color: ${(props) => props.theme['gray-700']};
`;

export const LogoWrapper = styled.div`
  color: ${(props) => props.theme['gray-100']};
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-weight: 700;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1.5rem 2.5rem;
  max-width: 74rem;
  margin: 0 auto;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & > a {
    text-decoration: none;
    color: ${(props) => props.theme['gray-100']};
  }
`;
