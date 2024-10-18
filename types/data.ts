interface DiasRefeicoes {
  horario: string;
  nome: string;
  alimentos: string[];
}
interface RefeicoesProps {
  dia: number;
  refeicoes: DiasRefeicoes[];
}

export interface Data {
  nome: string;
  sexo: string;
  idade: number;
  altura: number;
  peso: number;
  objetivo: string;
  refeicoes: RefeicoesProps[];
  suplementos: string[];
}
