import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class LoginPage {
  formularioLogin: FormGroup;
  errorLogin: boolean = false;

  // Usuario hardcodeado
  private usuarioDemo = {
    correo: 'test@demo.cl',
    clave: '123456'
  };

  constructor(private fb: FormBuilder, private router: Router) {
    this.formularioLogin = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', Validators.required]
    });
  }

  login() {
    const datos = this.formularioLogin.value;

    if (
      datos.correo === this.usuarioDemo.correo &&
      datos.clave === this.usuarioDemo.clave
    ) {
      this.errorLogin = false;
      this.router.navigate(['/inicio']); // redirecciona si las credenciales son correctas
    } else {
      this.errorLogin = true; // muestra mensaje de error
    }
  }
}
