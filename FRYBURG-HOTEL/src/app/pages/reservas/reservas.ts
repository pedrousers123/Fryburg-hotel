import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HotelService } from '../../services/hotel.service';
import { ReservaService } from '../../services/reserva.service';
import { Hotel } from '../../interfaces/hotel';

@Component({
  selector: 'app-reservas',
  imports: [FormsModule, RouterLink],
  templateUrl: './reservas.html',
  styleUrl: './reservas.css',
})
export class Reservas {
  private route = inject(ActivatedRoute);
  private hotelService = inject(HotelService);
  private reservaService = inject(ReservaService);

  hotel: Hotel | undefined;

  cliente = '';
  checkIn = '';
  checkOut = '';

  noites = 0;
  total = 0;

  mensagem = '';
  sucesso = false;

  constructor() {
    const id = Number(
      this.route.snapshot.queryParamMap.get('hotel'),
    );

    this.hotel = this.hotelService.buscarHotel(id);
  }

  calcularReserva(): void {
    this.mensagem = '';
    this.sucesso = false;

    if (!this.checkIn || !this.checkOut) {
      this.mensagem = 'Escolha as datas de entrada e saída.';
      return;
    }

    const entrada = new Date(this.checkIn);
    const saida = new Date(this.checkOut);

    if (saida <= entrada) {
      this.mensagem =
        'A data de saída deve ser depois da entrada.';
      return;
    }

    const diferenca =
      saida.getTime() - entrada.getTime();

    this.noites = Math.ceil(
      diferenca / (1000 * 60 * 60 * 24),
    );

    if (this.hotel) {
      this.total =
        this.noites * this.hotel.precoDiaria;
    }
  }

  reservar(): void {
    this.mensagem = '';
    this.sucesso = false;

    if (
      !this.cliente ||
      !this.checkIn ||
      !this.checkOut
    ) {
      this.mensagem = 'Preencha todos os campos.';
      return;
    }

    if (!this.hotel) {
      this.mensagem = 'Hotel não encontrado.';
      return;
    }

    this.calcularReserva();

    if (this.noites <= 0) {
      return;
    }

    const disponivel =
      this.reservaService.verificarDisponibilidade(
        this.hotel.id,
        this.checkIn,
        this.checkOut,
      );

    if (!disponivel) {
      this.mensagem =
        'Essas datas já estão ocupadas. Escolha outras datas.';
      return;
    }

    this.reservaService.adicionarReserva({
      id: Date.now(),
      hotelId: this.hotel.id,
      cliente: this.cliente,
      checkIn: this.checkIn,
      checkOut: this.checkOut,
    });

    this.sucesso = true;
    this.mensagem =
      'Reserva realizada com sucesso!';
  }
}