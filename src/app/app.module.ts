import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VerticalNavModule } from '../../projects/vertical-nav/src/lib/vertical-nav.module';

@NgModule({

    declarations: [

        AppComponent

    ],

    imports: [

        BrowserModule,
        VerticalNavModule

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
