import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { CodeSamplesComponent } from './views/code-samples/code-samples.component';
import { NavbarComponent } from './blocks/navbar/navbar.component';
import { FooterComponent } from './blocks/footer/footer.component';
import { NavbarLinkComponent } from './blocks/navbar-link/navbar-link.component';
import { TyperComponent } from './code-samples/typer/typer.component';
import { DynumberComponent } from './code-samples/dynumber/dynumber.component';
import { PortfolioItemComponent } from './blocks/portfolio-item/portfolio-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ExperienceComponent,
    CodeSamplesComponent,
    NavbarComponent,
    FooterComponent,
    NavbarLinkComponent,
    TyperComponent,
    DynumberComponent,
    PortfolioItemComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
