import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact-list',
  imports: [CommonModule,MatButtonModule,MatCardModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  loading: boolean = true;

  constructor(private contactService: ContactService, public router: Router) { }

  ngOnInit(): void {
    this.getContactsFromApi();
  }
  getContactsFromApi() {
    this.contactService.getContacts().subscribe({
      next: (data) => {
        this.contacts = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching contacts:', error);
        this.loading = false;
      }
    });
  }
  editContact(id: number) {
    this.router.navigate(['/edit', id]);
  }
  deleteContact(id:number): void {
    this.contactService.deleteContact(id).subscribe({
      next: () => this.getContactsFromApi(),
      error: (error) => console.error('Error deleting contact:', error)
    });
    
  }

}
