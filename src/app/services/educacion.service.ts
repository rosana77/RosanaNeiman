import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EducacionFormulario } from '../modelo/educacion-formulario';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private httpClient:HttpClient) { }
  Url="https://cv-back-ru.onrender.com/api/";

  borrarEducacion(id:Number) {
    return this.httpClient.delete<Number>(this.Url+"educacion/delete/"+id);
  }
  editarEducacion(educacionFormulario:EducacionFormulario):Observable<any> {
    return this.httpClient.put<EducacionFormulario>(this.Url+"educacion/edit/"+educacionFormulario.id, educacionFormulario);
  }
  recuperarEducacion(id:Number) {
    return this.httpClient.get<EducacionFormulario>(this.Url+"educacion/"+id);
  }
  cargarEducacion(educacionFormulario:EducacionFormulario):Observable<any>{
    return this.httpClient.post<EducacionFormulario>(this.Url+"educacion/nuevo/", educacionFormulario);
     }
}
