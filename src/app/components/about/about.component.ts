import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { CountUpDirective } from '../../directives/count-up.directive';
import { FadeInDirective } from '../../directives/fade-in.directive';

/**
 * CUSTOMIZATION POINT: About Section
 * - Update tutor-profile.json with your teaching experience, qualifications
 * - Replace profile image in assets/images/about.jpg
 * - Modify stats counters (years of experience, students taught, courses offered)
 */

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CountUpDirective, FadeInDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  tutorProfile: any = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTutorProfile().subscribe((data) => {
      this.tutorProfile = data;
    });
  }
}
