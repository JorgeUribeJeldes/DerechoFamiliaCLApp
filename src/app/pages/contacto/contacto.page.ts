import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonItem,
  IonButton,
  IonInput
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar
  ]
})
export class ContactoPage implements OnInit {

  formularioContacto!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formularioContacto = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  enviarFormulario() {
    if (this.formularioContacto.valid) {
      console.log('Formulario enviado:', this.formularioContacto.value);
      //alert('Formulario enviado correctamente');
      this.formularioContacto.reset();
      alert('Formulario enviado correctamente');
    } else {
      console.log('Formulario inválido');
    }
  }

}
