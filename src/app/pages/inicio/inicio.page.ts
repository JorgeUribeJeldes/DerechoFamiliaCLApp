import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MenuController, createAnimation } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonMenu,
  IonMenuButton,
  IonButtons,
  IonList,
  IonItem
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    RouterModule,
    IonMenu,
    IonMenuButton,
    IonButtons,
    IonList,
    IonItem,
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton
  ]
})
export class InicioPage implements OnInit, AfterViewInit {

  constructor(private router: Router, public menu: MenuController) {}

  ngOnInit(): void {
    console.log('InicioPage initialized');
  }

  ngAfterViewInit() {
    const el = document.querySelector('.titulo');
    if (el) {
      const anim = createAnimation()
        .addElement(el)
        .duration(1000)
        .iterations(1)
        .fromTo('opacity', '0', '1');
      anim.play();
    } else {
      console.warn('Elemento ".titulo" no encontrado en el DOM.');
    }
  }

  logout() {
    this.menu.close();
    this.router.navigate(['/inicio-sesion']); // Usa la ruta correcta según tu app.routes.ts
  }
}
