import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router'; 
import { MatDialog } from '@angular/material/dialog';
import { CreateGeolocalitzationComponent } from '../create-geolocalitzation/create-geolocalitzation.component';



@Component({
  selector: 'app-geolocalitzation',
  imports: [CommonModule],
  templateUrl: './geolocalitzation.component.html',
  styleUrl: './geolocalitzation.component.css',
})
export class GeolocalitzationComponent implements OnInit {
  geolocalitzations: any[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getGeolocalitzations();
  }

  // Inicializa el formulario reactivo

  // Obtiene las geolocalizaciones desde el servicio
  getGeolocalitzations() {
    this.apiService.getAllGeolocalitzations().subscribe({
      next: (data) => {
        console.log('Geolocalitzations:', data);
        this.geolocalitzations = data;
      },
      error: (err) => {
        console.error('Error obteniendo las geolocalizaciones:', err);
      },
    });
  }



  onDeleteItem(id:string){
    if (confirm("¿Seguro que quieres eliminar este Item?")) {
      this.apiService.deleteGeolocalitzation(id).subscribe({
      next: (data) => {
        console.log('Geolocalitzation deleted: ', data);
        this.getGeolocalitzations(); // Actualiza la lista después de eliminar
      },
      error: (err) => {
        console.error('Error eliminando la geolocalización:', err);
      },
      });
    }
  }

  // Muestra los usuarios de una geolocalización específica
  showUsersOfGeolocalitzation(id: string, userWithOrders: string[]) {
    alert(`Has clicado al punto con id ${id} y tiene los siguientes usuarios: ${userWithOrders}`);
  }

  openGeolocalitzationModal() {
    const dialogRef = this.dialog.open(CreateGeolocalitzationComponent, {
      width: '500px', // Ajusta el ancho del modal
      height: '500px', // Ajusta la altura del modal automáticamente
      panelClass: 'custom-dialog-container' // Clase CSS personalizada para el modal
    });

    dialogRef.afterClosed()
        this.getGeolocalitzations(); // Actualiza la lista después de cerrar el modal si es necesario
  }
}