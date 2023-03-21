import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CVService {
  personal: any[] = [];
  datos: any[] = [];
  skins: any[] = [];
  educacion: any[] = [];
  experiencia: any[] = [];
  servicio: any[] = [];
  testimonio: any[] = [];
  formulario: any ;



  constructor(private http:HttpClient) {
    this.CargarSkins();
    this.CargarDatos();
    this.CargarExperiencia();
    this.CargarServicios();
    this.CargarTestimonio();
    this.CargarEducacion();
    this.VerMensajes();

  }


  private CargarDatos(){
    this.http.get('https://cv-back-ru.onrender.com/api/datos')
    .subscribe((respu: any) => {
      this.datos = respu;
      });
  }

  private CargarEducacion(){
    this.http.get('https://cv-back-ru.onrender.com/api/educacion').subscribe((respu: any) => {
      this.educacion = respu;
      });
  }
  //Skins
  private CargarSkins(){
    this.http.get('https://cv-back-ru.onrender.com/api/skins')
    .subscribe((respu: any) => {
      this.skins = respu;
      });
   }

  private CargarExperiencia(){
    this.http.get('https://cv-back-ru.onrender.com/api/experiencia')
    .subscribe((respu: any) => {
      this.experiencia = respu;
      });
  }
  private CargarServicios(){
    this.http.get('https://cv-back-ru.onrender.com/api/servicios')
    .subscribe((respu: any) => {
      this.servicio = respu;
     });
  }
  private CargarTestimonio(){
    this.http.get('https://cv-back-ru.onrender.com/api/testimonio')
    .subscribe((respu: any) => {
      this.testimonio = respu;
     });
  }
  private VerMensajes() {
    this.http.get('https://cv-back-ru.onrender.com/api/mensajes')
   .subscribe((respu: any) => {
     this.formulario = respu;
    });
  }




}



