import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios-cadastrados',
  templateUrl: './usuarios-cadastrados.component.html',
  styleUrls: ['./usuarios-cadastrados.component.css']
})
export class UsuariosCadastradosComponent implements OnInit {

  nome = "Gustavo"
  emaile = "galasdalas50@gmail.com"
  cpfUsuario = "123.123.123-45"
  telefone = "(11)990088776"

  display = 'none'
  mostra = false;

  constructor() { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  salvarUsuario() {
    alert("Salvo com sucesso");
  }

  atualizarUsuario() {
    alert("Atualizado com sucesso");
  }


  mostrarBotao() {
    this.mostra = true
    this.display = "block"
  }

  ocultarBotao() {
    this.mostra = false
    this.display = "none"
  }

  escolherModoVisibilidadeBotao() {
    if (this.display == "block") {
      this.ocultarBotao()
    } else {
      this.mostrarBotao()
    }
  }



}
