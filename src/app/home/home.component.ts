import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  template: `
    <section class="hero">
      <div class="hero-content">
          <h1 class="title">Welcome to <br/>
             <span class = "brand"> IMMERSE & MOVE </span> </h1>
          <p class="subtitle">Your journey to mastering dance starts here!</p>
          <h3 class="subtitle">Let's Get Ready to Step!</h3>
          <div class="class-buttons">
            <button (click)="scrollTo('online-classes')" class="glow-button orange">Online Classes</button>
            <button (click)="scrollTo('event-search')" class="glow-button blue"> Find Events</button>
          </div>
          </div>

         </section>

<section class="mission-content">
      <div class="glow-box image-left">
        <img src="blue.png" alt="Mission Image" class="glow-img" />
      <div class="glow-box1">
          <h2 style="color: #07c3ed;">IMMERSE & MOVE MISSION</h2>
          <p>Our mission is to empower individuals through dance education and meaningful community engagement.</p>
          <p>We believe dance is a tool for self-expression, healing, and transformation — and everyone deserves the chance to move freely and confidently.</p>
        </div>
      </div>

      <div class="glow-box image-right">
        <img src='pink.png' alt="Mission Image" class="glow-img" />
        <div class="glow-box2">
          <h2 style="color: #07c3ed;">OUR IMPACT</h2>
          <p>MOVE has reached dancers across <strong>20+ cities</strong>, hosted <strong>50+ community events</strong>, and led <strong>hundreds of online classes</strong>.</p>
          <p>From beginners to professionals, our programs have built a diverse, supportive space where everyone feels seen, valued, and inspired.</p>
        </div>
      </div>

      <div class="glow-box image-left">
        <img src='orange.png' alt="Mission Image" class="glow-img" />
        <div class="glow-box3">
          <h2 style="color: #07c3ed;">WHY US?</h2>
          <p>IMMERSE & MOVE is more than a platform — it’s a growing movement.</p>
          <p>Led by artists and fueled by community, we combine high-quality instruction with a culture of inclusivity, creativity, and fun. Whether you're learning at home or joining an event, IMMERSE & MOVE meets you where you are.</p>
        </div>
      </div>
  
          
    </section>
   
     <div id="online-classes" class="section-fade"></div>
    



    <section class=online-section>
      <h1 class="section-title">Synopsis Of Our Online Classes</h1>
      <h2 class="section-description">SIGN IN TO ACCESS </h2>
      <p class="section-description"> Join our vibrant community of dancers and instructors from around the world. Whether you're a beginner or an experienced dancer, we have classes that fit your style and skill level.</p>
      <p class="section-description"> Here is a synopsis of the online classes offered by MOVE:</p>
      <h1 class="section-subtitle"> Catering to All Levels & A Variety of Styles</h1>
    <div class="online-class-levels">

    <div class="level-card">
        <h2>Introduction</h2>
        <p>Perfect for those new to dance or looking to build confidence.</p>
      </div>

      <div class="level-card">
        <h2>Beginner</h2>
        <p>Perfect for those with little to no dance experience.</p>
      </div>

      <div class="level-card">
        <h2>Intermediate</h2>
        <p>For dancers with some experience ready to refine their skills.</p>
      </div>

      <div class="level-card">
        <h2>Advanced</h2>
        <p>Challenging classes for seasoned dancers to push their limits.</p>
      </div>

      </div>
       
      <div class="online-class-grid">

        <div class="online-class-card">
          <img src="ballet.png" alt="Ballet Class" />
          <h3>Ballet</h3>
        </div>

        <div class="online-class-card">
          <img src="hiphop.png" alt="HipHop Class" />
          <h3>HipHop</h3>
        </div>

        <div class="online-class-card">
          <img src="lyrical.png" alt="Ballet Class" />
          <h3>Contemporary/Lyrical</h3>
        </div>

        <div class="online-class-card">
          <img src="heels.png" alt="Heels Class" />
          <h3>Heels</h3>
        </div>

         <div class="online-class-card">
          <img src="tap.png" alt="Tap Class" />
          <h3>Tap</h3>
        </div>

        <div class="online-class-card">
          <img src="jazz.png" alt="Ballet Class" />
          <h3>Jazz</h3>
        </div>

        <div class="online-class-card">
          <img src="modern.png" alt="Modern Class" />
          <h3>Modern</h3>
        </div>

          <div class="online-class-card">
          <img src="afro.png" alt="Afro Class" />
          <h3>Afro</h3>
        </div>

      </div>

      
</section>


 <div id="event-search" class="section-fade"></div>



      <section class="events-section">
      <h1 class="section-title" style="color:#2b84ea">Search For Dance Events Below</h1>
      <h2 class="section-description"> Enter your preferred location in the search bar </h2>

     
   
        <div class="gcse-search"></div>
     


    </section>







  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  location: string = '';

  ngAfterViewInit(): void {
    const cx = '077df47ec1c4e4f75'; 
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://cse.google.com/cse.js?cx=${cx}`;
    document.body.appendChild(script);
  }

    scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


}





  

