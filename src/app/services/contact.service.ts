import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
  
  ];
  getContacts(): Contact[] {
    return this.contacts;
  }
  getContactById(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }
  addContact(contact: Contact): void {
    contact.id = Date.now();
    this.contacts.push(contact);
  }
  updateContact(updated: Contact): void {
    const index = this.contacts.findIndex(c => c.id === updated.id);
    if (index !== -1) {
      this.contacts[index] = updated;
    }
  }
  deleteContact(id: number): void {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }
}
