import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        StudentRoutingModule,
        FormsModule,
    ],
    declarations: [StudentComponent],
    providers: []
})
export class StudentModule {
}