import { VerticalNavConfig } from './vertical-nav-config';
import { VerticalNavService } from './vertical-nav.service';
import { Subject } from 'rxjs';
import { VerticalNavClickEvent } from './vertical-nav-click-event';

export class VerticalNavInstance {

    public config: VerticalNavConfig;
    public service: VerticalNavService;
    public clicks$?: Subject<VerticalNavClickEvent> = new Subject();

    public constructor(config: VerticalNavConfig, service: VerticalNavService) {

        this.config = new VerticalNavConfig(config);

        this.service = service;

    }

}
