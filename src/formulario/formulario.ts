import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface ContactForm {
  nombre: string;
  email: string;
  telefono: string;
  ciudad: string;
  tipo_mueble: string;
  idea: string;
  dimensiones: string;
  canal: string;
  privacidad: boolean;
}

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  //   // URL del backend Spring Boot (configura en environment.ts para prod)
//   private readonly API_URL = 'https://tu-backend-api/api/solicitudes';

//   loading = false;
//   submitted = false;
//   error = '';

//   constructor(private http: HttpClient) {}

//   onSubmit(form?: NgForm): void {
//     if (form && !form.valid) {
//       // Marca todos los campos como tocados para mostrar validaciones
//       Object.keys(form.controls).forEach(key => {
//         form.controls[key].markAsTouched();
//       });
//       return;
//     }

//     this.loading = true;
//     this.error = '';

//     // Payload que se enviará al backend Spring Boot → MySQL
//     const payload: Partial<ContactForm> = form?.value ?? {};

//     this.http.post(this.API_URL, payload).subscribe({
//       next: () => {
//         this.loading = false;
//         this.submitted = true;
//         form?.resetForm();
//       },
//       error: (err) => {
//         this.loading = false;
//         this.error = 'Hubo un problema al enviar tu solicitud. Intenta de nuevo.';
//         console.error('Error al enviar solicitud:', err);
//       }
//     });
//   }

}
