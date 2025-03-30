import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-geolocalitzation',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './create-geolocalitzation.component.html',
  styleUrl: './create-geolocalitzation.component.css'
})
export class CreateGeolocalitzationComponent {
  geolocalizationForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<CreateGeolocalitzationComponent>
  ) {
    this.geolocalizationForm = this.fb.group({
      shopName: ['', Validators.required],
      positionX: ['', [Validators.required, Validators.pattern(/^-?\d+(\.\d+)?$/)]],
      positionY: ['', [Validators.required, Validators.pattern(/^-?\d+(\.\d+)?$/)]],
    });
  }
  // Maneja el envío del formulario
  onSubmit() {
    if (this.geolocalizationForm.valid) {
      const newGeolocalization = this.geolocalizationForm.value;
      console.log('Nueva Geolocalización:', newGeolocalization);
      // Aquí puedes agregar la lógica para enviar los datos al backend
      this.apiService.postGeolocalitzation(newGeolocalization).subscribe({
        next: (data) => {
          console.log('newGeolocalitzation: ', data);
        },
        error: (err) => {
          console.error('Error posteando la geolocalizaciones:', err);
        },
      })
      this.geolocalizationForm.reset(); // Reinicia el formulario
      this.dialogRef.close();
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

}
