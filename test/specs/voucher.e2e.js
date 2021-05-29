import VoucherPage from './voucher.page';
import voucherData from './voucher.data';


describe('Voucher Registration Page', () => {

    beforeEach(() => {
        browser.url('/voucher');
    });

    describe('Correct price is controlled depending on users date of birth', () => {

        const testCases = [
            { ...voucherData, dateOfBirth: '02.01.1950', price: '750 Kč', code: 'QWFLYzE5NTAwMTAyM2Exa3' },
            { ...voucherData, dateOfBirth: '06.11.2014', price: '850 Kč', code: 'QWFLYzIwMTQxMTA2M2Exa3' },
            { ...voucherData, dateOfBirth: '02.01.1990', price: '1000 Kč', code: 'QWFLYzE5OTAwMTAyM2Exa3' },
        ]

        testCases.forEach(testCase => {

            it('Test case for ' + testCase.dateOfBirth, () => {

                VoucherPage.fillForm(testCase);
                VoucherPage.submitForm();

                takeScreenshot(testCase.dateOfBirth);

                expect(VoucherPage.voucherPrice).toHaveText(testCase.price);
                expect(VoucherPage.voucherCode).toHaveText(testCase.code);

            });
        });

    });

    describe('Correct price is controlled depending on subscription length', () => {

        const testCases = [
            { ...voucherData, subscriptionLength: 3, price: '1000 Kč', code: 'QWFLYzE5OTAwMzIyM2Exa3' },
            { ...voucherData, subscriptionLength: 7, price: '950 Kč', code: 'QWFLYzE5OTAwMzIyN2Exa3' },
            { ...voucherData, subscriptionLength: 14, price: '850 Kč', code: 'QWFLYzE5OTAwMzIyMTRhMW' },
            { ...voucherData, subscriptionLength: 21, price: '650 Kč', code: 'QWFLYzE5OTAwMzIyMjFhMW' },
        ]

        testCases.forEach(testCase => {

            it('Test case for ' + testCase.subscriptionLength + 'months', () => {

                VoucherPage.fillForm(testCase);
                VoucherPage.submitForm();

                takeScreenshot(testCase.subscriptionLength);

                expect(VoucherPage.voucherPrice).toHaveText(testCase.price);
                expect(VoucherPage.voucherCode).toHaveText(testCase.code);
            });
        });

    });





    function takeScreenshot(value) {
        browser.saveScreenshot('voucher_subscription_' + value + '_' + browser.capabilities.browserName + '.png');
    }


});


