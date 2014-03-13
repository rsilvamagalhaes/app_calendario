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
    expect(12).toBe(scope.mes.length);
  });
    
  it('Test pega quantidade de dias do mes de janeiro 2014', function () {
    expect(31).toBe(scope.getDias(1, 2014).length);
  });
});
