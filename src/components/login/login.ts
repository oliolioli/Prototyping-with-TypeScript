import { autoinject } from 'aurelia-framework';
import { App } from 'app';

@autoinject()
export class Login {
    email: string = '';      
    password: string = ''; 

    constructor(private app: App) {}

    login() {
        if (this.email && this.password) {
            alert('Logged in!');
            this.app.navigateTo('dashboard')
        } else {
            alert('Wrong credentials');
        }
    }
}
