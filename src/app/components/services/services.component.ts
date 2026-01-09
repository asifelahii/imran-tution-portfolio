import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Service } from '../../models/service.model';
import { FadeInDirective } from '../../directives/fade-in.directive';

/**
 * CUSTOMIZATION POINT: Services Section
 * - Update services.json with your tutoring services
 * - Modify service icons, titles, descriptions
 * - Add pricing information if needed
 * - Customize service categories
 */

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getServices().subscribe((data) => {
      this.services = data.services;
    });
  }
}
