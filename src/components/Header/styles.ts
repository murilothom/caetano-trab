import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 1000;
  background-color: ${(props) => props.theme['brown']};

  a {
    text-decoration: none;
  }
`;

export const LogoWrapper = styled.div`
  color: ${(props) => props.theme['gray-100']};
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-weight: 700;
  position: relative;

  &:before {
    content: '';
    width: 2px;
    height: 100%;
    position: absolute;
    background-color: white;
    left: -10px;
  }

  a {
    color: white;
    text-transform: uppercase;
    font-size: 1rem;

    strong {
      font-weight: 400;
      font-size: 0.875rem;
    }
  }
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

export const Navbar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  list-style: none;
  flex-wrap: wrap;

  @media (max-width: 650px) {
    margin: 0 auto;
    margin-top: 1rem;
  }

  & > li > a {
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 400;
    position: relative;
    transition: 0.3s;

    &::after {
      content: '';
      background: white;
      width: 0;
      height: 2px;
      position: absolute;
      left: 0;
      top: 18px;
      display: block;
    }

    &.active {
      &::after {
        width: 100%;
      }
    }

    &:hover::after,
    &.active::after {
      width: 100%;
    }
  }
`;
