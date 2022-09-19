import { Component, OnInit } from '@angular/core';
import { ServicePostService } from 'src/app/services/service-post.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.page.html',
  styleUrls: ['./libros.page.scss'],
})
export class LibrosPage implements OnInit {

  searchLibros: any;
  libros

  constructor( private servicio: ServicePostService ) { }

  ngOnInit() {

     // <------ Mostrar Libro ------>

    this.servicio.getLibros().subscribe(
    resp => {
        console.log('libros',resp) 
        this.libros = resp
        this.searchLibros = this.libros;
    })
  }

    // <------ Buscar Libro ------->

    searchCustomer(event){
      const text = event.target.value;
      this.searchLibros = this.libros;
      if ( text && text.trim() != ''){
        this.searchLibros = this.searchLibros.filter((libros)=> {
          return (libros.Nombre_Elementos.toLowerCase().indexOf(text.toLowerCase()) > -1)
        })
      }
    }

}
