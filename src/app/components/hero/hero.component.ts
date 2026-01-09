import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { TutorProfile } from '../../models/tutor-profile.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  tutorProfile: TutorProfile | null = null;
  currentRoleIndex = 0;
  typedText = '';
  isDeleting = false;
  typingSpeed = 150;
  deletingSpeed = 75;
  pauseDelay = 2000;
  private typingInterval: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getTutorProfile().subscribe((profile) => {
      this.tutorProfile = {
        ...profile,
        roles: profile.typedRoles || profile.roles || [],
        fullName: profile.name,
        greeting: "Hello, I'm",
      };
      this.startTypingEffect();
    });
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
    }
  }

  private startTypingEffect() {
    if (!this.tutorProfile || !this.tutorProfile.roles || !this.tutorProfile.roles.length) return;

    const currentRole = this.tutorProfile.roles[this.currentRoleIndex];

    if (this.isDeleting) {
      this.typedText = currentRole.substring(0, this.typedText.length - 1);

      if (this.typedText.length === 0) {
        this.isDeleting = false;
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.tutorProfile.roles.length;
        this.typingInterval = setTimeout(() => this.startTypingEffect(), 500);
        return;
      }
    } else {
      this.typedText = currentRole.substring(0, this.typedText.length + 1);

      if (this.typedText === currentRole) {
        this.isDeleting = true;
        this.typingInterval = setTimeout(() => this.startTypingEffect(), this.pauseDelay);
        return;
      }
    }

    const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
    this.typingInterval = setTimeout(() => this.startTypingEffect(), speed);
  }
}
