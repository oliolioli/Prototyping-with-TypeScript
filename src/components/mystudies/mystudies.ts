import {autoinject} from "aurelia-framework";
import {ICustomRouteConfig} from "../../models/navigation";
import {NavigationInstruction} from 'aurelia-router';
import {Config} from "../../services/config-dev";
import { App } from "app";

@autoinject()
export class MyStudies {
    constructor(
        private _config:Config,
        private app: App
    ) {
        console.log("Using config", this._config);
    }

    goToPage(page:string){
        console.log(`Navigating to: ${page}`);
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
