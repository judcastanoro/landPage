import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { LandpageRoutingModule } from './landpage-routing.module';
import { ProyectsComponent } from './proyects/proyects.component';
import { NbCardModule, NbStepperModule,
  NbAccordionModule,
  NbButtonModule,
  NbListModule,
  NbRouteTabsetModule,
  NbTabsetModule, NbUserModule, } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { LayoutComponent } from '../layout/layout.component';
import { Tab1Component, Tab2Component, TabsComponent } from '../layout/tabs/tabs.component';
import { StepperComponent } from '../layout/stepper/stepper.component';
import { ListComponent } from '../layout/list/list.component';
import { InfiniteListComponent } from '../layout/infinite-list/infinite-list.component';
import { NewsPostComponent } from '../layout/infinite-list/news-post/news-post.component';
import { NewsPostPlaceholderComponent } from '../layout/infinite-list/news-post-placeholder/news-post-placeholder.component';
import { AccordionComponent } from '../layout/accordion/accordion.component';
import { NewsService } from '../layout/news.service';


@NgModule({
  declarations: [
    ProyectsComponent,
    NewsPostPlaceholderComponent,
    NewsPostComponent,
  ],
  imports: [
    CommonModule,
    LandpageRoutingModule,
    NbCardModule,
    FormsModule,
    NbStepperModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    LayoutRoutingModule,
  ],
  providers: [
    NewsService,
  ],

})
export class LandpageModule { }
