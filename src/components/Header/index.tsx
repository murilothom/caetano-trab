import * as S from './styles';

import { Link } from 'react-router-dom';

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.LogoWrapper>Logo</S.LogoWrapper>
        <S.Navbar>
          <Link to='/institucional'>Institucional</Link>
          <Link to='/areas-de-atuacao'>Áreas de atuação</Link>
          <Link to='/equipe'>Equipe</Link>
          <Link to='/noticias'>Notícias</Link>
          <Link to='/contato'>Contato</Link>
        </S.Navbar>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
