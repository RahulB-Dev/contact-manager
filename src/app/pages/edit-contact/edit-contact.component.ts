import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-edit-contact',
  imports: [FormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent implements OnInit {
  contact!: Contact;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;

    const existing = this.contactService.getContactById(id);
    if (existing) {
      this.contact = { ...existing };
    }
  }

  updateContact() {
    this.contactService.updateContact(this.contact);
    this.router.navigate(['/']);
  }

  
}
