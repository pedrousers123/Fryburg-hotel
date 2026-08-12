export interface Hotel {
  id: number;
  nome: string;
  descricao: string;
  endereco: string;
  precoDiaria: number;
  imagem: string;
  estrelas: number;
  restaurante: boolean;
  piscina: boolean;
  estacionamento: boolean;
}