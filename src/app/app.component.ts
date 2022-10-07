import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm !: FormGroup;
  title = 'ticketAngular';
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombre_completo : [null, [Validators.required]],
      //     lastName :  [null,[Validators.required]],
      //     email :  [null,[Validators.required, Validators.email]],
      //     password :  [null,[Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    this.submitted = true;
    //stop the process if the form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      alert('success');
    }
  }
}
