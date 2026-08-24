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

  totalQuartos = 30;
  quartosOcupados = 22;
  quartosDisponiveis = 8;

  reservasHoje = 6;
  reservasMes = 48;

  faturamento = 18450;
  despesas = 9230;

  funcionarios = 14;

  ocupacao = Math.round((this.quartosOcupados / this.totalQuartos) * 100);

  get lucro() {
    return this.faturamento - this.despesas;
  }
}