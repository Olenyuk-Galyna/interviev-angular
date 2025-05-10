import { Routes } from '@angular/router';
import { AngularComponent } from './components/angular/angular.component';
import { HomeComponent } from './components/home/home.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { TypescriptComponent } from './components/typescript/typescript.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'typescript', component: TypescriptComponent },
  { path: '**', component: PageNotFoundComponent },
];
