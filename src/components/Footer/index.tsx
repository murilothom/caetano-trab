import * as S from './styles';

import { Link } from 'react-router-dom';

import { BsTelephone, BsInstagram } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

export function Footer() {
  return (
    <S.FooterContainer>
      <span>© 2022 - Todos os direitos reservados</span>
      <div>
        <a href='tel:+5555996928287'>
          <BsTelephone size={24} />
          +55 55 99692-8287
        </a>
        <a href='mailto:m.bluth@example.com'>
          <AiOutlineMail size={26} />
          ass.advocacia@gmail.com
        </a>
        <a href='https://www.instagram.com/assadvassociados/' target='_blank'>
          <BsInstagram size={24} />
          @assadvassociados
        </a>
      </div>
    </S.FooterContainer>
  );
}
