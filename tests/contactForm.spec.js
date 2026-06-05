import { test, expect } from "@playwright/test";
import { generateContactFormData } from "../test_data/contactFormData.js";
import HomePage from "../page_objects/HomePage.js";

test.describe("Contact form tests", () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);

    await page.goto("/");
    await homePage.acceptCookies();
  });

  test("User can submit a contact form", async ({ page }) => {
    const contactFormData = generateContactFormData();

    await homePage.firstNameField.fill(contactFormData.firstName);
    await homePage.lastNameField.fill(contactFormData.lastName);
    await homePage.organizationField.fill(contactFormData.organization);
    await homePage.emailField.fill(contactFormData.email);
    await homePage.phoneNumberField.fill(contactFormData.phoneNumber);
    await homePage.stateDropdown.selectOption({ label: contactFormData.state });
    await homePage.messageField.fill(contactFormData.message);
    await homePage.currentClientDropdown.selectOption({
      label: contactFormData.currentClient,
  });
    await homePage.industryDropdown.selectOption({
      label: contactFormData.industry,
    });
    await homePage.employeesNumberDropdown.selectOption({
      label: contactFormData.employees,
    });
    await homePage.howDidYouHearField.fill(
      contactFormData.howDidYouHearAboutUs,
    );

    // Verify that the form is completely filled out and the 'SEND MESSAGE' button is enabled.
    // The actual .click() is intentionally omitted to prevent generating spam
    // in VC3's live production environment.
    await expect(homePage.sendButton).toBeVisible();
    await expect(homePage.sendButton).toBeEnabled();
  });

  test("User receives validation message when required fields are left blank", async ({
    page,
  }) => {
    await homePage.clickSendButton();

    await expect(homePage.fieldRequiredError).toHaveCount(8);
    await expect(homePage.formSummaryError).toBeVisible();
  });

  test("User receives validation message when email is invalid", async ({
    page,
  }) => {
    await homePage.emailField.fill("invalid.gmail.com");
    await homePage.emailField.press("Tab");

    await expect(homePage.invalidEmailError).toBeVisible();
  });

  test("User receives validation message when phone number contains invalid characters", async ({
    page,
  }) => {
    await homePage.phoneNumberField.fill("123abcd,.!");
    await homePage.phoneNumberField.press("Tab");

    await expect(homePage.invalidPhoneNumberError).toBeVisible();
  });

  test("User receives validation message when phone number is fewer than 7 digits", async ({
    page,
  }) => {
    await homePage.phoneNumberField.fill("123456");
    await homePage.phoneNumberField.press("Tab");

    await expect(homePage.phoneNumberRangeError).toBeVisible();
  });
});
