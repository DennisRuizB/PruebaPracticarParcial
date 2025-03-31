import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { group } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CreateFriendComponent } from '../create-friend/create-friend.component';


@Component({
  selector: 'app-friend',
  imports: [CommonModule],
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.css'
})
export class FriendComponent implements OnInit {
  friends: any[]=[];
  constructor(private apiService: ApiService, private router: Router, private dialog: MatDialog){}
  
  
  ngOnInit(): void {
    this.getAllFriends(); 
  }


  getAllFriends(){
    this.apiService.getAllFriends().subscribe({
      next: (data) => {
        this.friends = data;
        console.log('Friends cargados:', this.friends);
    },
    error: (err) => {
      console.error('Error obteniendo los datos de Friends', err);
    }
});}




  goHome(){
    this.router.navigate(['/home']);
  }

  statusRequest(id: string, status: string){

    this.apiService.updateFriendById(id,{status:`${status}`}).subscribe({
      next: (data) => {
        console.log('FriendReq updated:', data);
        this.getAllFriends();
    },
    error: (err) => {
      console.error('Error actualizando los datos de Friends', err);
    }
  });}

  deleteRequest(id:string){
    this.apiService.deleteFriendById(id).subscribe({
      next: (data) => {
        console.log('FriendReq deleted:', data);
        this.getAllFriends();
    },
    error: (err) => {
      console.error('Error borrando los datos de Friends', err);
    }
  });
  }

    openCreateFriendModal() {
      const dialogRef = this.dialog.open(CreateFriendComponent, {
        width: 'auto', // Ajusta el ancho del modal
        height: 'auto', // Ajusta la altura del modal automáticamente
        panelClass: 'custom-dialog-container' // Clase CSS personalizada para el modal
      });
        // Escuchar cuando el diálogo se cierra
    dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      // Si el resultado es válido, recargar la lista de amigos
      this.getAllFriends();
    }
  });

      
    }

}
