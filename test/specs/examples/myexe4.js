describe('Voucher Registration Page', () => {

    beforeEach(() => {
        browser.url('/voucher');
    });
    afterEach(() => {
        browser.saveScreenshot('voucher_page_' + browser.capabilities.browserName + ' ' + Date + '.png');
    });
    describe('Default voucher values are controlled', () => {
        it('Default voucher values are controlled', () => {
        
            
            expect($('#firstName')).toBeVisible();
            expect($('#firstName')).toBeEnabled();
            expect($('#lastName')).toBeVisible();
            expect($('#lastName')).toBeEnabled();
            expect($('#months')).toHaveValue('3');
            expect($('#date')).toHaveAttribute('required');
            expect($('#email')).toHaveAttribute('type','email');
            expect($('.voucher-btn-primary')).toHaveText('Vygenerovat kód');
        });   
    });
    
    describe('Correct price is controlled depending on subscription lenth', () => { 

         it('Lenth 4 months, price expected 1000 Kč', () => {

        $('#firstName').setValue('Ana');
        console.log($('#firstName').getValue());
        $('#lastName').setValue('Kac');
        console.log($('#lastName').getValue());
        $('#months').setValue('4');
        console.log($('#months').getValue());
        //$('#date').setValue('02-03-2000');
        //console.log($('#date').getValue());
        $('#email').setValue('ana@kac.cz');
        console.log($('#email').getValue());
        $('.voucher-btn-primary').click();
        expect($('//*[@id="voucher"]/div[1]/div/h3')).toHaveText('1000 Kč'); 
         });

         it('Lenth 8 months, price expected 950 Kč', () => {

        $('#firstName').setValue('Ana');
        console.log($('#firstName').getValue());
        $('#lastName').setValue('Kac');
        console.log($('#lastName').getValue());
        $('#months').setValue('8');
        console.log($('#months').getValue());
        //$('#date').setValue('02-03-2000');
        //console.log($('#date').getValue());
        $('#email').setValue('ana@kac.cz');
        console.log($('#email').getValue());
        $('.voucher-btn-primary').click();
        expect($('//*[@id="voucher"]/div[1]/div/h3')).toHaveText('950 Kč'); 
         });
     }); 

     describe('Correct price is controlled depending on users date of birth', () => { 

        it('Date of birth 02.01.1950 , price expected 750 Kč', () => {
            $('#firstName').setValue('Ana');
        console.log($('#firstName').getValue());
        $('#lastName').setValue('Kac');
        console.log($('#lastName').getValue());
        // $('#months').setValue('4');
        //console.log($('#months').getValue());
        $('#date').setValue('02-01-1950');
        console.log($('#date').getValue());
        $('#email').setValue('ana@kac1.cz');
        console.log($('#email').getValue());
        $('.voucher-btn-primary').click();
        expect($('//*[@id="voucher"]/div[1]/div/h3')).toHaveText('750 Kč'); 
         });


         it('Date of birth 06.11.2014 , price expected 850 Kč', () => {
            $('#firstName').setValue('Ana');
        console.log($('#firstName').getValue());
        $('#lastName').setValue('Kac');
        console.log($('#lastName').getValue());
        // $('#months').setValue('4');
        //console.log($('#months').getValue());
        $('#date').setValue('06-11-2014');
        console.log($('#date').getValue());
        $('#email').setValue('ana@kac1.cz');
        console.log($('#email').getValue());
        $('.voucher-btn-primary').click();
        expect($('//*[@id="voucher"]/div[1]/div/h3')).toHaveText('850 Kč'); 
         });    
     }); 
                
       //expect($('//*[@id="voucher"]/div[2]/div/h2/b')).toHaveText('QWFLYzIwMDAwMzAyMTBhYW');
       // expect($('//*[@id="voucher"]/div[3]/div[1]')).toHaveAttribute('type','submit');
       // expect($('//*[@id="voucher"]/div[3]/div[1]')).toHaveText('Aktivovat');
       // expect($('//*[@id="voucher"]/div[3]/div[2]')).toHaveAttribute('type','submit');
        //expect($('//*[@id="voucher"]/div[3]/div[2]')).toHaveText('Zahodit');

        //save screenshot with the name of actual browser
        //browser.saveScreenshot('voucher_page_' + browser.capabilities.browserName + '.png');

        
    
});