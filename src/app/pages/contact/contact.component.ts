import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact');
    this.meta.updateTag({ name: 'description', content: 'Esta es mi contact page' });
    this.meta.updateTag({ name: 'keywords', content: 'NodeJS, NestJS, Angular, TypeScript, JavaScript' });
  }
}
