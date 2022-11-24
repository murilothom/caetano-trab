import * as S from './styles';

import { Link, NavLink } from 'react-router-dom';

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.LogoWrapper>
          <Link to='/'>
            Almança
            <br />
            Silva
            <br />
            Soares &
            <br />
            <strong>Advogados associados</strong>
          </Link>
        </S.LogoWrapper>
        <S.Navbar>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to='/'
            >
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to='/institucional'>Institucional</NavLink>
          </li>
          <li>
            <NavLink to='/areas-de-atuacao'>Áreas de atuação</NavLink>
          </li>
          <li>
            <NavLink to='/equipe'>Equipe</NavLink>
          </li>
        </S.Navbar>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
