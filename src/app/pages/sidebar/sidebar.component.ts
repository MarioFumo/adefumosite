import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isOpen = false;  // Variabile che tiene traccia dello stato del menu

  // Funzione per aprire/chiudere il menu
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
