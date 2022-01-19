import { Injectable, ViewContainerRef } from '@angular/core';
import { VerticalNavConfig } from './vertical-nav-config';
import { VerticalNavInstance } from './vertical-nav-instance';
import { DynamicComponentFactoryService, DynamicComponentFactoryInstance } from '@ngstudio/dynamic-component-factory';
import { VerticalNavComponent } from './vertical-nav.component';

@Injectable({
    providedIn: 'root'
})
export class VerticalNavService {

    public instances: { [ name: string ]: VerticalNavInstance } = {};

    public constructor(private readonly dynamicComponentFactoryService: DynamicComponentFactoryService) {

    }

    public create(name: string, config: VerticalNavConfig, injectionPoint?: string | ViewContainerRef): VerticalNavInstance {

        this.instances[ name ] = new VerticalNavInstance(config, this);

        let ref: DynamicComponentFactoryInstance<VerticalNavComponent>;

        if (injectionPoint) {

            if (typeof injectionPoint === 'string') {

                ref = this.dynamicComponentFactoryService.createInElementById(name, injectionPoint, VerticalNavComponent);

            } else {

                ref = this.dynamicComponentFactoryService.createInContainer(name, injectionPoint, VerticalNavComponent);

            }

        } else {

            ref = this.dynamicComponentFactoryService.createInApplicationRoot(name, VerticalNavComponent);

        }

        ref.componentRef.instance.instance = this.instances[ name ];

        return this.instances[ name ];

    }

}
