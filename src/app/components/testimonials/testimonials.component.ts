import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Testimonial } from '../../models/testimonial.model';
import { FadeInDirective } from '../../directives/fade-in.directive';

/**
 * CUSTOMIZATION POINT: Testimonials Section
 * - Update testimonials.json with real student/parent reviews
 * - Replace student photos in assets/images/testimonials/
 * - Add more testimonials as you receive them
 * - Keep testimonials authentic and genuine
 */

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];
  currentIndex: number = 0;

  constructor(private dataService: DataService, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.dataService.getTestimonials().subscribe((data) => {
      this.testimonials = data.testimonials.map((t) => ({
        ...t,
        image: t.imageUrl || t.image,
        name: t.studentName || t.name,
        review: t.comment || t.review,
        relation: t.parentName || t.course || t.relation,
        rating: t.rating || 5,
      }));
      this.startAutoSlide();
    });
  }

  private startAutoSlide(): void {
    if (isPlatformBrowser(this.platformId)) {
      setInterval(() => {
        this.next();
      }, 5000);
    }
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  previous(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  getInitials(name: string): string {
    if (!name) return '';
    const names = name.trim().split(' ');
    if (names.length === 1) {
      return names[0].substring(0, 2).toUpperCase();
    }
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
  }
}
