import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export class LoginPageForm {
  private formBuilder: FormBuilder;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }
}
