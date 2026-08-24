import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Campanha {
  id: number;
  nome: string;
  canal: string;
  investimento: number;
  gasto: number;
  status: string;
}

@Component({
  selector: 'app-marketintg',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './marketintg.html',
  styleUrl: './marketintg.css'
})
export class Marketintg {

  nome = '';
  canal = '';
  investimento = 0;
  gasto = 0;

  campanhas: Campanha[] = this.carregarDados();

  carregarDados(): Campanha[] {

    const dados = localStorage.getItem('fryburg_marketing');

    if (dados) {
      return JSON.parse(dados);
    }

    const dadosIniciais: Campanha[] = [
      {
        id: 1,
        nome: 'Férias de Julho',
        canal: 'Instagram',
        investimento: 3000,
        gasto: 2450,
        status: 'Ativa'
      },
      {
        id: 2,
        nome: 'Fim de Semana Romântico',
        canal: 'Google',
        investimento: 2000,
        gasto: 1500,
        status: 'Ativa'
      },
      {
        id: 3,
        nome: 'Alta Temporada',
        canal: 'Facebook',
        investimento: 5000,
        gasto: 5000,
        status: 'Concluída'
      }
    ];

    localStorage.setItem(
      'fryburg_marketing',
      JSON.stringify(dadosIniciais)
    );

    return dadosIniciais;
  }

  salvarDados(): void {

    localStorage.setItem(
      'fryburg_marketing',
      JSON.stringify(this.campanhas)
    );

  }

  adicionarCampanha(): void {

    if (
      this.nome.trim() === '' ||
      this.canal.trim() === '' ||
      this.investimento <= 0
    ) {
      alert('Preencha os dados da campanha corretamente.');
      return;
    }

    const novaCampanha: Campanha = {
      id: Date.now(),
      nome: this.nome,
      canal: this.canal,
      investimento: this.investimento,
      gasto: this.gasto,
      status: 'Ativa'
    };

    this.campanhas.push(novaCampanha);

    this.salvarDados();

    this.nome = '';
    this.canal = '';
    this.investimento = 0;
    this.gasto = 0;
  }

  alterarStatus(campanha: Campanha): void {

    if (campanha.status === 'Ativa') {
      campanha.status = 'Concluída';
    } else {
      campanha.status = 'Ativa';
    }

    this.salvarDados();
  }

  removerCampanha(id: number): void {

    this.campanhas = this.campanhas.filter(
      campanha => campanha.id !== id
    );

    this.salvarDados();
  }

  get totalCampanhas(): number {
    return this.campanhas.length;
  }

  get campanhasAtivas(): number {
    return this.campanhas.filter(
      campanha => campanha.status === 'Ativa'
    ).length;
  }

  get investimentoTotal(): number {
    return this.campanhas.reduce(
      (total, campanha) => total + campanha.investimento,
      0
    );
  }

  get gastoTotal(): number {
    return this.campanhas.reduce(
      (total, campanha) => total + campanha.gasto,
      0
    );
  }

  get saldoMarketing(): number {
    return this.investimentoTotal - this.gastoTotal;
  }
}