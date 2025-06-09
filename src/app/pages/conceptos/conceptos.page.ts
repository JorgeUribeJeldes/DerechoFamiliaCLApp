import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonMenu,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonMenuButton,
  IonButtons,
  IonList,
  IonItem, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-conceptos',
  templateUrl: './conceptos.page.html',
  styleUrls: ['./conceptos.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonMenu, // IMPORTANTE para el menú
    IonMenuButton,
    IonButtons,
    IonList,
    IonItem,
    RouterModule, // IMPORTANTE para routerLink
    IonMenuButton,
    IonButtons,
    IonList,
    IonItem,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    CommonModule,
    FormsModule
  ]
})
export class ConceptosPage {
  constructor(public menu: MenuController, private router: Router) {}

  logout() {
    this.menu.close();
    this.router.navigate(['/inicio-sesion']);
  }

  conceptos = [
    {
      titulo: 'Pensión Alimenticia',
      descripcion: 'Obligación legal de proveer recursos a hijos o cónyuge para cubrir sus necesidades básicas.',
      imagen: 'assets/img/pension.png'
    },
    // ...otros conceptos
  ];
}
