import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  reservas = 24;
  ocupacao = 72;
  faturamento = 18540;
  despesas = 9230;

  quartosOcupados = 18;
  quartosDisponiveis = 7;
  quartosManutencao = 2;

  funcionarios = 14;
  clientes = 86;

  get lucro() {
    return this.faturamento - this.despesas;
  }
}