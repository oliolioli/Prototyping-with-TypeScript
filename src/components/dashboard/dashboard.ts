import {autoinject} from "aurelia-framework";
import {ICustomRouteConfig} from "../../models/navigation";
import {NavigationInstruction} from 'aurelia-router';
import {Config} from "../../services/config-dev";
import { App } from "app";

@autoinject()
export class Dashboard {
    constructor(
        private _config:Config,
        private app: App
    ) {
        console.log("Using config", this._config);
    }

    goToPage(page:string){
        this.app.navigateTo(page);
    }

    activate(
        params: any,
        routeConfig: ICustomRouteConfig,
        navInstruction: NavigationInstruction
    ) {
        console.log("activated", params, routeConfig);
    }
}
