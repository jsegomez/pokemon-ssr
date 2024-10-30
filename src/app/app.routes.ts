import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'about',
        loadComponent: () => import('./pages/about-page/about-page.component').then(c => c.AboutPageComponent)
    },
    {
        path: 'pricing',
        loadComponent: () => import('./pages/pricing-page/pricing-page.component').then(c => c.PricingPageComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent)
    },
    {
        path: '**',
        redirectTo: 'about'
    }
];
