import {test, expect} from "@playwright/test"

test.describe("Home Page Test with No Auth", ()=>{
    test("Home page - Sign In", async ({ page })=>{
        await page.goto('https://practicesoftwaretesting.com/')
        await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in")
    })
    test ("Home Page - Validate Page title", async({page})=>{
        await page.goto('https://practicesoftwaretesting.com/')
        await expect(page.getByTitle('Practice Software Testing - Toolshop')).toBeVisible()
        await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0")
    })
    test("Home Page - Verify Page Navigation", async({page})=>{
        await page.goto('https://practicesoftwaretesting.com/')
        await expect(page.locator('[data-test="nav-home"]').getByText("Home")).toHaveClass('nav-link active')
    })
    test("Home Page - verify tools list", async({page})=>{
        await page.goto('https://practicesoftwaretesting.com/')
        const productGrid = page.locator(".col-md-9");
        await expect(productGrid.getByRole('link')).toHaveCount(9);
    })
})

test.describe("Home page with logged in User", ()=>{
    test.use({storageState:".auth/customer01.json"})
    test.beforeEach(async({page})=>{
        await page.goto('https://practicesoftwaretesting.com/')
    })
    test("Check Customer 01 is logged in", async({page})=>{
        await expect(page.getByTestId("nav-sign-in")).not.toBeVisible();
        await expect(page.getByTestId("nav-menu")).toContainText("Jane Doe");
    })
})