import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private storageKey = 'contacts';
 constructor() { 
  this.initializeContacts();
 }
  private contacts: Contact[] = [];
  private initializeContacts(): void {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      this.contacts = JSON.parse(stored);
    }
    else {
      this.contacts = [];
    }
  }
  private saveContacts(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.contacts));
  }
  getContacts(): Contact[] {
    return this.contacts;
  }
  getContactById(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }
  addContact(contact: Contact): void {
    contact.id = Date.now();
    this.contacts.push(contact);
    this.saveContacts();
  }
  updateContact(updated: Contact): void {
    const index = this.contacts.findIndex(c => c.id === updated.id);
    if (index !== -1) {
      this.contacts[index] = updated;
      this.saveContacts();
    }
  }
  deleteContact(id: number): void {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    this.saveContacts();
  }
}
