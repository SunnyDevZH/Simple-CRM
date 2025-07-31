import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users$: Observable<any[]>;
  userCount: number = 0;
  lastUsers: any[] = [];
  lastUpdate: Date | null = null; // NEU

  constructor(private firestore: Firestore) {
    const usersCollection = collection(this.firestore, 'users');
    this.users$ = collectionData(usersCollection, { idField: 'id' });
  }

  ngOnInit(): void {
    this.users$.subscribe(users => {
      this.userCount = users.length;
      this.lastUsers = users.slice(-5).reverse();
      this.lastUpdate = new Date(); // NEU
    });
  }
}
