import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  styleUrls: ['./courses.component.scss'],
  template: `
    <section id="top" class="hero">
      <div class="hero-content">
        <h1 class="title">Course PriceList for<br/>
          <span class="brand"> IMMERSE & MOVE </span>
        </h1>
        <p class="subtitle">Your journey to mastering dance starts here!</p>
        <h3 class="subtitle">Let's Get Ready to Step!</h3>
        <div class="class-buttons">
          <button (click)="scrollTo('introduction')" class="glow-button orange">Introduction Courses - $5</button>
          <button (click)="scrollTo('beginner')" class="glow-button blue">Beginner Courses - $10</button>
          <button (click)="scrollTo('intermediate')" class="glow-button purple">Intermediate Courses - $15</button>
          <button (click)="scrollTo('advanced')" class="glow-button yellow">Advanced Courses - $20</button>
        </div>
      </div>
    </section>

    <section class="courses">
      <div class="grid">

        <div class="glow-card">
          <img src="ballet.png" alt="Ballet" class="glow-img" />

          <div class="glow-text">
            <h3>Ballet</h3>
            <p>Learn classical form, posture, and stage confidence across all levels.</p>
            <div class="class-buttons" style="align-items: center; justify-content: center;">
              <button class="glow-button orange" (click)="addToCart('Ballet', 'Introduction', 5)">Introduction</button>
              <button class="glow-button blue" (click)="addToCart('Ballet', 'Beginner', 10)">Beginner</button>
              <button class="glow-button purple" (click)="addToCart('Ballet', 'Intermediate', 15)">Intermediate</button>
              <button class="glow-button yellow" (click)="addToCart('Ballet', 'Advanced', 20)">Advanced</button>
            </div>
          </div>
        </div>

        <div class="glow-card">
          <img src="hiphop.png" alt="Hiphop" class="glow-img" />

          <div class="glow-text">
            <h3>Hiphop</h3>
            <p>Learn urban dance styles, rhythm, and self-expression across all levels.</p>
            <div class="class-buttons" style="align-items: center; justify-content: center;">
              <button class="glow-button orange" (click)="addToCart('Hiphop', 'Introduction', 5)">Introduction</button>
              <button class="glow-button blue" (click)="addToCart('Hiphop', 'Beginner', 10)">Beginner</button>
              <button class="glow-button purple" (click)="addToCart('Hiphop', 'Intermediate', 15)">Intermediate</button>
              <button class="glow-button yellow" (click)="addToCart('Hiphop', 'Advanced', 20)">Advanced</button>
            </div>
          </div>
        </div>

        <div class="glow-card">
          <img src="lyrical.png" alt="Lyrical" class="glow-img" />

          <div class="glow-text">
            <h3>Lyrical</h3>
            <p>Learn classical form, posture, and stage confidence across all levels.</p>
            <div class="class-buttons" style="align-items: center; justify-content: center;">
              <button class="glow-button orange" (click)="addToCart('Lyrical', 'Introduction', 5)">Introduction</button>
              <button class="glow-button blue" (click)="addToCart('Lyrical', 'Beginner', 10)">Beginner</button>
              <button class="glow-button purple" (click)="addToCart('Lyrical', 'Intermediate', 15)">Intermediate</button>
              <button class="glow-button yellow" (click)="addToCart('Lyrical', 'Advanced', 20)">Advanced</button>
            </div>
          </div>
        </div>

        <div class="glow-card">
          <img src="heels.png" alt="Heels" class="glow-img" />

          <div class="glow-text">
            <h3>Heels</h3>
            <p>Learn urban dance styles, rhythm, and self-expression across all levels.</p>
            <div class="class-buttons" style="align-items: center; justify-content: center;">
              <button class="glow-button orange" (click)="addToCart('Heels', 'Introduction', 5)">Introduction</button>
              <button class="glow-button blue" (click)="addToCart('Heels', 'Beginner', 10)">Beginner</button>
              <button class="glow-button purple" (click)="addToCart('Heels', 'Intermediate', 15)">Intermediate</button>
              <button class="glow-button yellow" (click)="addToCart('Heels', 'Advanced', 20)">Advanced</button>
            </div>
          </div>
        </div>

        <div class="glow-card">
          <img src="tap.png" alt="Tap" class="glow-img" />

          <div class="glow-text">
            <h3>Tap</h3>
            <p>Learn rhythm, timing, and coordination across all levels.</p>
            <div class="class-buttons" style="align-items: center; justify-content: center;">
              <button class="glow-button orange" (click)="addToCart('Tap', 'Introduction', 5)">Introduction</button>
              <button class="glow-button blue" (click)="addToCart('Tap', 'Beginner', 10)">Beginner</button>
              <button class="glow-button purple" (click)="addToCart('Tap', 'Intermediate', 15)">Intermediate</button>
              <button class="glow-button yellow" (click)="addToCart('Tap', 'Advanced', 20)">Advanced</button>
            </div>
          </div>
        </div>

        <div class="glow-card">
          <img src="jazz.png" alt="Jazz" class="glow-img" />

          <div class="glow-text">
            <h3>Jazz</h3>
            <p>Learn jazz dance techniques, improvisation, and performance skills across all levels.</p>
            <div class="class-buttons" style="align-items: center; justify-content: center;">
              <button class="glow-button orange" (click)="addToCart('Jazz', 'Introduction', 5)">Introduction</button>
              <button class="glow-button blue" (click)="addToCart('Jazz', 'Beginner', 10)">Beginner</button>
              <button class="glow-button purple" (click)="addToCart('Jazz', 'Intermediate', 15)">Intermediate</button>
              <button class="glow-button yellow" (click)="addToCart('Jazz', 'Advanced', 20)">Advanced</button>
            </div>
          </div>
        </div>

        <div class="glow-card">
          <img src="modern.png" alt="Modern" class="glow-img" />

          <div class="glow-text">
            <h3>Modern</h3>
            <p>Learn contemporary dance styles, expression, and creativity across all levels.</p>
            <div class="class-buttons" style="align-items: center; justify-content: center;">
              <button class="glow-button orange" (click)="addToCart('Modern', 'Introduction', 5)">Introduction</button>
              <button class="glow-button blue" (click)="addToCart('Modern', 'Beginner', 10)">Beginner</button>
              <button class="glow-button purple" (click)="addToCart('Modern', 'Intermediate', 15)">Intermediate</button>
              <button class="glow-button yellow" (click)="addToCart('Modern', 'Advanced', 20)">Advanced</button>
            </div>
          </div>
        </div>

        <div class="glow-card">
          <img src="afro.png" alt="Afro" class="glow-img" />

          <div class="glow-text">
            <h3>Afro</h3>
            <p>Learn African dance styles, rhythm, and self-expression across all levels.</p>
            <div class="class-buttons" style="align-items: center; justify-content: center;">
              <button class="glow-button orange" (click)="addToCart('Afro', 'Introduction', 5)">Introduction</button>
              <button class="glow-button blue" (click)="addToCart('Afro', 'Beginner', 10)">Beginner</button>
              <button class="glow-button purple" (click)="addToCart('Afro', 'Intermediate', 15)">Intermediate</button>
              <button class="glow-button yellow" (click)="addToCart('Afro', 'Advanced', 20)">Advanced</button>
            </div>
          </div>
        </div>
          

        </div>
      <!-- </div>
    </section> -->
  `
})
export class CoursesComponent {

  
  constructor(private cartService: CartService) {}

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  addToCart(course: string, level: string, cost: number): void {
  this.cartService.addToCart(course, level, cost);
  console.log('After adding:', this.cartService.getCart()); // 🔍 Debug: check if it's adding
}

ngOnInit(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

}
