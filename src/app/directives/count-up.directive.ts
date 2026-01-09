import { Directive, ElementRef, Input, OnInit, Renderer2, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements OnInit, OnDestroy {
  @Input() appCountUp: number = 0; // Changed from targetValue to appCountUp
  @Input() duration: number = 2000;

  private observer: IntersectionObserver | null = null;
  private hasAnimated = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.animateCount();
            this.hasAnimated = true;
          }
        });
      },
      { threshold: 0.5 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private animateCount(): void {
    const increment = this.appCountUp / (this.duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= this.appCountUp) {
        current = this.appCountUp;
        clearInterval(timer);
      }
      this.renderer.setProperty(
        this.el.nativeElement,
        'textContent',
        Math.floor(current).toString()
      );
    }, 16);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
