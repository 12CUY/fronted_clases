import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './components/producto/producto.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';



@NgModule({
  declarations: [
    ProductoComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule, 
    ToolbarModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class InventarioModule { }
