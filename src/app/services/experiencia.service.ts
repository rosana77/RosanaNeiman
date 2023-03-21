import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelo/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private httpClient:HttpClient) { }
  Url="https://cv-back-ru.onrender.com/api/";

  
  borrarExperiencia(id:Number) {
    return this.httpClient.delete<Number>(this.Url+"experiencia/delete/"+id);
  }
  editarExperiencia(experiencia:Experiencia):Observable<any> {
    return this.httpClient.put<Experiencia>(this.Url+"experiencia/edit/"+experiencia.id, experiencia);
  }
  recuperarExperiencia(id:Number) {
    return this.httpClient.get<Experiencia>(this.Url+"experiencia/"+id);
  }
  cargarExperiencia(experiencia:Experiencia):Observable<any>{
    return this.httpClient.post<Experiencia>(this.Url+"experiencia/nuevo/", experiencia);
     }
}
