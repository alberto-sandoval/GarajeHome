import { Routes } from '@angular/router';
import { Formulario } from './formulario/formulario';
import { Hero } from './hero/hero';

export const routes: Routes = [
    {path:'', component: Hero},
    {path:'formulario', component: Formulario },
    {path: 'inicio', component: Hero},
];
