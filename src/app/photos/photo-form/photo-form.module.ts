import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule
    ]
})
export class PhotoFormModule { }