import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  activeRoute: string = '';
  isMenuOpen: boolean = false; // Variable para controlar el estado del menú

  constructor(private router: Router) {}

  ngOnInit() {
    // Inicializa la ruta activa actual al cargar el componente
    this.activeRoute = this.router.url;
  }

  navigateTo(route: string) {
    // Cambia la ruta usando el Router sin recargar la página
    this.router.navigate([route]);

    // Actualiza la ruta activa
    this.activeRoute = route;
    // Eliminar menu
    this.isMenuOpen = false;
  }

  isActive(route: string): boolean {
    // Compara la ruta actual con la ruta seleccionada
    return this.activeRoute === route;
  }


   // Función para alternar el estado del menú
   toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
