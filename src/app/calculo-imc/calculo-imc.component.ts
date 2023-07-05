import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo-imc',
  templateUrl: './calculo-imc.component.html',
  styleUrls: ['./calculo-imc.component.scss']
})
export class CalculoImcComponent {

  public nome: string = "";
  public altura: number = 0;
  public peso: number = 0;

  public avaliacao() {
    this.altura * this.peso / this.altura
  }

}
