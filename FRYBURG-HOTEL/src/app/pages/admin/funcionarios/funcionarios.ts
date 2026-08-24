import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Funcionario {
  id: number;
  nome: string;
  cargo: string;
  setor: string;
  salario: number;
}

@Component({
  selector: 'app-funcionarios',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './funcionarios.html',
  styleUrl: './funcionarios.css'
})
export class Funcionarios {

  funcionarios: Funcionario[] = [];

  nome = '';
  cargo = '';
  setor = '';
  salario: number | null = null;

  constructor() {
    this.carregarFuncionarios();
  }

  carregarFuncionarios(): void {

    const dados = localStorage.getItem('funcionarios');

    if (dados) {

      this.funcionarios = JSON.parse(dados);

    } else {

      this.funcionarios = [
        {
          id: 1,
          nome: 'Ana Martins',
          cargo: 'Gerente',
          setor: 'Administração',
          salario: 5200
        },
        {
          id: 2,
          nome: 'Rafael Souza',
          cargo: 'Recepcionista',
          setor: 'Recepção',
          salario: 2300
        },
        {
          id: 3,
          nome: 'Juliana Costa',
          cargo: 'Chef de cozinha',
          setor: 'Restaurante',
          salario: 3200
        }
      ];

      this.salvarFuncionarios();
    }
  }

  salvarFuncionarios(): void {

    localStorage.setItem(
      'funcionarios',
      JSON.stringify(this.funcionarios)
    );

  }

  adicionarFuncionario(): void {

    if (
      !this.nome ||
      !this.cargo ||
      !this.setor ||
      !this.salario
    ) {
      alert('Preencha todos os campos.');
      return;
    }

    const novoFuncionario: Funcionario = {
      id: Date.now(),
      nome: this.nome,
      cargo: this.cargo,
      setor: this.setor,
      salario: Number(this.salario)
    };

    this.funcionarios.push(novoFuncionario);

    this.salvarFuncionarios();

    this.nome = '';
    this.cargo = '';
    this.setor = '';
    this.salario = null;
  }

  excluirFuncionario(id: number): void {

    const confirmar = confirm(
      'Deseja realmente excluir este funcionário?'
    );

    if (!confirmar) {
      return;
    }

    this.funcionarios = this.funcionarios.filter(
      funcionario => funcionario.id !== id
    );

    this.salvarFuncionarios();
  }

  get totalFolha(): number {

    return this.funcionarios.reduce(
      (total, funcionario) => total + funcionario.salario,
      0
    );

  }
}