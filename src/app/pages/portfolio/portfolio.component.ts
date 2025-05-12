import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { LightboxComponent } from "../../components/lightbox/lightbox.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [SidebarComponent, LightboxComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  images = [
    { url: 'https://www.icoloridelcaribe.it/6654-large_default/quadro-con-fiori-tulipani-banchi.jpg', title: 'Illustrazione 1' },
    { url: 'https://www.artedalmondo.eu/media/catalog/product/cache/849f43f3b7fa03a4db3486df2521d36c/a/s/as459x1.jpg', title: 'Illustrazione 2' },
    { url: 'https://www.artedalmondo.eu/media/catalog/product/cache/849f43f3b7fa03a4db3486df2521d36c/a/s/as459x1.jpg', title: 'Illustrazione 3' }
  ];
}
