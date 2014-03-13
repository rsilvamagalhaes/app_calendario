'use strict';

describe('Controller: calendarioController', function () {

  // load the controller's module
  beforeEach(module('appCalendarioApp'));

  var calendarioController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    calendarioController = $controller('calendarioController', {
      $scope: scope
    });
  }));

  it('Test total de mes', function () {
    expect(scope.mes.length).toBe(12);
  });
});