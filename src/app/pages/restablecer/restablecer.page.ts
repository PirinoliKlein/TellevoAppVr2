import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/folder/interfaces/usuario';
import { AuthService } from 'src/app/services/firebas/usuarios.service.spec';
import Swal from 'sweetalert2';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: '/restablecer.page.html',
  styleUrls: ['/restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  resetPasswordForm: FormGroup;
  emailValue: string = '';
  passValue: string = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private firestore: AngularFirestore,
    private authService: AuthService
    
  ) {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, 
    );
  }

  ngOnInit() {}

  async resetPassword() {
    if (this.resetPasswordForm.valid) {
      }
    try { 
      const usuarioFirebase = await this.authService.recoveryPassword(this.emailValue);
      const usuario = usuarioFirebase.usuario;

      if(usuario) {
        await this.firestore.collection('usuarios').doc(usuario.email).update({
          pass : this.passValue
          
        })
      }

    }  catch(error){

    }
    
  
}














