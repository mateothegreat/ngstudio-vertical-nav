import { VerticalNavItem } from './vertical-nav-item';

export class VerticalNavGroup {

    public title?: string;
    public iconClass?: string;
    public toggleIconClasses?: {
        active?: string,
        inactive?: string
    };
    public open?: boolean;

    public items: Array<VerticalNavItem>;

    public constructor(config: VerticalNavGroup) {

        Object.assign(this, config);

    }

    public setActive?(item?: VerticalNavItem): void {

        this.reset();

        item.active = true;

    }

    public reset?(): void {

        for (let i = 0; i < this.items.length; i++) {

            this.items[ i ].active = false;

        }

    }

}
