import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicePostService } from 'src/app/services/service-post.service';
import { Login } from '../../interface/interface'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  url = `http://localhost:3100/usuarios/login`;  
  respuesta: any ; 
  form: FormGroup;

  constructor( 
      private servicio: ServicePostService,
      private FB: FormBuilder,
      private router: Router
    ) { }

  ngOnInit() {
    this.form = this.FB.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
  })
    this.checkToken();
  }
   
    // <----- Verificar si existe Token ----->

  checkToken(){
    if ( localStorage.getItem('token') ){
      this.router.navigate(['/folder']);
    }
  }

  // <----- Login y obtener token ----->

  Validacion ( bad="false" ){
    console.log(this.form.value)
    this.servicio.Login(this.url, this.form.value).subscribe(
      resp => {
        let result:Login = resp
        this.respuesta = (resp)
        if ( bad != this.respuesta ) {
          localStorage.setItem("token", result.token )
          this.router.navigate(['/folder']);
          this.respuesta = "Datos corectos"
        } else {
          this.respuesta = "Datos incorectos"
      }
     }
    )
  }
}
