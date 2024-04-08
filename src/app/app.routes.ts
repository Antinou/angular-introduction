import { Routes } from '@angular/router';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { ComponentForDirectiveExampleComponent } from './components/component-for-directive-example/component-for-directive-example.component';
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';
import { TemplateDrivenFormExampleComponent } from './components/template-driven-form-example/template-driven-form-example.component';
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';


export const routes: Routes = [
    {path: 'for-directive-example', component: ComponentForDirectiveExampleComponent},
    {path: 'component-input-example', component: ComponentInputExampleComponent},
    {path: 'event-bind-example', component: EventBindExampleComponent},
    {path: '', component: WelcomeComponent},
    {path: 'simple-datatable-example', component: SimpleDatatableExampleComponent},
    {path: 'component-output-example', component: ComponentOutputExampleComponent},
    {path: 'template-driven-form-example', component: TemplateDrivenFormExampleComponent},
    {path: 'reactive-form-example', component: ReactiveFormExampleComponent},

    
];
