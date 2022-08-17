import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

 

const _materialModules = [
    MatAutocompleteModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
]
@NgModule({
    declarations: [],
    imports: [_materialModules],
    exports: [_materialModules]
})
 
export class MaterialModule { } 