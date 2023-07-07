import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {

  public valor: boolean = true;

  ngOnInit(): void {
    setInterval(() =>{
      this.valor = !this.valor;
     }, 1000);
  }

}
