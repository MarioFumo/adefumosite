import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
  imports: [CommonModule]
})
export class LightboxComponent {
  @Input() imageUrl: string | undefined;
  isVisible: boolean = false;

  openLightbox(imageUrl: string) {
    this.imageUrl = imageUrl;
    this.isVisible = true;
  }

  closeLightbox() {
    this.isVisible = false;
  }

  printImage() {
    const printWindow = window.open('', '_blank');
    printWindow?.document.write(`
      <html>
        <head><title>Print</title></head>
        <body>
          <img src="${this.imageUrl}" style="width: 100%; height: auto;">
        </body>
      </html>
    `);
    printWindow?.document.close();
    printWindow?.print();
  }
}
