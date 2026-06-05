class HomePage {
  constructor(page) {
    this.page = page;
    this.firstNameField = page.getByRole("textbox", { name: "First name*" });
    this.lastNameField = page.getByRole("textbox", { name: "Last name*" });
    this.organizationField = page.getByRole("textbox", {
      name: "Organization name*",
    });
    this.emailField = page.getByRole("textbox", { name: "Email*" });
    this.phoneNumberField = page.getByRole("textbox", {
      name: "Phone number*",
    });
    this.stateDropdown = page.getByRole("combobox", {
      name: "State/ Province*",
    });
    this.messageField = page.getByRole("textbox", { name: "Message*" });
    this.currentClientDropdown = page.getByRole("combobox", {
      name: "Are you a current client?*",
    });
    this.industryDropdown = page.getByRole("combobox", { name: "Industry*" });
    this.employeesNumberDropdown = page.getByRole("combobox", {
      name: "Number of employees*",
    });
    this.howDidYouHearField = page.getByRole("textbox", {
      name: "How did you hear about us?*",
    });
    this.sendButton = page.getByRole("button", { name: "SEND MESSAGE" });

    this.fieldRequiredError = page.getByText(
      "Please complete this required field.",
    );
    this.formSummaryError = page.getByText(
      "Please complete all required fields.",
    );
    this.invalidEmailError = page.getByText(
      "Email must be formatted correctly.",
    );
    this.invalidPhoneNumberError = page.getByText(
      "A valid phone number may only contain numbers, +()-. or x",
    );
    this.phoneNumberRangeError = page.getByText(
      "The number you entered is not in range.",
    );
  }

  async acceptCookies() {
    await this.page.getByRole("button", { name: "Accept" }).click();
  }

  async clickSendButton() {
    await this.sendButton.click();
  }
}

export default HomePage;
