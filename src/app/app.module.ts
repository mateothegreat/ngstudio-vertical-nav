import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VerticalNavModule } from '../../projects/vertical-nav/src/lib/vertical-nav.module';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

@NgModule({

    declarations: [

        AppComponent,
         OneComponent,
         TwoComponent

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
