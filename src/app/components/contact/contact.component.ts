import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { SafePipe } from '../../pipes/safe.pipe';

/**
 * CUSTOMIZATION POINT: Contact Section
 * - Update contact information in tutor-profile.json
 * - Replace email, phone, address details
 * - Modify Google Maps embed URL
 * - Optionally integrate with email service (EmailJS, backend API)
 */

interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  course?: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, FadeInDirective, SafePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  contactInfo: any = null;

  formData: ContactForm = {
    name: '',
    email: '',
    phone: '',
    course: '',
    subject: '',
    message: '',
  };

  isSubmitting: boolean = false;
  submitSuccess: boolean = false;
  submitError: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTutorProfile().subscribe((data) => {
      this.contactInfo = {
        email: data.email,
        phone: data.phone,
        address: data.address,
        socialMedia: data.socialMedia,
      };
    });
  }

  onSubmit(): void {
    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    // CUSTOMIZATION: Integrate with your email service
    // Example: EmailJS, SendGrid, or your own backend API
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      this.isSubmitting = false;
      this.submitSuccess = true;

      // Reset form
      this.formData = {
        name: '',
        email: '',
        phone: '',
        course: '',
        subject: '',
        message: '',
      };

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }, 1500);
  }
}
