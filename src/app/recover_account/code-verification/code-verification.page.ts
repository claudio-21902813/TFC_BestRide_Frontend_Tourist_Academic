import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CodeVerificationApiService } from './code-verification-api.service';
import { ResetPasswordModalPage } from './reset-password-modal/reset-password-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-introduzir-codigo',
  templateUrl: './code-verification.page.html',
  styleUrls: ['./code-verification.page.scss'],
})
export class CodeVerificationPage implements OnInit {
  ionicForm: FormGroup;

  registrationForm = this.formBuilder.group({
    code: ['', Validators.required],
    password: ['', Validators.required],
    password_repeat: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private codeVerificationApi: CodeVerificationApiService,
    private model_controller: ModalController
  ) {}

  ngOnInit() {}

  public submit(): void {
    const code = this.registrationForm.get('code').value;
    const pass = this.registrationForm.get('password').value;
    const pass_repeat = this.registrationForm.get('password_repeat').value;
    const email = localStorage.getItem('email');
    console.log(email);

    if (pass == pass_repeat) {
      this.codeVerificationApi.codeVerification(code, pass, email);
    }
  }

  public async close() {
    const closeModal: string = 'Modal Closed';
    await this.model_controller.dismiss(closeModal);
  }
}
