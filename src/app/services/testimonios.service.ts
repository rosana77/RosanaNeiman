import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Testimonios } from '../modelo/testimonios';

@Injectable({
  providedIn: 'root'
})
export class TestimoniosService {

  constructor(private httpClient:HttpClient) { }
  Url="https://cv-back-ru.onrender.com/api/";

  borrarTestimonios(id:Number) {
    return this.httpClient.delete<Number>(this.Url+"testimonio/delete/"+id);
  }
  editarTestimonios(testimonios:Testimonios):Observable<any> {
    return this.httpClient.put<Testimonios>(this.Url+"testimonio/edit/"+testimonios.id, testimonios);
  }
  recuperarTestimonios(id:Number) {
    return this.httpClient.get<Testimonios>(this.Url+"testimonio/"+id);
  }
  cargarTestimonios(testimonios:Testimonios):Observable<any>{
    return this.httpClient.post<Testimonios>(this.Url+"testimonio/nuevo/", testimonios);
     }
}
