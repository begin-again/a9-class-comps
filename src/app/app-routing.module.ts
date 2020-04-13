import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lazyLoadElements = (): any => import('./elements/elements.module').then(m => m.ElementsModule);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lazyLoadCollections = (): any => import('./collections/collections.module').then(m => m.CollectionsModule);

const routes: Routes = [
  {path: 'elements', loadChildren: lazyLoadElements},
  {path: 'collections', loadChildren: lazyLoadCollections},
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
