import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BioComponent } from './pages/bio/bio.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },                   // rotta di default
    { path: 'portfolio', component: PortfolioComponent },                   // rotta di default
    { path: 'contacts', component: ContactsComponent },                   // rotta di default
    { path: 'bio', component: BioComponent },                   // rotta di default
    { path: '**', component: PageNotFoundComponent }          // 404 fallback
];