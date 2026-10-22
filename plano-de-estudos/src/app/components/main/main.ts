import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteCard } from '../cliente-card/cliente-card';
import { ProdutoCard } from '../produto-card/produto-card';
import type { Produto } from '../../models/produto';

@Component({
  imports: [FormsModule, ClienteCard, ProdutoCard],
  selector: 'app-main',
  styleUrl: './main.css',
  templateUrl: './main.html',
})
export class Main {

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      descricao: 'Compacto',
      valor: 199
    },
    {
      id: 2,
      nome: 'Mouse',
      descricao: 'Razer sem fio',
      valor: 5500
    }
  ]

  novoCliente: string = '';
  clientes: string[] = ['Ana', 'Lucas', 'Maiki', 'Kain'];

  produtoExemplo = {
    id: 1,
    nome: 'Teclado',
    descricao: 'Compacto',
    valor: 199 
  }

  limpar(): void {
    this.clientes = [];
  }

  adicionar(): void {
    const nome = this.novoCliente.trim();
    if (nome === '') return;
    this.clientes.push(nome);
    this.novoCliente = '';
  }
}
