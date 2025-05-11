import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [SidebarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  imageUrls: string[] = [
    'https://www.artedalmondo.eu/media/catalog/product/cache/849f43f3b7fa03a4db3486df2521d36c/a/s/as459x1.jpg',
    'https://www.icoloridelcaribe.it/6654-large_default/quadro-con-fiori-tulipani-banchi.jpg',
    'https://www.icoloridelcaribe.it/6643-large_default/mik-dipinti-con-fiori.jpg',
    'https://www.arredimurali.it/wp-content/uploads/2019/11/Quadri-moderni-Van-Gogh-3-tele.jpg'
  ];

}
