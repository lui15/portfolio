import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
// Declaracion de las variables
  isActive1 = true;
  isActive2 = false;
  isActive3 = false;
  isActive4 = false;
  
  email = "lpichardosanchez2@gmail.com";

    // Método que se ejecuta cuando se hace clic en un botón
    toggleActive(buttonNumber: number): void {

      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
  
  
      if (buttonNumber === 1) {
        this.isActive1 = !this.isActive1;
      } else if (buttonNumber === 2) {
        this.isActive2 = !this.isActive2;
      } else if (buttonNumber === 3) {
        this.isActive3 = !this.isActive3;
      } else if (buttonNumber === 4) {
        this.isActive4 = !this.isActive4;
      }
    }
}
