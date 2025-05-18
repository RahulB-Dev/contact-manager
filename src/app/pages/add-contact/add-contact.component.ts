import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { MatButtonModule } from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-add-contact',
  imports: [FormsModule,MatButtonModule,MatInputModule,MatFormFieldModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
contact: Contact = { id: 0, name: '', email: '', phone: '' };

constructor(private contactService: ContactService, public router: Router) { }
saveContact(): void {
  this.contactService.addContact(this.contact).subscribe({
    next: () => {
  this.router.navigate(['/']);
    },
    error: (error) => {
      console.error('Error adding contact:', error);
    }
  });
}
}
