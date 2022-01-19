import { Component } from '@angular/core';
import { VerticalNavInstance } from './vertical-nav-instance';
import { VerticalNavGroup } from './vertical-nav-group';
import { VerticalNavItem } from './vertical-nav-item';
import { style, trigger, animate, transition } from '@angular/animations';

@Component({

    selector: 'lib-vertical-nav',
    templateUrl: './vertical-nav.component.html',
    styleUrls: [ './vertical-nav.component.scss' ],
    animations: [

        trigger('slideDownUp', [

            transition(':enter', [ style({ height: 0 }), animate(500) ]),
            transition(':leave', [ animate(500, style({ height: 0 })) ])
            // state('in', style({
            //     'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
            // })),
            // state('out', style({
            //     'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
            // })),
            // transition('in => out', [ group([
            //         animate('400ms ease-in-out', style({
            //             'opacity': '0'
            //         })),
            //         animate('600ms ease-in-out', style({
            //             'max-height': '0px'
            //         })),
            //         animate('700ms ease-in-out', style({
            //             'visibility': 'hidden'
            //         }))
            //     ]
            // ) ]),
            // transition('out => in', [ group([
            //         animate('1ms ease-in-out', style({
            //             'visibility': 'visible'
            //         })),
            //         animate('600ms ease-in-out', style({
            //             'max-height': '500px'
            //         })),
            //         animate('800ms ease-in-out', style({
            //             'opacity': '1'
            //         }))
            //     ]
            // ) ])
        ])

    ]

})
export class VerticalNavComponent {

    public instance: VerticalNavInstance;

    public toggle(group: VerticalNavGroup): void {

        group.open = !group.open;

    }

    public onItemClick(item: VerticalNavItem, group: VerticalNavGroup): void {

        this.instance.config.reset();

        group.setActive(item);

        this.instance.clicks$.next({ item, group });

    }

}
