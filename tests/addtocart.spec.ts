import { test, expect } from "../src/fixtures/LoginTest";
import {ProductPage} from "../src/pages/ProductPage";


test("Add to Cart - Sauce Labs Backpack", async ({ loggedInPage }) => {

  const productPage = new ProductPage(loggedInPage);

  await expect(productPage.shoppingCartBadge).toBeHidden();
  await expect(productPage.addToCartButton).toContainText("Add to cart");

  const  amountOnProductPage = await productPage.getProductPrice();

  await productPage.addProductToCart();
  await expect(productPage.removeButton).toBeVisible();
  await expect(productPage.shoppingCartBadge).toContainText("1");

  await productPage.goToCart();
  await expect(loggedInPage).toHaveURL(/.*cart\.html/);
  
});
