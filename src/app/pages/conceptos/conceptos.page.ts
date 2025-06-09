import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  IonMenuButton,
  IonButtons
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-conceptos',
  templateUrl: './conceptos.page.html',
  styleUrls: ['./conceptos.page.scss'],
  standalone: true,
  imports: [
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
    CommonModule,
    FormsModule
  ]
})
export class ConceptosPage {
  conceptos = [
    {
      titulo: 'Pensión Alimenticia',
      descripcion: 'Obligación legal de proveer recursos a hijos o cónyuge para cubrir sus necesidades básicas.'
    },
    {
      titulo: 'Cuidado Personal (Tuición)',
      descripcion: 'Responsabilidad de un padre o madre de criar y vivir con el menor.'
    },
    {
      titulo: 'Régimen de Visitas',
      descripcion: 'Permite que el padre o madre que no vive con el hijo lo visite regularmente.'
    }
    // Agrega más si deseas
  ];
}