import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KtdGridComponent } from './grid.component';
import { KtdGridItemComponent } from './grid-item/grid-item.component';
import { KtdGridDragHandle } from './directives/drag-handle';
import { KtdGridResizeHandle } from './directives/resize-handle';
import { KtdGridService } from './grid.service';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from "primeng/dialog";

@NgModule({
    declarations: [
        KtdGridComponent,
        KtdGridItemComponent,
        KtdGridDragHandle,
        KtdGridResizeHandle,
    ],
    exports: [
        KtdGridComponent,
        KtdGridItemComponent,
        KtdGridDragHandle,
        KtdGridResizeHandle
    ],
    providers: [
        KtdGridService
    ],
    imports: [
        CommonModule, ButtonModule, DialogModule
    ]
})
export class KtdGridModule {}
