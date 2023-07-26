import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './views/home/home.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { CodeSamplesComponent } from './views/code-samples/code-samples.component';
import { ExperienceComponent } from './views/experience/experience.component';

const routes: Routes = [ // sets up routes constant where you define your routes
    { path: '', component: HomeComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'code_samples', component: CodeSamplesComponent },
];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }