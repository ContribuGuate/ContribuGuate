import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { ResourcesComponent } from './resources/resources.component';
import { FaqComponent } from './faq/faq.component';
import { EventsComponent } from './events/events.component';
import { NewsComponent } from './news/news.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LandingComponent },
        { path: 'resources', component: ResourcesComponent },
        { path: 'faq', component: FaqComponent },
        { path: 'events', component: EventsComponent},
        { path: 'news', component: NewsComponent},
        { path: 'blog', component: BlogComponent}
    ])],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
