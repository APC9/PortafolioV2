import { Component, inject } from '@angular/core';
import HomeComponent from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { ContactosComponent } from '../contactos/contactos.component';
import PortafolioComponent from '../portafolio/portafolio.component';
import { ScrollBackComponent } from '../../shared/scroll-back/scroll-back.component';
import { CommonModule, DOCUMENT, ViewportScroller } from '@angular/common';
import { Observable, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [ 
    CommonModule,
    HomeComponent, 
    AboutComponent, 
    DividerComponent,
    PortafolioComponent,
    ContactosComponent,
    ScrollBackComponent
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export default class PageComponent {

  private readonly document = inject(DOCUMENT);
  private readonly viewport = inject(ViewportScroller);

  readonly showScroll$: Observable<boolean> = fromEvent(
    this.document,
    'scroll'
  ).pipe(
    map(() => this.viewport.getScrollPosition()?.[1] > 0)
  );

  onScrollToTop(): void {
    this.viewport.scrollToPosition([0, 0]);
  }
}
