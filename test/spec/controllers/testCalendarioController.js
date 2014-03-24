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

  it('Test pega dia da semana', function () {
    expect("Domingo").toBe(scope.getDiaSemana(0));
    expect("Quarta").toBe(scope.getDiaSemana(3));
    expect("Sexta").toBe(scope.getDiaSemana(5));
  });    
    
  it('Test pega dias do mes passado', function () {
    var diasMesPassado = scope.getDiasMesPassado(2, 2014);
    expect(7).toBe(diasMesPassado.length);
    expect(25).toBe(diasMesPassado[0].dia);  
    expect(26).toBe(diasMesPassado[1].dia);
    expect(27).toBe(diasMesPassado[2].dia);
    expect(28).toBe(diasMesPassado[3].dia);
    expect(29).toBe(diasMesPassado[4].dia);
    expect(30).toBe(diasMesPassado[5].dia);
    expect(31).toBe(diasMesPassado[6].dia);
  });    
    
  it('Test pega dias do proximo mes', function () {
    var diasProximoMes = scope.getDiasMesProximo(3, 2014)
    expect(5).toBe(diasProximoMes.length);
    expect(1).toBe(diasProximoMes[0].dia);
    expect(2).toBe(diasProximoMes[1].dia);
    expect(3).toBe(diasProximoMes[2].dia);
    expect(4).toBe(diasProximoMes[3].dia);
    expect(5).toBe(diasProximoMes[4].dia);
  }); 
});
