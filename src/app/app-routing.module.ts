import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
    {path: 'student', loadChildren: './student/student.module#StudentModule'},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}