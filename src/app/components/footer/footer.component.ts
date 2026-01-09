import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * CUSTOMIZATION POINT: Footer
 * - Update copyright year and name
 * - Modify footer links
 * - Add privacy policy, terms of service links
 */

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  // CUSTOMIZATION: Update with your name/business name
  tutorName: string = 'Al-Imran';
}
