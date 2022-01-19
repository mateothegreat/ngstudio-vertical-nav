import { VerticalNavGroup } from './vertical-nav-group';
import { VerticalNavTheme } from './vertical-nav-theme';
import { VerticalNavThemes } from './vertical-nav-themes';

const merge = (current: any, updates: any) => {

    for (let key of Object.keys(updates)) {

        if (!current.hasOwnProperty(key) || typeof updates[ key ] !== 'object') {

            current[ key ] = updates[ key ];

        } else {

            merge(current[ key ], updates[ key ]);

        }

    }

    return current;

};

export class VerticalNavConfig {

    public theme?: VerticalNavTheme = VerticalNavThemes.light;
    public groups: Array<VerticalNavGroup>;

    public constructor(config: VerticalNavConfig) {

        Object.assign(this, config);

        if (config.theme) {

            this.theme = merge(JSON.parse(JSON.stringify(VerticalNavThemes.light)), config.theme);

        }

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
