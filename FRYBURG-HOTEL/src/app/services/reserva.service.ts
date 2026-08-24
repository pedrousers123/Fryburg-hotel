import { Injectable } from '@angular/core';
import { Reserva } from '../interfaces/reserva';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  private reservas: Reserva[] = this.carregarReservas();

  private carregarReservas(): Reserva[] {
    const dados = localStorage.getItem('fryburg_reservas');

    if (dados) {
      return JSON.parse(dados);
    }

    const reservasIniciais: Reserva[] = [
      {
        id: 1,
        hotelId: 1,
        cliente: 'João Silva',
        checkIn: '2026-08-20',
        checkOut: '2026-08-24',
      },
      {
        id: 2,
        hotelId: 2,
        cliente: 'Maria Souza',
        checkIn: '2026-08-18',
        checkOut: '2026-08-21',
      },
    ];

    localStorage.setItem(
      'fryburg_reservas',
      JSON.stringify(reservasIniciais),
    );

    return reservasIniciais;
  }

  listarReservas(): Reserva[] {
    return this.reservas;
  }

  verificarDisponibilidade(
    hotelId: number,
    checkIn: string,
    checkOut: string,
  ): boolean {
    const entrada = new Date(checkIn);
    const saida = new Date(checkOut);

    return !this.reservas.some((reserva) => {
      if (reserva.hotelId !== hotelId) {
        return false;
      }

      const reservaEntrada = new Date(reserva.checkIn);
      const reservaSaida = new Date(reserva.checkOut);

      return entrada < reservaSaida && saida > reservaEntrada;
    });
  }

  adicionarReserva(reserva: Reserva): void {
    this.reservas.push(reserva);

    localStorage.setItem(
      'fryburg_reservas',
      JSON.stringify(this.reservas),
    );
  }
}