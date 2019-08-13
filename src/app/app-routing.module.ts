import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page-1/page-1.component';
import { Page3Component } from './page-3/page-3.component';
import { Page2Component } from './page-2/page-2.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'page1',
    },
    {
        path: 'page1',
        component: Page1Component,
    },
    {
        path: 'page2',
        component: Page2Component,
    },
    {
        path: 'page3',
        component: Page3Component,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
