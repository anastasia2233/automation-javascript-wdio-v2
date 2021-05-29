class VoucherPage {

    get firstNameField() {return $('#firstName')}

    get lastNameField() {return $('#lastName')}

    get subscriptionLengthField() {return $('#months')}

    get dateOfBirthField() {return $('#date')}

    get emailField() {return $('#email')}

    get submitButton() {return $('#voucher-form').$('.voucher-btn-primary')}

    get voucherPrice() {return $('#voucher').$('h3')}

    get voucherCode() {return $('#voucher').$('h2')}

    fillForm(formData) {
        this.firstNameField.setValue(formData.firstName);
        this.lastNameField.setValue(formData.lastName);
        this.subscriptionLengthField.setValue(formData.subscriptionLenght);
        this.dateOfBirthField.setValue(formData.dateOfBirth);
        this.emailField.setValue(formData.email);
    }

    submitForm() {
        this.submitButton.click();
    }

}
module.exports = new VoucherPage();