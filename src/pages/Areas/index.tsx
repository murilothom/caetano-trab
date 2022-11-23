import * as S from './styles';

import digitalImg from '../../assets/padlock.png';
import empresarialImg from '../../assets/factory.png';
import civilImg from '../../assets/auction.png';
import livrosImg from '../../assets/livros.jpg';

const areas = [
  {
    area: 'Direito Civil',
    img: civilImg,
  },
  {
    area: 'Direito Digital',
    img: digitalImg,
  },
  {
    area: 'Direito Empresarial',
    img: empresarialImg,
  },
];

export function Areas() {
  return (
    <S.AreasContainer>
      <S.Image>
        <img src={livrosImg} alt='' />
      </S.Image>

      <S.AreasDetails>
        <h1>Areas de Atuação</h1>
        <p>
          Contamos com advogados especializados em diversas áreas do Direito
          Moderno, com foco no Direito preventivo, fundado em pilares de
          conformidade legislativa, com atuação consultiva e contenciosa.
        </p>
      </S.AreasDetails>

      <S.AreasIcons>
        {areas.map((area) => (
          <div>
            <img src={area.img} width='100' height='100' alt='' />
            <h3>{area.area}</h3>
          </div>
        ))}
      </S.AreasIcons>
    </S.AreasContainer>
  );
}
