import { Page, Locator } from '@playwright/test';

export class LoginPage{

    private readonly username : Locator;
    private readonly password : Locator;
    private readonly loginButton : Locator;

    constructor (private readonly page : Page){

        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    async gotoUrl(){
        await this.page.goto('/');
    }
    async login(username : string, password : string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}