import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TutorProfile } from '../models/tutor-profile.model';
import { Subject } from '../models/subject.model';
import { Service } from '../models/service.model';
import { Course } from '../models/course.model';
import { Faculty } from '../models/faculty.model';
import { Testimonial } from '../models/testimonial.model';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly basePath = 'assets/data';

  constructor(private http: HttpClient) {}

  getTutorProfile(): Observable<TutorProfile> {
    return this.http.get<TutorProfile>(`${this.basePath}/tutor-profile.json`);
  }

  getSubjects(): Observable<{ subjects: Subject[] }> {
    return this.http.get<{ subjects: Subject[] }>(`${this.basePath}/subjects.json`);
  }

  getServices(): Observable<{ services: Service[] }> {
    return this.http.get<{ services: Service[] }>(`${this.basePath}/services.json`);
  }

  getCourses(): Observable<{ courses: Course[]; categories: any[] }> {
    return this.http.get<{ courses: Course[]; categories: any[] }>(`${this.basePath}/courses.json`);
  }

  getFaculty(): Observable<{ faculty: Faculty[] }> {
    return this.http.get<{ faculty: Faculty[] }>(`${this.basePath}/faculty.json`);
  }

  getTestimonials(): Observable<{ testimonials: Testimonial[] }> {
    return this.http.get<{ testimonials: Testimonial[] }>(`${this.basePath}/testimonials.json`);
  }

  getExperience(): Observable<{ experience: Experience[]; education: Experience[] }> {
    return this.http.get<{ experience: Experience[]; education: Experience[] }>(
      `${this.basePath}/experience.json`
    );
  }
}
