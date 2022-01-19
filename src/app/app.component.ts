import { Component, AfterViewInit } from '@angular/core';
import { VerticalNavService } from '../../projects/vertical-nav/src/lib/vertical-nav.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements AfterViewInit {

    public constructor(private readonly verticalNavService: VerticalNavService) {

    }

    public ngAfterViewInit() {

        const instance = this.verticalNavService.create('one', {

            groups: [

                {

                    title: 'Group 1',
                    iconClass: 'fad fa-fire-alt',
                    toggleIconClasses: {

                        active: 'fad fa-chevron-double-up',
                        inactive: 'fad fa-chevron-double-down'

                    },
                    open: true,
                    items: [

                        {

                            label: 'One',
                            iconClass: 'fad fa-axe-battle'

                        }, {

                            label: 'Two',
                            active: true,
                            iconClass: 'fad fa-axe-battle'

                        }

                    ]

                }, {

                    title: 'Group 2',
                    toggleIconClasses: {

                        active: 'fad fa-chevron-double-up',
                        inactive: 'fad fa-chevron-double-down'

                    },
                    items: [

                        {

                            label: 'Three',
                            iconClass: 'fad fa-axe-battle'

                        }, {

                            label: 'Four',
                            iconClass: 'fad fa-axe-battle'

                        }

                    ]

                }

            ]

        }, 'one');

        instance.clicks$.subscribe(event => {

            console.log(event);

        });

    }

}
