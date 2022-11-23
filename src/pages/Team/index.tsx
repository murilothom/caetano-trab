import * as S from './styles';

import caetanoImg from '../../assets/caetano.png';
import camilleImg from '../../assets/camille.png';
import emanuelleImg from '../../assets/emanuelle.png';
import laysaImg from '../../assets/laysa.png';
import mariaImg from '../../assets/maria.png';
import frantiescaImg from '../../assets/frantiesca.png';

interface IPeopleTeam {
  name: string;
  occupation: string;
  summary: string;
  photo: string;
}

const peopleTeam: IPeopleTeam[] = [
  {
    name: 'Camille Hilgemann Almança',
    occupation: 'Sócia OAB/RS 45.789',
    summary:
      'Graduada em Direito pela Faculdade Antonio Meneghetti, com especialização na área empresarial e Mestrado em Atualidades da LGPD em Empresas pela Universidade de Coimbra, Portugal. Atua na área de LGPD para empresas e é professora na Faculdade Antonio Meneghetti na cadeira de direito empresarial.',
    photo: camilleImg,
  },
  {
    name: 'Frantiesca Larissa da Silva',
    occupation: 'Sócia OAB/RS 45.674',
    summary:
      'Graduada em Direito pela Faculdade Antonio Meneghetti, com especialização em direito empresarial e mestrado em Privacidade de Dados na Era Digital pela Universidade Federal de Santa Maria. Atua na área de LGPD para empresas e é autora de obras publicados sobre Privacidade de Dados.',
    photo: frantiescaImg,
  },
  {
    name: 'Maria Rita Soares',
    occupation: 'Sócia OAB/RS 48.248',
    summary:
      'Graduada em Direito pela Faculdade Antonio Meneghetti, com especialização em direito digital e Mestrado em Direito Civil aplicado na LGPD pela Universidade de Coimbra, Portugal. Atua na área de LGPD para empresas e é julgadora no Tribunal de Ética de Disciplina da OAB/RS.',
    photo: mariaImg,
  },
  {
    name: 'Caetano Malheiros Tiezerin',
    occupation: 'Associado OAB/RS 47.466',
    summary:
      'Graduado em Direito pela Faculdade Antonio Meneghetti, com especialização em LGPD e mestrado em Atualidades da LGPD em Empresas pela Universidade de Coimbra, Portugal. É doutorando em Direito Digital na Universidade Federal de Santa Maria e atua na área de LGPD para empresas.',
    photo: caetanoImg,
  },
  {
    name: 'Laysa Priscila Bulegon',
    occupation: 'Associada OAB/RS 46.980',
    summary:
      'Graduada em Direito pela Faculdade Antonio Meneghetti, com especialização no direito civil e Mestranda em Direito Civil aplicado na LGPD pela Universidade Federal de Pelotas. Atua na área de LGPD para empresas e é professora na Faculdade Antonio Meneghetti na cadeira de direito civil.',
    photo: laysaImg,
  },
  {
    name: 'Emanuele Steffanello Manfio',
    occupation: 'Estagiária de Direito',
    summary:
      'Acadêmica do segundo semestre do curso de direito da Faculdade Antonio Meneghetti. Dentro da empresa, sua função é destinada no auxílio dos sócios e advogados associados.',
    photo: emanuelleImg,
  },
];

export function Team() {
  return (
    <S.TeamContainer>
      <S.TeamDetailsWrapper>
        <h2>Equipe</h2>
        <p>
          O escritório trabalha com uma equipe de formação multidisciplinar, com
          segmentos distintos, mas especialidades que se complementam,
          proporcionando, assim, um atendimento estratégico e diferenciado capaz
          de atender com excelência a todas as demandas dos clientes.
        </p>
      </S.TeamDetailsWrapper>

      <S.TeamPeople>
        {peopleTeam.map((person, index) => (
          <li key={person.name}>
            <S.InfoPeople isRight={!(index % 2)}>
              <div>
                <h3>{person.name}</h3>
                <span>{person.occupation}</span>
              </div>
              <p>{person.summary}</p>
            </S.InfoPeople>
            <S.ImagePeople isRight={!(index % 2)}>
              <img src={person.photo} alt='' />
            </S.ImagePeople>
          </li>
        ))}
      </S.TeamPeople>
    </S.TeamContainer>
  );
}
