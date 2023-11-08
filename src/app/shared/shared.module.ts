import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [InputComponent, HeaderComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputComponent, HeaderComponent]
})
export class SharedModule {}
