import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';

interface Despesa {
  nome: string;
  categoria: string;
  valor: number;
}

@Component({
  selector: 'app-despesas',
  imports: [FormsModule, RouterLink, DecimalPipe],
  templateUrl: './despesas.html',
  styleUrl: './despesas.css'
})
export class Despesas {

  novaDespesa = '';
  novaCategoria = 'Outros';
  novoValor = 0;

  despesas: Despesa[] = [
    {
      nome: 'Salários',
      categoria: 'Funcionários',
      valor: 8500
    },
    {
      nome: 'Produtos de limpeza',
      categoria: 'Operação',
      valor: 1200
    },
    {
      nome: 'Materiais do hotel',
      categoria: 'Materiais',
      valor: 750
    },
    {
      nome: 'Serviços terceirizados',
      categoria: 'Serviços',
      valor: 1800
    }
  ];

  get total(): number {
    return this.despesas.reduce(
      (total, despesa) => total + despesa.valor,
      0
    );
  }

  adicionarDespesa(): void {

    if (!this.novaDespesa || this.novoValor <= 0) {
      return;
    }

    this.despesas.push({
      nome: this.novaDespesa,
      categoria: this.novaCategoria,
      valor: this.novoValor
    });

    this.novaDespesa = '';
    this.novaCategoria = 'Outros';
    this.novoValor = 0;
  }

  removerDespesa(index: number): void {
    this.despesas.splice(index, 1);
  }
}