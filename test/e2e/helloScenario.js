/**
 * Created by dpanza on 26/01/16.
 */
/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */
describe('Kata App', function() {

    describe('Main view', function () {

        beforeEach(function () {
            browser.get('app/index.html');
        });


        it('should show the input value', function () {

            var query = element(by.model('myValue'));

            query.sendKeys('david');
            expect(element(by.id('helloId')).getText()).toBe('Hello : david');

            query.clear();
            expect(element(by.id('helloId')).getText()).toBe('Hello :');

        });
    });
});