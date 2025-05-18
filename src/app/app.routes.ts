import { Routes } from '@angular/router';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';


export const routes: Routes = [
    { path: '', component: ContactListComponent },
    { path: 'add', component: AddContactComponent },
    { path: 'edit/:id', component: EditContactComponent},
];
