import { VerticalNavThemeEffect } from './vertical-nav-theme-effect';

export class VerticalNavTheme {

    public background?: string;

    public groups?: {

        background?: string,
        title?: {

            fontSize?: string,
            color?: string,
            background?: string,

            icon?: {

                fontSize?: string,
                color?: string,

            },

            toggle?: {

                fontSize?: string,
                color?: string,

            }

        },
        items?: {

            fontSize?: string,
            color?: string,
            background?: string,
            icon?: {

                fontSize?: string,
                color?: string,

            },
            effects?: {

                inactive: {

                    color?: string

                },
                active: {

                    color?: string,
                    effect?: VerticalNavThemeEffect

                },
                hover: {

                    color?: string,
                    effect?: VerticalNavThemeEffect

                },
                pressed?: {

                    color?: string,
                    effect?: VerticalNavThemeEffect

                }

            }

        }

    };

}
