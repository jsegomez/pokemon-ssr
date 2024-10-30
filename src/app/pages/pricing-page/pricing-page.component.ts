import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pricing-page.component.html',  
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingPageComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Pricing');    
    this.meta.updateTag({ name: 'description', content: 'Esta es mi pricing page' });
    this.meta.updateTag({ name: 'keywords', content: 'NodeJS, NestJS, Angular, TypeScript, JavaScript' });
  }
}
