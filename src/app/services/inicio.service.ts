import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InicioService {
  Url="https://cv-back-ru.onrender.com/api/";

  currentUserSubjet: BehaviorSubject<any>;
  constructor(private http:HttpClient) {
    this.currentUserSubjet= new BehaviorSubject<any>(JSON.stringify(sessionStorage.getItem('currentUser')|| '{}'));
    }
  IniciarSesion(credenciales:any):Observable<any> {
      return this.http.post(this.Url+"login",credenciales).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubjet.next(data);
      //console.log(this.currentUserSubjet.value);
      return data;
          } ))
  }

   public get usuarioAutenticado () {
     return this.currentUserSubjet;
  }
  public get usuarioAutenticadoToken () {
    return this.usuarioAutenticado.value;
 }
}


