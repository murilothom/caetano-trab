import * as S from './styles';

import { Link } from 'react-router-dom';

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
            <Link to='/'>Institucional</Link>
          </li>
          <li>
            <Link to='/areas-de-atuacao'>Áreas de atuação</Link>
          </li>
          <li>
            <Link to='/equipe'>Equipe</Link>
          </li>
        </S.Navbar>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
