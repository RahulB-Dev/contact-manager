import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';


@Component({
  selector: 'app-add-contact',
  imports: [FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
contact: Contact = { id: 0, name: '', email: '', phone: '' };

constructor(private contactService: ContactService, public router: Router) { }
saveContact() {
  this.contactService.addContact(this.contact);
  this.router.navigate(['/']);
}
}
