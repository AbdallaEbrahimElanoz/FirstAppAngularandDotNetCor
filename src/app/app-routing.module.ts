import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { CategroyComponent } from './categroy/categroy.component';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo:'',pathMatch:'full' },
  { path: 'article', component: ArticleComponent,pathMatch:'full' },
  { path: 'categroy', component: CategroyComponent,pathMatch:'full'},
  { path: 'login', component: LoginComponent,pathMatch:'full'},
  { path: 'client', component:ClientComponent,pathMatch:'full' },
  { path: '**', component:PageNotFoundComponent,pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
