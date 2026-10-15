import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  vetor: number[] = [];

  calcular_vetor(): void {
    this.vetor = [];
    const total = this.resultado;
    let i = 1;
    while (i <= total) {
      this.vetor.push(i);
      i++;
    }
  }

  calcular(): void {
    this.resultado = 0;
    const numero1 = this.numero1;
    const numero2 = this.numero2;
    this.resultado = (this.numero1 + this.numero2);
  }

  limpar2(): void {
    this.numero1 = 0;
    this.numero2 = 0;
  }

}
