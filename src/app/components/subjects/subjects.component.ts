import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Subject } from '../../models/subject.model';
import { FadeInDirective } from '../../directives/fade-in.directive';

/**
 * CUSTOMIZATION POINT: Subjects/Skills Section
 * - Update subjects.json with your teaching subjects
 * - Adjust proficiency levels (0-100)
 * - Add/remove subjects as needed
 * - Modify subject icons (FontAwesome classes)
 */

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css',
})
export class SubjectsComponent implements OnInit {
  subjects: Subject[] = [];
  activeTab: 'subjects' | 'experience' = 'subjects';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getSubjects().subscribe((data) => {
      this.subjects = data.subjects;
    });
  }

  setActiveTab(tab: 'subjects' | 'experience'): void {
    this.activeTab = tab;
  }
}
