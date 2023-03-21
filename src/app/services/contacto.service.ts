import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formulario } from '../modelo/formulario';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {


  constructor(private httpClient:HttpClient) { }
  Url="https://cv-back-ru.onrender.com/api/";

  CargarMensaje(formulario:Formulario):Observable<any>{
     return this.httpClient.post<Formulario>(this.Url+"formulario", formulario);
     }
  borrarMensaje(id:Number) {
    return this.httpClient.delete<Number>(this.Url+"delete/"+id);
    }
  }
