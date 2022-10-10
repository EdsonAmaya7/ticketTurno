import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.normalize.css','./app.component.css',]
})
export class AppComponent {
  registerForm !: FormGroup;
  title = 'ticketAngular';
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombre_completo : [null,[Validators.required, Validators.minLength(3)]],
      curp : [null, [Validators.required, Validators.pattern("/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/")]],
      nombre  : [null, [Validators.required]],
      apellido_paterno  : [null, [Validators.required, Validators.minLength(3)]],
      apellido_materno  : [null, [Validators.required, Validators.minLength(3)]],
      telefono  : [null, [Validators.required]],
      correo  : [null, [Validators.required]],
      asunto :  [null, [Validators.required]],
      municipio :  [null, [Validators.required]],
      nivel :  [null, [Validators.required]],
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
