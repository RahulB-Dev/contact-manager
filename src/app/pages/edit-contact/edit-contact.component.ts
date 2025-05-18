import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-contact',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent implements OnInit {
  contact!: Contact;
  loading: boolean = true;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;

   this.contactService.getContactById(id).subscribe({
      next: (data) => {
        this.contact = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching contact:', error);
        this.loading = false;
      }
    });
  }

updateContact() {
  this.contactService.updateContact(this.contact).subscribe({
    next: () => {
      this.router.navigate(['/']);
    },
    error: (error) => {
      console.error('Error updating contact:', error);
    }
  });
}
}
