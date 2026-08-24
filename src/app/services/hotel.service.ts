import { Injectable } from '@angular/core';
import { Hotel } from '../interfaces/hotel';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private hoteis: Hotel[] = [
    {
      id: 1,
      nome: 'Fryburg Mountain',
      descricao:
        'Um hotel cercado pelas montanhas de Nova Friburgo, perfeito para quem busca tranquilidade, natureza e conforto.',
      endereco: 'Estrada das Montanhas, 1500 - Nova Friburgo, RJ',
      precoDiaria: 450,
      imagem:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
      estrelas: 5,
      restaurante: true,
      piscina: true,
      estacionamento: true,
    },
    {
      id: 2,
      nome: 'Fryburg Lake',
      descricao:
        'Uma experiência tranquila em meio à natureza, com áreas de lazer e uma vista especial para os hóspedes.',
      endereco: 'Avenida das Águas, 800 - Região Serrana, RJ',
      precoDiaria: 390,
      imagem:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
      estrelas: 5,
      restaurante: true,
      piscina: true,
      estacionamento: true,
    },
    {
      id: 3,
      nome: 'Fryburg Premium',
      descricao:
        'Uma experiência sofisticada para quem procura exclusividade, conforto e serviços especiais.',
      endereco: 'Rua Imperial, 300 - Nova Friburgo, RJ',
      precoDiaria: 650,
      imagem:
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=85',
      estrelas: 5,
      restaurante: true,
      piscina: true,
      estacionamento: true,
    },
  ];

  listarHoteis(): Hotel[] {
    return this.hoteis;
  }

  buscarHotel(id: number): Hotel | undefined {
    return this.hoteis.find((hotel) => hotel.id === id);
  }
}