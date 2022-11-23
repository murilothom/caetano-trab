import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import * as S from './styles';

export function DefaultLayout() {
  return (
    <>
      <S.LayoutContainer>
        <Header />
        <Outlet />
      </S.LayoutContainer>
      <Footer />
    </>
  );
}
