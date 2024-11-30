import { Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { ServicesComponent } from './componets/services/services.component';
import { ResumeComponent } from './componets/resume/resume.component';
import { PortfolioComponent } from './componets/portfolio/portfolio.component';
import { ContactComponent } from './componets/contact/contact.component';

export const routes: Routes = [

    {path:'', component: HomeComponent},
    {path: 'home',component: HomeComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo:'home', pathMatch:'full'}

];
