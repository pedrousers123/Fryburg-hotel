import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [RouterLink],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  reservas = 18;
  quartos = 30;
  ocupados = 21;

  faturamento = 38500;
  gastos = 21400;

  get taxaOcupacao(): number {
    return Math.round((this.ocupados / this.quartos) * 100);
  }

  get lucro(): number {
    return this.faturamento - this.gastos;
  }
}