import { NgModule } from '@angular/core';
import { VerticalNavComponent } from './vertical-nav.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({

    declarations: [

        VerticalNavComponent

    ],

    imports: [

        BrowserAnimationsModule,
        CommonModule

    ],

    exports: [

        VerticalNavComponent

    ]

})
export class VerticalNavModule {
}
