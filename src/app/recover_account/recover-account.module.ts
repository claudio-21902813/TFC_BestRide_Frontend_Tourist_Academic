import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverAccountPageRoutingModule } from './recover-account-routing.module';

import { RecoverAccountPage } from './recover-account.page';
import { SharedModule } from '../shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoverAccountPageRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [RecoverAccountPage],
})
export class RecuperarContaPageModule {}
