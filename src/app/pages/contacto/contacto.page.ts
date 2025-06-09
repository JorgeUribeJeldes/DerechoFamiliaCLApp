import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router'; // <-- Agrega esto
import { MenuController } from '@ionic/angular'; // <-- Y esto
import {
  IonMenu,
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
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [
    IonMenu,
    IonMenuButton,
    IonButtons,
    IonList,
    RouterModule,
    IonItem,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonIcon,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ContactoPage {
  contactForm: FormGroup;

  constructor(
    public menu: MenuController,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  logout() {
    this.menu.close();
    this.router.navigate(['/inicio-sesion']);
  }

  enviarContacto() {
    if (this.contactForm.valid) {
      // Aquí puedes manejar el envío del formulario
      alert('Mensaje enviado correctamente');
      this.contactForm.reset();
    }
  }
}
