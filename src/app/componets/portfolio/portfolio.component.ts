import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {


    // Variable de imagenes 
    currentImageIndex: number = 0;
    totalImages: number = 6; // Total de imágenes
  
  
  
  
    // Metodo de cambiar las imagenes
  
    changeImage(direction: string): void {
      if (direction === 'right') {
        // Mover al siguiente índice (circular al principio)
        this.currentImageIndex = (this.currentImageIndex + 1) % this.totalImages;
      } else if (direction === 'left') {
        // Mover al índice anterior (circular al final)
        this.currentImageIndex = (this.currentImageIndex - 1 + this.totalImages) % this.totalImages;
      }
    }
    
}
