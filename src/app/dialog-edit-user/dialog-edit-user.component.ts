import { Component, inject } from '@angular/core';
import { MatDialogContent, MatDialogActions, MatDialogTitle, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgIf } from '@angular/common';
import { User } from '../../models/user.class';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogTitle, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule, MatProgressBarModule, NgIf, MatDatepickerModule],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  user: User | any = new User();
  userId: string | undefined | any;
  dateOfBirth: Date | any;
  loading = false;
  firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) {
  }


  async updateUser() {
    this.loading = true;
    if (this.userId) {
      await updateDoc(this.getUserDocRef(), this.user.toJSON())
        .then(() => {
          this.loading = false;
          this.dialogRef.close();
        });
    } else {
      alert('Could not save changes! Please try again later.');
    }
  }


  getUserDocRef() {
    return doc(this.firestore, 'users', this.userId);
  }

}