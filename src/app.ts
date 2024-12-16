import {autoinject, PLATFORM} from "aurelia-framework";
import {NavModel, RouterConfiguration, Router} from 'aurelia-router';
import {MdcDrawer} from "@aurelia-mdc-web/drawer";
import {ICustomRouteConfig} from "./models/navigation";

@autoinject()
export class App {
    private _router: Router;
    private _drawer: MdcDrawer;
    private _subTitle: string = "Prototype v0.2";

    // In the following part all needed routes can be added
    configureRouter(config: RouterConfiguration, router: Router) {
        router.title = "The Campus Management System";
        this._router = router;
        config.map([

            // route for login
            <ICustomRouteConfig>{
                route: '',
                moduleId: PLATFORM.moduleName('components/login/login'),
                nav: true,
                name: "login",
                title: 'Login',
            },

            // route for dashboard
            <ICustomRouteConfig>{
                route: 'dashboard',
                moduleId: PLATFORM.moduleName('components/dashboard/dashboard'),
                nav: true,
                name: "dashboard",
                title: 'Dashboard',
                settings: {
                    count: 2,
                }
            },

            // route for mystudies
            <ICustomRouteConfig>{
                route: 'mystudies',
                moduleId: PLATFORM.moduleName('components/mystudies/mystudies'),
                nav: true,
                name: "mystudies",
                title: 'MyStudies',
            },

            // route for roomreservation
            <ICustomRouteConfig>{
                route: 'roomreservation',
                moduleId: PLATFORM.moduleName('components/roomreservation/roomreservation'),
                nav: true,
                name: "roomreservation",
                title: 'Room Reservation',
            },

            // route for eat
            <ICustomRouteConfig>{
                route: 'eat',
                moduleId: PLATFORM.moduleName('components/eat/eat'),
                nav: true,
                name: "eat",
                title: 'Eat',
            },

            // route for financial support
            <ICustomRouteConfig>{
                route: 'financialsupport',
                moduleId: PLATFORM.moduleName('components/financialsupport/financialsupport'),
                nav: true,
                name: "financialsupport",
                title: 'Financial Support',
            },

            // route for statistics
            <ICustomRouteConfig>{
                route: 'statistics',
                moduleId: PLATFORM.moduleName('components/statistics/statistics'),
                nav: true,
                name: "statistics",
                title: 'Statistics',
            },

            // route for social science etc.
            <ICustomRouteConfig>{
                route: 'digitalScience',
                moduleId: PLATFORM.moduleName('components/mystudies/digitalScience/digitalScience'),
                nav: true,
                name: "digitalScience",
                title: 'digitalScience',
            },

            // route for social science etc.
            <ICustomRouteConfig>{
                route: 'managementEconomicsSocialSciences',
                moduleId: PLATFORM.moduleName('components/mystudies/managementEconomicsSocialSciences/managementEconomicsSocialSciences'),
                nav: true,
                name: "managementEconomicsSocialSciences",
                title: 'managementEconomicsSocialSciences',
            },

            // route for social science etc.
            <ICustomRouteConfig>{
                route: 'humanities',
                moduleId: PLATFORM.moduleName('components/mystudies/humanities/humanities'),
                nav: true,
                name: "humanities",
                title: 'humanities',
            },            
            
            // route for social science etc.
            <ICustomRouteConfig>{
                route: 'theology',
                moduleId: PLATFORM.moduleName('components/mystudies/theology/theology'),
                nav: true,
                name: "theology",
                title: 'theology',
            },      

            // route for social science etc.
            <ICustomRouteConfig>{
                route: 'scienceMedicine',
                moduleId: PLATFORM.moduleName('components/mystudies/scienceMedicine/scienceMedicine'),
                nav: true,
                name: "scienceMedicine",
                title: 'scienceMedicine',
            },   

            // route for social science etc.
            <ICustomRouteConfig>{
                route: 'enrollment',
                moduleId: PLATFORM.moduleName('components/mystudies/enrolled/enrolled'),
                nav: true,
                name: "enrolled",
                title: 'enrolled',
            },    

            // route for announcement
            <ICustomRouteConfig>{
                route: 'announcement',
                moduleId: PLATFORM.moduleName('components/announcement/announcement'),
                nav: true,
                name: "announcement",
                title: 'Announcement',
            }
        ]);
    }

    navigateTo(nav: NavModel | string) {
        if (nav instanceof NavModel) {
            this._router.navigate(nav.href);
        } else {
            this._router.navigateToRoute(nav);
        }
        this._drawer.open = false;
    }
}


