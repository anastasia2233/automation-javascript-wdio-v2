const { getFirstNameField } = require("./voucher.page");
import VoucherPage from './voucher.page';

//import voucherData from './voucher.data';

describe('Voucher Registration Page', () => {

    beforeEach(() => {
        browser.url('/voucher');
    });

    describe('Default voucher values are controlled', () => {
        it('Default voucher values are controlled', () => {

           
            expect(VoucherPage.firstNameField).toBeVisible();
            expect(VoucherPage.firstNameField).toBeEnabled();
            expect(VoucherPage.firstNameField).toHaveText('');
            
            expect(VoucherPage.lastNameField).toBeVisible();
            expect(VoucherPage.lastNameField).toBeEnabled();
            expect(VoucherPage.lastNameField).toHaveText('');
 
            expect(VoucherPage.subscriptionLengthField).toHaveValue('3');
            
            expect(VoucherPage.dateOfBirthField).toHaveAttribute('required');
            
            expect(VoucherPage.emailField).toHaveAttribute('type', 'email');
            expect(VoucherPage.emailField).toHaveText('');

            expect(VoucherPage.submitButton).toHaveText('Vygenerovat kód');
        });
    });

});