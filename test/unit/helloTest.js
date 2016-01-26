/**
 * Created by dpanza on 26/01/16.
 */
describe('Main controllers', function() {
    beforeEach(module('kata'));

    describe('MainCtrl', function() {
        var scope, ctrl;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('MainCtrl', {$scope: scope});
        }));


        it('should create "phones" model with 3 phones', inject(function() {
            expect(scope.listOfValues.length).toBe(2);
        }));

    });
});

