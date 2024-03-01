import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [],
  template: `
  <span id={{id}} class="relative flex justify-center my-10">
  <div
    class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
  ></div>

  <span class="relative bg-white px-6">
    <h2 class="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
      {{title}}
    </h2>
  </span>
</span>
  `,
  styleUrl: './divider.component.css'
})
export class DividerComponent {

  @Input() title: string = '';
  @Input() id: string = '';
}
