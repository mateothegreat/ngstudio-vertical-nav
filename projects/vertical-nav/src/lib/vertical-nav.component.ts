import { Component } from '@angular/core';
import { VerticalNavInstance } from './vertical-nav-instance';
import { VerticalNavGroup } from './vertical-nav-group';
import { VerticalNavItem } from './vertical-nav-item';

@Component({

    selector: 'lib-vertical-nav',
    templateUrl: './vertical-nav.component.html',
    styleUrls: [ './vertical-nav.component.scss' ]

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
