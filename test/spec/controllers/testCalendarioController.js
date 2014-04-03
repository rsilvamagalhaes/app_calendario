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
    var dias = scope.getDias(1, 2014);
    expect(35).toBe(dias.length);
    expect(29).toBe(dias[0].dia);
    expect(1).toBe(dias[dias.length-1].dia);
  });

  it('Test pega dia da semana', function () {
    expect("Domingo").toBe(scope.getDiaSemana(0));
    expect("Quarta").toBe(scope.getDiaSemana(3));
    expect("Sexta").toBe(scope.getDiaSemana(5));
  });    

  it('Test pega dias do mes passado Jan', function () {
    var diasMesPassado = scope.getDiasMesPassado(1, 2014);
    expect(3).toBe(diasMesPassado.length);
    expect(29).toBe(diasMesPassado[0].dia);
    expect(30).toBe(diasMesPassado[1].dia);
    expect(31).toBe(diasMesPassado[2].dia);
  }); 
    
  it('Test pega dias do mes passado fev', function () {
    var diasMesPassado = scope.getDiasMesPassado(2, 2014);
    expect(6).toBe(diasMesPassado.length);
    
    expect(26).toBe(diasMesPassado[0].dia);
    expect(27).toBe(diasMesPassado[1].dia);
    expect(28).toBe(diasMesPassado[2].dia);
    expect(29).toBe(diasMesPassado[3].dia);
    expect(30).toBe(diasMesPassado[4].dia);
    expect(31).toBe(diasMesPassado[5].dia);
  });

  it('Test pega dias do mes passado DEZ', function () {
    var diasMesPassado = scope.getDiasMesPassado(12, 2014);
    expect(1).toBe(diasMesPassado.length);
    expect(30).toBe(diasMesPassado[0].dia);
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
    
  it('Test pega dias do proximo mes Dez 2014', function () {
    var diasProximoMes = scope.getDiasMesProximo(12, 2014)
    expect(3).toBe(diasProximoMes.length);
    expect(1).toBe(diasProximoMes[0].dia);
    expect(2).toBe(diasProximoMes[1].dia);
    expect(3).toBe(diasProximoMes[2].dia);
  });
    
  it('Test ir para mes 2'), function () {
      scope.numMes = 1;
      scope.irMesProximo();
      expect(2).toBe(scope.numMes);
  };

  it('Test ir do mes 12 para o mes 1'), function () {
      scope.numMes = 12;
      scope.ano = 2013;
      scope.irMesProximo();
      expect(1).toBe(scope.numMes);
      expect(2014).toBe(scope.ano);
  };
  
  it('Test ir para mes 1'), function () {
      scope.numMes = 2;
      scope.irMesPassado();
      expect(1).toBe(scope.numMes);
  };

  it('Test ir do mes 1 para o mes 12'), function () {
      scope.numMes = 1;
      scope.ano = 2013;
      scope.irMesProximo();
      expect(12).toBe(scope.numMes);
      expect(2012).toBe(scope.ano);
  }
});
