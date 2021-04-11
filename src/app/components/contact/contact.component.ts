import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  submitted: boolean;
  success: boolean;
  emailPattern = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$';
  subjectPrefix: string;

  constructor() { }

 
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required)
    });
  }


  // onSubmit() {
  //   this.submitted = true;

  //   if (this.form.valid) {
  //     this.http
  //       .post('https://formspree.io/your@email.com', {
  //         name: this.form.value.name,
  //         _subject: `${this.subjectPrefix}${this.form.value.subject}`,
  //         email: this.form.value.email,
  //         message: this.form.value.message
  //       })
  //       .map(res => console.log(res.json()))
  //       .subscribe(
  //         success => console.log('success'),
  //         error => console.log('error')
  //       );
  //   }

}
