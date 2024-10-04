import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Owner } from '../../../models/owner.model';
import { RegistrationService } from '../../../services/registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  submitted = false;
  registrationMessage: string = '';  // To store registration messages
  registrationError: string = '';    // To store error message
  registrationCompleted: boolean = false;  // To indicate completion of the process, might change

  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      vatNumber: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Getter for easy access to form controls
  get f() { return this.registrationForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    // Creating an Owner object from the form values
    const ownerData: Owner = {
        vatNumber: this.registrationForm.value.vatNumber,
        name: this.registrationForm.value.name,
        surName: this.registrationForm.value.surname,
        address: this.registrationForm.value.address,
        phoneNumber: this.registrationForm.value.phoneNumber,
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password,
        ownerId: 0,
        username: '',
        propertyList: []
    };

    // Subscribe to the registration service
    this.registrationService.register(ownerData).subscribe({
      next: (response: { message: string; }) => {
        console.log('Registration successful:', response);
        this.registrationMessage = response.message; 
      },
      error: (error: any) => {
        console.error('Registration failed:', error);
        this.registrationError = 'Registration failed. Please try again.'; 
      },
      complete: () => {
        console.log('Registration process completed.');
        this.registrationCompleted = true; //  true when completed
      }
    });
  }
}
