import { VerticalNavGroup } from './vertical-nav-group';
import { VerticalNavTheme } from './vertical-nav-theme';
import { VerticalNavThemes } from './vertical-nav-themes';

export class VerticalNavConfig {

    public theme?: VerticalNavTheme = VerticalNavThemes.light;
    public groups: Array<VerticalNavGroup>;

    public constructor(config: VerticalNavConfig) {

        Object.assign(this, config);

        for (let i = 0; i < config.groups.length; i++) {

            this.groups[ i ] = new VerticalNavGroup(config.groups[ i ]);

        }

    }

    public reset?(): void {

        for (let i = 0; i < this.groups.length; i++) {

            this.groups[ i ].reset();

        }

    }

}
