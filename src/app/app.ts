import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { ServicesComponent } from './components/services/services.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

/**
 * CUSTOMIZATION GUIDE
 *
 * Main App Component - This is the root component that brings together all sections
 *
 * To customize your tutor website:
 * 1. Update JSON files in src/assets/data/ with your information
 * 2. Replace images in src/assets/images/ with your photos
 * 3. Modify colors in component CSS files (look for CUSTOMIZATION comments)
 * 4. Update contact.component.ts to integrate with email service
 * 5. Adjust section visibility by commenting out unwanted components
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SubjectsComponent,
    ServicesComponent,
    CoursesComponent,
    FacultyComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent implements OnInit {
  title = 'ProMan Tutor Portfolio';
  isLoading = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Hide spinner after page load
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.isLoading = false;
      }, 500);

      // Back to top button logic
      this.initBackToTop();
    }
  }

  private initBackToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      const backToTop = document.querySelector('.back-to-top');

      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          backToTop?.classList.add('show');
        } else {
          backToTop?.classList.remove('show');
        }
      });

      backToTop?.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }
}
