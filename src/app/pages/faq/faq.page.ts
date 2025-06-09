import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonIcon,
  IonButton,
  IonItem,
  IonMenu,
  IonList,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
  standalone: true,
  imports: [
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonButtons,
    IonMenuButton,
    IonList,
    IonMenu,
    IonItem,
    IonButton,
    IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterModule // <-- Importante para routerLink
  ]
})
export class FaqPage {
  preguntas = [
    {
      pregunta: '¿Qué es la pensión alimenticia?',
      respuesta: 'Es la obligación legal de proveer recursos para cubrir las necesidades básicas de los hijos o cónyuge.'
    },
    {
      pregunta: '¿Quién puede solicitar el cuidado personal?',
      respuesta: 'Cualquiera de los padres puede solicitar el cuidado personal del menor ante el tribunal.'
    }
    // Agrega más preguntas si lo deseas
  ];

  constructor(public menu: MenuController, private router: Router) {}

  logout() {
    this.menu.close();
    this.router.navigate(['/inicio-sesion']);
  }
}