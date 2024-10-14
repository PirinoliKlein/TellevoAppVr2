import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  conductorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.conductorForm = this.formBuilder.group({
      precio: ['', [Validators.required, Validators.min(1000), Validators.max(10000)]],
      capacidad: ['', [Validators.required, Validators.min(1), Validators.max(4)]]
    });
  }

  ngOnInit() {}

  get capacidadInvalid() {
    const capacidadControl = this.conductorForm.get('capacidad');
    return capacidadControl?.touched && capacidadControl.invalid;
  }

  get precioInvalid() {
    const precioControl = this.conductorForm.get('precio');
    return precioControl?.touched && precioControl.invalid;
  }

  get precioErrorMessage() {
    const precioControl = this.conductorForm.get('precio');
    if (precioControl?.errors?.['required']) {
      return 'El precio es requerido';
    }
    if (precioControl?.errors?.['min']) {
      return 'El precio debe ser al menos 1000';
    }
    if (precioControl?.errors?.['max']) {
      return 'El precio no puede exceder 10000';
    }
    return '';
  }

  get capacidadErrorMessage() {
    const capacidadControl = this.conductorForm.get('capacidad');
    if (capacidadControl?.errors?.['required']) {
      return 'La capacidad es requerida';
    }
    if (capacidadControl?.errors?.['min']) {
      return 'La capacidad debe ser al menos 1';
    }
    if (capacidadControl?.errors?.['max']) {
      return 'La capacidad no puede exceder 4';
    }
    return '';
  }

  onSubmit() {
    if (this.conductorForm.valid) {
      // Lógica para manejar el envío del formulario
      const formData = this.conductorForm.value;
      console.log('Formulario enviado', formData);
      this.router.navigate(['/detalle-chofer']);
    }
  }
}
