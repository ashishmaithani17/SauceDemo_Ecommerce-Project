import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {

    readonly shoppingCartBadge: Locator;
    readonly shoppingCartLink: Locator;
    readonly addToCartButton: Locator;
    readonly removeButton: Locator;
    readonly productPrice: Locator;


    constructor(private readonly page: Page) {
        this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
       this.productPrice = page.locator('[data-test="inventory-item-description"]').first().locator('[data-test="inventory-item-price"]');
    }
    async getProductPrice() {
        return await this.productPrice.textContent();
    }
    async addProductToCart() {
        await this.addToCartButton.click();
    }
    async goToCart() {
        await this.shoppingCartLink.click();
    }
}
