import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicios } from '../modelo/servicios';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private httpClient:HttpClient) { }
  Url="https://cv-back-ru.onrender.com/api/";

  borrarServicios(id:Number) {
    return this.httpClient.delete<Number>(this.Url+"servicios/delete/"+id);
  }
  editarServicios(servicios:Servicios):Observable<any> {
    return this.httpClient.put<Servicios>(this.Url+"servicios/edit/"+servicios.id, servicios);
  }
  recuperarServicios(id:Number) {
    return this.httpClient.get<Servicios>(this.Url+"servicios/"+id);
  }
  cargarServicios(servicios:Servicios):Observable<any>{
    return this.httpClient.post<Servicios>(this.Url+"servicios/nuevo/", servicios);
     }
}
