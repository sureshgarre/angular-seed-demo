'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function () {

    beforeEach(function () {
        browser().navigateTo('../../app/index.html');
        sleep(3);
    });



    it('Textbox should be empty when page loads', function () {

        expect(element('input#filterByName').val()).toBe('');
    });


    it('Textbox should reflect filter value', function () {
        input('search.Name').enter('test');
        sleep(1);
        expect(element('input#filterByName').val()).toBe('test');
    });
    
    it('Options filter test', function () {
        input('search.Name').enter('Option');
        sleep(1);
        expect(repeater('.allTheTypes div').count()).toEqual(2);
    });
});