import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { skinsFormulario } from '../modelo/skinsFormulario';

@Injectable({
  providedIn: 'root'
})
export class SkinsService {

  constructor(private httpClient:HttpClient) { }
  Url="https://cv-back-ru.onrender.com/api/";
  

borrarSkins(id:Number) {
  return this.httpClient.delete<Number>(this.Url+"skins/delete/"+id);
}
editarSkins(skinsformulario:skinsFormulario):Observable<any> {
  return this.httpClient.put<skinsFormulario>(this.Url+"skins/edit/"+skinsformulario.id, skinsformulario);
}
recuperarSkins(id:Number) {
  return this.httpClient.get<skinsFormulario>(this.Url+"skins/"+id);
}
cargarSkins(skinsformulario:skinsFormulario):Observable<any>{
  return this.httpClient.post<skinsFormulario>(this.Url+"skins/nuevo/", skinsformulario);
   }
  }
