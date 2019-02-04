import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        AdminRoutingModule,
        FormsModule,
    ],
    declarations: [AdminComponent],
    providers: []
})
export class AdminModule {
}