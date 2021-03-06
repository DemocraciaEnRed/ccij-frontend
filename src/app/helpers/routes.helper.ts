import { Routes } from '@angular/router';
import { MainComponent } from '../pages/main/main.component';
import { ProjectViewComponent } from '../pages/project-view/project-view.component';
// import { FullListComponent } from '../pages/full-list/full-list.component';
import { PoliticianSliderComponent } from '../components/politician-slider/politician-slider.component';
import { FaqsComponent } from '../pages/faqs/faqs.component';

export const AppRoutes = [
    { path: '', pathMatch: 'full', component: MainComponent },
    { path: "proyecto/:id", component: ProjectViewComponent },
    { path: "proyecto/:id", component: PoliticianSliderComponent,outlet:'comunicaciones' },

    { path: "faqs", component: FaqsComponent },
    // { path: "lista/:id", component: FullListComponent },
    { path: '**', redirectTo: '' }
];