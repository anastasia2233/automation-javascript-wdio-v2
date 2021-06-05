class VoucherPage {

    get firstNameField() {return $('#firstName')}

    get lastNameField() {return $('#lastName')}

    get subscriptionLengthField() {return $('#months')}

    get dateOfBirthField() {return $('#date')}

    get emailField() {return $('#email')}

    get submitButton() {return $('#voucher-form').$('.voucher-btn-primary')}

    get voucherPrice() {return $('#voucher').$('h3')}

    get voucherCode() {return $('#voucher').$('h2')}

    get activateButton() {return $('//*[@id="voucher"]/div[3]/div[1]')}

    get rejectButton() {return $('//*[@id="voucher"]/div[3]/div[2]')}

    get voucherCodeActivated()  {return $('//*[@id="voucher"]/p[2]/b')}

    get firstNameValidation() {return $('//*[@id="voucher-form"]/div[1]/div/div')}

    get subscriptionLengthValidation() {return $('//*[@id="voucher-form"]/div[3]/div/div')}

    get emailValidation() {return $('//*[@id="voucher-form"]/div[5]/div/div')}

    fillForm(formData) {
        this.firstNameField.setValue(formData.firstName);
        this.lastNameField.setValue(formData.lastName);
        this.subscriptionLengthField.setValue(formData.subscriptionLength);
        this.dateOfBirthField.setValue(formData.dateOfBirth);
        this.emailField.setValue(formData.email);
    }

    submitForm() {
        this.submitButton.click();
    }

    activateCode() {
        this.activateButton.click();
    }

    rejectCode() {
        this.rejectButton.click();
    }

}    
module.exports = new VoucherPage();



