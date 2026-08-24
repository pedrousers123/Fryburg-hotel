import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-restaurante',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './restaurante.html',
  styleUrl: './restaurante.css'
})
export class Restaurante {

  pedidos = 18;
  pedidosPreparando = 5;
  pedidosProntos = 4;
  pedidosEntregues = 9;

  itens = [
    {
      nome: 'Café da manhã',
      quantidade: 12,
      valor: 35
    },
    {
      nome: 'Almoço',
      quantidade: 8,
      valor: 42
    },
    {
      nome: 'Jantar',
      quantidade: 6,
      valor: 48
    },
    {
      nome: 'Bebidas',
      quantidade: 15,
      valor: 12
    }
  ];

}