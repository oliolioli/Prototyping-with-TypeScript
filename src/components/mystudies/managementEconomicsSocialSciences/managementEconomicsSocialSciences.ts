import {autoinject} from "aurelia-framework";
import { App } from "app";
import {Config} from "../../../services/config-dev";


@autoinject()
export class managementEconomicsSocialScience {
    constructor(
        private _config:Config,
        private app: App
    ) {
        console.log("Using config", this._config);
    }

    goToPage(page:string){
        this.app.navigateTo(page);
    }
}