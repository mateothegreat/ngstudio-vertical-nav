export class VerticalNavItem {

    public label?: string;
    public iconClass?: string;
    public active?: boolean;

    public constructor(config: VerticalNavItem) {

        Object.assign(this, config);

    }

}
