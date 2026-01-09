import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Course } from '../../models/course.model';
import { CourseFilterPipe } from '../../pipes/course-filter.pipe';
import { FadeInDirective } from '../../directives/fade-in.directive';

/**
 * CUSTOMIZATION POINT: Courses Section (was Portfolio/Projects)
 * - Update courses.json with your actual courses
 * - Replace course images in assets/images/courses/
 * - Modify course categories, pricing, duration
 * - Add enrollment links or registration forms
 */

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, CourseFilterPipe, FadeInDirective],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  categories: string[] = ['all'];
  selectedCategory: string = 'all';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCourses().subscribe((data) => {
      this.courses = data.courses.map((course) => ({
        ...course,
        image: course.imageUrl || course.image,
      }));
      this.extractCategories();
    });
  }

  private extractCategories(): void {
    const categorySet = new Set<string>();
    this.courses.forEach((course) => {
      const categories = Array.isArray(course.category) ? course.category : [course.category];
      categories.forEach((cat) => categorySet.add(cat));
    });
    this.categories = ['all', ...Array.from(categorySet)];
  }

  filterCourses(category: string): void {
    this.selectedCategory = category;
  }
}
