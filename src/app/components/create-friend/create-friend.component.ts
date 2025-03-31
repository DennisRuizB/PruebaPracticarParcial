import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-create-friend',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './create-friend.component.html',
  styleUrl: './create-friend.component.css'
})
export class CreateFriendComponent {
  createFriendForm: FormGroup;

    constructor(
      private fb: FormBuilder,
      private apiService: ApiService,
      private dialogRef: MatDialogRef<CreateFriendComponent>
    ) {
      this.createFriendForm = this.fb.group({
        userId: ['', Validators.required],
        friendId: ['', Validators.required],
        status: ['', Validators.required]
      });
    }

    onSubmit() {
      if (this.createFriendForm.valid) {
        this.apiService.createFriendReq(this.createFriendForm.value).subscribe({
          next: (data) => {
            console.log('FriendReq creada:', data);
            this.dialogRef.close(true);
          },
          error: (err) => {
            console.error('Error creando el usuario', err);
            this.dialogRef.close(false);
          }
        });
      }
    }
    onCancel() {
      this.dialogRef.close(false);
    }
  

}
