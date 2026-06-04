import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// import { Component } from '@angular/core';
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
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Garaje_Home';
  protected url_instagrams ='https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fgaraje_home%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExSW42SWFId3VpYUM2U0ZQRnNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4pPsK3ufP09nS0JQgvQp77APlkfNpPbitXHVQjUbMAgCucNpG-UB6GfzfU8w_aem_cEbiBgbkaCnhzz4mXrGeuQ&h=AUDd1ruMcJbdOreuwgk54QJQzZDqWqi1MtuZyk8flCq7O0App7---vVADPw8HDFSBT0Q-z19bUBLWQY7vkoyuCHzli1V5qlYge0Q8_s3qIcqbcPy1Vsu8J9-5-Vz3EM3VXe_mG8V7KHKRmE50Vc6'
}


// pieza.component.ts
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CommonModule, FormsModule],
//   templateUrl: './app.html',
//   styleUrls: ['./app.css']
// })
// export class App {

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
// }

/*
  ─── NOTAS DE INTEGRACIÓN ────────────────────────────────────

  1. MÓDULOS REQUERIDOS en app.config.ts (Angular 19 standalone):
     provideHttpClient(withFetch())

  2. VARIABLES DE ENTORNO (src/environments/):
     environment.ts      → apiUrl: 'http://localhost:8080/api'
     environment.prod.ts → apiUrl: 'https://tu-dominio.com/api'
     Usa `inject(ENVIRONMENT)` o importa directamente el env.

  3. ENDPOINT SPRING BOOT esperado:
     POST /api/solicitudes
     Body: { nombre, email, telefono, ciudad, tipo_mueble,
             idea, dimensiones, canal, privacidad }
     Response 200: { id, mensaje }

  4. CORS en Spring Boot:
     @CrossOrigin(origins = "${frontend.url}")
     o configura WebMvcConfigurer en tu SecurityConfig.

  5. DOCKER — variables env en docker-compose.yml:
     SPRING_DATASOURCE_URL: jdbc:mysql://db:3306/pieza_db
     SPRING_DATASOURCE_USERNAME: root
     SPRING_DATASOURCE_PASSWORD: secret
*/