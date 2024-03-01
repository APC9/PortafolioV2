import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-scroll-back',
  standalone: true,
  imports: [],
  templateUrl: './scroll-back.component.html',
  styleUrl: './scroll-back.component.css'
})
export class ScrollBackComponent {

  @Output() scrollToTop = new EventEmitter<void>();

  onScrollToTop(): void {
    this.scrollToTop.emit();
  }
}
