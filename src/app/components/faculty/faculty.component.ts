import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Faculty } from '../../models/faculty.model';
import { FadeInDirective } from '../../directives/fade-in.directive';

/**
 * CUSTOMIZATION POINT: Faculty/Team Section
 * - Update faculty.json with your teaching team members
 * - Replace faculty photos in assets/images/faculty/
 * - Modify roles, qualifications, and social links
 * - Optional: Hide this section if you're a solo tutor
 */

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css',
})
export class FacultyComponent implements OnInit {
  facultyMembers: Faculty[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getFaculty().subscribe((data) => {
      this.facultyMembers = data.faculty;
      // Map imageUrl to image and socialMedia to socialLinks for template compatibility
      this.facultyMembers = this.facultyMembers.map((member) => ({
        ...member,
        image: member.imageUrl || member.image,
        role: member.designation || member.role,
        socialLinks: member.socialMedia || member.socialLinks,
      }));
    });
  }

  getInitials(name: string): string {
    const names = name.trim().split(' ');
    if (names.length === 1) {
      return names[0].substring(0, 2).toUpperCase();
    }
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
  }
}
