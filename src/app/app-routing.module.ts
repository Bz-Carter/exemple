import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DirectPageComponent } from './pages/direct-page/direct-page.component';
import { DonatePageComponent } from './pages/donate-page/donate-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EventsPageComponent } from './pages/medias/events-page/events-page.component';
import { GalleriePhotoPageComponent } from './pages/medias/gallerie-photo-page/gallerie-photo-page.component';
import { GallerieVideoPageComponent } from './pages/medias/gallerie-video-page/gallerie-video-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'medias-des-evenements', component: EventsPageComponent },
  { path: 'gallerie-photos', component: GalleriePhotoPageComponent },
  { path: 'gallerie-videos', component: GallerieVideoPageComponent },
  { path: 'direct', component: DirectPageComponent },
  { path: 'articles', component: ArticlesPageComponent },
  { path: 'a-propos', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'faire-un-don', component: DonatePageComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'page-not-found' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }