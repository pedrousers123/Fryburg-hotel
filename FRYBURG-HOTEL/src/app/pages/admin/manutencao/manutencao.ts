import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface ManutencaoItem {
  id: number;
  equipamento: string;
  setor: string;
  custo: number;
  status: string;
}

@Component({
  selector: 'app-manutencao',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './manutencao.html',
  styleUrl: './manutencao.css'
})
export class Manutencao {

  equipamento = '';
  setor = '';
  custo = 0;

  manutencoes: ManutencaoItem[] = this.carregarDados();

  carregarDados(): ManutencaoItem[] {

    const dados = localStorage.getItem('fryburg_manutencoes');

    if (dados) {
      return JSON.parse(dados);
    }

    const dadosIniciais: ManutencaoItem[] = [
      {
        id: 1,
        equipamento: 'Ar-condicionado',
        setor: 'Quartos',
        custo: 850,
        status: 'Pendente'
      },
      {
        id: 2,
        equipamento: 'Elevador',
        setor: 'Manutenção geral',
        custo: 1200,
        status: 'Em andamento'
      },
      {
        id: 3,
        equipamento: 'Piscina',
        setor: 'Área externa',
        custo: 450,
        status: 'Concluída'
      }
    ];

    localStorage.setItem(
      'fryburg_manutencoes',
      JSON.stringify(dadosIniciais)
    );

    return dadosIniciais;
  }

  salvarDados(): void {

    localStorage.setItem(
      'fryburg_manutencoes',
      JSON.stringify(this.manutencoes)
    );

  }

  adicionarManutencao(): void {

    if (
      this.equipamento.trim() === '' ||
      this.setor.trim() === '' ||
      this.custo <= 0
    ) {
      alert('Preencha todos os campos corretamente.');
      return;
    }

    const novaManutencao: ManutencaoItem = {
      id: Date.now(),
      equipamento: this.equipamento,
      setor: this.setor,
      custo: this.custo,
      status: 'Pendente'
    };

    this.manutencoes.push(novaManutencao);

    this.salvarDados();

    this.equipamento = '';
    this.setor = '';
    this.custo = 0;
  }

  alterarStatus(manutencao: ManutencaoItem): void {

    if (manutencao.status === 'Pendente') {
      manutencao.status = 'Em andamento';
    } else if (manutencao.status === 'Em andamento') {
      manutencao.status = 'Concluída';
    } else {
      manutencao.status = 'Pendente';
    }

    this.salvarDados();
  }

  removerManutencao(id: number): void {

    this.manutencoes = this.manutencoes.filter(
      manutencao => manutencao.id !== id
    );

    this.salvarDados();
  }

  get totalManutencoes(): number {
    return this.manutencoes.length;
  }

  get manutencoesPendentes(): number {
    return this.manutencoes.filter(
      manutencao => manutencao.status === 'Pendente'
    ).length;
  }

  get manutencoesAndamento(): number {
    return this.manutencoes.filter(
      manutencao => manutencao.status === 'Em andamento'
    ).length;
  }

  get custoTotal(): number {
    return this.manutencoes.reduce(
      (total, manutencao) => total + manutencao.custo,
      0
    );
  }
}