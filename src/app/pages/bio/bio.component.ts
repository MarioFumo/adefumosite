import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-bio',
  imports: [SidebarComponent],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss'
})
export class BioComponent {
 bioText="Ciao mi chiamo ade Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}
