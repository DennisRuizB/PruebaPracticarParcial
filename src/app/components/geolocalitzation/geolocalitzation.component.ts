import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-geolocalitzation',
  imports: [CommonModule],
  templateUrl: './geolocalitzation.component.html',
  styleUrl: './geolocalitzation.component.css'
})
export class GeolocalitzationComponent implements OnInit {
  geolocalitzations: any[]=[];

  constructor(private apiService: ApiService, private router: Router) {}
  ngOnInit(){
    this.getGeolocalitzations();
  }



  getGeolocalitzations(){
    this.apiService.getAllGeolocalitzations().subscribe({
      next: (data) => {
        console.log('Geolocalitzations:', data);
        this.geolocalitzations=data;
      },
      error: (err) => {
        console.error('Error activando el usuario', err);
      }
  });
  }

  showUsersOfGeolocalitzation(id: string, userWithOrders: string[]){
    alert(`Has clicado al punto con id ${id} y tiene los siguientes users: ${userWithOrders}`);

  }
  

}

