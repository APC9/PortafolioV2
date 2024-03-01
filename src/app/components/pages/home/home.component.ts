import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from "ngx-lottie";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

  options: AnimationOptions = {
    path: "/assets/img/astro.json"
  };

}
