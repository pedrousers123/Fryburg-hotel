import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReservaService } from '../../../services/reserva.service';
import { HotelService } from '../../../services/hotel.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  private reservaService = inject(ReservaService);
  private hotelService = inject(HotelService);

  totalQuartos = 30;
  quartosOcupados = 0;
  quartosDisponiveis = 0;

  reservasHoje = 0;
  reservasMes = 0;

  faturamento = 0;
  despesas = 9230;

  funcionarios = 14;

  constructor() {
    this.atualizarDashboard();
  }

  atualizarDashboard(): void {
    const reservas = this.reservaService.listarReservas();

    this.reservasMes = reservas.length;

    const hoje = new Date();
    const dataHoje = this.formatarData(hoje);

    this.reservasHoje = reservas.filter(
      (reserva) =>
        reserva.checkIn === dataHoje ||
        (reserva.checkIn <= dataHoje && reserva.checkOut > dataHoje),
    ).length;

    this.quartosOcupados = Math.min(
      reservas.filter((reserva) => {
        return reserva.checkIn <= dataHoje && reserva.checkOut > dataHoje;
      }).length,
      this.totalQuartos,
    );

    this.quartosDisponiveis =
      this.totalQuartos - this.quartosOcupados;

    this.faturamento = 0;

    reservas.forEach((reserva) => {
      const hotel = this.hotelService.buscarHotel(reserva.hotelId);

      if (hotel) {
        const entrada = new Date(reserva.checkIn);
        const saida = new Date(reserva.checkOut);

        const diferenca =
          saida.getTime() - entrada.getTime();

        const noites = Math.ceil(
          diferenca / (1000 * 60 * 60 * 24),
        );

        this.faturamento +=
          noites * hotel.precoDiaria;
      }
    });
  }

  formatarData(data: Date): string {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
  }

  get ocupacao(): number {
    return Math.round(
      (this.quartosOcupados / this.totalQuartos) * 100,
    );
  }

  get lucro(): number {
    return this.faturamento - this.despesas;
  }
}