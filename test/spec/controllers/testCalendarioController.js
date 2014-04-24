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

  it("Test pega dias proximo mes de Janeiro 2014", function() {
      var dias = scope.getDiasMesProximo(0, 2014);
      expect(1).toBe(dias.length);
      expect(1).toBe(dias[0].dia);
  });

  it("Test pega dias proximo mes de Abril 2014", function() {
      var dias = scope.getDiasMesProximo(3, 2014);
      expect(3).toBe(dias.length);
      
      expect(1).toBe(dias[0].dia);
      expect(2).toBe(dias[1].dia);
      expect(3).toBe(dias[2].dia);
      
      expect("mesnaocorrente").toBe(dias[0].style);
      expect("mesnaocorrente").toBe(dias[1].style);
      expect("mesnaocorrente").toBe(dias[2].style);
  });    
    
  it('Test pega quantidade de dias do mes de janeiro 2014', function () {
    var dias = scope.getDias(0, 2014);
    expect(35).toBe(dias.length);
    expect(29).toBe(dias[0].dia);
    expect(1).toBe(dias[dias.length-1].dia);
  });

  it('Test pega quantidade de dias do mes de fevereiro 2014', function () {
    var dias = scope.getDias(1, 2014);
      
    expect(35).toBe(dias.length);
    expect(26).toBe(dias[0].dia);
    expect(1).toBe(dias[dias.length-1].dia);
  });    
    
  it('Test pega quantidade de dias do mes de marco 2014', function () {
    var dias = scope.getDias(2, 2014);
    expect(42).toBe(dias.length);
    expect(23).toBe(dias[0].dia);
    expect(5).toBe(dias[dias.length-1].dia);
  });    

  it('Test pega quantidade de dias do mes de abril 2014', function () {
    var dias = scope.getDias(3, 2014);
    expect(35).toBe(dias.length);
    expect(30).toBe(dias[0].dia);
    expect(3).toBe(dias[dias.length-1].dia);
  });        
    
  it('Test pega dia da semana', function () {
    expect("Domingo").toBe(scope.getDiaSemana(0));
    expect("Quarta").toBe(scope.getDiaSemana(3));
    expect("Sexta").toBe(scope.getDiaSemana(5));
  });    

  it('Test pega dias do mes passado Jan', function () {
    var diasMesPassado = scope.getDiasMesPassado(0, 2014);
    expect(3).toBe(diasMesPassado.length);
    expect(29).toBe(diasMesPassado[0].dia);
    expect(30).toBe(diasMesPassado[1].dia);
    expect(31).toBe(diasMesPassado[2].dia);
  }); 
    
  it('Test pega dias do mes passado fev', function () {
    var diasMesPassado = scope.getDiasMesPassado(1, 2014);
    expect(6).toBe(diasMesPassado.length);
    
    expect(26).toBe(diasMesPassado[0].dia);
    expect(27).toBe(diasMesPassado[1].dia);
    expect(28).toBe(diasMesPassado[2].dia);
    expect(29).toBe(diasMesPassado[3].dia);
    expect(30).toBe(diasMesPassado[4].dia);
    expect(31).toBe(diasMesPassado[5].dia);
  });

  it('Test pega dias do mes passado DEZ', function () {
    var diasMesPassado = scope.getDiasMesPassado(11, 2014);
    expect(1).toBe(diasMesPassado.length);
    expect(30).toBe(diasMesPassado[0].dia);
    
    expect("mesnaocorrente").toBe(diasMesPassado[0].style);
  });    
    
  it('Test pega dias do proximo mes de marco', function () {
    var diasProximoMes = scope.getDiasMesProximo(2, 2014)
    expect(5).toBe(diasProximoMes.length);
      
    expect(1).toBe(diasProximoMes[0].dia);
    expect(2).toBe(diasProximoMes[1].dia);
    expect(3).toBe(diasProximoMes[2].dia);
    expect(4).toBe(diasProximoMes[3].dia);
    expect(5).toBe(diasProximoMes[4].dia);
      
    expect("mesnaocorrente").toBe(diasProximoMes[0].style);
    expect("mesnaocorrente").toBe(diasProximoMes[1].style);
    expect("mesnaocorrente").toBe(diasProximoMes[2].style);
    expect("mesnaocorrente").toBe(diasProximoMes[3].style);
    expect("mesnaocorrente").toBe(diasProximoMes[4].style);
  });
    
  it('Test pega dias do proximo mes de Maio 2014', function () {
    var diasProximoMes = scope.getDiasMesProximo(4, 2014)
    expect(0).toBe(diasProximoMes.length);
  });    
    
  it('Test pega dias do proximo mes Dez 2014', function () {
    var diasProximoMes = scope.getDiasMesProximo(11, 2014)
    expect(3).toBe(diasProximoMes.length);
    expect(1).toBe(diasProximoMes[0].dia);
    expect(2).toBe(diasProximoMes[1].dia);
    expect(3).toBe(diasProximoMes[2].dia);

    expect("mesnaocorrente").toBe(diasProximoMes[0].style);
    expect("mesnaocorrente").toBe(diasProximoMes[1].style);
    expect("mesnaocorrente").toBe(diasProximoMes[2].style);
  });
    
  it('Test ir para mes fevereiro'), function () {
      scope.numMes = 0;
      scope.irMesProximo();
      expect(1).toBe(scope.numMes);
  };

  it('Test ir do mes dezembro para o mes janeiro'), function () {
      scope.numMes = 11;
      scope.ano = 2013;
      scope.irMesProximo();
      expect(0).toBe(scope.numMes);
      expect(2014).toBe(scope.ano);
  };
  
  it('Test ir para mes Janeiro'), function () {
      scope.numMes = 1;
      scope.irMesPassado();
      expect(0).toBe(scope.numMes);
  };

  it('Test ir do mes Janeiro para o mes dezembro'), function () {
      scope.numMes = 0;
      scope.ano = 2013;
      scope.irMesProximo();
      expect(11).toBe(scope.numMes);
      expect(2012).toBe(scope.ano);
  };
    
  it('Test ir para proximo ano'), function () {
      scope.ano = 2011;
      scope.irAnoProximo();
      expect(2012).toBe(scope.ano);
  };

  it('Test ir para passado ano'), function () {
      scope.ano = 2011;
      scope.irAnoPassado();
      expect(2010).toBe(scope.ano);
  };
});
