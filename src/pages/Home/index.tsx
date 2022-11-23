import * as S from './styles';

import lawImg from '../../assets/law.jpg';

export function Home() {
  return (
    <S.HomeContainer>
      <S.Image>
        <img src={lawImg} alt='' />
      </S.Image>

      <S.AboutUs>
        <h1>Sobre nós</h1>
        <div>
          <p>
            Com o objetivo de auxiliar empresas na regulamentação da Lei Geral
            de Proteção de Dados em suas atuações, três colegas recém formadas
            decidem unir-se e abrir sua sociedade. Em 04/05/2020, por
            coincidência no início de um período que iria acentuar ainda mais a
            necessidade de proteger os seus dados e dados dos clientes, funda-se
            Almança, Silva & Soares. Durante os 2 anos, a empresa foi agregada
            ademais personalidades do meio jurídico para aperfeiçoar seu
            trabalho. Nós vamos muito além de fronteiras e delimitações. Apesar
            de nossa sede ser no Recanto Maestro, Restinga Seca/RS, conseguimos
            atender empresas de todos os lugares do mundo por estarmos
            difundidos digitalmente.
          </p>
          <p>
            Fazendo com que assim, empresas do Rio Grande do Sul, do Brasil e do
            Mundo consigam atualizar suas políticas e utilizar os dados dos seus
            clientes de forma ética e segura para ambos os lados. Nós viemos com
            o intuito de inovação. Somos um escritório pequeno, mas com um
            alcance inestimável. Presamos pelo humanismo em nossos atendimentos
            e tratar cada assessoria como se fosse única, por que é. Assim,
            pensando em como estamos cada vez mais em um mundo digital, a
            Almança, Silva, Soares e Advogados Associados veio para completar e
            fazer com que os negócios jurídicos não dependam de territórios,
            pois as ligações humanas vão muito além disso.
          </p>
        </div>
      </S.AboutUs>
    </S.HomeContainer>
  );
}
