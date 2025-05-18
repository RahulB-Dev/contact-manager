import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService, public router: Router) { }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }
  editContact(id: number) {
    this.router.navigate(['/edit', id]);
  }
  deleteContact(id:number) {
    this.contactService.deleteContact(id);
    this.contacts = this.contactService.getContacts();
  }

}
