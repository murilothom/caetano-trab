import * as S from './styles';

import digitalLaw from '../../assets/digital-law.jpg';

export function Home() {
  return (
    <>
      <S.Image>
        <img src={digitalLaw} alt='' />
      </S.Image>

      <S.HomeDetails>
        <div>
          <h1>Por que se adequar à LGPD?</h1>
          <p>
            Adequar-se à Lei de Proteção de Dados é, apenas, a ponta do iceberg
            da Segurança da Informação no seu negócio.
            <br />
            Assegure o cumprimento da lei e evite a incidência de multas pela
            ANPD (Autoridade Nacional de Proteção de Dados) de até R$50 milhões
            por infração para a sua empresa.
          </p>
        </div>

        <div>
          <h1>
            Por que optar por realizar essa implementação com a nossa empresa?
          </h1>
          <p>
            Nossa equipe está equipada para atender sua empresa e lhe auxiliar a
            estar preparado para as mudanças repentinas dessa lei que vem
            ganhando cada vez mais força em nossa sociedade.
          </p>
          <span>Agende sua consultoria!</span>
        </div>
      </S.HomeDetails>
    </>
  );
}
