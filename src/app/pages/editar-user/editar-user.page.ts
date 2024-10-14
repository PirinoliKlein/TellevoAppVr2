import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/folder/interfaces/usuario';  



@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.page.html',
  styleUrls: ['./editar-user.page.scss'],
})
export class EditUserPage implements OnInit {
  uid: string = '';
  editUserForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private firestore: AngularFirestore,
    private formBuilder: FormBuilder,
  ) {
    this.editUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required]],
      pass: ['', [Validators.required]],
      tipo: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.uid = this.activatedRoute.snapshot.paramMap.get('uid') as string;
    this.loadData();
  }

  loadData() {
    this.firestore.collection('usuarios').doc(this.uid).get().toPromise()
    .then((user) => {
      if (user) {
        const userData = user?.data() as Usuario;
        this.editUserForm.patchValue({
          email: userData.email,
          nombre: '',
          tipo: userData.tipo,
          pass: userData.pass
        })
      }
    })
    .catch(error => {
      console.error('Error al cargar datos del usuario:', error);
    });
  }

  async actualizarUser() {
    if (this.editUserForm.valid) {
      await this.firestore.collection('usuarios').doc(this.uid).update(this.editUserForm.value)
      .then(async () => {
       
          
      })
      .catch(error=>{

      });
    }
  }
}
