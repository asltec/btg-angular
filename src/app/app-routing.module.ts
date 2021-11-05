import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  }, {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }, {
    path: 'marvel-character',
    loadChildren: () => import('./marvel-character/marvel-character.module').then(m => m.MarvelCharacterModule)
  }, {
    path: 'marvel-cosmics',
    loadChildren: () => import('./marvel-cosmics/marvel-cosmics.module').then(m => m.MarvelCosmicsModule)
  }, {
    path: 'marvel-series',
    loadChildren: () => import('./marvel-series/marvel-series.module').then(m => m.MarvelSeriesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
