
import VoucherPage from './voucher.page';
import voucherData from './voucher.data';

describe('Voucher Registration Page', () => {

    beforeEach(() => {
        browser.url('/voucher');
    });

    describe('Controlling whether validation notes are correct with unvalid input of first name: ', () => {

        const testCases = [
            { ...voucherData, firstName: '' },
            // { ...voucherData, firstName:'ahgiuhiuehoijoijoijoijoihiugxyusgyuvhsahiujoijoijlkjjkhl' },
        ]

        testCases.forEach(testCase => {

            it('For first name input: ' + testCase.firstName, () => {

                VoucherPage.fillForm(testCase);
                VoucherPage.submitForm();

                takeScreenshot(testCase.firstName);

                expect(VoucherPage.firstNameValidation).toHaveText('Pole je požadované');
            });


        });

    });

    /*describe('Controlling whether validation notes are correct with unvalid input of subscription length: ', () => {

        const testCases = [
            { ...voucherData, subscriptionLength: ' '},
            { ...voucherData, subscriptionLength: -34 },
        ]

        testCases.forEach(testCase => {

            it('For subscriptionLength: '+ testCase.subscriptionLength  , () => {

                VoucherPage.fillForm(testCase);
                VoucherPage.submitForm();

                takeScreenshot(testCase.subscriptionLength);

                expect(VoucherPage.subscriptionLengthValidation).toHaveText('Pole je požadované');
            });

            
        });

    });
    */

    describe('Controlling whether validation notes are correct with unvalid input of email: ', () => {

        const testCases = [
            { ...voucherData, email: 'gyutyuiuuoii[0o[po[pioh' },
            { ...voucherData, email: 125 },
        ]

        testCases.forEach(testCase => {

            it('For subscription length: ' + testCase.email, () => {

                VoucherPage.fillForm(testCase);
                VoucherPage.submitForm();

                takeScreenshot(testCase.email);

                expect(VoucherPage.emailValidation).toHaveText('Pole je požadované');
            });


        });

    });

    function takeScreenshot(value) {
        browser.saveScreenshot('Screenshot for value_ ' + value + '_' + browser.capabilities.browserName + '.png');
    }
});