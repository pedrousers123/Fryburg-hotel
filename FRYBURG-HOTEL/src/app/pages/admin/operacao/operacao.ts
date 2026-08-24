import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operacao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './operacao.html',
  styleUrl: './operacao.css'
})
export class Operacao {

  contaLuz = 1850;
  contaAgua = 920;
  contaGas = 680;
  internet = 250;
  lavanderia = 1200;

  get totalOperacao() {
    return this.contaLuz +
           this.contaAgua +
           this.contaGas +
           this.internet +
           this.lavanderia;
  }
}