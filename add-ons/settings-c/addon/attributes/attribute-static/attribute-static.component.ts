import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-attribute-static',
  templateUrl: './attribute-static.component.html',
  styleUrl: './attribute-static.component.scss'
})
export class AttributeStaticComponent {
/// video
videoId: string = 'bF-tLy_L3_s'; // Replace with your video ID
videoUrl: SafeResourceUrl;
  constructor(
    public titleService: Title,
    private sanitizer: DomSanitizer
  ) { 
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoId}`);
    titleService.setTitle('Related Products');
  }
}
