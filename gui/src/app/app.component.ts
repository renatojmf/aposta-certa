import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { Apostador } from './apostador';
import { ApostadorService } from './apostador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  apostador: Apostador = {nome:"", email:"", senha:""};
  apostadorService = new ApostadorService(null);

  cadastrar(a: Apostador): void {
    if(this.apostadorService.cadastrar(a)){
      this.apostador = {nome: "", email: "", senha: ""};
    }else{
      this.apostador.email = "";
    }
  }
}
