'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function () {
    beforeEach(module('myApp.controllers'));
    var ctrl, scope, fakeFleet;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        //Fake factory, no real 'success' method
        fakeFleet = {
            getStuff: function () { return { then: jasmine.createSpy() } }
        };

        spyOn(fakeFleet, 'getStuff').andCallThrough();

        ctrl = $controller('MyCtrl1', { $scope: scope, fleetTypesFactory: fakeFleet });
    }));


    it('Event Types Empty should default to false', inject(function () {
        expect(scope.isEventTypesEmpty).toBe(true);
    }));

    it('On init, api should be called', function() {
        expect(fakeFleet.getStuff).toHaveBeenCalled();
    });

   
});


describe('Controller gets bad response', function () {
    
    beforeEach(module('myApp.controllers'));
    var ctrl, scope, fakeFleet;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        //Fake factory, no real 'success' method
        fakeFleet = {
            getStuff: function () { return { then: jasmine.createSpy() } }
        };

        ctrl = $controller('MyCtrl1', { $scope: scope, fleetTypesFactory: fakeFleet });

    }));

    it('EventTypesEmpty changes to false when an object is returned', function () {
        scope.FleetEventTypes = {'EventTypes':['1','2','3']};
        scope.$apply();
        expect(scope.isEventTypesEmpty).toBe(false);
    });
});