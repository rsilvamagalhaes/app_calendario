'use strict';
angular.module('appCalendarioApp')
    .directive('dragDropDiretiva', function() {
        return function(scope, element) {
            scope.dragdrop();
        };
});

var calendarioController = function ($scope) {
    $scope.today = function() {
        $scope.dt = new Date();
    };
    
    $scope.today();
    
    $scope.showWeeks = true;
    $scope.toggleWeeks = function () {
        $scope.showWeeks = ! $scope.showWeeks;
    };
    
    $scope.clear = function () {
        $scope.dt = null;
    };
    
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = ( $scope.minDate ) ? null : new Date();
    };
    $scope.toggleMin();
    
    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
    
        $scope.opened = true;
    };
    
    $scope.dateOptions = {
        'year-format': "'yy'",
        'starting-day': 1
    };
    
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
    $scope.format = $scope.formats[0];
    
    //Inicio calendario task
    $scope.mes = [{mesNome: "Janeiro", num: 0},
    {mesNome: "Fevereiro", num: 1},
    {mesNome: "Março", num: 2},
    {mesNome: "Abril", num: 3},
    {mesNome: "Maio", num: 4},
    {mesNome: "Junho", num: 5},
    {mesNome: "Julho", num: 6},
    {mesNome: "Agosto", num: 7},
    {mesNome: "Setembro", num: 8},
    {mesNome: "Outubro", num: 9},
    {mesNome: "Novembro", num: 10},
    {mesNome: "Dezembro", num: 11}];
    
    $scope.diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];

    var getNomeMes = function(mes) {
        for(var pos = 0; pos <= $scope.mes.length; pos++) {
            if (mes === $scope.mes[pos].num) {
                return $scope.mes[pos].mesNome;
            }
        }
    };
    
    var diaAtual = new Date();
    $scope.numMes = diaAtual.getMonth() + 1;
    $scope.nomeMes = getNomeMes($scope.numMes);
    $scope.ano = diaAtual.getFullYear();
    
    $scope.getDiasMesProximo = function(mesAtual, ano) {
        var proximoMes;
        if (mesAtual === 11) { 
            proximoMes = 0;
            ano = ano + 1;
        } else {
            proximoMes = mesAtual + 1;
        }
        var data = new Date(ano, proximoMes, 1);
        var primeiroDia = data.getDate();
        var dias = [];
        var indexSemana = (data.getDay() + 1);
        if (indexSemana > 1) {
            var dia = 1;
            for(var index = indexSemana; index <= 7; index++) {
                dias[dia - 1] = {dia: dia, style: "mesnaocorrente"};
                dia++;
            }
        }
        return dias;
    };    
    
    $scope.getDiasMesPassado = function(mesAtual, ano) {
        var data = new Date(ano, mesAtual, 0);        
        var ultimoDia = data.getDate();
        var indexSemana = data.getDay();
        var dias = [];
        var diaStop = ultimoDia - indexSemana;
        var cont = 0;
        
        for(var dia = ultimoDia; dia >= diaStop; dia--) {
            dias[cont] = {dia: dia, style: "mesnaocorrente"};
            cont++;
        }
        return dias.reverse();
    };
    
    $scope.getDias = function(mes, ano) {
        var diasMesPassado = this.getDiasMesPassado(mes, ano);
        var ultimoDiaMes = new Date(ano, mes + 1, 0).getDate();
        var dias = [];
        dias = diasMesPassado;
        var i;
        for(i = 1; i<=ultimoDiaMes; i++){ 
            dias.push({dia: i});
        }
        var diasMesProximo = this.getDiasMesProximo(mes, ano);
        for(i = 0; i<=diasMesProximo.length-1; i++) {
            dias.push({dia: diasMesProximo[i].dia, style: diasMesPassado[i].style});
        }
        
        return dias;
    };

    $scope.dias = $scope.getDias($scope.numMes, $scope.ano);
  
    $scope.irAnoProximo = function() {
        $scope.ano++;
        $scope.nomeMes = getNomeMes($scope.numMes);
        $scope.dias = $scope.getDias($scope.numMes, $scope.ano);
    };
    
    $scope.irAnoPassado = function() {
        $scope.ano--;
        $scope.nomeMes = getNomeMes($scope.numMes);
        $scope.dias = $scope.getDias($scope.numMes, $scope.ano);
    };
    
    $scope.irMesProximo = function() {
        if ($scope.numMes === 11) {
            $scope.numMes = 0;
            $scope.ano++;
        } else {
            $scope.numMes++;
        }
        $scope.nomeMes = getNomeMes($scope.numMes);
        $scope.dias = $scope.getDias($scope.numMes, $scope.ano);
    };
    
    $scope.irMesPassado = function() {
        if ($scope.numMes === 0) {
            $scope.numMes = 11;
            $scope.ano--;
            $scope.nomeMes = getNomeMes($scope.numMes);
        } else {
            $scope.numMes--;
            $scope.nomeMes = getNomeMes($scope.numMes);
        }
        $scope.nomeMes = getNomeMes($scope.numMes);
        $scope.dias = $scope.getDias($scope.numMes, $scope.ano);
    };
    
    $scope.getDiaSemana = function(indexSemana) {
        return $scope.diasSemana[indexSemana];
    };
    
    $scope.dragdrop = function() {
        $( "li.droptrue" ).sortable({connectWith: "li"});
        $( "li.dropfalse" ).sortable({
          connectWith: "li",
          dropOnEmpty: false
        });
 
        $("#sortable1, #sortable2, #sortable3, .style").disableSelection();
    };
};