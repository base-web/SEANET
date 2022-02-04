import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRecipientComponent } from './new-recipient/new-recipient.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';


const routes: Routes = [
  { path: '', component: NewRecipientComponent }
];

@NgModule({
  declarations: [
    NewRecipientComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
  ]
})
export class ConnectModule { }
