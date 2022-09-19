import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, Libros } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class ServicePostService {
  
  constructor( private http: HttpClient) { }

  // <------ Login del API ------->

  Login (url: string, data: string) {
    console.log("" + data)
    return this.http.post<Login>(url, data)
  }

  // <------- Mostrar Libros ------>

  getLibros(){
    return this.http.get<Libros>('http://10.193.128.23:3300/libros')
  }

   // <------ Detalle Elemento ------->

  getDetalle(id:string){
    return this.http.get<Libros>(`http://10.193.128.23:3300/libros/serial/${id}`)
  }


}
